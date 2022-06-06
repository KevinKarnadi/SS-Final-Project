const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    initSignUpBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/menuBg/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signUp() {
        cc.director.loadScene("sign up");
    }

    initSignInBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/menuBg/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signIn() {
        cc.director.loadScene("sign in");
    }

    onLoad () {}

    start () {
        this.initSignUpBtn();
        this.initSignInBtn();
    }

    update (dt) {}

}
