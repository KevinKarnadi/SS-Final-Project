const {ccclass, property} = cc._decorator;

@ccclass
export default class Ending extends cc.Component {

    private map: string = "map1";

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    onLoad () {
        // cc.sys.localStorage.setItem("Current Map", "map1");
    }
    
    start () {
        this.btnInit();
        if(this.bgm){
            cc.audioEngine.playMusic(this.bgm, true);
        }
    }

    update (dt) {

    }

    btnInit(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMap";
        cc.find("Canvas/Background/Replay").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "quit";
        cc.find("Canvas/Background/Quit").getComponent(cc.Button).clickEvents.push(clickEventHandler);

        clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMainMenu";
        cc.find("Canvas/Background/Main Menu").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    loadMainMenu(){
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("menu");
        });
    }

    quit(){
        cc.game.end();
    }

    loadMap(){
        let toLoad = cc.sys.localStorage.getItem("Current Map");
        // toLoad = "map1";
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene(toLoad);
        });
    }
}
