const {ccclass, property} = cc._decorator;

@ccclass
export default class Win extends cc.Component {

    @property(cc.Label)
    playername: cc.Label = null;

    @property(cc.Node)
    playerimage: cc.Node = null;

    @property(cc.Label)
    winnerScore: cc.Label = null;

    @property(cc.Label)
    winnerGem: cc.Label = null;

    @property(cc.Label)
    winnerCoin: cc.Label = null;

    @property(cc.Node)
    GameManager: cc.Node = null;

    @property(cc.Node)
    UI: cc.Node = null;

    @property(cc.SpriteFrame)
    char1: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    char2: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    char3: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    char4: cc.SpriteFrame = null;

    private gameover = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(!this.gameover){
            if(cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()){
                this.gameover = true;

                this.playername.getComponent(cc.Label).string = cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string;
                this.winnerScore.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").scoreLabel.string;
                this.winnerCoin.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").coinLabel.string;
                this.winnerGem.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").gemLabel.string;
                if(cc.find("Canvas/Main Camera/UI/Profile/face0").active){
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char1;
                    //cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                }
                if(cc.find("Canvas/Main Camera/UI/Profile/face1").active){
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char2;
                    //cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                }
                if(cc.find("Canvas/Main Camera/UI/Profile/face2").active){
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char3;
                    //cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                }
                if(cc.find("Canvas/Main Camera/UI/Profile/face3").active){
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char4;
                    //cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                }
                cc.find("Canvas/Main Camera/UI/Timer").active = false;
                cc.find("Canvas/Main Camera/UI/Record").active = false;
                cc.find("Canvas/Main Camera/UI/WeaponUi").active = false;
                cc.find("Canvas/Main Camera/UI/Profile").active = false;
                let action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
                this.node.runAction(action);
            }
        }
        else {
            this.scheduleOnce(()=>{
                cc.director.loadScene("ending");
            }, 6)
        }
    }
}
