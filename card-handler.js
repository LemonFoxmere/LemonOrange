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
            duration:300
        })
    } else {
        anime({
            targets:`#${cont_id}-sm`,
            rotate:0,
            easing:"easeOutQuart",
            duration:300
        })
    }

    if(cont_id === "deepfusion"){
        anime({
            targets:`#deepfusion-sm`,
            filter: state == 1 ? ["brightness(0.1)", "brightness(0.6)"] : ["brightness(0.6)", "brightness(0.1)"],
            duration:300,
            easing:"easeOutQuart",
        })
    }
}