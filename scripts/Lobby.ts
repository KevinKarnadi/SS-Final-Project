// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    map1: cc.Button = null;

    @property(cc.Button)
    map2: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.mouseOn();
    }

    // update (dt) {}

    loadScene(scene: string) {
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene(scene);
        });
    }

    mouseOn() {
        this.map1.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.loadScene("map1");
        });
        this.map2.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.loadScene("map2");
        });
    }
}
