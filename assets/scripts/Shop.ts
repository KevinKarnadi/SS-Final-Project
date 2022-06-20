declare const firebase: any;
const {ccclass, property} = cc._decorator;

@ccclass
export default class Shop extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    @property(cc.Label)
    coin: cc.Label = null;

    @property(cc.Label)
    gem: cc.Label = null;

    @property(cc.Button)
    back: cc.Button = null;

    @property(cc.Node)
    characters: cc.Node = null;

    @property(cc.Node)
    weapons: cc.Node = null;

    @property(cc.Node)
    maps: cc.Node = null;

    @property(cc.Button)
    char1btn: cc.Button = null;

    @property(cc.Button)
    char2btn: cc.Button = null;
    
    @property(cc.Button)
    char3btn: cc.Button = null;

    @property(cc.Button)
    char4btn: cc.Button = null;

    @property(cc.Button)
    AKbtn: cc.Button = null;

    @property(cc.Button)
    ARbtn: cc.Button = null;
    
    @property(cc.Button)
    grenadebtn: cc.Button = null;

    @property(cc.Button)
    shotgunbtn: cc.Button = null;

    @property(cc.Button)
    sniperbtn: cc.Button = null;

    @property(cc.Button)
    purplebtn: cc.Button = null;

    @property(cc.Button)
    junglebtn: cc.Button = null;

    private char1: string = "true";

    private char2: string = "false";
    
    private char3: string = "false";
    
    private char4: string = "false";

    private AK: string = "true";

    private AR: string = "false";
    
    private grenade: string = "false";
    
    private shotgun: string = "false";

    private sniper: string = "false";

    private purple: string = "false";

    private jungle: string = "false";
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.setUserStats();
    }

    start () {
        this.menuMouseOn();
    }

    // update (dt) {}

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    setUserStats() {
        // cc.sys.localStorage.setItem("char1", false); // FOR DEBUG DON'T DELETE
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        // cc.sys.localStorage.setItem("AK47", false);
        // cc.sys.localStorage.setItem("AR", false);
        // cc.sys.localStorage.setItem("shotgun", false);
        // cc.sys.localStorage.setItem("grenade", false);
        // cc.sys.localStorage.setItem("sniper", false);
        // cc.sys.localStorage.setItem("purple", false);
        // cc.sys.localStorage.setItem("jungle", false);
        
        this.coin.string = cc.sys.localStorage.getItem("coin");
        this.gem.string = cc.sys.localStorage.getItem("gem");
        if(!this.coin.string) {
            this.coin.string = "0";
        }
        if(!this.gem.string) {
            this.gem.string = "0";
        }
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
        this.AK = cc.sys.localStorage.getItem("AK47");
        this.AR = cc.sys.localStorage.getItem("AR");
        this.grenade = cc.sys.localStorage.getItem("grenade");
        this.shotgun = cc.sys.localStorage.getItem("shotgun");
        this.sniper = cc.sys.localStorage.getItem("sniper");
        this.purple = cc.sys.localStorage.getItem("purple");
        this.jungle = cc.sys.localStorage.getItem("forest");
        this.loadCharBtn();
    }

    menuMouseOn() {
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
            this.loadScene("menu");
        });
        this.characters.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
        });
        this.weapons.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
        });
        this.maps.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
        });
        this.char1btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char1 !=  "true") {
                this.playClickAudio();
                this.buyItemGem(this.char1btn, "char1");
            }
        });
        this.char2btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char2 != "true") {
                this.playClickAudio();
                this.buyItemGem(this.char2btn, "char2");
            }
        });
        this.char3btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char3 != "true") {
                this.playClickAudio();
                this.buyItemGem(this.char3btn, "char3");
            }
        });
        this.char4btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char4 != "true") {
                this.playClickAudio();
                this.buyItemGem(this.char4btn, "char4");
            }
        });
        this.AKbtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.AK != "true") {
                this.playClickAudio();
                this.buyItemGem(this.AKbtn, "AK47");
            }
        });
        this.ARbtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.AR != "true") {
                this.playClickAudio();
                this.buyItemGem(this.ARbtn, "AR");
            }
        });
        this.grenadebtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.grenade != "true") {
                this.playClickAudio();
                this.buyItemGem(this.grenadebtn, "grenade");
            }
        });
        this.shotgunbtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.AR != "true") {
                this.playClickAudio();
                this.buyItemGem(this.shotgunbtn, "shotgun");
            }
        });
        this.sniperbtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.sniper != "true") {
                this.playClickAudio();
                this.buyItemGem(this.sniperbtn, "sniper");
            }
        });
        this.purplebtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.purple != "true") {
                this.playClickAudio();
                this.buyItemCoin(this.purplebtn, "purple");
            }
        });
        this.junglebtn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.jungle != "true") {
                this.playClickAudio();
                this.buyItemCoin(this.junglebtn, "forest");
            }
        });
    }

    playClickAudio(){
        cc.audioEngine.playEffect(this.click, false);
    }

    loadScene(scene: string) {
        cc.director.loadScene(scene);
    }

    loadCharBtn() {
        if(this.char1 == "true") {
            this.lockBtn(this.char1btn);
        }
        if(this.char2 == "true") {
            this.lockBtn(this.char2btn);
        }
        if(this.char3 == "true") {
            this.lockBtn(this.char3btn);
        }
        if(this.char4 == "true") {
            this.lockBtn(this.char4btn);
        }
        if(this.AK == "true") {
            this.lockBtn(this.AKbtn);
        }
        if(this.AR == "true") {
            this.lockBtn(this.ARbtn);
        }
        if(this.grenade == "true") {
            this.lockBtn(this.grenadebtn);
        }
        if(this.shotgun == "true") {
            this.lockBtn(this.shotgunbtn);
        }
        if(this.sniper == "true") {
            this.lockBtn(this.sniperbtn);
        }
        if(this.purple == "true") {
            this.lockBtn(this.purplebtn);
        }
        if(this.jungle == "true") {
            this.lockBtn(this.junglebtn);
        }
    }

    lockBtn(btn: cc.Button) {
        btn.node.off(cc.Node.EventType.MOUSE_DOWN);
        btn.interactable = false;
        btn.enableAutoGrayEffect = true;
        this.changePrice(btn);
    }

    changePrice(btn) {
        btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "SOLD";
    }

    buyItemGem(btn, item) {
        let price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        let currGem = parseInt(this.gem.string);
        if(currGem >= price) {
            let remain = currGem - price;
            this.gem.string = remain.toString();
            cc.sys.localStorage.setItem("gem", this.gem.string);
            cc.sys.localStorage.setItem(item, true);
            this.updateDatabase(item, true);
            this.updateDatabase("gem", remain);
            this.setUserStats();
        }
    }

    buyItemCoin(btn, item) {
        let price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        let currCoin = parseInt(this.coin.string);
        if(currCoin >= price) {
            let remain = currCoin - price;
            this.coin.string = remain.toString();
            cc.sys.localStorage.setItem("coin", this.coin.string);
            cc.sys.localStorage.setItem(item, true);
            this.updateDatabase(item, true);
            this.updateDatabase("coin", remain);
            this.setUserStats();
        }
    }

    updateDatabase(item, val) {
        let user = firebase.auth().currentUser;
        if(user) {
            let userStats;
            switch (item) {
                case "AK47":
                    userStats = {
                        AK47: val
                    }
                    break;
                case "AR":
                    userStats = {
                        AR: val
                    }
                    break;
                case "char1":
                    userStats = {
                        char1: val
                    }
                    break;
                case "char2":
                    userStats = {
                        char2: val
                    }
                    break;
                case "char3":
                    userStats = {
                        char3: val
                    }
                    break;
                case "char4":
                    userStats = {
                        char4: val
                    }
                    break;
                case "coin":
                    userStats = {
                        coin: val
                    }
                    break;
                case "forest":
                    userStats = {
                        forest: val
                    }
                    break;
                case "gem":
                    userStats = {
                        gem: val
                    }
                    break;
                case "grenade":
                    userStats = {
                        grenade: val
                    }
                    break;
                case "purple":
                    userStats = {
                        purple: val
                    }
                    break;
                case "shotgun":
                    userStats = {
                        shotgun: val
                    }
                    break;
                case "sniper":
                    userStats = {
                        sniper: val
                    }
                    break;
                default:
                    break;
            }
            return firebase.database().ref("userData/" + user.uid).update(userStats);
        }
    }
}
