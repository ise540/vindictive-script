function millisecondParser(miiliseconds) {
    let timeObj = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    timeObj.hours = Math.floor(miiliseconds / 3600000);
    timeObj.minutes = Math.floor((miiliseconds - timeObj.hours*3600000 ) / 60000);
    timeObj.seconds = Math.floor((miiliseconds  - timeObj.hours*3600000 - timeObj.minutes * 60000) / 1000);

    return timeObj;
}

module.exports = millisecondParser;