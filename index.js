// Code your solutions in this file
function writeCards(names) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYouCards
}

function countDown(int) {
    while (int >= 0) {
        console.log(int--)
    }
    return int
}
