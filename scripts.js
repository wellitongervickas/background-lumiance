const hexLuminosity = (hex, luminosity) => {
    let newHex = '#'

    const white = 255
    const black = 0

    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

    for (let twoDigit of twoDigitGroup) {
        const numberFromHex = parseInt(twoDigit, 16)
        const blackOrLuminosity = Math.max(black, numberFromHex + (luminosity * white))
        const color = Math.round(Math.min(white, blackOrLuminosity))

        const numberToHex = `0${color.toString(16)}`.slice(-2)

        newHex += numberToHex
    }

    return newHex
}

const lumiance = (hex, luminosity = 0) => {
    hex = hex.replace(/[^0-9a-f]/gi, '')
    const hexLength = hex.length

    if (!(hexLength === 6 || hexLength === 3)) {
        throw new Error('Invalid Hex')
    }

    if (hexLength === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    return hexLuminosity(hex, luminosity)
}

try {
    document.body.style.backgroundColor = lumiance('#6633cc', 0.6)
} catch (err) { 
    console.error(err)
}
