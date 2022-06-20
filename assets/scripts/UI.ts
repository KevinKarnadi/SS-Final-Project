const {ccclass, property} = cc._decorator;

@ccclass
export default class UI extends cc.Component {

    @property(cc.Label)
    timer: cc.Label = null; // game timer

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Label)
    coinLabel: cc.Label = null;

    @property(cc.Label)
    gemLabel: cc.Label = null;

    @property(cc.Node)
    GameManager: cc.Node = null;

    public timerVal: number;   // game timer

    private timeout: boolean = false;   // game ended

    private isWin: boolean = false;

    private currPlayer: number = 1;

    private score: number = 0;

    private coin: number = 0;

    private gem: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.startTimer(20);
    }

    update (dt) {
        this.timer.string = this.timerVal.toString();
        if(cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()){
            this.unschedule(this.countTimer);
            this.isWin = true;
            this.timer.string = "--"
        }

    }

    startTimer(time: number) {
        this.timerVal = time;
        this.schedule(this.countTimer, 1);
    }

    countTimer(){
        if(!cc.director.isPaused() && !this.isWin) {
            this.timerVal--;
            if(this.timerVal < 0) {
                this.timeout = true;
            }
        }
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

    getTime(){
        return this.timer.string;
    }

    updateRecord(type, value){
        if(type == "score"){
            this.score += value;
            this.scoreLabel.string = String(this.score).padStart(8, '0');
        } else if(type == "coin"){
            this.coin += value;
            this.coinLabel.string = String(this.coin);
        } else if(type == "gem"){
            this.gem += value;
            this.gemLabel.string = String(this.gem);
        }
    }

    getRecord(type){
        if(type == "score"){
            return this.score;
        } else if(type == "coin"){
            return this.coin;
        } else if(type == "gem"){
            return this.gem;
        }
    }
}
