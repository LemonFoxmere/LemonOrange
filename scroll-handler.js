// load trigger
const load_trigger = document.getElementById("load-trigger")
let on_mobile = () => {return window.innerWidth < 600}

// pages
let pages = {
    'about' : { // about page
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
}

// check triggers on scroll
setInterval((e) => {
    // go through pages
    Object.keys(pages).forEach(key => {
        let page = pages[key]

        // get the page's bounding rect
        let page_rect = page.trigger.getBoundingClientRect()
        if(page_rect.y < load_trigger.getBoundingClientRect().y){
            page.after(page.reached, Math.abs(page_rect.y - load_trigger.getBoundingClientRect().y))
        } else {
            page.before()
        }
    });
})

// add navigation button events
document.getElementById("home").addEventListener("click", () => {
    new SmoothScroll().animateScroll(0)
})

document.getElementById("about").addEventListener("click", () => {
    new SmoothScroll().animateScroll(1500)
})

document.getElementById("projects").addEventListener("click", () => {
    new SmoothScroll().animateScroll(3750)
})