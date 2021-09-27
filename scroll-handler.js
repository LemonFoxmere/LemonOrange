// load trigger
const load_trigger = document.getElementById("load-trigger")

// timelines
let about_tl = anime.timeline({
    direction:'alternate',
    autoplay: false
}); about_tl.add({ // logo movement
    targets: "#main-logo",
    translateX: "-10vw",
    easing: "easeInOutSine",
    duration: 1000
}); about_tl.add({ // text appearance
    targets: "#about-text",
    translateY: ["60%", "55%"],
    opacity: 1,
    easing: "easeInSine",
    duration: 500,
    update: (anim) => { // enable the buttons
        if(anim.progress > 1){
            document.getElementById("about-text").classList.remove("disable")
        } else { // disable them when scrolling back
            document.getElementById("about-text").classList.add("disable")
        }
    },
},"-=400"); about_tl.add({ // about text slowly scroll upwards
    targets: "#about-text",
    translateY: "45%",
    opacity: 1,
    easing: "linear",
    duration: 1500,
    update: (anim) => { // enable the buttons
        if(anim.progress > 1){
            document.querySelectorAll(".connection-btn").forEach(e => {
                e.classList.remove("disable")
            });
        } else { // disable them when scrolling back
            document.querySelectorAll(".connection-btn").forEach(e => {
                e.classList.add("disable")
            });
        }
    },
})
// show the projects page
about_tl.add({ // hide about text first
    targets: "#about-text",
    translateY: "40%",
    opacity: 0,
    easing: "easeOutSine",
    duration: 500,
    update: (anim) => { // disable the buttons
        if(anim.progress > 99){
            document.getElementById("about-text").classList.add("disable")
        } else { // enable them when scrolling
            document.getElementById("about-text").classList.remove("disable")

        }
    },
})

about_tl.add({ // make logo become a watermark
    targets: "#main-logo",
    easing: "easeInOutSine",
    duration: 1000,
},"-=200")

// pages
let pages = {
    'about' : { // about page
        trigger : document.getElementById("about-trigger"),
        after : (reached,value)=>{
            about_tl.seek(value);
        },
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
        }
    });
})

// add navigation button events
document.getElementById("home").addEventListener("click", () => {
    smoothScroll({
        yPos:0,
        duration:1000,
        easing:smoothScroll.easing.easeOutQuart
    })
})

document.getElementById("about").addEventListener("click", () => {
    smoothScroll({
        yPos:2500,
        duration:1000,
        easing:smoothScroll.easing.easeOutQuart
    })
})

document.getElementById("projects").addEventListener("click", () => {
    smoothScroll({
        yPos:4000,
        duration:1000,
        easing:smoothScroll.easing.easeOutQuart
    })
})
