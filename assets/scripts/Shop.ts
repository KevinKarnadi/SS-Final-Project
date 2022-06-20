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

    private char1: string = "true";

    private char2: string = "false";
    
    private char3: string = "false";
    
    private char4: string = "false";
    
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
        // this.coin.string = cc.sys.localStorage.getItem("coin");
        // this.gem.string = cc.sys.localStorage.getItem("gem");
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
        // cc.sys.localStorage.setItem("char1", false); // for debug
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
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
    }

    lockBtn(btn: cc.Button) {
        btn.node.off(cc.Node.EventType.MOUSE_DOWN);
        btn.interactable = false;
        btn.enableAutoGrayEffect = true;
        this.changePrice(btn);
    }

    changePrice(btn) {
        btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "SOLD"
    }

    buyItemGem(btn, item) {
        let price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        let currGem = parseInt(this.gem.string);
        if(currGem >= price) {
            let remain = currGem - price;
            this.gem.string = remain.toString();
            cc.sys.localStorage.setItem("gem", this.gem.string);
            cc.sys.localStorage.setItem(item, true);
            this.setUserStats();
        }
    }
}
