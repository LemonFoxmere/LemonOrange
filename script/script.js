var animLogo1;
var animIdentity;
// logo stowing animation
logoStowed = false;

const textBoxWidth = document.querySelector('#studio-name-container').offsetWidth
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
descriptionRoot = 'Hello, I am '
mobileDesk = 'Hello, I am a software developer'
description = ['a software developer', 'an AI researcher', 'a maker', 'a UI designer', 'a person']

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
    }, '-=200')
    
    timeline.add({duration:animationDisplayTime}) //add wait time
    // logo 1 finalization
    animLogo1 = timeline
    //start playing animation 1 immediatly
    if(!isMobile()){
        animLogo1.play()
    } else {
        animLogo1.seek(animLogo1.duration );
    }

    descriptionStartup()
}

async function descriptionStartup(){
    if(!isMobile()){
    for(let i = 0; i < descriptionRoot.length; i++){
        document.querySelector('#identity-thing').innerHTML = descriptionRoot.substring(0,i+1) + ''
        await sleep(100)
    }
    loopDesk()} else {
        document.querySelector('#identity-thing').innerHTML = mobileDesk
    }
}

async function loopDesk(){
    for(let k = 0; k < description.length; k++){
        for(let i = 0; i < description[k].length; i++){
            document.querySelector('#identity-thing').innerHTML = descriptionRoot + description[k].substring(0,i+1) + ''
            await sleep(100)
        }
        await sleep(5000)
        for(let i = description[k].length-1; i >= 0; i--){
            document.querySelector('#identity-thing').innerHTML = descriptionRoot + description[k].substring(0,i) + ''
            await sleep(100)
        }
    }
    loopDesk()
}

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 1000 || !isMobile()){
        if(window.scrollY >= 50){
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
        } if(window.scrollY < 50){
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
    } else {
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
})

function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

window.onload = () => {
    initializeAnimation()
}