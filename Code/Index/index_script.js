//hamburger
let coord_hamb = 0
let coord_closed_hamb = 425
function hamburger(){//Проверка на состояние гамбургера
    let hamb = document.querySelector('.hamburger_active').offsetHeight
    let coord_hamb = 0
    let coord_closed_hamb = 425
    if(hamb === 0){
        document.querySelector('.hamburger_active').style.height = "0px"
        let open_hamb = setInterval(function(){
            if(coord_hamb < 425){
                coord_hamb+=25
                document.querySelector('.hamburger_active').style.height = coord_hamb + "px"   
            }   
        },10)
        setTimeout(() => clearInterval(open_hamb),10000)
        let sticks_hamb = document.querySelectorAll(".sticks_hamb")//Закрашиваю палки
        sticks_hamb[0].style.borderColor = "#db3259"
        sticks_hamb[1].style.borderColor = "#db3259"
        sticks_hamb[2].style.borderColor = "#db3259"
        document.querySelector(".hamburger a").style.color = "#db3259"//Закрашиваю "ЕЩЕ"
        document.querySelector(".dimming_unit").style.display = "flex"//Затемненый фон
        let scrollHeight = Math.max(//Высота затемнения
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
        document.querySelector(".dimming_unit").style.height = scrollHeight - 137 + "px"//Затемнение
    }
    else{
        let closed_hamb = setInterval(function(){
            if(coord_closed_hamb > 0){
                coord_closed_hamb-=25
                document.querySelector('.hamburger_active').style.height = coord_closed_hamb + "px"
            }   
        },5)
        setTimeout(() => clearInterval(closed_hamb),10000)
        let sticks_hamb = document.querySelectorAll(".sticks_hamb")//Закрашиваю палки
        sticks_hamb[0].style.borderColor = "white"
        sticks_hamb[1].style.borderColor = "white"
        sticks_hamb[2].style.borderColor = "white"
        document.querySelector(".hamburger a").style.color = "white"//Закрашиваю "ЕЩЕ"
        document.querySelector(".dimming_unit").style.display = "none"//Затемненый фон
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
        document.querySelector(".text_additional_rates").innerHTML = "Скрыть дополнительные ставки"
    }else{
        let coord_rates_closed = 1290
        let closed_rates = setInterval(function(){
            if(coord_rates_closed > 0){
                coord_rates_closed-=10
                document.querySelector(".rates").style.height = 1288 + coord_rates_closed + "px"
            }
        },5)
        setTimeout(() => clearInterval(closed_rates),10000)
        document.querySelector(".text_additional_rates").innerHTML = "Показать еще ставки..."
    }
}

function rates_mob(){
    let rates_width = document.querySelector(".rates").offsetWidth

    if(rates_width < 547){
        window.location = 'index.html';
    }
}