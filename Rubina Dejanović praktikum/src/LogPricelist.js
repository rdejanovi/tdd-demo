let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

function logPricelist(pricelist) {
    let ispis = ""
    let prethodnacijena = {}
    pricelist.sort((prva, druga) => prva.price - druga.price)
    
    pricelist.forEach(function (prva) {
        if (prva.price == prethodnacijena.price) 
            ispis = ispis + ', ' + `${prva.from} do ${prva.to}`
        else ispis = ispis + '\n' + `${prva.price} : ${prva.from} do ${prva.to}`
            prethodnacijena = prva
    })

    console.log(ispis)
}

logPricelist(pricelist)