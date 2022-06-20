const {ccclass, property} = cc._decorator;

@ccclass
export default class chooseMap extends cc.Component {

    onLoad () {
        this.initMap1Btn();
        this.initMap2Btn();
        this.initBackBtn();
    }

    start () {}

    // update (dt) {}

    initBackBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "back";
        cc.find("BlueButton").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    back() {
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("player name");
        });
    }

    initMap1Btn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "map1";
        cc.find("Btn_Square02_n/map1").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    map1() {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("map1");
        });
    }

    initMap2Btn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "chooseMap";
        clickEventHandler.handler = "map2";
        cc.find("Btn_Square02_n/map2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    map2() {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("map2");
        });
    }

}