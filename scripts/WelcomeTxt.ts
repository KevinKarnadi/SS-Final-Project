const {ccclass, property} = cc._decorator;

@ccclass
export default class WelcomeTxt extends cc.Component {

    onLoad () {}

    start () {
        let action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
        this.node.runAction(action);
    }

    update (dt) {}
    
}
