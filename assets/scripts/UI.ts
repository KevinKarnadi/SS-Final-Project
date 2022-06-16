const {ccclass, property} = cc._decorator;

@ccclass
export default class UI extends cc.Component {

    @property(cc.Label)
    timer: cc.Label = null; // game timer

    private timerVal: number;   // game timer

    private timeout: boolean = false;   // game ended

    private isWin: boolean = false;

    private currPlayer: number = 1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.startTimer(300);
    }

    update (dt) {
        this.timer.string = this.timerVal.toString();
    }

    startTimer(time: number) {
        this.timerVal = time;
        setInterval(()=>{
            if(!cc.director.isPaused() && !this.isWin) {
                this.timerVal--;
                if(this.timerVal < 0) {
                    this.timeout = true;
                }
            }
        }, 1000);
    }

    isTimeOut() {
        return this.timeout;
    }

    pause() {
        if(cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        } else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    }
}
