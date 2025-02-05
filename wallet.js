document.getElementById("connectWallet")?.addEventListener("click", async function () {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const walletAddress = accounts[0];

        document.getElementById("walletAddress").textContent = walletAddress;

        const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [walletAddress, "latest"],
        });

        alert("Wallet Connected! Balance: " + parseInt(balance, 16) / 1e18 + " ETH");
    } else {
        alert("Please install MetaMask");
    }
});
