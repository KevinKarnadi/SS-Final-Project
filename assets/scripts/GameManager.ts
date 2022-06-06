// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import Player from "./Player"
import UI from "./UI"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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

    private player = null;

    private aKeyDown: boolean = false;

    private dKeyDown: boolean = false;

    private shoot: boolean = false;

    private currPlayer: number;

    private totalPlayer: number = 3;

    private shootAngle = null;

    // private currPlayerPos = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -200);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    
    start () {
        //this.playBGM();
        this.changePlayer(0);
    }

    update (dt) {
        var playerPos = this.player.node.getPosition();
        var cameraPos = this.camera.getPosition();
        cameraPos.lerp(playerPos, 0.1, cameraPos);
        cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
        if(cameraPos.x < 0) {
            cameraPos.x = 0;
        } else if(cameraPos.x > 8500) {
            cameraPos.x = 8500;
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
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this);      // cancel shoot
        }
    }

    protected onDisable(): void {
        if(this.player) {
            this.player.node.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this);   // touched
            this.player.node.off(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this);     // aim
            this.player.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this);      // cancel shoot
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
                this.UI.pause();
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
            // var playerPos = cc.v2(this.player.node.position.x + 480, this.player.node.position.y + 320);
            var playerPos = event.getStartLocation();
            var mousePos = event.getLocation();
            var diffX = mousePos.x - playerPos.x;
            var diffY = mousePos.y - playerPos.y;
            // mousePos = this.player.node.parent.convertToNodeSpaceAR(mousePos);
            // var angle = mousePos.signAngle(playerPos);
            this.shootAngle = Math.atan2(diffX, diffY) * (180/ Math.PI) - 90 * -1;
            if(this.shootAngle >= 0) {
                this.player.setPlayerChangeDirection(-1);
            } else {
                this.player.setPlayerChangeDirection(1);
            }
            // console.log(angle);
            // console.log(playerPos.x + " " + playerPos.y)
            // console.log(mousePos.x + " " + mousePos.y);

            // gagal
            // var pos = this.player.node.getPosition();
            // var angle = pos.angle(event.getLocation());
            // var degr = cc.misc.radiansToDegrees(angle);
            // this.player.node.getjoi
            // console.log(angle)

            // angry bird
            // if(this.currAngle < 90) {
            //     this.currAngle += 1;

            // }
            // let start = event.getStartLocation();
            // let cur = event.getLocation();
            // cur.subSelf(start);
            
            // let cur_v = cc.v2(cur.x, cur.y);
            // if(cur_v.mag() > this.maxLength){
            //     cur_v.normalizeSelf().mulSelf(this.maxLength);
            // }

            // this.node.setPosition(this.startPos.add(cur_v));
            
            // this.rb.linearVelocity = cc.Vec2.ZERO;
            // this.rb.angularVelocity = 0;
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

        // this.shoot = true;
        this.player.setPlayerBomb(this.shootAngle);
        this.player.setPlayerChangeDirection(0);
    }
}
