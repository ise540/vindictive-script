const path = require('path');
const fs = require('fs');
const millisecondParser = require('./millisecondParser.js')

const dateNow = Date.now().toString();

const cooldown = 86400000;

const hasOpened = fs.existsSync(path.resolve(__dirname, 'lastCall.txt'))

if (!hasOpened) {

    console.log('Скрипт выполнен. Ты доволен?');

    fs.writeFile('lastCall.txt', dateNow, err => {
        if (err) {
            console.error(err)
            return
        }
    })
} else {
    fs.readFile(path.resolve(__dirname, 'lastCall.txt'), (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        let dataString = data.toString();
        if (dateNow - dataString < cooldown) {
            let time = millisecondParser(dateNow - dataString);
            if (time.minutes === 0 && time.hours === 0) {
                console.log(`Ты меня уже вызывал ${time.seconds} секунд назад`)
            } else if (time.hours === 0) {
                console.log(`Ты меня уже вызывал ${time.minutes} минут, ${time.seconds} секунд назад`)
            } else {
                console.log(`Ты меня уже вызывал ${time.hours} часов, ${time.minutes} минут, ${time.seconds} секунд назад`)
            }
        } else {
            console.log('Скрипт выполнен. Ты доволен?');
        }


        fs.writeFile('lastCall.txt', dateNow, err => {
            if (err) {
                console.error(err)
                return
            }
        })

    })
}

