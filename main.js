status = "";

function setup()
{
    canvas= createCanvas(480, 360);
    canvas.center();

    video = createCapture()
    video.size(800, 400);
    video.parent('game_console');

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 360);
}