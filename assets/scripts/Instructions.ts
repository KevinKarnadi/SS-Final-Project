const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenu extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions";
        nextbtn.handler = "loadNextInstructions";


        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);


        let prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions";
        prevbtn.handler = "loadPrevInstructions";


        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);

    }

    loadNextInstructions(){
        cc.director.loadScene("instructions - option 1");
    }

    loadPrevInstructions(){
        cc.director.loadScene("instructions");
    }

}