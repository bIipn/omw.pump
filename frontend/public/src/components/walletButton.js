import { useWallet, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletButton() {
    const { connected, publicKey } = useWallet();
    return (
        <div>
            <WalletMultiButton />
            {connected && <p>Connected: {publicKey.toBase58()}</p>}
        </div>
    );
}