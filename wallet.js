document.getElementById("connectWallet").addEventListener("click", async function () {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        document.getElementById("walletAddress").textContent = accounts[0];
    } else {
        alert("Please install MetaMask");
    }
});
