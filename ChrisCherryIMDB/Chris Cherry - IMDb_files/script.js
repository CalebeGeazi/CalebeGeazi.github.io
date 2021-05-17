
function startAd() {
   var BeyondFastTurnOnOFF = document.getElementById('BeyondFastTurnOnOFF');
    var BeyondFastTurnOnOFFVisible = true;
    
    if(BeyondFastTurnOnOFF.innerHTML == '' || null){
      BeyondFastTurnOnOFFVisible = false;    
    }; 
    
    
    var offerCents = document.getElementById('offerCents');
    var offerTerms= document.getElementById('offerTerms');
    
    if(offerCents.innerHTML == '' || null){
        
          gsap.set(offerTerms,{y:"-=12"});
    };
    
        
// Variables
    var tlMain = gsap.timeline();

// Set starting positions
	(function init() {
        
        gsap.set([F3BoltOnHolder, logoBeyondFast],{autoAlpha:0});
        
        gsap.set(EFHeadlineHolder,{x:"+=300px", autoAlpha:0});
        gsap.set([F1HeadlineHolder, F2HeadlineHolder, F3HeadlineHolder],{autoAlpha:0});
        gsap.set([line1, line2],{width:0, transformOrigin: "center center"})

        
        gsap.set([F4HeadlineHolder,F4SubHeadlineHolder],{ autoAlpha:0})

        gsap.set([endOffer, EFCardContainer],{autoAlpha:0})
         gsap.set([ Restrictions],{autoAlpha:0})
//        gsap.set([just, dollar, offerPrice, offerCents, offerTerms], {textShadow: "-6px 6px 4px grey"});
        
        // If filling with "Phone Number" on Phone Above, you can adjust the layout
           
        animation();
        
	})();


// Animation    
	function frame1() {
    		
        var tl = gsap.timeline();

        tl
        .set(F1HeadlineHolder,{autoAlpha:0})
        
        .to(F1HeadlineHolder, { duration: .5, autoAlpha:1,ease: "sine.out"})
        
        return tl;
	};

	function frame2(){

        var tl = gsap.timeline();
        
        tl
        .set(F2HeadlineHolder,{autoAlpha:0})
        
        .to(F1HeadlineHolder, { duration: .3, autoAlpha:0,ease: "expo.out"})
        .to(F2HeadlineHolder, { duration: .5, autoAlpha:1,ease: "sine.out"},"-=0")
        
        
        return tl;		
	};
    
    function frame3(){
        
        
         var tl = gsap.timeline();
        
        tl
        .set(F3HeadlineHolder,{autoAlpha:0})
        
        .to(F2HeadlineHolder, { duration: .3, autoAlpha:0,ease: "expo.out"})
        .to(F3HeadlineHolder, { duration: .5, autoAlpha:1,ease: "sine.out"},"-=0")
        
     
        return tl;	
        
    };
    
    
        function frame4(){
        
        
         var tl = gsap.timeline();
        
        tl
        //.set(F4HeadlineHolder,{autoAlpha:1})
        
        .to(F3HeadlineHolder, { duration: .2, autoAlpha:0,ease: "expo.out"})
        .to([F4HeadlineHolder,endOffer,F3BoltOnHolder], { duration: .5, autoAlpha:1,ease: "sine.out"},"+=0")
        .to(F4SubHeadlineHolder, { duration: .5, autoAlpha:1,ease:Sine.easeOut},"+=.2")
        .to([line1, line2],{duration: .5, width:242, left:0, ease: "sine.out"}, '-=.1')

        
       
        
          //.to(ctaBg, { duration: .5, backgroundPosition: '126px 0'})
        
        .add(function(){BeyondFastAni()})
            
        return tl;	
        
    };
    

    
/* ---------------------------------- Primary Animations ---------------------------------- */

	function animation(){
		        
 
       
            tlMain
        
           .set(container, {visibility: 'visible'})
            .add(frame1(), '+=.2')
            .add(frame2(), '+=3')
            .add(frame3(), '+=3')
           .add(frame4(), '+=3')


//            .add(endFrame(), '+=2')
            
           
      

          
            
            console.log(tlMain.duration());
	};

/* ---------------------------------- Secondary Animations ---------------------------------- */

    function BeyondFastAni(){
    if (BeyondFastTurnOnOFFVisible){
		    
        tlMain
        .to(logoComcastBusiness, { duration: .5, autoAlpha:0, ease:Power4.easeOut},"+=1.2")
        .to(logoBeyondFast, { duration: .5, autoAlpha:1, ease:Power4.easeOut}, "-=.3")
        
        .to(logoBeyondFast, { duration: .5, autoAlpha:0, ease:Power4.easeOut}, "+=2")
        .to(logoComcastBusiness, { duration: .5, autoAlpha:1, ease:Power4.easeOut}, "-=.3")
        
        console.log('BeyondFast');
            
        }else {
		   
        tlMain
        .set([F1HeadlineHolder,F2HeadlineHolder],{autoAlpha:0})    
        console.log('BeyondFastOff');
            
        } 

}

/* ---------------------------------- Helper Methods ---------------------------------- */

    function addClass(id, addClass) {
        id.classList.add(addClass);
    };    
};


