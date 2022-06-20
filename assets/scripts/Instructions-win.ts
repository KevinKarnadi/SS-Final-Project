const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuWin extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    onLoad() {
        this.initButtons();
    }

    start () {}

    initButtons() {
        let returnbtn = new cc.Component.EventHandler();
        returnbtn.target = this.node;
        returnbtn.component = "Instructions-win";
        returnbtn.handler = "loadNextInstructions";


        cc.find("Return").getComponent(cc.Button).clickEvents.push(returnbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-win";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    }

    loadNextInstructions(){
        cc.director.loadScene("menu");
    }

    loadPrevInstructions(){
        cc.director.loadScene("instructions - minimap");
    }

}