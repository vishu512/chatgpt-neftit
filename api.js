fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
        console.log("BTC Price: $" + data.bitcoin.usd);
        console.log("ETH Price: $" + data.ethereum.usd);
    })
    .catch(error => console.error("Error fetching data", error));
