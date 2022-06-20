const {ccclass, property} = cc._decorator;

@ccclass
export default class Ground2 extends cc.Component {

    @property(cc.Prefab)
    private groundPrefab: cc.Prefab = null;

    @property()
    Bound: number = -223; // base

    @property()
    growDir: number = 0;

    private isGone: boolean = false;

    onLoad () {
        this.createBlocks();
    }

    start () {

    }

    update (dt) {

    }

    createBlocks(){
        let newY;
        let counter;
        if(this.growDir == 0){
            newY = this.node.y - 15;
            counter = 1;
            while(newY >= this.Bound){
                newY = this.node.y - (15 * counter);
                let newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        } else{
            newY = this.node.y + 15;
            counter = 1;
            while(newY <= this.Bound){
                newY = this.node.y + (15 * counter) - 4;
                let newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }

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
