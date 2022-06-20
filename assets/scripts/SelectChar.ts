const {ccclass, property} = cc._decorator;

@ccclass
export default class SelectChar extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    click: cc.AudioClip = null;

    @property(cc.Label)
    player1Name : cc.Label = null;

    @property(cc.Label)
    player2Name : cc.Label = null;

    @property(cc.Label)
    player3Name : cc.Label = null;

    @property(cc.Label)
    player4Name : cc.Label = null;

    @property(cc.Node)
    player3: cc.Node = null;

    @property(cc.Node)
    player4: cc.Node = null;

    @property(cc.Button)
    back: cc.Button = null;

    @property(cc.Button)
    next: cc.Button = null;

    @property(cc.Button)
    p1c1: cc.Button = null;

    @property(cc.Button)
    p1c2: cc.Button = null;
    
    @property(cc.Button)
    p1c3: cc.Button = null;

    @property(cc.Button)
    p1c4: cc.Button = null;

    @property(cc.Button)
    p2c1: cc.Button = null;

    @property(cc.Button)
    p2c2: cc.Button = null;
    
    @property(cc.Button)
    p2c3: cc.Button = null;

    @property(cc.Button)
    p2c4: cc.Button = null;

    @property(cc.Button)
    p3c1: cc.Button = null;

    @property(cc.Button)
    p3c2: cc.Button = null;
    
    @property(cc.Button)
    p3c3: cc.Button = null;

    @property(cc.Button)
    p3c4: cc.Button = null;

    @property(cc.Button)
    p4c1: cc.Button = null;

    @property(cc.Button)
    p4c2: cc.Button = null;
    
    @property(cc.Button)
    p4c3: cc.Button = null;

    @property(cc.Button)
    p4c4: cc.Button = null;

    private char1: string = "true";

    private char2: string = "false";
    
    private char3: string = "false";
    
    private char4: string = "false";

    private playerNum: string = null;
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        this.resetPlayerChar();
        this.setTotalPlayer();
        this.loadPlayerName();
        this.setUserStats();
        this.loadCharBtn();
    }

    start () {
        this.menuMouseOn();
    }

    // update (dt) {}

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    resetPlayerChar() {
        cc.sys.localStorage.setItem("Player 1 Char", "char1");
        cc.sys.localStorage.setItem("Player 2 Char", "char1");
        cc.sys.localStorage.setItem("Player 3 Char", "char1");
        cc.sys.localStorage.setItem("Player 4 Char", "char1");
    }

    setUserStats() {
        // cc.sys.localStorage.setItem("char1", false); // FOR DEBUG DON'T DELETE
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
    }

    menuMouseOn() {
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
            this.loadScene("player name");
        });
        this.next.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.playClickAudio();
            this.loadScene("map choose");
        });
        this.p1c1.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char1 ==  "true") {
                this.playClickAudio();
                this.selected("char1", "1");
            }
        });
        this.p1c2.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char2 == "true") {
                this.playClickAudio();
                this.selected("char2", "1");
            }
        });
        this.p1c3.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char3 == "true") {
                this.playClickAudio();
                this.selected("char3", "1");
            }
        });
        this.p1c4.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char4 == "true") {
                this.playClickAudio();
                this.selected("char4", "1");
            }
        });
        this.p2c1.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char1 == "true") {
                this.playClickAudio();
                this.selected("char1", "2");
            }
        });
        this.p2c2.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char2 == "true") {
                this.playClickAudio();
                this.selected("char2", "2");
            }
        });
        this.p2c3.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char3 == "true") {
                this.playClickAudio();
                this.selected("char3", "2");
            }
        });
        this.p2c4.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            if(this.char4 == "true") {
                this.playClickAudio();
                this.selected("char4", "2");
            }
        });
        
        if(this.playerNum == "3" || this.playerNum == "4") {
            this.p3c1.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char1 == "true") {
                    this.playClickAudio();
                    this.selected("char1", "3");
                }
            });
            this.p3c2.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char2 == "true") {
                    this.playClickAudio();
                    this.selected("char2", "3");
                }
            });
            this.p3c3.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char3 == "true") {
                    this.playClickAudio();
                    this.selected("char3", "3");
                }
            });
            this.p3c4.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char4 == "true") {
                    this.playClickAudio();
                    this.selected("char4", "3");
                }
            });
        }

        if(this.playerNum == "4") {
            this.p4c1.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char1 == "true") {
                    this.playClickAudio();
                    this.selected("char1", "4");
                }
            });
            this.p4c2.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char2 == "true") {
                    this.playClickAudio();
                    this.selected("char2", "4");
                }
            });
            this.p4c3.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char3 == "true") {
                    this.playClickAudio();
                    this.selected("char3", "4");
                }
            });
            this.p4c4.node.on(cc.Node.EventType.MOUSE_DOWN, ()=>{
                if(this.char4 == "true") {
                    this.playClickAudio();
                    this.selected("char4", "4");
                }
            });
        }
    }

    playClickAudio(){
        cc.audioEngine.playEffect(this.click, false);
    }

    loadScene(scene: string) {
        cc.director.loadScene(scene);
    }

    loadCharBtn() {
        if(this.char1 == "true") {
            this.lockBtn(this.p1c1);
            this.lockBtn(this.p2c1);
            if(this.player3.active) {
                this.lockBtn(this.p3c1);
            }
            if(this.player4.active) {
                this.lockBtn(this.p4c1);
            }
        }
        if(this.char2 == "true") {
            this.lockBtn(this.p1c2);
            this.lockBtn(this.p2c2);
            if(this.player3.active) {
                this.lockBtn(this.p3c2);
            }
            if(this.player4.active) {
                this.lockBtn(this.p4c2);
            }
        }
        if(this.char3 == "true") {
            this.lockBtn(this.p1c3);
            this.lockBtn(this.p2c3);
            if(this.player3.active) {
                this.lockBtn(this.p3c3);
            }
            if(this.player4.active) {
                this.lockBtn(this.p4c3);
            }
        }
        if(this.char4 == "true") {
            this.lockBtn(this.p1c4);
            this.lockBtn(this.p2c4);
            if(this.player3.active) {
                this.lockBtn(this.p3c4);
            }
            if(this.player4.active) {
                this.lockBtn(this.p4c4);
            }
        }
    }

    lockBtn(btn: cc.Button) {
        btn.node.getChildByName("LockedBackground").active = false;
    }

    selected(charType, idx) {
        cc.sys.localStorage.setItem("Player " + idx + " Char", charType);
    }

    setTotalPlayer() {
        if(this.playerNum == "2") {
            this.player3.active = false;
            this.player4.active = false;
        } else if(this.playerNum == "3") {
            this.player4.active = false;
        }
    }

    loadPlayerName() {
        this.player1Name.string = cc.sys.localStorage.getItem("Player 1 Name");
        this.player2Name.string = cc.sys.localStorage.getItem("Player 2 Name");
        if(this.player3.active) {
            this.player3Name.string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        if(this.player4.active) {
            this.player4Name.string = cc.sys.localStorage.getItem("Player 4 Name");
        }

    }
}
