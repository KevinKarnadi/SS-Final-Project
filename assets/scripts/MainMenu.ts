const {ccclass, property} = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    initSignUpBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/Background/Block/Big Layout/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signUp() {
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("sign up");
    }

    initSignInBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/Background/Block/Big Layout/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signIn() {
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("sign in");
    }

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    onLoad () {
        this.playBGM();
        this.initSignUpBtn();
        this.initSignInBtn();
    }

    start () {}

    update (dt) {}

}
