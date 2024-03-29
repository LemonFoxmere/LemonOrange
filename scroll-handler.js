// load trigger
const load_trigger = document.getElementById("load-trigger")
let on_mobile = () => {return window.innerWidth < 700}

// pages
let pages = {
    'about' : { // about page
        reached : false,
        trigger : document.getElementById("about-trigger"),
        after : (reached,value)=>{
            if(!on_mobile()){
                about_tl.seek(value);
            } else {
                about_tl_mobile.seek(value);
            }
        },
        before: () => { // pretty much reset the logo
            anime({ // logo movement
                targets: "#main-logo",
                translateX: "0",
                easing: "easeInOutSine",
                duration: 10
            })
        }
    },
    'project' : { // project page
        reached : false,
        trigger : document.getElementById("project-trigger"),
        after : (reached,value)=>{
            let offset = document.getElementById("project-trigger").getBoundingClientRect().y - load_trigger.getBoundingClientRect().y
            if(!on_mobile()){
                document.getElementById("main-logo").style.top = `${offset}px`
            } else {
                document.getElementById("main-logo").style.top = `${offset}px`
            }
        },
        before: () => { // pretty much reset the logo
            document.getElementById("main-logo").style.top = `0px`
        }
    },
}

// check triggers on scroll
setInterval((e) => {
    // go through pages
    let page_keys = Object.keys(pages).slice().reverse()
    for(let i = 0; i < page_keys.length; i++){
        key = page_keys[i]
        let page = pages[key]

        // get the page's bounding rect
        let page_rect = page.trigger.getBoundingClientRect()
        if(page_rect.y <= load_trigger.getBoundingClientRect().y){
            page.after(page.reached, Math.abs(page_rect.y - load_trigger.getBoundingClientRect().y))
        } else {
            page.before()
        }
    }
})

function returntop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// add navigation button events
document.getElementById("home").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

document.getElementById("about").addEventListener("click", () => {
    window.scrollTo({
        top: 2000,
        behavior: "smooth"
    });
})

document.getElementById("projects").addEventListener("click", () => {
    let el = document.querySelector("#project");
    window.scrollTo({top: el.offsetTop+window.innerHeight/2, behavior: 'smooth'});
})