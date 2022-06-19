const {ccclass, property} = cc._decorator;

@ccclass
export default class Mapchoose extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let maponebtn = new cc.Component.EventHandler();
        maponebtn.target = this.node;
        maponebtn.component = "Mapchoose";
        maponebtn.handler = "loadMapOne";


        cc.find("map1").getComponent(cc.Button).clickEvents.push(maponebtn);

        let maptwobtn = new cc.Component.EventHandler();
        maptwobtn.target = this.node;
        maptwobtn.component = "Mapchoose";
        maptwobtn.handler = "loadMapTwo";


        cc.find("map2").getComponent(cc.Button).clickEvents.push(maptwobtn);
    }

    loadTwoPlayers(){
        cc.director.loadScene("map1");
    }

    loadThreePlayers(){
        cc.director.loadScene("map2");
    }

}