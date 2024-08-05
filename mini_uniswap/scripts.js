web3 =  new Web3(window.ethereum)
var account = 0;
async function  connectWallet(){

    await ethereum.request({method: 'eth_requestAccounts'});
    account = await web3.eth.getAccounts();
    console.log(account)
}
