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
    bgm1: cc.AudioClip = null;

    @property(cc.AudioClip)
    bgm2: cc.AudioClip = null;

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
        cc.audioEngine.stopMusic();
        this.playBGM();
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        // this.playerNum = 4;
        // this.alivePlayer = this.totalPlayer;
        this.alivePlayer = parseInt(this.playerNum);
    }
    
    start () {
        this.loadPlayer();
        this.changePlayer(0);
        this.initPauseMenuButtons();
        this.initSettingsMenuButtons();
    }

    update (dt) {
        
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
        this.updateWeaponUi();
        if(this.winner == null){
            if(this.UI.timerVal < 0 || this.player.isDie){
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            // this.isWin();
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
        // this.alivePlayer = alive;
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
            case 3:
                this.player = this.player4;
                break;
            default:
                break;
        }
        if(!this.player.isDie) {
            this.onEnable();
            this.changePlayerUi();
        } else {
            // console.log(this.currPlayer, "change");
            this.changePlayer(num+1);
        }
    }

    playBGM() {
        let sceneName = cc.director.getScene().name;
        if(sceneName == "map1")
            cc.audioEngine.playMusic(this.bgm1, true);
        else if(sceneName == "map2")
            cc.audioEngine.playMusic(this.bgm2, true);
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
            this.player.aim = true;
            if(this.player.weapon == "gun") {
                if(this.player.gunType == "normal") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 300); // draw trajectory line
                } else if(this.player.gunType == "burst") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 200); // draw trajectory line
                } else if(this.player.gunType == "sniper") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 400); // draw trajectory line
                } else if(this.player.gunType == "shotgun") {
                    this.player.line.getComponent("TrajectoryLine").drawCircle(this.shootAngle); // draw trajectory line
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

    initPauseMenuButtons() {
        let resume_clickEventHandler = new cc.Component.EventHandler();
        resume_clickEventHandler.target = this.node;
        resume_clickEventHandler.component = "GameManager";
        resume_clickEventHandler.handler = "resume";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/resumeBtn").getComponent(cc.Button).clickEvents.push(resume_clickEventHandler);

        let restart_clickEventHandler = new cc.Component.EventHandler();
        restart_clickEventHandler.target = this.node;
        restart_clickEventHandler.component = "GameManager";
        restart_clickEventHandler.handler = "restart";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/restartBtn").getComponent(cc.Button).clickEvents.push(restart_clickEventHandler);

        let settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "GameManager";
        settings_clickEventHandler.handler = "settings";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/settingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);

        let exit_clickEventHandler = new cc.Component.EventHandler();
        exit_clickEventHandler.target = this.node;
        exit_clickEventHandler.component = "GameManager";
        exit_clickEventHandler.handler = "exit";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/exitBtn").getComponent(cc.Button).clickEvents.push(exit_clickEventHandler);
    }

    resume() {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    }

    restart() {
        cc.director.resume();
        let sceneName = cc.director.getScene().name;
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene(sceneName);
        });
    }

    settings() {
        cc.find("Canvas/Main Camera/Settings Menu").active = true;
    }

    exit() {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", ()=>{
            cc.director.loadScene("menu");
        });
    }

    // Settings Menu Buttons

    initSettingsMenuButtons() {
        let close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "GameManager";
        close_clickEventHandler.handler = "close";
        cc.find("Canvas/Main Camera/Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);

        let bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "GameManager";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);

        let sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "GameManager";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
    
        let bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "GameManager";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);

        let sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "GameManager";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    }

    close() {
        cc.find("Canvas/Main Camera/Settings Menu").active = false;
    }

    bgMute() {
        cc.audioEngine.setMusicVolume(0);
    }

    sfxMute() {
        cc.audioEngine.setEffectsVolume(0);
    }

    changeBgVol() {
        let value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    }

    changeSfxVol() {
        let value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    }

    setCameraAnchor(value){
        this.cameraAnchor = value;
        
    }
    getWin(){
        return (this.winner != null);
    }

    updateWeaponUi(){
        // var weaponSprite = cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame;
        if(this.player){
            switch (this.player.getCurrWeaponNum()){
                case "0":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite0;
                    // console.log(weaponSprite, "updateweaponUi");
                    break;
                case "1":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite1;
                    break;
                case "2":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite2;
                    break;
                case "3":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
                case "4":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite4;
                    break;
                default:
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
            }
        }
    }

    playerDie(){
        this.alivePlayer -= 1;
        if (this.alivePlayer == 1){
            this.UI.timerVal = 20;
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            // console.log(this.winner);
            // console.log(this.player.isDie, "die");
            this.changePlayer(this.currPlayer + 1);
            //this.UI.pause();
        }
    }

    changePlayerUi(){
        cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string = this.player.playerName.getComponent(cc.Label).string;

        switch(this.player.playerChar){
            case "char1":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char2":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char3":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char4":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = true;
                break;
            default:
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
        }
    }

    getCurrPlayer(){
        return this.currPlayer;
    }
}
