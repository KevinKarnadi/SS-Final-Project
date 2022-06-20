const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    back: cc.Button = null;

    @property(cc.Button)
    selectMap: cc.Button = null;

    @property(cc.EditBox)
    player1: cc.EditBox = null;

    @property(cc.EditBox)
    player2: cc.EditBox = null;

    @property(cc.EditBox)
    player3: cc.EditBox = null;

    @property(cc.EditBox)
    player4: cc.EditBox = null;

    private playerNum: string = null;

    private editBoxPath: string = "Canvas/Frame/Layout/";

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        if(!this.playerNum) {
            this.playerNum = "2";
            cc.sys.localStorage.setItem("PlayerNum", 2);
        }
        this.loadEditBox();
    }

    start () {
        this.mouseOn();
    }

    // update (dt) {}

    loadEditBox() {
        console.log(this.playerNum)
        switch (this.playerNum) {
            case "4":
                cc.find(this.editBoxPath + 'Player4').active = true;
                cc.find(this.editBoxPath + 'Player3').active = true;
            case "3":
                cc.find(this.editBoxPath + 'Player3').active = true;
            default:
                break;
        }
    }

    loadScene(scene: string) {
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene(scene);
        });
    }

    mouseOn() {
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.loadScene("player choose");
        });
        this.selectMap.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.setPlayerName();
            this.loadScene("character choose");
        });
    }

    setPlayerName() {
        cc.sys.localStorage.setItem("Player 1 Name", this.player1.getComponentInChildren(cc.Label).string);
        cc.sys.localStorage.setItem("Player 2 Name", this.player2.getComponentInChildren(cc.Label).string);
        if(this.playerNum == "3" || this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 3 Name", this.player3.getComponentInChildren(cc.Label).string);
        } if(this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 4 Name", this.player4.getComponentInChildren(cc.Label).string);
        }
    }
}
