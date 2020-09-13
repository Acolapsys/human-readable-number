module.exports = function toReadable (number) {
    const dict = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"        
    }
    if (number === 0) return "zero"
    let result = []
    let hundreds = Math.floor(number / 100)
    let tens = Math.floor((number % 100) / 10)
    let ones = number % 10;

    if (hundreds) result.push(dict[hundreds], 'hundred')   
    if (number % 100 <= 20 && number % 100 > 0) result.push(dict[number % 100])
    else {  
        if (tens) result.push(dict[tens * 10])
        if (ones) result.push(dict[ones])
    }
    return result.join(" ")   
}
