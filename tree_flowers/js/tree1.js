function paint(img) {
    var canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 400, 400);
    document.body.appendChild(canvas);//画好的第一个canvas对象可以正常显示
    var newImg = new Image();
    newImg.src = canvas.toDataURL();
    newImg.onload = function() {
        var canvas2 = document.createElement('canvas')
        canvas2.width = 200;
        canvas2.height = 200;
        var ctx2 = canvas2.getContext('2d');
        ctx2.drawImage(newImg, 0, 0, Math.abs(posX), Math.abs(posY), 0, 0, 200, 200);//这里之所以把第一次的canvas作图加载成一张图片,是因为不知道canvas可不可以绘制canvas
        document.body.appendChild(newImg);//这张图片能正常显示
        document.body.appendChild(canvas2);//canvas元素加上了,但是绘图不成功
    }
}