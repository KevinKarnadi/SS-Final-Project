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

    @property(Player)
    player4: Player = null;

    @property(UI)
    UI: UI = null;

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.Node)
    background: cc.Node = null

    @property(cc.SpriteFrame)
    private weaponSprite0: cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    private weaponSprite1: cc.SpriteFrame = null;
    
    @property(cc.SpriteFrame)
    private weaponSprite2: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    private weaponSprite3: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    private weaponSprite4: cc.SpriteFrame = null;

    @property()
    cameraSpeed: number = 300;

    private player = null;

    private aKeyDown: boolean = false;

    private dKeyDown: boolean = false;

    private shoot: boolean = false;

    private currPlayer: number;

    private totalPlayer: number = 2;

    private alivePlayer = null;

    private shootAngle = null;

    private playerNum = null;

    // private currPlayerPos = null;

    private isPaused: boolean = false;

    private playerPath: string = "Canvas/Players/";

    private winner;

    private cameraAnchor: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        this.alivePlayer = this.totalPlayer;
    }
    
    start () {
        //this.playBGM();
        this.loadPlayer();
        this.changePlayer(0);
        this.initResumeBtn();
    }

    update (dt) {
        if(this.winner == null){
            var playerPos = this.player.node.getPosition();
            var cameraPos = this.camera.getPosition();
            var prevCamPos = this.camera.getPosition();
            if(this.cameraAnchor == 1 || this.cameraAnchor == -1){
                cameraPos.x += this.cameraAnchor * this.cameraSpeed * dt;
                // console.log(this.cameraAnchor, "update");
            } else{
                cameraPos.lerp(playerPos, 0.1, cameraPos);
                cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
            }
            if(cameraPos.y > 100){
                cameraPos.y = 100;
            }
            if(cameraPos.x < -35) {
                cameraPos.x = -35;
            } else if(cameraPos.x > 2033+35) {
                cameraPos.x = 2033+35;
            }
            this.camera.setPosition(cameraPos);
            // if(this.background){
            //     this.background.setPosition(cameraPos.x < prevCamPos.x ? 
            //         ((cameraPos.x - prevCamPos.x)/3 + this.background.x) : 
            //         (this.background.x - (prevCamPos.x - cameraPos.x)/3), 
            //         cameraPos.y < prevCamPos.y ? 
            //         ((cameraPos.y - prevCamPos.y)/3 + this.background.y) :
            //         (this.background.y - (prevCamPos.y - cameraPos.y)/3));
            // }
            if(this.UI.timerVal < 0 || this.player.isDie){
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            this.isWin();
            this.updateWeaponUi();
        }
    }

    loadPlayer() {
        this.totalPlayer = parseInt(this.playerNum);
        switch (this.totalPlayer) {
            case 4:
                cc.find(this.playerPath + "Player 4").active = true;
            case 3:
                cc.find(this.playerPath + "Player 3").active = true;
            case 2:
                cc.find(this.playerPath + "Player 2").active = true;
                cc.find(this.playerPath + "Player 1").active = true;
                break;
            default:
                break;
        }
    }

    isWin(){
        let alive = this.totalPlayer;
        if (this.totalPlayer == 2){
            if(this.player1.isDie)
                alive--;
            if(this.player2.isDie)
                alive--;
        }
        else if (this.totalPlayer == 3){
            if(this.player1.isDie)
                alive--;
            if(this.player2.isDie)
                alive--;
            if(this.player3.isDie)
                alive--;
        }
        else if (this.totalPlayer == 4){
            if(this.player1.isDie)
                alive--;
            if(this.player2.isDie)
                alive--;
            if(this.player3.isDie)
                alive--;
            if(this.player4.isDie)
                alive--;
        }
        this.alivePlayer = alive;
        if (this.alivePlayer == 1){
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            console.log(this.winner);
            //this.UI.pause();
        }
    }

    changePlayer(num) {
        this.currPlayer = num % this.totalPlayer;
        if((this.player && !this.player.isDie)) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.player.line.getComponent("TrajectoryLine").clearLine();
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
        if(!this.player.isDie) {
            this.onEnable();
        } else {
            this.changePlayer(num+1);
        }
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
                this.UI.timerVal = 20;
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
        if(diffY < 0) {
            this.shootAngle *= -1;
        }
        if(!this.shoot){
            if(this.player.weapon == "gun") {
                if(this.player.gunType == "normal") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 300); // draw trajectory line
                } else if(this.player.gunType == "burst") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 200); // draw trajectory line
                } else if(this.player.gunType == "sniper") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 400); // draw trajectory line
                } else if(this.player.gunType == "shotgun") {
                    this.player.line.getComponent("TrajectoryLine").drawCircle(this.shootAngle, 100); // draw trajectory line
                }
            } else if(this.player.weapon == "bomb") {
                let power = (Math.abs(diffY) >= Math.abs(diffX) ? Math.abs(diffY) : Math.abs(diffX)) 
                this.player.line.getComponent("TrajectoryLine").drawCurveLine(this.shootAngle, power*2); // draw arrow
                this.player.power = (power * 2 > 100) ? 100 : power * 2;
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

    setCameraAnchor(value){
        this.cameraAnchor = value;
    }

    updateWeaponUi(){
        // var weaponSprite = cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame;
        if(this.player){
            switch (this.player.getCurrWeaponNum()){
                case "0":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite0;
                    // console.log(weaponSprite, "updateweaponUi");
                    break;
                case "1":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite1;
                    break;
                case "2":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite2;
                    break;
                case "3":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
                case "4":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite4;
                    break;
                default:
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
            }
        }
    }
}
