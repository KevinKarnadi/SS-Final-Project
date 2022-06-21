declare const firebase: any;
const {ccclass, property} = cc._decorator;

@ccclass
export default class SignUp extends cc.Component {

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    private username: string = null;

    initSignUpBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/Background/Block/Big Layout/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    async signUp() {
        cc.audioEngine.playEffect(this.click, false);
        let emailBox = cc.find("Canvas/Background/Block/Big Layout/email").getComponent(cc.EditBox);
        let usernameBox = cc.find("Canvas/Background/Block/Big Layout/username").getComponent(cc.EditBox);
        let passwordBox = cc.find("Canvas/Background/Block/Big Layout/password").getComponent(cc.EditBox);
        let email = emailBox.string;
        let username = usernameBox.string;
        let password = passwordBox.string;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Sign Up Success!");
                this.username = usernameBox.string;
                this.updateUserStats(0, 0, true, false, false, false, true, false, false, false, false, true, false, this.username);
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
        cc.find("Canvas/Background/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    back() {
        cc.audioEngine.playEffect(this.click, false);
        cc.director.loadScene("main menu");
    }

    onLoad () {
        this.initSignUpBtn();
        this.initBackBtn();
    }

    start () {}

    update (dt) {}

    updateUserStats(coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        var userStats = {
            coin: coin,
            gem: gem,
            char1: char1,
            char2: char2,
            char3: char3,
            char4: char4,
            AK47: AK47,
            AR: AR,
            grenade: grenade,
            shotgun: shotgun,
            sniper: sniper,
            purple: purple,
            forest: forest,
            username: username
        }
        return firebase.database().ref("userData/" + firebase.auth().currentUser.uid).update(userStats);
    }

}
