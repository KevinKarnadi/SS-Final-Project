const {ccclass, property} = cc._decorator;

@ccclass
export default class Map extends cc.Component {

    @property(cc.Prefab)
    private groundPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private groundUpperPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    private firePrefab: cc.Prefab = null;

    private groundPool = null;
    private groundPool1 = null;
    private firePool = null;

    onLoad () {
        if(!this.groundUpperPrefab){
            this.groundPool = new cc.NodePool('Ground');
            for(let i: number = 0; i < 1400; i++) {
                let ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                // y.max = -222.5
            }
        } else {
            this.groundPool = new cc.NodePool('Ground');
            for(let i: number = 0; i < (1400 - 200); i++) {
                let ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                
            }
            this.groundPool1 = new cc.NodePool('Ground1');
            for(let i: number = 0; i < 200; i++) {
                let ground = cc.instantiate(this.groundUpperPrefab);
                this.groundPool1.put(ground);
            }
        }
        this.firePool = new cc.NodePool('Fire');
        for(let i: number = 0; i < 210; i++) {
            let fire = cc.instantiate(this.firePrefab);
            this.firePool.put(fire);
            // y.max = -222.5
        }
    }
    
    start () {
        this.createGround();
        this.createFire();
    }
    
    createGround() {
        let ground = null;
        let i = 0;
        if(!this.groundUpperPrefab){
            while(this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
        } else{
            while(this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
            ground = null;
            i = 1400-200;
            while(this.groundPool1.size() > 0) {
                ground = this.groundPool1.get(this.groundPool1);
                ground.getComponent('Ground').init(this.node, i);
                i++; 
            }
        }
    }

    createFire(){
        let index = 0;
        let fires = null;
        while(this.firePool.size() > 0){
            fires = this.firePool.get(this.firePool);
            
            fires.parent = cc.find("Canvas/fire");
    
            fires.position = cc.v2(-598 + (16 * index), -320); 
            
            fires.position = fires.position.addSelf(this.node.position);
            fires.getComponent(cc.Animation).play("fire");
            // fires.node.zIndex = 100;
            // console.log(fires.position.x, "fire");
            index++;
        }
    }
}
