// add event lisetner for every panel's learn more btn
document.querySelectorAll(".show-more-btn").forEach((ele) => {
    ele.addEventListener("click", (evt) => { // flip the triggered attribute
        ele.style.setProperty("--triggered", getComputedStyle(ele).getPropertyValue("--triggered") == 0 ? 1 : 0)

        // show the learn more page when clicked
        container_id = ele.parentElement.id
        
        // do the action for that button and things
        process_show_anim(getComputedStyle(ele).getPropertyValue("--triggered"), container_id)
    })
})

function process_show_anim(state, cont_id){
    if(card_animations[cont_id] == null){
        // show error
        console.error(`animation for ${cont_id} does not exist!`)
        return -1;
    }

    // or else, show the card animation
    if(cont_id === "deepfusion"){
        if(state===1){
            anime({
                targets:"#deepfusion-sm",
                rotate:45
            })
        } else {
            anime({
                targets:"#deepfusion-sm",
                rotate:0
            })
        }
    }
}

card_animations = {
    deepfusion : anime({
        
    })
}