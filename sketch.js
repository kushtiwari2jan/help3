const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1
function preload() {


}
function setup(){
    var canvas= createCanvas(1200,400);
    engine=Engine.create();
     world=engine.world;

    box1=new Box(700,320);


}
function draw(){
box1.display()


}