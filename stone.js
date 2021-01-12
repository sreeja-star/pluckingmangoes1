class stone{
constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0,
        friction:1.2,
        density:1.2
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,radius,options);
    this.image=loadImage("images/stone.png");
    World.add(world,this.body);

}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
}


}