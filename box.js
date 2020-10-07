class Box{
constructor(x,y,thickness){

   var options = {

        isStatic: true


    }

this.bottomRect=Bodies.rectangle(x,y,200,thickness,options);
World.add(world,this.bottomRect);

this.leftRect=Bodies.rectangle(x-100,y-50,thickness,100,options);
World.add(world,this.leftRect);

this.rightRect=Bodies.rectangle(x+100,y-50,thickness,100,options);
World.add(world,this.rightRect);

this.bottomRect.height = thickness
this.leftRect.width = thickness
this.rightRect.width = thickness


this.bottomRect.width = 200
this.leftRect.height = 100
this.rightRect.height = 100



}
display(){

var bp = this.bottomRect
var lp = this.leftRect
var rp = this.rightRect

var pos1 = bp.position
var pos2 = lp.position
var pos3 = rp.position

push()
translate(pos1.x , pos1.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,bp.width,bp.height);

pop()

push()
translate(pos2.x , pos2.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,lp.width,lp.height);

pop()

push()
translate(pos3.x , pos3.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,rp.width,rp.height);

pop()

}





}