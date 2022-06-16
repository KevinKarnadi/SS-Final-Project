const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component 
{

    private anim = null;

    private bulletManager = null;

    public isTriggered = false; // I add this to make the bullet kill one enemy at a time.

    private rigidBody: cc.RigidBody = null;

    // when created, the bullet need to be placed at correct position and play animation.
    public init(node: cc.Node) 
    {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);

        this.setInitPos(node);

        this.anim.play('bullet');
        this.bulletMove();
    }

    // this function is called when the bullet manager calls "get" API.
    reuse(bulletManager)
    {
        this.bulletManager = bulletManager;

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

        // decide bullet direction
        if(this.node.scaleX > 0) {
            moveDir = 1;
        } else {
            moveDir = -1;
        }

        this.rigidBody.linearVelocity = cc.v2(speed * moveDir, 0);
    }
    
    //detect collision
    onBeginContact(contact, selfCollider, otherCollider)
    {
        this.node.stopAllActions();
        
        this.unscheduleAllCallbacks();

        this.scheduleOnce(() => {

            this.anim.stop();
            
            this.bulletManager.put(this.node);
        }, 0.1); // for better animation effect, I delay 0.1s when bullet hits the enemy
    }
}
