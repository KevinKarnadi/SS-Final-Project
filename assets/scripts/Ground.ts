const {ccclass, property} = cc._decorator;

@ccclass
export default class Ground extends cc.Component 
{

    private isGone: boolean = false;

    public init(node: cc.Node, index: number) 
    {
        this.setInitPos(node, index);
    }

    reuse(bulletManager)
    {
        
    }

    private setInitPos(node: cc.Node, index: number)
    {
        this.node.parent = node;

        this.node.position = cc.v3(-480 + (15 * index) % (15 * 200), -320 + 15 * Math.floor(index / 200)); 
        
        this.node.position = this.node.position.addSelf(node.position);
    }
    
    onBeginContact(contact, self, other) {
        if(other.node.group == "bomb") {
            this.node.getChildByName("particle").active = true;
            if(!this.isGone){
                this.scheduleOnce(()=>{
                    this.node.destroy();
                }, 0.1);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
            
        } else if(other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            if(!this.isGone){
                this.scheduleOnce(()=>{
                    this.node.destroy();
                }, 0.05);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        }
    }

    onPreSolve(contact, self, other){
        if(other.node.group == "explosiveObj"){
            this.node.getChildByName("particle").active = true;
            if(!this.isGone){
                this.scheduleOnce(()=>{
                    this.node.destroy();
                }, 0.35);
                this.isGone = true;
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 100);
                cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 100);
            }
        } 
    }
}
