
 web3 =  new Web3(window.ethereum)
var account = 0;
async function  connectWallet(){

    await ethereum.request({method: 'eth_requestAccounts'});
    account = await web3.eth.getAccounts();
    console.log(account)//cuenta


    const blockNumber = await web3.eth.getBlockNumber();
    console.log(blockNumber)//blockNumber

    const chainId = await web3.eth.getChainId();
    console.log(chainId)//chainId

    const getBalance = await web3.eth.getBalance(account[0])
    let spamBalance = document.getElementById("balance")
    spamBalance.innerText=parseFloat(getBalance/10000000000000000n)/100;
    console.log(getBalance)
    
    const sign = document.getElementById("sendToken");
    sign.addEventListener("click", async () => {
   
        try{
            const amount = document.getElementById("amount");
            let wei = 100000000000000000*amount.value
            const recipientAddress = document.getElementById("recipientAddress");

            if (!recipientAddress.value || !amount.value) {
                alert('Por favor, complete todos los campos.');
                return;}
          console.log(`cantidad para el envio: ${wei}, direccion para enviar: ${recipientAddress.value}`)
        const transaction = await web3.eth.sendTransaction({
            from: account[0],
            to: recipientAddress.value,
            value: web3.utils.toWei(wei, 'wei')
        });
        alert('envío exitoso' + transaction)
        }catch(error){
            alert('error en el envio' + error)
        }
})
async function sendEther(recipient,amount) {
   

    try {
        const transaction = await web3.eth.sendTransaction({
            from: account[0],
            to: recipient,
            value: web3.utils.toWei(amount, 'ether')
        });
        console.log('Transaction:', transaction);
    } catch (error) {
        console.error('Error sending Ether:', error);
    }
}


}
const sign = document.getElementById("sendToken");
sign.addEventListener("click", async () => {
   if (account==0){
    alert('Por favor, conecte la billetera');}
})

