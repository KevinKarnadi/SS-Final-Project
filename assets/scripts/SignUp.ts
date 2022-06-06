const {ccclass, property} = cc._decorator;

@ccclass
export default class SignUp extends cc.Component {

    initSignUpBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/menuBg/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    signUp() {
        let emailBox = cc.find("Canvas/menuBg/email").getComponent(cc.EditBox);
        let usernameBox = cc.find("Canvas/menuBg/username").getComponent(cc.EditBox);
        let passwordBox = cc.find("Canvas/menuBg/password").getComponent(cc.EditBox);
        let email = emailBox.string;
        let username = usernameBox.string;
        let password = passwordBox.string;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Sign Up Success!");
                emailBox.string = "";
                usernameBox.string = "";
                passwordBox.string = "";
            }).catch((e) => {
                alert(e.message);
            });
    }

    initBackBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "back";
        cc.find("Canvas/menuBg/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    back() {
        cc.director.loadScene("main menu");
    }

    onLoad () {}

    start () {
        this.initSignUpBtn();
        this.initBackBtn();
    }

    update (dt) {}

}
