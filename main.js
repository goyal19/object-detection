img="";
status="";
objects=[]

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelloaded(){
    console.log("modelloaded")
    status=true;
    objectDetector.detect(img,gotresult)
}

function draw(){
    image(img,0,0,640,420);
   
    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status:objects detected";
            fill("#2007fa");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+ " "+percent+"%",objects[i].x+10,objects[i].y+20)
            noFill();
            stroke("#2007fa");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);       
        }
    }
    
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        objects=results;
    }
}
