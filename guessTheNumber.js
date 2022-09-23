function guessTheNumber() {
    const ran = Math.floor(Math.random() * 10)
    let tries = 3
    console.log(ran)
    while (tries > 0) {
        let number = parseInt(window.prompt("Guess the number between 0 and 10"))
        if (isNaN(number)) {
            console.log("Hüvasti")
            break
        }
        else if (number == ran) {
            console.log("Yay! Arvasid õige numbri ära!")
            break
        }
        else if (number-1 == ran || number+1 == ran) {
            console.log("Ai, sa pakkusid väga lähedale.")
            tries--
        }
        else {
            console.log(`Sorry, ${number} ei ole õige number.`)
            tries--
        }
    }
}
