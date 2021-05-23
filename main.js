Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

    constarints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();}

    function draw(){
        image(video, 230, 150, 220, 200);
        fill(0,255,255);
        stroke(0,255,255);
        circle(65, 65, 80);

       
        fill(187, 255, 0);
        stroke(187, 255, 0);
        rect(80, 35, 480, 30);

        fill(255, 167, 0);
        stroke(255, 167, 0);
        triangle(80, 35, 480, 30, 80, 480);


        }