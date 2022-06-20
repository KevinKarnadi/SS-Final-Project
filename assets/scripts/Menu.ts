declare const firebase: any;
const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    properties: {
            Edit_Box: cc.EditBox,
    }

    onLoad() {
        if(!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.loadUserStats();
        this.initMenuButtons();
        this.initSettingsMenuButtons();
    }

    start () {}

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    async loadUserStats() {
        var user = firebase.auth().currentUser;
        if(user) {
            var stats = firebase.database().ref("userData/" + user.uid);
            await stats.once("value").then((snapshot)=>{
                this.setUserStat(snapshot.val().coin, snapshot.val().gem,snapshot.val().char1,
                snapshot.val().char2, snapshot.val().char3, snapshot.val().char4,
                snapshot.val().AK47, snapshot.val().AR, snapshot.val().grenade, snapshot.val().shotgun,
                snapshot.val().sniper, snapshot.val().purple, snapshot.val().forest, snapshot.val().username)
            })
        } else {
            this.setUserStat(0, 0, true, false, false, false, true, false, false, false, false, true, false, "");
        }
    }

    setUserStat(coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        cc.sys.localStorage.setItem("coin", coin);
        cc.sys.localStorage.setItem("gem", gem);
        cc.sys.localStorage.setItem("char1", char1);
        cc.sys.localStorage.setItem("char2", char2);
        cc.sys.localStorage.setItem("char3", char3);
        cc.sys.localStorage.setItem("char4", char4);
        cc.sys.localStorage.setItem("AK47", AK47);
        cc.sys.localStorage.setItem("AR", AR);
        cc.sys.localStorage.setItem("grenade", grenade);
        cc.sys.localStorage.setItem("shotgun", shotgun);
        cc.sys.localStorage.setItem("sniper", sniper);
        cc.sys.localStorage.setItem("purple", purple);
        cc.sys.localStorage.setItem("forest", forest);
        cc.sys.localStorage.setItem("username", username);
    }

    initMenuButtons() {
        let instrbtn = new cc.Component.EventHandler();
        instrbtn.target = this.node;
        instrbtn.component = "Menu";
        instrbtn.handler = "loadInstructions";
        cc.find("HowToPlay").getComponent(cc.Button).clickEvents.push(instrbtn);

        let playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Menu";
        playbtn.handler = "loadPlayInstructions";
        cc.find("YellowButton").getComponent(cc.Button).clickEvents.push(playbtn);

        let play2btn = new cc.Component.EventHandler();
        play2btn.target = this.node;
        play2btn.component = "Menu";
        play2btn.handler = "loadPlayInstructions";
        cc.find("YellowButton/Play").getComponent(cc.Button).clickEvents.push(play2btn);

        let settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "Menu";
        settings_clickEventHandler.handler = "settings";
        cc.find("SettingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);

        let shopbtn = new cc.Component.EventHandler();
        shopbtn.target = this.node;
        shopbtn.component = "Menu";
        shopbtn.handler = "loadShop";
        cc.find("shop").getComponent(cc.Button).clickEvents.push(shopbtn);

        let xbtn = new cc.Component.EventHandler();
        xbtn.target = this.node;
        xbtn.component = "Menu";
        xbtn.handler = "loadQuitGame";
        cc.find("X button").getComponent(cc.Button).clickEvents.push(xbtn);
    }

    loadShop(){
        cc.director.loadScene("shop");
    }

    loadQuitGame(){
        cc.director.end();
    }

    loadInstructions(){
        cc.director.loadScene("instructions");
    }

    loadPlayInstructions(){
        cc.director.loadScene("player choose");
    }

    settings() {
        cc.find("Settings Menu").active = true;
    }

    initSettingsMenuButtons() {
        let close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "Menu";
        close_clickEventHandler.handler = "close";
        cc.find("Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);

        let bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "Menu";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);

        let sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "Menu";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
    
        let bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "Menu";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);

        let sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "Menu";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    }

    close() {
        cc.find("Settings Menu").active = false;
    }

    bgMute() {
        cc.audioEngine.setMusicVolume(0);
    }

    sfxMute() {
        cc.audioEngine.setEffectsVolume(0);
    }

    changeBgVol() {
        let value = cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    }

    changeSfxVol() {
        let value = cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    }

}