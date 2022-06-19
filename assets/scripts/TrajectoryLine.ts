// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TrajectoryLine extends cc.Component {

    @property(cc.Prefab)
    arrowPrefab: cc.Prefab = null;

    @property(cc.Label)
    angle: cc.Label = null;

    @property(cc.Label)
    power: cc.Label = null;

    @property(cc.Node)
    label: cc.Node = null;

    private line: cc.Graphics = null;

    private arrow = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.line = this.node.getComponent(cc.Graphics);
    }

    start () {

    }

    // update (dt) {}

    public drawStraightLine(angle, range) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        let cos = Math.cos(angle) * range;
        let sin =  Math.sin(angle) * range;
        for(let i = 9; i >= 0; i--) {
            this.line.moveTo(35 + cos - cos * 0.1 * (i+1), 8 + sin - sin * 0.1 * (i+1));
            this.line.lineTo(35 + cos - cos * 0.1 * i - (cos/9), 8 + sin - sin * 0.1 * i - (sin/9));
        }
        this.line.stroke();
    }

    public drawCurveLine(angle, power) {
        if(this.arrow) {
            if(power > 100) power = 100;
            let degree = angle * 180 / Math.PI;
            this.arrow.getComponent("Arrow").arrowMove(degree);
            this.angle.string = Math.floor(degree).toString();
            this.power.string = power.toString();
        } else {
            this.arrow = cc.instantiate(this.arrowPrefab);
            this.arrow.getComponent("Arrow").init(this.node);
            this.label.active = true;
        }
        // not accurate
        // this.line.clear();
        // this.line.lineWidth = 5;
        // this.line.lineCap = cc.Graphics.LineCap.ROUND;
        // this.line.moveTo(35, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, 35 + Math.sin(angle) * 1000, 8 + Math.cos(angle) * 100);
        // // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000 + Math.tan(angle) * 100, 1000, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, Math.cos(angle) * 1000, 8);
        // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000, 1000, 960);
        // this.line.stroke();
    }

    public clearLine() {
        this.line.clear();
        this.label.active = false;
        if(this.arrow) {
            this.arrow.destroy();
            this.arrow = null;
        }
    }
}
