const {ccclass, property} = cc._decorator;

@ccclass
export default class Map extends cc.Component {

    @property(cc.Prefab)
    private groundPrefab: cc.Prefab = null;

    private groundPool = null;
    private groundPool1 = null;

    onLoad () {
        this.groundPool = new cc.NodePool('Ground');
        for(let i: number = 0; i < 1120; i++) {
            let ground = cc.instantiate(this.groundPrefab);
            this.groundPool.put(ground);
            // y.max = -215
        }
        // this.groundPool1 = new cc.NodePool('Ground1');
        // for(let i: number = 0; i < 200; i++) {
        //     let ground = cc.instantiate(this.groundPrefab);
        //     this.groundPool1.put(ground);
        //     // y.max = -215
        // }
    }
    
    start () {
        this.createGround();
    }

    createGround() {
        let ground = null;
        let i = 0;
        while(this.groundPool.size() > 0) {
            ground = this.groundPool.get(this.groundPool);
            ground.getComponent('Ground').init(this.node, i);
            i++; 
        }
        // ground = null;
        // i = 0;
        // while(this.groundPool1.size() > 0) {
        //     ground = this.groundPool1.get(this.groundPool1);
        //     ground.getComponent('Ground').init(this.node, i);
        //     i++; 
        // }
    }
}
