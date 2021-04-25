let coordY = 0
function hamburger(){//Проверка на состояние гамбургера
    let hamb = document.querySelector('.hamburger_active').offsetWidth
    if(hamb === 0){ //Если width === 0 то он закрыт
        let idmove = setInterval(function(){
            coordY+=1
            document.querySelector('.hamburger_active').style.width = coordY + "%"
        },1)
        setTimeout(() => clearInterval(idmove),130)
        
    }else{
        let idmove = setInterval(function(){
            if(coordY > 0){
                coordY-=1
                document.querySelector('.hamburger_active').style.width = coordY + "%"
            }
        },1)
        setTimeout(() => clearInterval(idmove),140)
    }
}

