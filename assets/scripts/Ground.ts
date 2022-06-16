const {ccclass, property} = cc._decorator;

@ccclass
export default class Ground extends cc.Component 
{

    // private anim = null;

    // private bulletManager = null;

    public isTriggered = false; // I add this to make the bullet kill one enemy at a time.

    // private rigidBody: cc.RigidBody = null;

    // when created, the bullet need to be placed at correct position and play animation.
    public init(node: cc.Node, index: number) 
    {
        // this.anim = this.getComponent(cc.Animation);
        // this.rigidBody = this.getComponent(cc.RigidBody);

        this.setInitPos(node, index);
    }

    // this function is called when the bullet manager calls "get" API.
    reuse(bulletManager)
    {
        // this.bulletManager = bulletManager;

        // this.isTriggered = false;
    }

    //this function sets the bullet's initial position when it is reused.
    private setInitPos(node: cc.Node, index: number)
    {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move

        this.node.position = cc.v3(-480 + (15 * index) % (15 * 160), -320 + 15 * Math.floor(index / 160)); 
        

        this.node.position = this.node.position.addSelf(node.position);
    }
    
    onBeginContact(contact, selfCollider, otherCollider) {
        if(otherCollider.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            
            this.scheduleOnce(()=>{
                this.node.destroy();
            }, 0.35);
            
        }
    }
}
