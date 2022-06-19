const {ccclass, property} = cc._decorator;

@ccclass
export default class Welcome extends cc.Component {

    onLoad () {}

    start () {
        this.schedule(function() {
            cc.director.loadScene("main menu");
        }, 4);
    }

    update (dt) {}

}
