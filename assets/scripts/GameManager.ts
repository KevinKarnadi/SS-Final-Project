import Player from "./Player"
import TrajectoryLine from "./TrajectoryLine";
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

    @property(Player)
    player4: Player = null;

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

<<<<<<< HEAD
    private groundPool = null;

    private alivePlayer = null;

    private winner = null;

=======
>>>>>>> 9690add26ceccbf70186ca1cde903a5e0dae31d4
    // private currPlayerPos = null;

    private isPaused: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

<<<<<<< HEAD
        //     this.groundPool.put(ground);
        // }
        this.alivePlayer = this.totalPlayer;
=======
>>>>>>> 9690add26ceccbf70186ca1cde903a5e0dae31d4
    }
    
    start () {
        //this.playBGM();
        this.changePlayer(0);
        this.initResumeBtn();
    }

    update (dt) {
<<<<<<< HEAD
        if (this.player){
            if (this.UI.timerVal < 0){
                this.currPlayer += 1;
                this.changePlayer(this.currPlayer);
                this.UI.timerVal = 20;
            }
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
            //this.isWin();
=======
        var playerPos = this.player.node.getPosition();
        var cameraPos = this.camera.getPosition();
        cameraPos.lerp(playerPos, 0.1, cameraPos);
        cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
        if(cameraPos.y > 100){
            cameraPos.y = 100;
        }
        if(cameraPos.x < -35) {
            cameraPos.x = -35;
        } else if(cameraPos.x > 2033+35) {
            cameraPos.x = 2033+35;
>>>>>>> 9690add26ceccbf70186ca1cde903a5e0dae31d4
        }
    }

    changePlayer(num) {
        this.currPlayer = num % this.totalPlayer;
        if(this.player) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.onDisable();
        }
        if (this.totalPlayer == 3){
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
        }
        else{
            this.changePlayer(this.currPlayer+1);
        }
        /*if (this.totalPlayer == 2){
            switch (this.currPlayer) {
                case 0:
                    if (this.player1 == null)
                        this.changePlayer(1);
                    else
                        this.player = this.player1;
                    break;
                case 1:
                    if (this.player2 == null)
                        this.changePlayer(0);
                    else
                        this.player = this.player2;
                    break;
                default:
                    break;
            }
        }
        if (this.totalPlayer == 3){
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
        }
        if (this.totalPlayer == 4){
            switch (this.currPlayer) {
                case 0:
                    if (this.player1 == null)
                        this.changePlayer(1);
                    else
                        this.player = this.player1;
                    break;
                case 1:
                    if (this.player2 == null)
                        this.changePlayer(2);
                    else
                        this.player = this.player2;
                    break;
                case 2:
                    if (this.player3 == null)
                        this.changePlayer(3);
                    else
                        this.player = this.player3;
                    break;
                case 3:
                    if (this.player4 == null)
                        this.changePlayer(0);
                    else
                        this.player = this.player4;
                    break;
                default:
                    break;
            }
        }*/
        if (this.player)
            this.onEnable();
    }

    playBGM() {
        cc.audioEngine.playMusic(this.bgm, true);
    }

    isWin() {
        let alive = 0;
        if (this.totalPlayer == 2){
            if (this.player1 != null)
                alive += 1;
            if (this.player2 != null)
                alive += 1;
        }
        if (this.totalPlayer == 3){
            if (this.player1 != null)
                alive += 1;
            if (this.player2 != null)
                alive += 1;
            if (this.player3 != null)
                alive += 1;
        }
        if (this.totalPlayer == 4){
            if (this.player1 != null)
                alive += 1;
            if (this.player2 != null)
                alive += 1;
            if (this.player3 != null)
                alive += 1;
            if (this.player4 != null)
                alive += 1;
        }
        this.alivePlayer = alive;
        if (this.alivePlayer == 1)
            this.winner = this.player;
        console.log("congrats " + this.winner.node.playerName)
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
                this.player.weapon = "gun";
                break;
            case cc.macro.KEY.r:        // bomb
                this.player.weapon = "bomb"
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

        var playerPos = event.getStartLocation();
        var mousePos = event.getLocation();
        var diffX = mousePos.x - playerPos.x;
        var diffY = playerPos.y - mousePos.y;
        this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)); // angle in radian
        if(diffX >= 0) {    // change player direction
            this.player.setPlayerChangeDirection(-1);
        } else {
            this.player.setPlayerChangeDirection(1);
        }
        if(!this.shoot){
            if(this.player.weapon == "gun") {
                if(diffY < 0) {
                    this.shootAngle *= -1;
                }
                this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle); // draw trajectory line
            } else if(this.player.weapon == "bomb") {
                if(diffY >= 0) { // draw trajectory line
                    this.player.line.getComponent("TrajectoryLine").drawCurveLine(this.shootAngle);
                }
            }
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
        if(this.player.weapon == "gun") {
            this.player.setPlayerShoot(this.shootAngle);
        } else if (this.player.weapon == "bomb") {
            this.player.setPlayerBomb(this.shootAngle);
        }
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
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/resumeBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }

    resume() {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    }

}
