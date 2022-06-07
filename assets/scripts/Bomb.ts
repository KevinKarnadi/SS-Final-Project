import GameManager from "./GameManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bomb extends cc.Component 
{
    @property(GameManager)
    gameManager: GameManager = null;

    private anim = null;

    private bombManager = null;

    public isTriggered = false; // I add this to make the bullet kill one enemy at a time.

    private rigidBody: cc.RigidBody = null;

    private shootAngle = null;

    // when created, the bullet need to be placed at correct position and play animation.
    public init(node: cc.Node) 
    {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);

        this.anim.play('bomb');
        this.bulletMove();
    }

    // this function is called when the bullet manager calls "get" API.
    reuse(bulletManager)
    {
        this.bombManager = bulletManager;

        this.isTriggered = false;
    }

    //this function sets the bullet's initial position when it is reused.
    private setInitPos(node: cc.Node)
    {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move

        if(node.scaleX > 0)
        {
            this.node.position = cc.v3(62, 8);

            this.node.scaleX = 1;
        }
        else
        {
            this.node.position = cc.v3(-62, 8);

            this.node.scaleX = -1;
        }

        this.node.position = this.node.position.addSelf(node.position);
    }

    //make the bullet move from current position
    private bulletMove()
    {
        let moveDir = null;
        let speed = 300;
        let angle = 45;
        let shootAngle = this.shootAngle;
        let height = 1000;

        // decide bullet direction
        if(this.node.scaleX > 0) {
            moveDir = 1;
        } else {
            moveDir = -1;
        }

        // this.rigidBody.linearVelocity = cc.v2(speed * moveDir, height);
        // this.rigidBody.linearVelocity = cc.v2(speed * moveDir, 0);
        let x = 15000;
        let y = x * Math.tan(Math.abs(shootAngle)*(Math.PI/180));
        x *= moveDir;
        this.rigidBody.applyForceToCenter(cc.v2(x, y), true);
        this.rigidBody.angularVelocity = angle * moveDir * 10;
    }
    
    //detect collision
    onBeginContact(contact, selfCollider, otherCollider) {
        this.node.stopAllActions();
        
        this.unscheduleAllCallbacks();

        this.anim.stop();
            
        this.bombManager.put(this.node);
    }

    setAngle(angle) {
        this.shootAngle = angle;
    }
}
