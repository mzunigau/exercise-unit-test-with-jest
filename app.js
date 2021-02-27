const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro)=>{    
    return euro*oneEuroIs.USD;
}

const fromDollarToYen  = (dollar)=>{
    return (dollar/oneEuroIs.USD) * oneEuroIs.JPY;
}

const fromYenToPound = (yen)=>{
    return (yen/oneEuroIs.JPY) * oneEuroIs.GBP; 
}

module.exports = { sum,
                    fromEuroToDollar,
                    fromDollarToYen,
                    fromYenToPound}

