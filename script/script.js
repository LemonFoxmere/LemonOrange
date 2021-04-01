var animLogo1;

// logo stowing animation
logoStowed = false;

const textBoxWidth = document.querySelector('#studio-name-container').offsetWidth

var rellax = new Rellax('.rellax');

const animationDisplayTime = 5000

function initializeAnimation(){
    const timeline = anime.timeline({ //initialize animation 1 (lemon orange)
        ease: "easeInOutQuad",
        autoplay : false,
        duration:500,
        loop:1,
    });
    timeline.add({ //set a stagger of filling in stroke dash offset, giving an illusion of drawing logo
        targets: '.node-logo1',
        strokeDashoffset: ['100%', '0%'],
        easing: 'easeInOutQuad',
        duration:2000,
        delay: anime.stagger(300)
    }, '+=500')
    timeline.add({ //fillin logo
        targets:'#bottomL, #bottomS',
        fillOpacity : ['0%','100%'],
        easing:'easeOutQuart',
        fill : '#ff8700',
        duration:300,
        strokeOpacity : 0
    }, '-=00')
    timeline.add({ //fillin logo
        targets:'#topL, #topS',
        fill : '#ffc000',
        easing:'easeOutQuart',
        duration:300,
        strokeOpacity : 0
    }, '-=00')
    
    timeline.add({duration:animationDisplayTime}) //add wait time
    // logo 1 finalization
    animLogo1 = timeline
    //start playing animation 1 immediatly
    animLogo1.play()
}

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 1000){
        if(window.scrollY >= 200){
            if(!logoStowed){
                anime({
                    targets:'#studio-name-container',
                    translateX: '-35vw',
                    easing:'easeOutQuart',
                    backgroundColor: 'rgba(24,28,31,0)',
                    duration:500,
                })
            }
            logoStowed = true
        } if(window.scrollY <= 100){
            if(logoStowed){
                anime({
                    targets:'#studio-name-container',
                    translateX: '0vw',
                    easing:'easeOutQuart',
                    backgroundColor: 'rgba(0,0,0,0)',
                    duration:500,
                })
            }
            logoStowed = false
        }
    }
})

window.onload = () => {
    initializeAnimation()
}