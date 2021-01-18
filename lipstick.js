lips_x = 0;
lips_y = 0;

function preload()
{
    lipstick_img = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialize");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Lips_X" + lips_x);
        console.log("Lips_Y" + lips_y);
        lips_x = results[0].pose.nose.x-20;
        lips_y = results[0].pose.nose.y+15;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300 );
    image(lipstick_img, lips_x, lips_y, 40, 30 );
}

function take_snapshot()
{
    save('myLipstickFilterImage.png');
}

function back()
{
    window.location = "index.html";
}