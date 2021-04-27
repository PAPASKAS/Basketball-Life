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
    let width_slider = document.querySelector(".slider").offsetWidth
    
    if(width_slider === 634){
        if(current_slide < 10){
            current_slide++
        }else{
            current_slide = 0
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
    if(width_slider === 520){
        if(current_slide < 12){
            current_slide++
        }else{
            current_slide = 0
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
    if(width_slider === 288){
        if(current_slide < 16){
            current_slide++
        }else{
            current_slide = 0
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
}

function slider_prev(){
    let width_slider = document.querySelector(".slider").offsetWidth

    if(width_slider === 634){
        if(current_slide === 0){
            current_slide = 10
        }else{
            current_slide--
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
    if(width_slider === 520){
        if(current_slide === 0){
            current_slide = 12
        }else{
            current_slide--
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
    if(width_slider === 288){
        if(current_slide === 0){
            current_slide = 16
        }else{
            current_slide--
        }
        slide.style.left = (-current_slide) * 52 - 6 * current_slide + "px"
    }
}


function news_link(){//Ссылки новостей
    window.location = 'index.html';
}


document.querySelector(".rates").style.height = "1288px"

function additional_rates(){
    let rates = document.querySelector(".rates").offsetHeight
    if (rates === 1288){
        let coord_rates_open = 0
        let open_rates = setInterval(function(){
            if(coord_rates_open <= 1288){
                coord_rates_open+=10
                document.querySelector(".rates").style.height = 1288 + coord_rates_open + "px"
            }
        },5)
        setTimeout(() => clearInterval(open_rates),10000)
    }else{
        let coord_rates_closed = 1290
        let closed_rates = setInterval(function(){
            if(coord_rates_closed > 0){
                coord_rates_closed-=10
                document.querySelector(".rates").style.height = 1288 + coord_rates_closed + "px"
            }
        },5)
        setTimeout(() => clearInterval(closed_rates),10000)
    }
}

function rates_mob(){
    let rates_width = document.querySelector(".rates").offsetWidth

    if(rates_width < 547){
        window.location = 'index.html';
    }
}