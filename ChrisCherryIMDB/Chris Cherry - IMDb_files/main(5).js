var _loadedImages = 0,
    _imageArray = new Array(
        'copy01.svg',
        'copy02.svg',
        'copy03.svg',
        'copy04.svg',
        'copy05.svg',
        'copy06.svg',
        'copy_cta.svg',
        'copy_eyebrow.svg',
        'copy_EF01.svg',
        'gold_car.svg',
        'gold_driver.svg',
        'gold_calendar.svg',
        'white_calendar.svg',
        'white_car.svg',
        'logo.svg'
        ),
    _tl;

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) loadCSS();
}

function loadCSS(){
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);
    css.addEventListener('load', loadGSPA, false);
}

function loadGSPA(){
    ipGSPA = document.createElement('script');
    ipGSPA.setAttribute('type', 'text/javascript');
    ipGSPA.setAttribute('src', 'https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.0.1_min.js');
    // ipGSPA.setAttribute('src', 'gsap_3.0.1_min.js'); /* For local use */
    document.getElementsByTagName('head')[0].appendChild(ipGSPA);

    ipGSPA.addEventListener('load', initAnimations, false);
}

function initAnimations(){
    console.time('animationTotalTime')
    _tl = gsap.timeline();

    _tl
    .set('.banner',{opacity:1})
    .to('.f01',{duration:.5,opacity:1,x:-200,ease:Power2.easeOut})
    .to('#gold_calendar',{duration:.3,scale:1,transformOrigin:'50% bottom',ease:Power2.easeOut},'-=.3')
    
    .to('#copy02',{duration:.2,opacity:0,ease:Power2.easeOut},'+=1.8')
    .to('#copy03',{duration:.5,opacity:1,x:-200,ease:Power2.easeOut},'-=.2')
    .to('#white_calendar',{duration:0,opacity:1},'-=.3')
    .to(['#gold_car1','#gold_car2'],{duration:.3,scale:1,transformOrigin:'50% bottom',ease:Power2.easeOut},'-=.25')
    
    .to('#copy03',{duration:.2,opacity:0,ease:Power2.easeOut},'+=1.8')
    .to('#copy04',{duration:.5,opacity:1,x:-200,ease:Power2.easeOut},'-=.2')
    .to(['#white_car1','#white_car2'],{duration:0,opacity:1},'-=.3')
    .to('#gold_driver',{duration:.3,scale:1,transformOrigin:'50% bottom',ease:Power2.easeOut},'-=.25')
    
    .to('.candyflip',{duration:.5,x:-500,ease:Power2.easeOut},'+=2.2')
    .to('.candyflip',{duration:.5,x:-800,ease:Power2.easeOut},'+=4.2')
    .to('#copy_eyebrow',{duration:.6,top:-20,ease:Power2.easeOut},'-=.5')
    .to('#yellowLine',{duration:.6,top:-20,ease:Power2.easeOut},'-=.4')
    .to('#logo02',{duration:.5, opacity:1,scale:1, transformOrigin:"center 20%", transformStyle:"preserve-3d", ease:Power1.easeOut},'-=.8')
    .to('.copyEF',{duration:.3,opacity:1,stagger:.2, onComplete:actionsButton, ease:Power1.easeIn},'-=.2')
    .to('#shimmer',{duration:.9, left:200, ease:Power2.easeOut})

    .call(function(){console.timeEnd('animationTotalTime')})
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ gsap.to('#cta',{duration:.5, backgroundColor:'#fff',ease:Power2.easeOut })});
    _btnExit.addEventListener('mouseout', function(){ gsap.to('#cta',{duration:.5, backgroundColor:'#fac705',ease:Power2.easeOut })});
}
