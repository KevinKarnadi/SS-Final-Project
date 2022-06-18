const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.AudioClip)
    jumpAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    dieAudio: cc.AudioClip = null;

    @property(cc.Prefab)
    private bulletPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private bombPrefab: cc.Prefab = null;

    public line = null;

    private playerName = null;

    private moveSpeed: number = 300;

    private moveDirection: number = 0;

    private changeDirection: number = 0;

    private jumpVelocity: number = 2500;

    private jump: boolean = false;

    private isOnGround: boolean = false;

    public isDie: boolean = false;

    private isMove: boolean = false;

    private animation: cc.Animation = null;

    private animationState = null;

    private rigidBody: cc.RigidBody = null;

    private win: boolean = false;

    private shoot: boolean = false;

    private bombPool = null;

    private bomb: boolean = false;

    private angle = null;

    private maxHP: number = 100;

    private HP: number = 100;

    private hurt: boolean = false;

    public weapon: string = "gun";

    public gunType: string = "shotgun";

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.setPlayerName();
        this.bombPool = new cc.NodePool('Bomb');
        let maxBombNum = 5;
        for(let i: number = 0; i < maxBombNum; i++) {
            let bomb = cc.instantiate(this.bombPrefab);

            this.bombPool.put(bomb);
        }
    }

    start () {

    }

    update (dt) {
        if(!this.win) {
            if(!this.isDie) {
                cc.find("Player Health/bar", this.node).width = (this.HP / this.maxHP) * 100;
                this.playerMove(dt);
                if(this.HP <= 0){
                    this.playerDie();
                } else {
                    if(this.jump) {
                        this.playerJump();
                    }
                    if(this.shoot) {
                        this.createBullet(this.gunType);
                    } else if(this.bomb) {
                        this.createBomb();
                    }
                    this.playerAnimation();
                }
            }
        }
    }

    onBeginContact(contact, self, other) {
        if(contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if(other.node.group == "bullet" || other.node.group == "explosiveObj") {
            if(!this.isDie) {
                this.HP -= 10;
                if(this.HP <= 0) {
                    this.HP = 0;
                } else {
                    this.hurt = true;
                    if (this.node.name == 'Player 1' && this.HP != 0){
                        this.animationState = this.animation.play('char1hurt');
                        // this.scheduleOnce(function(){
                        //     this.animationState = this.animation.play('char1idle');
                        // }, 0.5);
                    }
                    else if (this.node.name == 'Player 2' && this.HP != 0){
                        this.animationState = this.animation.play('char2hurt');
                        // this.scheduleOnce(function(){
                        //     this.animationState = this.animation.play('char2idle');
                        // }, 0.5);
                    }
                    else if (this.node.name == 'Player 3' && this.HP != 0){
                        this.animationState = this.animation.play('char3hurt');
                        // this.scheduleOnce(function(){
                        //     this.animationState = this.animation.play('char3idle');
                        // }, 0.5);
                    }
                    else if (this.node.name == 'Player 4' && this.HP != 0){
                        this.animationState = this.animation.play('char4hurt');
                        // this.scheduleOnce(function(){
                        //     this.animationState = this.animation.play('char3idle');
                        // }, 0.5);
                    }
                    this.scheduleOnce(()=>{
                        this.hurt = false;
                    }, 0.5)
                }
            }
        } else if(other.node.group == "wall") {
            if(other.node.name == "Die Boundary") {
                this.playerDie();
            }
        }
    }

    playerMove(dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt;    // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if(this.moveDirection == 1 || this.changeDirection == 1) {   // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
            cc.find("Player Health", this.node).scaleX = 1;
        } else if(this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
            cc.find("Player Health", this.node).scaleX = -1;
        }
    }

    playerJump() {
        if(this.isOnGround) {  // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity);    // add jump velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    }

    private createBullet(mode: string)
    {
        this.shoot = false;
        if(mode == "normal") {
            let bullet = cc.instantiate(this.bulletPrefab);
            if(bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node);
            }
        }
        else if(mode == "burst") {
            this.schedule(function() {
                console.log("boom");
                let bullet = cc.instantiate(this.bulletPrefab);
                if(bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle);
                    bullet.getComponent('Bullet').init(this.node);
                }
            }, 0.05, 2);
        }
        else if(mode == "shotgun") {
            let d_angle = -0.2;
            for(let i = 0; i < 5; i++) {
                let bullet = cc.instantiate(this.bulletPrefab);
                if(bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle + d_angle);
                    bullet.getComponent('Bullet').init(this.node);
                    d_angle += 0.1;
                }
            }
        }
    }

    private createBomb()
    {
        this.bomb = false;
        let bomb = null;
        if (this.bombPool.size() > 0) 
            bomb = this.bombPool.get(this.bombPool);

        if(bomb != null) {
            bomb.getComponent('Bomb').setAngle(this.angle);
            bomb.getComponent('Bomb').init(this.node);
        }
    }

    playerDie() {
        this.isDie = true;
        if (this.node.name == 'Player 1'){
            this.animation.stop('char1idle');
            this.animationState = this.animation.play('char1dead');
        }
        else if (this.node.name == 'Player 2'){
            this.animation.stop('char2idle');
            this.animationState = this.animation.play('char2dead');
        }
        else if (this.node.name == 'Player 3'){
            this.animation.stop('char3idle');
            this.animationState = this.animation.play('char3dead');
        }
        else if (this.node.name == 'Player 4'){
            this.animation.stop('char4idle');
            this.animationState = this.animation.play('char4dead');
        }
        this.scheduleOnce(function(){
            this.node.destroy();
            // this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    }

    playerAnimation() {
        if(!this.isDie){    // animation for char1
            if(this.node.name == "Player 1") {  // MUST change to curPlayer == "Player 1"
                if(this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                } else if(this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char1run")) {
                    this.animationState = this.animation.play("char1run");
                } else if(!this.isOnGround && (!this.animationState || this.animationState.name != "char1jump")) {
                    this.animationState = this.animation.play("char1jump");
                }
                // if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animation.stop('char1jump');
                //     this.animationState = this.animation.play('char1idle');
                // }
                // if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animationState = this.animation.play('char1run');
                // }
                // if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)){
                //     this.animationState = this.animation.play('char1idle');
                // }          
            } else if(this.node.name == "Player 2") {
                if(this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                } else if(this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                } else if(!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            } else if(this.node.name == "Player 3") {
                if(this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                } else if(this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                } else if(!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }  else if(this.node.name == "Player 4") {
                if(this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                } else if(this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char4run")) {
                    this.animationState = this.animation.play("char4run");
                } else if(!this.isOnGround && (!this.animationState || this.animationState.name != "char4jump")) {
                    this.animationState = this.animation.play("char4jump");
                }
            }
        }   
    }

    setPlayerMoveDirection(dir: number) {
        this.moveDirection = dir;
    }

    setPlayerChangeDirection(dir: number) {
        this.changeDirection = dir;
    }

    setPlayerJump(val: boolean) {
        this.jump = val;
    }

    setPlayerShoot(angle) {
        this.angle = angle;
        this.shoot = true;
    }

    setPlayerBomb(angle) {
        this.angle = angle;
        this.bomb = true;
    }

    setPlayerName() {
        if(this.node.name == "Player 1") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 1 Name");
        } else if(this.node.name == "Player 2") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 2 Name");
        } else if(this.node.name == "Player 3") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 3 Name");
        } else if(this.node.name == "Player 4") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    }
}
