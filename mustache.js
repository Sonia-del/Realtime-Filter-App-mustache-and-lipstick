mustache_x = 0;
mustache_y = 0;

function preload()
{
    mustache_img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

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
        console.log("Mustache_X" + mustache_x);
        console.log("Mustache_Y" + mustache_y);
        mustache_x = results[0].pose.nose.x-40;
        mustache_y = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300 );
    image(mustache_img, mustache_x, mustache_y, 80, 35 );
}

function take_snapshot()
{
    save('myMustacheFilterImage.png');
}

function back()
{
    window.location = "index.html";
}