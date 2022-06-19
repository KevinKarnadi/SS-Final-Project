const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuOption2 extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
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
        cc.director.loadScene("instructions - minimap");
    }

    loadPrevInstructions(){
        cc.director.loadScene("instructions - option 1");
    }

}