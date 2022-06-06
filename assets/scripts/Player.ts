// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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

    private moveSpeed: number = 300;

    private moveDirection: number = 0;

    private changeDirection: number = 0;

    private jumpVelocity: number = 1100;

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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
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
                this.playerMove(dt);
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
    }

    playerMove(dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt;    // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if(this.moveDirection == 1 || this.changeDirection == 1) {   // change direction using scaling
            this.node.scaleX = 1;
        } else if(this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
        }
    }

    playerJump() {
        if(this.isOnGround) {  // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity);    // add jumping velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
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
        this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        cc.audioEngine.playEffect(this.dieAudio, false);
    }

    playerAnimation() {

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
