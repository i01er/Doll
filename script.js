var width = window.innerWidth;
var height = window.innerHeight;
var totalclothes = 2;
var ObjList = [];

function drawImage(imageObj) {
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    var i;
    //var totalclothes = 2;
    //var ObjList = [];
    var ImgList = [];
    

    for(i = 0; i < totalclothes; i++)
    {
        var ImgObj = new image();
        var Location = './clothes/num/00' + i + '.png';

        ImgList[i] = ImgObj;
        ImgList[i].src = Location.ToString();
    }

    for(i = 0; i < totalclothes; i++)
    {
        var ObjTemp = new Konva.Image({
        image: ImgList[i],
        x: stage.getWidth() / 2 - 200 / 2,
        y: stage.getHeight() / 2 - 237 / 2,
        //width: 240,
        //height: 300,
        draggable: true
        });

        ObjList[i] = ObjTemp;
    }

    // var MyImg = new Konva.Image({
    //     image: imageObj,
    //     x: stage.getWidth() / 2 - 200 / 2,
    //     y: stage.getHeight() / 2 - 237 / 2,
    //     //width: 240,
    //     //height: 300,
    //     draggable: true
    // });

    // var MyImg2 = new Konva.Image({
    //     image: imageObj2,
    //     x: stage.getWidth() / 2 - 200 / 2,
    //     y: stage.getHeight() / 2 - 37 / 2,
    //     //width: 240,
    //     //height: 300,
    //     draggable: true
    // });

    // add cursor styling
    // MyImg.on('mouseover', function() {
    //     document.body.style.cursor = 'pointer';
    // });
    // MyImg.on('mouseout', function() {
    //     document.body.style.cursor = 'default';
    // });

    for(i=0;i<totalclothes;i++)
    {
        layer.add(ObjList[i]);
    }
    // layer.add(MyImg2);
    stage.add(layer);
}

// var imageObj = new Image();
// var imageObj2 = new Image();

for(i=0;i<totalclothes;i++)
{
    // var Obj = ObjList[i];

    window.onload = function()
    {
        drawImage(ObjList[i]);
    };
}

// imageObj2.onload = function() {
//     drawImage(this);
// };


// imageObj.src = './clothes/shirt_T_skirt_pyjamas/05_blue_button.png';
// imageObj2.src = './clothes/shirt_T_skirt_pyjamas/01_white_skirt_2 layers.png';