const {ccclass, property} = cc._decorator;

@ccclass
export default class Playerchoose extends cc.Component {

    properties: {
            Edit_Box: cc.EditBox,
    }

    start () {
        let twobtn = new cc.Component.EventHandler();
        twobtn.target = this.node;
        twobtn.component = "Playerchoose";
        twobtn.handler = "loadTwoPlayers";


        cc.find("2button").getComponent(cc.Button).clickEvents.push(twobtn);

        let threebtn = new cc.Component.EventHandler();
        threebtn.target = this.node;
        threebtn.component = "Playerchoose";
        threebtn.handler = "loadThreePlayers";


        cc.find("3button").getComponent(cc.Button).clickEvents.push(threebtn);


        let fourbtn = new cc.Component.EventHandler();
        fourbtn.target = this.node;
        fourbtn.component = "Playerchoose";
        fourbtn.handler = "loadFourPlayers";


        cc.find("4button").getComponent(cc.Button).clickEvents.push(fourbtn);


        let teambtn = new cc.Component.EventHandler();
        teambtn.target = this.node;
        teambtn.component = "Playerchoose";
        teambtn.handler = "loadTeamPlayers";


        cc.find("teambutton").getComponent(cc.Button).clickEvents.push(teambtn);

    }

    loadTwoPlayers(){
        cc.director.loadScene("instructions");
    }

    loadThreePlayers(){
        cc.director.loadScene("instructions");
    }

    loadFourPlayers(){
        cc.director.loadScene("instructions");
    }

    loadTeamPlayers(){
        cc.director.loadScene("instructions");
    }

}