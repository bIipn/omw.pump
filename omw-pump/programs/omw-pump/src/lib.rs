use anchor_lang::prelude::*;

declare_id!("CvL7m1eG9ABzYUErC6VfXBaYdKWiSw5MrZQMa7QP9Cs4");

#[program]
pub mod omw_pump {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
