const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuWin extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Instructions-win";
        playbtn.handler = "loadNextInstructions";


        cc.find("Play").getComponent(cc.Button).clickEvents.push(playbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-win";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);

    }

    loadNextInstructions(){
        cc.director.loadScene("player choose");
    }

    loadPrevInstructions(){
        cc.director.loadScene("instructions - option 2");
    }

}