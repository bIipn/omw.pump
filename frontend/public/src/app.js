import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import Home from './pages/Home';

const wallets = [new PhantomWalletAdapter()];

function App() {
    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <Home />
            </WalletModalProvider>
        </WalletProvider>
    );
}

export default App;