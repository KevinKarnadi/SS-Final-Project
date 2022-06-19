const {ccclass, property} = cc._decorator;

@ccclass
export default class Bomb extends cc.Component 
{
    private bombManager = null;

    public isTriggered = false; // I add this to make the bullet kill one enemy at a time.

    private rigidBody: cc.RigidBody = null;

    private shootAngle = null;

    private animation: cc.Animation = null;

    private power = null;

    // when created, the bullet need to be placed at correct position and play animation.
    public init(node: cc.Node) 
    {
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);

        this.animation.play('grenade');
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
            this.node.position = cc.v3(35, 4);

            this.node.scaleX = 1;
        }
        else
        {
            this.node.position = cc.v3(-35, 4);

            this.node.scaleX = -1;
        }

        this.node.position = this.node.position.addSelf(node.position);
    }

    //make the bullet move from current position
    private bulletMove()
    {
        let moveDir = null;
        // decide bullet direction
        if(this.node.scaleX >= 0) {
            moveDir = 1;
        } else {
            moveDir = -1;
        }
        let speed = 10 * this.power;
        // this.rigidBody.applyForceToCenter(cc.v2(Math.sin(shootAngle) * x, Math.cos(shootAngle) * x), true);
        // this.rigidBody.linearVelocity = cc.v2(Math.sin(this.shootAngle) * x * moveDir, Math.cos(this.shootAngle) * x);
        // this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.sin(this.shootAngle), Math.sinh(this.shootAngle) * speed);
        if(this.shootAngle >= 0) {
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.cos(this.shootAngle), Math.sin(this.shootAngle) * speed);
        } else {
            speed *= 0.75;
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir, Math.sinh(this.shootAngle) * speed);
        }
        this.rigidBody.angularVelocity = 200 * moveDir;
    }
    r
    //detect collision
    onBeginContact(contact, selfCollider, otherCollider) {
        this.scheduleOnce(() => {
            this.node.stopAllActions();
            this.unscheduleAllCallbacks();
            this.animation.stop();
            this.bombManager.put(this.node);
        }, 0.07);
    }

    setAnglePower(angle, power) {
        this.shootAngle = angle;
        this.power = power;
    }
}
