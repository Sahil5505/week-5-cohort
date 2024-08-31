import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export  function Airdrop()  {
    const wallet = useWallet(); 
    const {connection} =  useConnection();   
    
    async function sendAirDropToUser () {
        const Amount = document.getElementById("publicKey").value
        await connection.requestAirdrop(wallet.publicKey,Amount * 1000000000)
        alert("Airdrop sent")       
    }
    return (
        <div>
            <input id="publicKey" type="text" placeholder="Amount"  />
            <button onClick={sendAirDropToUser }>Send Airdrop</button>
        </div>
    )
}