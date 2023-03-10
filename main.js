noseX = "";
noseY = "";

function preload() {
    goggles = loadImage('https://i.postimg.cc/j5mHY4Mp/goggles.png');
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 250;
        noseY = results[0].pose.nose.y - 100;
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(goggles, noseX, noseY, 240, 240);
}

function takeSnapshot() {
    save('thug-life.webp');
}