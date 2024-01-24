function setAlarm() {
    var hour = document.getElementById('hour').value;
    var minute = document.getElementById('minute').value;

    var alarmTime = new Date();
    alarmTime.setHours(hour);
    alarmTime.setMinutes(minute);
    alarmTime.setSeconds(0);

    var currentTime = new Date();

    var timeDifference = alarmTime - currentTime;
    var millisecondsUntilAlarm = timeDifference > 0 ? timeDifference : 0;

    setTimeout(function () {
        playAlarmSound();
        alert('Пора вставать!');
    }, millisecondsUntilAlarm);
}

function playAlarmSound() {
    var audio = new Audio('path/to/alarm-sound.mp3');
    audio.play();
}