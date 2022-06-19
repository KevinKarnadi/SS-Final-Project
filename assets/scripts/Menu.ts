const {ccclass, property} = cc._decorator;

@ccclass
export default class InstructionsMenuOption2 extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let instrbtn = new cc.Component.EventHandler();
        instrbtn.target = this.node;
        instrbtn.component = "Menu";
        instrbtn.handler = "loadInstructions";


        cc.find("HowToPlay").getComponent(cc.Button).clickEvents.push(instrbtn);


        let playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Menu";
        playbtn.handler = "loadPlayInstructions";


        cc.find("YellowButton").getComponent(cc.Button).clickEvents.push(playbtn);

        let play2btn = new cc.Component.EventHandler();
        play2btn.target = this.node;
        play2btn.component = "Menu";
        play2btn.handler = "loadPlayInstructions";


        cc.find("YellowButton/Play").getComponent(cc.Button).clickEvents.push(play2btn);


    }

        

    loadInstructions(){
        cc.director.loadScene("instructions");
    }

    loadPlayInstructions(){
        cc.director.loadScene("player choose");
    }

}