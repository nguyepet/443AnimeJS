anime({
    targets: 'div.ball',
    translateY: [
        { value: 180, duration: 550},
        { value: 0, duration: 550}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l){ return i * 1100},
    loop: true
});