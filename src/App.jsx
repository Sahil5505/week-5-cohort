
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Ld_zoYGzoZEobvssSaFsP-WsPKD-oKIR"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton>

          </WalletDisconnectButton>
      <div>
        hi there
       </div>
       <Airdrop />
       </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
