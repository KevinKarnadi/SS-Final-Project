const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuOption2 extends cc.Component {

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    properties: {
            Edit_Box: cc.EditBox,
    }

    onLoad() {
        this.initButtons();
    }

    start () {}

    initButtons() {
        let nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option2";
        nextbtn.handler = "loadNextInstructions";


        cc.find("Canvas/Next").getComponent(cc.Button).clickEvents.push(nextbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option2";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Canvas/Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    }

    loadNextInstructions(){
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("instructions - minimap");
    }

    loadPrevInstructions(){
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("instructions - option 1");
    }

}