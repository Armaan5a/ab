class SlingShot{
   constructor(bodyA, pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 0.1,
           length: 10
       }
       this.sling1 = loadImage('sprites/sling1.png');
       this.sling2 = loadImage('sprites/sling2.png');
       this.sling3 = loadImage('sprites/sling3.png');
       this.pointB = pointB
       this.Slingshot = Constraint.create(options);
       World.add(world, this.Slingshot);
   }

   fly(){
       this.Slingshot.bodyA = null;
   }

   attach(body){
    this.Slingshot.bodyA = body
   }
   
   display(){ 
      image(this.sling1,200,80);
      image(this.sling2,170,80);

       if(this.Slingshot.bodyA){
           
           var pointA = this.Slingshot.bodyA.position;
           var pointB = this.pointB;
           strokeWeight(4);
          
          if(pointA.x<235){
          line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+20);
          line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+20);
          image(this.sling3,pointA.x-25, pointA.y-10,15,30)
}     
else{
   line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+20);
   line(pointA.x+20, pointA.y, pointB.x+25, pointB.y+20)
   image(this.sling3,pointA.x+25, pointA.y-10,15,30)
}
}}}
