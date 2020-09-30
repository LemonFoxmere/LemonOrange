var animLogo1;
var animLogo2;

var switchToLogo1Text;
var switchToLogo2Text;

const textBoxWidth = document.querySelector('#studio-name-container').offsetWidth

var rellax = new Rellax('.rellax');

const animationDisplayTime = 5000
const animationDisplayDelay = '+=100'

function initializeAnimation(){
    const timeline = anime.timeline({ //initialize animation 1 (lemon orange)
        ease: "easeInOutQuad",
        autoplay : false,
        duration:500,
        direction:'alternate',
        loop:1,

        complete : ()=>{ //when this is finished play the second animation
            animLogo2.play()
            switchToLogo1Text.play()
        }
    });
    timeline.add({ //set a stagger of filling in stroke dash offset, giving an illusion of drawing logo
        targets: '.node-logo1',
        strokeDashoffset: ['100%', '0%'],
        easing: 'easeInOutQuad',
        duration:2000,
        delay: anime.stagger(300)
    }, animationDisplayDelay)
    timeline.add({ //fillin logo
        targets:'#bottomL, #bottomS',
        fillOpacity : ['0%','100%'],
        easing:'easeOutQuart',
        fill : '#ff8700',
        duration:500,
        strokeOpacity : 0
    })
    timeline.add({ //fillin logo
        targets:'#topL, #topS',
        fill : '#ffc000',
        easing:'easeOutQuart',
        duration:500,
        strokeOpacity : 0
    }, "-=500")
    timeline.add({duration:animationDisplayTime}) //add wait time
    // logo 1 finalization
    animLogo1 = timeline
    // logo 2 animation
    const timeline2 = anime.timeline({ //initialize animation 2
        ease: "easeInOutQuad",
        autoplay : false,
        duration:500,
        direction:'alternate',
        loop:1,
        complete : ()=>{
            animLogo1.play()
            switchToLogo2Text.play()
        }
    });
    timeline2.add({ //set dash offset to draw logo with a stagger
        targets: '.node-logo2',
        strokeDashoffset: ['100%', '0%'],
        easing: 'easeInOutQuad',
        duration:2000,
        delay: anime.stagger(300)
    }, animationDisplayDelay)
    timeline2.add({
        // pop away the text first
        targets: "#studio-name",
        easing: 'easeOutQuad',
        duration:700,
        translateY:0
        // fillOpacity:[100, 0]
    }, '-=2200')
    timeline2.add({ //fillin logo
        targets:'#head',
        fillOpacity : ['0%','100%'],
        fill : '#ff8109',
        easing:'easeOutQuart',
        duration:500,
        strokeOpacity : 0
    }, "-=500")
    timeline2.add({ //fillin logo
        targets:'#neck',
        fillOpacity : ['0%','100%'],
        fill : '#ff9c09',
        easing:'easeOutQuart',
        duration:500,
        strokeOpacity : 0
    }, "-=500")
    timeline2.add({ //fillin logo
        targets:'#hair',
        fillOpacity : ['0%','100%'],
        fill : '#ffcb09',
        easing:'easeOutQuart',
        duration:500,
        strokeOpacity : 0
    }, "-=500")
    timeline2.add({ //fillin logo
        targets:'#eye',
        fillOpacity : ['0%','100%'],
        fill : '#ff0909',
        duration:500,
        strokeOpacity : 0
    }, "-=500")
    // timeline 2 finalization
    timeline2.add({duration:animationDisplayTime}) //setting a timeout on animation
    //finalize animation 2
    animLogo2 = timeline2

    // start initializing
    const timeline3 = anime.timeline({ //initialize text switch
        autoplay:false,  
    })
    timeline3.add({
        targets:'#studio-name',
        easing: "easeOutQuart",
        duration:700,
        translateY:50,
        opacity:0,
    })
    timeline3.add({
        targets:'#studio-name',
        easing: "easeOutQuart",
        duration:1000,
        translateY:0,
        opacity:1,
        update: ()=>{
            document.querySelector('#studio-name').innerHTML='Orange Parrot'
        }
    },'+=200')
    timeline3.add({
        targets:'#greeting1',
        easing: "easeOutQuart",
        duration:1000,
        translateX: ['0px','calc(0.2 * calc(0.75em + 1vmin))']
    },'-=1000')
    timeline3.add({
        targets:'#greeting2',
        easing: "easeOutQuart",
        duration:1000,
        translateX: ['0px','calc(-0.2 * calc(0.75em + 1vmin))']
    },'-=1000')
    timeline3.set('#greeting1', {
        translateX: 'calc(0.2 * calc(0.75em + 1vmin))'
    })
    timeline3.set('#greeting2', {
        translateX: 'calc(-0.2 * calc(0.75em + 1vmin))'
    })

    // finalize text switch 1
    switchToLogo1Text = timeline3

    
    const timeline4 = anime.timeline({ //initialize text switch
        autoplay:false,  
    })
    timeline4.add({
        targets:'#studio-name',
        easing: "easeOutQuart",
        duration:700,
        translateY:50,
        opacity:0,
    })
    timeline4.add({
        targets:'#studio-name',
        easing: "easeOutQuart",
        duration:1000,
        translateY:0,
        opacity:1,
        update: ()=>{
            document.querySelector('#studio-name').innerHTML='Lemon Orange'
        }
    },'+=200')
    timeline4.add({
        targets:'#greeting1',
        easing: "easeOutQuart",
        duration:1000,
        translateX: ['calc(0.4 * calc(0.75em + 1vmin))',0]
    },'-=1000')
    timeline4.add({
        targets:'#greeting2',
        easing: "easeOutQuart",
        duration:1000,
        translateX: ['calc(-0.4 * calc(0.75em + 1vmin))',0]
    },'-=1000')

    // finalize text switch 2
    switchToLogo2Text = timeline4

    anime.set('#greeting1, #greeting2', {
        translateX: 0
    })
    anime.set('.header-title',{
        translateY:-200,
        opacity:0
    })
    anime({
        targets:'.header-title',
        translateY:0,
        opacity:1,
        easing:'easeOutQuart',
        duration:1000
    })

    //start playing animation 1 immediatly
    animLogo1.play()

    // fade in animations for every selected element
}

window.onload = () => {
    initializeAnimation()
}