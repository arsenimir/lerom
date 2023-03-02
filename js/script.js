let width;
let count = 0; 
let countTwo = 0;
let a = 0;
let b = 0;
let c;

function init(){
    console.log('resize');
    width = document.querySelector('.coreSlider').offsetWidth;
    console.log(width); 
}

window.addEventListener('resize', init);

init();

console.log(countTwo);

document.querySelector('#slider_botton_right').addEventListener('click', function (){
    a = a - 1;
    b = b - 1;
    
    if(a == -1){
        a = 5;
    }
    
    if(b == -5){
        b = 1
    }

    c = b + 3;

    if(a > c){
        sliderLineToo.style.zIndex = 10; 
    } else {
        sliderLineToo.style.zIndex = -10;
    }

    count = width * a;
    countTwo = width * b;

    sliderLine.style.left = count + 'px';
    sliderLineToo.style.left = countTwo + 'px';
});

document.querySelector('#slider_botton_left').addEventListener('click', function (){
    a = a + 1;
    b = b + 1;

    if(a == 6){
        a = 0;
    }

    if(b == 2){
       b = -4;
    } 

    if(b == 3){
        b = -3;
     }

    if(b > 0){
        sliderLineToo.style.zIndex = -10; 
    } 
    
    if(a == 3){
        sliderLineToo.style.zIndex = 10;
    }

    c = b + 3;

    count = width * a;
    countTwo = width * b;

    sliderLine.style.left = count + 'px';
    sliderLineToo.style.left = countTwo + 'px';
});
    
// console.log(count + 'count')
// console.log(countTwo + 'countTwo')
// console.log( a + 'a')
// console.log( c + 'c')
// console.log( b + 'b')

// console.log(count + 'count')
// console.log(countTwo + 'countTwo')
// console.log( a + 'a')
// console.log( c + 'c')
// console.log( b + 'b')



