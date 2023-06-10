function pic() {
    var bgm = ['/img/leaf1.jpg','/img/leaf2.jpg', '/img/leaf3.jpg'];

    $('body').css({
        'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ')',
    });
}
pic();