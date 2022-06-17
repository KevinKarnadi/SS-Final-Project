import Player from "./Player"
import UI from "./UI"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(Player)
    player1: Player = null;

    @property(Player)
    player2: Player = null;

    @property(Player)
    player3: Player = null;

    @property(UI)
    UI: UI = null;

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.Prefab)
    private groundPrefab: cc.Prefab = null;

    private player = null;

    private aKeyDown: boolean = false;

    private dKeyDown: boolean = false;

    private shoot: boolean = false;

    private currPlayer: number;

    private totalPlayer: number = 3;

    private shootAngle = null;

    private groundPool = null;

    // private currPlayerPos = null;

    private isPaused: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // this.groundPool = new cc.NodePool('Ground');
        // for(let i: number = 0; i < 9000; i++) {
        //     let ground = cc.instantiate(this.groundPrefab);

        //     this.groundPool.put(ground);
        // }
    }
    
    start () {
        //this.playBGM();
        // this.createGround();
        this.changePlayer(0);
        this.initResumeBtn();
    }

    // createGround() {
    //     let ground = null;
    //     let i = 0;
    //     while(this.groundPool.size() > 0) {
    //         ground = this.groundPool.get(this.groundPool);
    //         ground.getComponent('Ground').init(this.node, i);
    //         i++; 
    //     }
    // }

    update (dt) {
        var playerPos = this.player.node.getPosition();
        var cameraPos = this.camera.getPosition();
        cameraPos.lerp(playerPos, 0.1, cameraPos);
        cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
        if(cameraPos.x < 0) {
            cameraPos.x = 0;
        } else if(cameraPos.x > 2033) {
            cameraPos.x = 2033;
        }
        this.camera.setPosition(cameraPos);
    }

    changePlayer(num) {
        this.currPlayer = num % this.totalPlayer;
        if(this.player) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.onDisable();
        } 
        switch (this.currPlayer) {
            case 0:
                this.player = this.player1;
                break;
            case 1:
                this.player = this.player2;
                break;
            case 2:
                this.player = this.player3;
                break;
            default:
                break;
        }
        this.onEnable();
    }

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    protected onEnable(): void {
        if(this.player) {
            this.player.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this);    // touched
            this.player.node.on(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this);      // aim
            this.player.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this);  // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this);        // cancel shoot
        }
    }

    protected onDisable(): void {
        if(this.player) {
            this.player.node.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this);   // touched
            this.player.node.off(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this);     // aim
            this.player.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this);        // cancel shoot
        }
    }

    onKeyDown(e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:        // move left
                this.aKeyDown = true;
                this.player.setPlayerMoveDirection(-1);
                break;
            case cc.macro.KEY.d:        // move right
                this.dKeyDown = true;
                this.player.setPlayerMoveDirection(1);
                break;
            case cc.macro.KEY.space:    // jump
                this.player.setPlayerJump(true);
                break;
            case cc.macro.KEY.escape:
                this.pauseGame();
                //this.UI.pause();
                break;
            case cc.macro.KEY.p:        // pass
                this.changePlayer(this.currPlayer + 1);
                break;
            default:
                break;
        }
    }

    onKeyUp(e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:
                this.aKeyDown = false;
                if(this.dKeyDown) {
                    this.player.setPlayerMoveDirection(1);  // move right
                } else {
                    this.player.setPlayerMoveDirection(0);  // stop moving
                }
                break;
            case cc.macro.KEY.d:
                this.dKeyDown = false;
                if(this.aKeyDown) {
                    this.player.setPlayerMoveDirection(-1); // move left
                } else {
                    this.player.setPlayerMoveDirection(0);  // stop moving
                }
                break;
            case cc.macro.KEY.space:
                this.player.setPlayerJump(false);
                break;
            case cc.macro.KEY.f:        // shoot (bullet)
                this.player.setPlayerShoot();
                break;
            case cc.macro.KEY.r:        // bomb
                this.player.setPlayerBomb(45);
                break;
            default:
                break;
        }
    }

    onEventStart (event) {  // touched
        if (!this.enabledInHierarchy) return;

        if(!this.shoot) {
            // this.startPos = this.node.position;
            // this.motorJoint.enabled = false;
            // this.rb.gravityScale = 0;
            // this.rb.linearVelocity = cc.Vec2.ZERO;
            // this.rb.angularVelocity = 0;
        }
        event.stopPropagation();
    }
    
    onEventMove (event) {   // aim
        if (!this.enabledInHierarchy) return;
    
        if(!this.shoot){
            // count shooting angle in PI
            // var playerPos = cc.v2(this.player.node.position.x + 480, this.player.node.position.y + 320);
            var playerPos = event.getStartLocation();
            var mousePos = event.getLocation();
            var diffX = mousePos.x - playerPos.x;
            var diffY = mousePos.y - playerPos.y;
            // mousePos = this.player.node.parent.convertToNodeSpaceAR(mousePos);
            // var angle = mousePos.signAngle(playerPos);
            // this.shootAngle = Math.atan2(diffX, diffY) * (180/ Math.PI) - 90 * -1;
            // this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * (180/ Math.PI);
            this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX));
            // this.shootAngle = Math.atan2(diffY, diffX) * (180/ Math.PI);

            // change player direction
            if(diffX >= 0) {
                this.player.setPlayerChangeDirection(-1);
            } else {
                this.player.setPlayerChangeDirection(1);
            }

            // draw trajectory line
            this.player.line.getComponent("TrajectoryLine").drawLine(this.shootAngle);
        }

        event.stopPropagation();
    }

    onEventCancel (event) { // shoot
        if (!this.enabledInHierarchy) return;

        this.haveShot();
    
        event.stopPropagation();
    }
    
    onEventEnd (event) {  // cancel shoot
        if (!this.enabledInHierarchy) return;
    
        this.haveShot();
    
        event.stopPropagation();
    }

    haveShot() {
        if(this.shoot) return;
        this.player.line.getComponent("TrajectoryLine").clearLine();
        // this.shoot = true;
        // if(this.shootAngle > 30) {
            this.player.setPlayerBomb(this.shootAngle);
        // }
        this.player.setPlayerChangeDirection(0);
    }

    pauseGame() {
        if(cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    }

    // Pause Menu Buttons

    initResumeBtn() {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "GameManager";
        clickEventHandler.handler = "resume";
        cc.find("Canvas/Main Camera/Pause Menu/resumeBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    resume() {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    }

}
