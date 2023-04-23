$(document).ready(() => {
    //Class for particular signal
    class Signal {
        constructor(counter, greenLight, yellowLight, redLight, restartSignal, timerId, signalId) {
            this.counter = counter;
            this.greenLight = greenLight;
            this.yellowLight = yellowLight;
            this.redLight = redLight;
            this.restartSignal = restartSignal;
            this.timerId = timerId;
            this.signalId = signalId;
        }
        //To on the green light
        greenLightOn = () => {
            this.counter = 10;
            this.greenLight = true;
            $(this.timerId).css({ "border": "2px solid green", "background-color": "white", "color": "green", "font-weight": "bold" });
            $(this.signalId).children().filter(".green-light").css("background-color", "green");
            $(this.signalId).children().filter(".red-light, .yellow-light").css("background-color", "grey");
        }
        //To on the yellow light
        yellowLightOn = () => {
            this.counter = 5;
            this.yellowLight = true;
            this.greenLight = false;
            $(this.timerId).css({ "border": "2px solid black", "background-color": "#e4e4e4", "color": "#e4e4e4", "font-weight": "normal" });
            $(this.signalId).children().filter(".yellow-light").css("background-color", "yellow");
            $(this.signalId).children().filter(".green-light, .red-light").css("background-color", "grey");
        }
        //To restart the timer
        restartTimer = () => {
            this.counter = 45;
            this.restartSignal = false;
            $(this.timerId).css({ "border": "2px solid black", "background-color": "#e4e4e4", "color": "black", "font-weight": "normal" });
            $(this.signalId).children().filter(".yellow-light, .green-light").css("background-color", "grey");
            $(this.signalId).children().filter(".red-light").css("background-color", "red");
        }
        //Invoked timer is finished
        timerFinish = () => {
            this.yellowLight = false;
            this.restartSignal = true;
            $(this.timerId).css({ "border": "2px solid black", "background-color": "#e4e4e4", "color": "black", "font-weight": "normal" });
            $(this.signalId).children().filter(".yellow-light, .green-light, .red-light").css("background-color", "grey");
        }
        //Initial stage of the signal
        startTimer = () => {
            $(this.signalId).children().filter(".red-light").css("background-color", "red");
            this.redLight = false;
        }
    }
    const westSignal = new Signal(0, false, false, true, false, "#timer1", "#traffic-signal1");
    const northSignal = new Signal(15, false, false, true, false, "#timer2", "#traffic-signal2");
    const eastSignal = new Signal(30, false, false, true, false, "#timer3", "#traffic-signal3");
    const southSignal = new Signal(45, false, false, true, false, "#timer4", "#traffic-signal4");
    setInterval(() => {
        if (westSignal.counter >= -1 && westSignal.restartSignal == false) {
            if (westSignal.redLight == true) {
                westSignal.startTimer();
            }
            if (westSignal.greenLight == false && westSignal.counter == -1 && westSignal.restartSignal == false) {
                westSignal.greenLightOn();
            }
            if (westSignal.counter == 0 && westSignal.greenLight == true) {
                westSignal.yellowLightOn();
            }
            if (westSignal.yellowLight == true && westSignal.counter == 0) {
                westSignal.timerFinish();
            }
            if (westSignal.restartSignal == true) {
                westSignal.restartTimer();
            }
            $(westSignal.timerId).html(westSignal.counter);
            westSignal.counter = westSignal.counter - 1;
        }
        if (northSignal.counter >= -1 && northSignal.restartSignal == false) {
            if (northSignal.redLight == true) {
                northSignal.startTimer();
            }
            if (northSignal.greenLight == false && northSignal.counter == -1 && northSignal.restartSignal == false) {
                northSignal.greenLightOn();
            }
            if (northSignal.counter == 0 && northSignal.greenLight == true) {
                northSignal.yellowLightOn();
            }
            if (northSignal.yellowLight == true && northSignal.counter == 0) {
                northSignal.timerFinish();
            }
            if (northSignal.restartSignal == true) {
                northSignal.restartTimer();
            }
            $(northSignal.timerId).html(northSignal.counter);
            northSignal.counter = northSignal.counter - 1;
        }
        if (eastSignal.counter >= -1 && eastSignal.restartSignal == false) {
            if (eastSignal.redLight == true) {
                eastSignal.startTimer();
            }
            if (eastSignal.greenLight == false && eastSignal.counter == -1 && eastSignal.restartSignal == false) {
                eastSignal.greenLightOn();
            }
            if (eastSignal.counter == 0 && eastSignal.greenLight == true) {
                eastSignal.yellowLightOn();
            }
            if (eastSignal.yellowLight == true && eastSignal.counter == 0) {
                eastSignal.timerFinish();
            }
            if (eastSignal.restartSignal == true) {
                eastSignal.restartTimer();
            }
            $(eastSignal.timerId).html(eastSignal.counter);
            eastSignal.counter = eastSignal.counter - 1;
        }
        if (southSignal.counter >= -1 && southSignal.restartSignal == false) {
            if (southSignal.redLight == true) {
                southSignal.startTimer();
            }
            if (southSignal.greenLight == false && southSignal.counter == -1 && southSignal.restartSignal == false) {
                southSignal.greenLightOn();
            }
            if (southSignal.counter == 0 && southSignal.greenLight == true) {
                southSignal.yellowLightOn();
            }
            if (southSignal.yellowLight == true && southSignal.counter == 0) {
                southSignal.timerFinish();
            }
            if (southSignal.restartSignal == true) {
                southSignal.restartTimer();
            }
            $(southSignal.timerId).html(southSignal.counter);
            southSignal.counter = southSignal.counter - 1;
        }
    },1000);
})