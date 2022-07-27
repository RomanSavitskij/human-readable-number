module.exports = function toReadable(number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const secondDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const hundred = ['hundred'];

    if (number === 0) {
        return 'zero';
    } else if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return secondDozen[number % 10];
    } else if (number >= 20 & number < 100) {
        if (number % 10 === 0) {
            return dozens[number / 10];
        } else {
            return dozens[Math.trunc(number / 10)] + ' ' + units[number % 10];
        }
    } else if (number >= 100 & number < 1000) {
        if (number % 100 === 0) {
            return units[number / 100] + ' ' + hundred[0];
        } else if (number % 100 === 10) {
            return units[Math.trunc(number / 100)] + ' ' + hundred[0] + ' ' + secondDozen[0];
        } else if (number % 10 === 0) {
            return units[Math.trunc(number / 100)] + ' ' + hundred[0] + ' ' + dozens[(number % 100) / 10];
        } else {
            if (number % 100 >= 10 & number % 100 < 20) {
                return units[Math.trunc(number / 100)] + ' ' + hundred[0] + ' ' + secondDozen[(number % 100) % 10];
            } else if (number % 100 >= 1 & number % 100 < 10) {
                return units[Math.trunc(number / 100)] + ' ' + hundred[0] + ' ' + units[(number % 100) % 10];
            } else {
                return units[Math.trunc(number / 100)] + ' ' + hundred[0] + ' ' + dozens[Math.trunc((number % 100) / 10)] + ' ' + units[(number % 100) % 10];
            }
        }
    }
};