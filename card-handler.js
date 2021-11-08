// add event lisetner for every panel's learn more btn
document.querySelectorAll(".show-more-btn").forEach((ele) => {
    ele.addEventListener("click", (evt) => { // flip the triggered attribute
        ele.style.setProperty("--triggered", getComputedStyle(ele).getPropertyValue("--triggered") == 0 ? 1 : 0)

        // show the learn more page when clicked
        container_id = ele.parentElement.id
        
        // do the action for that button and things
        process_show_anim(getComputedStyle(ele).getPropertyValue("--triggered"), container_id)
    })
    ele.ondragstart = function() { return false; };
})

function process_show_anim(state, cont_id){
    if(state == 1){
        anime({
            targets:`#${cont_id}-sm`,
            rotate:45,
            easing:"easeOutQuart",
            duration:600
        })
        anime({
            targets:`#${cont_id}-smd`,
            rotate:45,
            easing:"easeOutQuart",
            filter:"brightness(1)",
            duration:600
        })
    } else {
        anime({
            targets:`#${cont_id}-sm`,
            rotate:0,
            easing:"easeOutQuart",
            duration:600
        })
        anime({
            targets:`#${cont_id}-smd`,
            rotate:0,
            easing:"easeOutQuart",
            filter:"brightness(0)",
            duration:600
        })
    }

    // card cover animations
    anime({
        targets:`#${cont_id}-cover`,
        opacity: state == 1 ? 1 : 0,
        translateY: state == 1 ? [-25, 0] : [0,-25],
        duration: 800,
        easing: "easeOutQuart",
        update: () => {
            if(state==1) document.querySelector(`#${cont_id}-cover`).classList.remove("disable")
            else document.querySelector(`#${cont_id}-cover`).classList.add("disable")
        }
    })
    anime({
        targets:`#${cont_id}-tc, #${cont_id}-sc`,
        opacity: state == 1 ? "0" : "1",
        duration: 600,
        easing: state == 1 ? "easeOutQuart" : "easeInQuad",
    })
    anime({
        targets:`#${cont_id}-icon, #${cont_id}-tc, #${cont_id}-sc`,
        filter: state == 1 ? ["blur(0px) brightness(1)","blur(10px) brightness(0.8)"] : ["blur(10px) brightness(0.8)","blur(0px) brightness(1)"],
        duration: 600,
        easing: state == 1 ? "easeOutQuart" : "easeInQuad",
    })
    anime({
        targets:`#${cont_id}-darken`,
        opacity: state == 1 ? 0.6 : 0,
        duration: 600,
        easing: state == 1 ? "easeOutQuart" : "easeInQuad",
    })
}