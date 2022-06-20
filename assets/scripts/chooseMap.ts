const {ccclass, property} = cc._decorator;

@ccclass
export default class chooseMap extends cc.Component {

    // onLoad () {}

    start () {
        this.initMap1Btn();
        this.initMap2Btn();
    }

    // update (dt) {}

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
