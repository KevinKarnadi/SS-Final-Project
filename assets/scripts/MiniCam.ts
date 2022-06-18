const {ccclass, property} = cc._decorator;

@ccclass
export default class MiniCam extends cc.Component {

    @property(cc.Node)
    mainCam: cc.Node = null;

    @property()
    offset: number = 0;

    onLoad () {
    }

    start () {

    }

    update (dt) {
        this.node.x = this.mainCam.getPosition().x - this.offset;
        if(this.node.x < (250 - this.offset)){
            this.node.x = 250 - this.offset;
        } else if(this.node.x > (1750)){
            this.node.x = 1750;
        }
        // console.log(this.node.x, "minicam");

    }
}
