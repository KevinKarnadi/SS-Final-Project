const {ccclass, property} = cc._decorator;

@ccclass
export default class Arrow extends cc.Component 
{
    private label = null;

    // when created, the bullet need to be placed at correct position and play animation.
    public init(node: cc.Node) 
    {
        this.setInitPos(node);
    }

    //this function sets the arrow's initial position when it is reused.
    private setInitPos(node: cc.Node)
    {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move

        if(node.scaleX > 0)
        {
            this.node.position = cc.v3(35, 8);

            this.node.scaleX = 1;
        }
        else
        {
            this.node.position = cc.v3(-35, 8);

            this.node.scaleX = -1;
        }

        this.node.position = this.node.position.addSelf(node.position);
    }

    //make the arrow move according to the angle
    private arrowMove(angle)
    {
        this.node.angle = angle;
    }

    destroyArrow() {
        this.node.destroy();
    }
}
