const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuMinimap extends cc.Component {

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
        nextbtn.component = "Instructions-minimap";
        nextbtn.handler = "loadNextInstructions";


        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-minimap";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    }

    loadNextInstructions(){
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("instructions - win");
    }

    loadPrevInstructions(){
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("instructions - option 2");
    }

}