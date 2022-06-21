declare const firebase: any;
const {ccclass, property} = cc._decorator;

@ccclass
export default class SignIn extends cc.Component {

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    initSignInBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/Background/Block/Big Layout/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signIn() {
        cc.audioEngine.playEffect(this.click, false);
        let emailBox = cc.find("Canvas/Background/Block/Big Layout/email").getComponent(cc.EditBox);
        let passwordBox = cc.find("Canvas/Background/Block/Big Layout/password").getComponent(cc.EditBox);
        let email = emailBox.string;
        let password = passwordBox.string;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                cc.director.loadScene("menu");
            }).catch((e) => {
                alert(e.message);
            });
    }

    initBackBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "back";
        cc.find("Canvas/Background/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    back() {
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("main menu");
    }

    onLoad () {
        this.initSignInBtn();
        this.initBackBtn();
    }

    start () {}

    update (dt) {}

}
