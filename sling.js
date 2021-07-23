class SlingShot{
    constructor(a,b){
        var options ={
           bodyA:a,
           bodyB:b,
           stiffness:0.2,
           length:15
        }
   this.sling=Matter.Constraint.create(options)
   World.add(world,this.sling);
}

show(){
   var poi1 = this.sling.bodyA.position
   var poi2 = this.sling.bodyB.position
   line(poi1.x,poi1.y,poi2.x,poi2.y)
}






}