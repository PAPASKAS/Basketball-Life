//hamburger
let coordY = 0
function hamburger(){//Проверка на состояние гамбургера
    let hamb = document.querySelector('.hamburger_active').offsetWidth
    if(hamb === 0){ //Если width === 0 то он закрыт
        let idmove = setInterval(function(){
            coordY+=9
            document.querySelector('.hamburger_active').style.width = coordY + "px"
        },1)
        setTimeout(() => clearInterval(idmove),130)
        
    }else{
        let idmove = setInterval(function(){
            if(coordY > 0){
                coordY-=9
                document.querySelector('.hamburger_active').style.width = coordY + "px"
            }
        },1)
        setTimeout(() => clearInterval(idmove),140)
    }
}

//slider team
let current_slide = 0
let slide = document.querySelector(".move_slider")
slide.style.left = "0px"//фикс бага - первое перелистывание без анимации

function slider_next(){

    if(current_slide < 10){
        current_slide++
    }else{
        current_slide = 0
    }

    slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
}

function slider_prev(){

    if(current_slide === 0){
        current_slide = 10
    }else{
        current_slide--
    }

    slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
}

