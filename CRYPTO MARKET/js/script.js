var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")
var sol = document.getElementById("solana")
var lite = document.getElementById("litecoin")
var car = document.getElementById("cardano")


var settings = {
    "async" : true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Clitecoin%2Ccardano&vs_currencies=inr",
    "method": "GET" ,
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML= response.bitcoin.inr;
    eth.innerHTML= response.ethereum.inr;
    doge.innerHTML= response.dogecoin.inr;
    sol.innerHTML= response.solana.inr;
    lite.innerHTML= response.litecoin.inr;
    car.innerHTML= response.cardano.inr;
});