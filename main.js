noseX = 0;
noseY = 0;
leftWristx = 0;
rightWristx = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 550);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function gotPoses(results){
    if(results){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX + "noseY" + noseY);

        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = leftWristx - rightWristx;
    }
}

function draw(){
    background('#000000');
    fill('#FFFFFF');
    stroke('#FF0000')
    square(noseX, noseY, difference)
}