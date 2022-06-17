// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TrajectoryLine extends cc.Component {

    private line: cc.Graphics = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.line = this.node.getComponent(cc.Graphics);
    }

    start () {

    }

    // update (dt) {}

    public drawStraightLine(angle) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        this.line.moveTo(35, 8);
        this.line.lineTo(300, Math.sinh(angle) * 300)
        this.line.stroke();
    }

    public drawCurveLine(angle) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        this.line.moveTo(35, 8);
        this.line.quadraticCurveTo(35, Math.cosh(angle) * 100, 500, Math.sinh(angle) * 500)
        this.line.stroke();
    }

    public clearLine() {
        this.line.clear();
    }
}
