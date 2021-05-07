class louncher{
    constructor(body,anchor) {
    var options={
        bodyA:body,
        pointB:anchor,
        stifffness:0.004,
        length:1
    }
    this.bodyA=body
    this.pointB=anchor
    this.louncher=Constraint.create(options)
    World.add(world,this.louncher)
    }
    attach(body){
        this.louncher.bodyA=body
    }
    fly(body){
        this.louncher.bodyA=null
    }
    display(){
        if(this.louncher.bodyA){
            strokeWeight(2)
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
        }

    }
}