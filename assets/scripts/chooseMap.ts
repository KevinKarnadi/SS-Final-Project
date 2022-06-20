const {ccclass, property} = cc._decorator;

@ccclass
export default class chooseMap extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    @property(cc.Button)
    back: cc.Button = null;

    @property(cc.Button)
    map1btn: cc.Button = null;

    @property(cc.Button)
    map2btn: cc.Button = null;

    private map1: string = "true";

    private map2: string = "false";

    onLoad () {
        if(!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.loadMapAsset();
        this.loadSelectMapBtn();
    }

    start () {
        this.menuMouseOn();
    }

    // update (dt) {}

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    loadMapAsset(){
        this.map1 = cc.sys.localStorage.getItem("purple");
        this.map2 = cc.sys.localStorage.getItem("forest");
    }

    loadSelectMapBtn() {
        if(this.map1 == "true") {
            this.lockBtn(this.map1btn);
        }
        if(this.map2 == "true") {
            this.lockBtn(this.map2btn);
        }
    }

    lockBtn(btn) {
        btn.node.getChildByName("LockedBackground").active = false;
    }

    menuMouseOn() {
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
            this.loadScene("character choose");
        });
        this.map1btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.map1 == "true") {
                this.playClickAudio();
                this.loadScene("map1");
            }
        });
        this.map2btn.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.map2 == "true") {
                this.playClickAudio();
                this.loadScene("map2");
            }
        });
    }

    playClickAudio(){
        cc.audioEngine.playEffect(this.click, false);
    }

    loadScene(scene: string) {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene(scene);
        });
    }
}