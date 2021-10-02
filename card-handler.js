document.querySelectorAll(".card-info-btn").forEach((e) => {
    e.addEventListener("click", (evt) => {
        let current_value = getComputedStyle(e).getPropertyValue("--pressed")
        e.style.setProperty('--pressed', current_value == 0 ? 1 : 0);
        current_value = getComputedStyle(e).getPropertyValue("--pressed")
        // if it is not pressed, it will be, so set it to rotates. Vice versa
        e.style.transform = `rotate(${current_value == 1 ? 45 : 0}deg)` 
        
        // customization of colors for each card
        let grid_id = e.id
        update_btn_color(grid_id, e, current_value)
    })
})

function update_btn_color(id, ele, value){
    let grid_id = id.substring(0,id.length-4)
    if(grid_id === "m2m"){ // music to midi
        ele.style.filter = `brightness(${value == 1 ? 1 : 1})` 
    } else if(grid_id === "deepfusion"){ // deepfusion
        ele.style.filter = `brightness(${value == 1 ? 1 : 0.1})` 
    }

    update_grid_cover(grid_id, value)
}

function update_grid_cover(id, value){
    let cover = document.getElementById(`${id}-cover`)
    
    if(cover === null) return // make sure it exists

    if(value == 0){
        // then hide it
        cover.style.opacity = 0
        cover.classList.add("disable")
    } else {
        // then show it
        cover.style.opacity = 1
        cover.classList.remove("disable")
    }
}