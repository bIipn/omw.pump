import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Idl } from "@coral-xyz/anchor";
import { IdlAccount, IdlInstruction } from "@coral-xyz/anchor/dist/cjs/idl";
import { assert } from "chai";

interface ExtendedOmwPump extends Idl {
  address: string;
  metadata: any;
  instructions: IdlInstruction[];
  accounts: IdlAccount[];
  [key: string]: any;
}

const program = anchor.workspace.OmwPump as Program<ExtendedOmwPump>;

describe("omw-pump", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.OmwPump as Program<ExtendedOmwPump>;

  it("Creates a new token", async () => {
    const token = anchor.web3.Keypair.generate();
    const name = "MyToken";
    const symbol = "MTK";
    const supply = new anchor.BN(1000000);

    await program.methods
      .createToken(name, symbol, supply)
      .accounts({
        token: token.publicKey,
        mint: provider.wallet.publicKey,
        tokenAccount: provider.wallet.publicKey,
        authority: provider.wallet.publicKey,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([token])
      .rpc();

    const tokenAccount = await program.account.token.fetch(token.publicKey);
    assert.equal(tokenAccount.name, name);
    assert.equal(tokenAccount.symbol, symbol);
    assert.equal(tokenAccount.supply.toString(), supply.toString());
  });

  it("Transfers tokens between accounts", async () => {
    const source = anchor.web3.Keypair.generate();
    const destination = anchor.web3.Keypair.generate();
    const amount = new anchor.BN(1000);

    await program.methods
      .transferTokens(amount)
      .accounts({
        source: source.publicKey,
        destination: destination.publicKey,
        authority: provider.wallet.publicKey,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      })
      .signers([source, destination])
      .rpc();

    const sourceAccount = await program.account.token.fetch(source.publicKey);
    const destinationAccount = await program.account.token.fetch(destination.publicKey);
    assert.equal(sourceAccount.supply.toString(), "999000");
    assert.equal(destinationAccount.supply.toString(), "1000");
  });
});
 