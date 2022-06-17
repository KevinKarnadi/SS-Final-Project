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

    private isDie: boolean = false;

    private isMove: boolean = false;

    private animation: cc.Animation = null;

    private animationState = null;

    private rigidBody: cc.RigidBody = null;

    private isDieBound: boolean = false;

    private win: boolean = false;

    private bulletPool = null;

    private shoot: boolean = false;

    private bombPool = null;

    private bomb: boolean = false;

    private angle = null;

    private maxHP: number = 100;

    private HP: number = 100;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.bulletPool = new cc.NodePool('Bullet');
        this.bombPool = new cc.NodePool('Bomb');
        let maxBulletNum = 5;
        let maxBombNum = 5;
        for(let i: number = 0; i < maxBulletNum; i++) {
            let bullet = cc.instantiate(this.bulletPrefab);

            this.bulletPool.put(bullet);
        }
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
                }
                if(this.jump) {
                    this.playerJump();
                }
                if(this.shoot) {
                    this.createBullet();
                }
                if(this.bomb) {
                    this.createBomb();
                }
                this.playerAnimation();
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
            this.HP -= 10;
            if(this.HP < 0) {
                this.HP = 0;
            }
            if (this.node.name == 'Player 1' && this.HP != 0){
                this.animationState = this.animation.play('char1hurt');
                this.scheduleOnce(function(){
                    this.animationState = this.animation.play('char1idle');
                }, 0.5);
            }
            else if (this.node.name == 'Player 2' && this.HP != 0){
                this.animationState = this.animation.play('char2hurt');
                this.scheduleOnce(function(){
                    this.animationState = this.animation.play('char2idle');
                }, 0.5);
            }
            else if (this.node.name == 'Player 3' && this.HP != 0){
                this.animationState = this.animation.play('char3hurt');
                this.scheduleOnce(function(){
                    this.animationState = this.animation.play('char3idle');
                }, 0.5);
            }
        } else if(other.node.ground == "wall") {
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
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity);    // add jumping velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    }

    private createBullet()
    {
        this.shoot = false;
        let bullet = null;
        if (this.bulletPool.size() > 0) 
            bullet = this.bulletPool.get(this.bulletPool);

        if(bullet != null) {
            bullet.getComponent('Bullet').init(this.node);
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
        this.scheduleOnce(function(){
            this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    }

    playerAnimation() {
        if(!this.isDie){
            if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying){
                this.animation.stop('char1jump');
                this.animationState = this.animation.play('char1idle');
            }
            if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying){
                this.animationState = this.animation.play('char1run');
            }
            if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)){
                this.animationState = this.animation.play('char1idle');
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

    setPlayerShoot() {
        this.shoot = true;
    }

    setPlayerBomb(angle) {
        this.angle = angle;
        this.bomb = true;
    }
}
