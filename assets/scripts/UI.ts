// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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
            if(!cc.game.isPaused() && !this.isWin) {
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
        if(cc.game.isPaused()) {
            cc.game.resume();
        } else {
            cc.game.pause();
        }
    }
}
