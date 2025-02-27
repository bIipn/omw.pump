use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};

declare_id!("CvL7m1eG9ABzYUErC6VfXBaYdKWiSw5MrZQMa7QP9Cs4");

#[program]
pub mod omw_pump {
    use super::*;

    // Initialize a new token
    pub fn create_token(
        ctx: Context<CreateToken>,
        name: String,
        symbol: String,
        supply: u64,
    ) -> Result<()> {
        let token = &mut ctx.accounts.token;
        token.name = name;
        token.symbol = symbol;
        token.supply = supply;

        // Mint tokens to the creator's account
        let mint = &ctx.accounts.mint;
        let token_account = &ctx.accounts.token_account;
        let authority = &ctx.accounts.authority;

        token::mint_to(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                token::MintTo {
                    mint: mint.to_account_info(),
                    to: token_account.to_account_info(),
                    authority: authority.to_account_info(),
                },
            ),
            supply,
        )?;

        // Charge 2.3 SOL service fee
        let fee_amount = 2_300_000_000; // 2.3 SOL in lamports
        let fee_account = &ctx.accounts.fee_account;
        **fee_account.to_account_info().try_borrow_mut_lamports()? -= fee_amount;
        **authority.to_account_info().try_borrow_mut_lamports()? += fee_amount;

        // Check if market cap and bonding curve conditions are met
        if token.supply >= 100_000_000_000 { // 100k market cap in lamports
            // Interact with Raydium to create a liquidity pool
            // This is a placeholder for the actual interaction with Raydium
            msg!("Creating liquidity pool on Raydium...");
        }

        Ok(())
    }

    // Transfer tokens between accounts
    pub fn transfer_tokens(
        ctx: Context<TransferTokens>,
        amount: u64,
    ) -> Result<()> {
        let source = &ctx.accounts.source;
        let destination = &ctx.accounts.destination;
        let authority = &ctx.accounts.authority;

        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                token::Transfer {
                    from: source.to_account_info(),
                    to: destination.to_account_info(),
                    authority: authority.to_account_info(),
                },
            ),
            amount,
        )?;

        Ok(())
    }
}

// Accounts for creating a token
#[derive(Accounts)]
pub struct CreateToken<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 32 + 8)]
    pub token: Account<'info, TokenData>,
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(mut)]
    pub fee_account: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

// Accounts for transferring tokens
#[derive(Accounts)]
pub struct TransferTokens<'info> {
    #[account(mut)]
    pub source: Account<'info, TokenAccount>,
    #[account(mut)]
    pub destination: Account<'info, TokenAccount>,
    pub authority: Signer<'info>,
    pub token_program: Program<'info, Token>,
}

// Token data structure
#[account]
pub struct TokenData {
    pub name: String,
    pub symbol: String,
    pub supply: u64,
}