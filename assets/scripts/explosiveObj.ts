const {ccclass, property} = cc._decorator;

@ccclass
export default class ExplosiveObj extends cc.Component {

    private anim: cc.Animation = null;
    private isExplode: boolean = false;


    @property(cc.AudioClip)
    sfx_barrel: cc.AudioClip = null;

    onLoad () {
        this.anim = this.node.getComponent(cc.Animation);
    }

    start () {
        
    }
    
    update (dt) {
        
    }
    
    onBeginContact(contact, self, other){
        if(!this.isExplode){
            if(other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb" || other.node.name == "Die Boundary"){
                cc.audioEngine.playEffect(this.sfx_barrel, false);
                // this.node.y += 1;
                // this.node.y -= 6;
                this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
                this.node.group = "explosiveObj";
                this.anim.play("explosion2");
                this.scheduleOnce(()=>{
                    this.node.destroy()
                }, 0.7);
            }
            this.isExplode = true;
        }
    }
}
