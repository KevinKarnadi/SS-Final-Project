const {ccclass, property} = cc._decorator;

@ccclass
export default class Ending extends cc.Component {

    private map: string = "map1";

    onLoad () {
    }
    
    start () {
        this.mainMenuBtn();
        this.quitBtn();
        this.replayBtn();
        console.log(this.map);
    }

    // update (dt) {}

    mainMenuBtn(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMainMenu";
        cc.find("Canvas/MainMenu").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    loadMainMenu(){
        cc.director.loadScene("main menu");
    }

    quitBtn(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "quit";
        cc.find("Canvas/Quit").getComponent(cc.Button).clickEvents.push(clickEventHandler);
        // console.log(this.node.parent.getChildByName("Quit").getComponent(cc.Button)) ;
    }

    quit(){
        cc.game.end();
    }

    replayBtn(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMap";
        cc.find("Canvas/Replay").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    loadMap(){
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("map1");
        });
    }


}
