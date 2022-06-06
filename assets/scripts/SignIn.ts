const {ccclass, property} = cc._decorator;

@ccclass
export default class SignIn extends cc.Component {

    initSignInBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/menuBg/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signIn() {
        let emailBox = cc.find("Canvas/menuBg/email").getComponent(cc.EditBox);
        let passwordBox = cc.find("Canvas/menuBg/password").getComponent(cc.EditBox);
        let email = emailBox.string;
        let password = passwordBox.string;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                cc.director.loadScene("map1");
            }).catch((e) => {
                alert(e.message);
            });
    }

    initBackBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "back";
        cc.find("Canvas/menuBg/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    back() {
        cc.director.loadScene("main menu");
    }

    onLoad () {}

    start () {
        this.initSignInBtn();
        this.initBackBtn();
    }

    update (dt) {}

}
