const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuOption1 extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option1";
        nextbtn.handler = "loadNextInstructions";


        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option1";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);

    }

    loadNextInstructions(){
        cc.director.loadScene("instructions - option 2");
    }

    loadPrevInstructions(){
        cc.director.loadScene("instructions");
    }

}