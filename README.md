# About Crypto Watch Tower
![crypto_desktop](https://user-images.githubusercontent.com/101059956/218269634-6a8836eb-ee83-47ac-ad57-a0c6903edd6e.png)

Application made with FromScratch's React course on Podia.


## Ressources / API :

### Market data :
* `https://api.coingecko.com/api/v3/global`

### All market data :
* `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`

### Coin price chart :
* `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`

### Coingecko :
* `https://www.coingecko.com/fr/pi%C3%A8ces/`
