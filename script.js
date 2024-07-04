// input Minuto


    let min = document.getElementById("minutos")
    let sec = document.getElementById("segundos")
    let zeta;
    let input = document.getElementById("input")
    let audio = new Audio("./edgar_domingos_adoco_video_oficial_mp3_31265.mp3")
    let modal = document.querySelector("aside")
    let bar = document.querySelector(".roda")
    const closeModal = document.getElementById("closeModal").addEventListener("click",()=>{
        setTimeout(()=>{
            location.reload()
        },500)
    })

    const startBTn = document.getElementById("start")
    const RestartBtn = document.getElementById("restart").addEventListener("click",()=>{
        location.reload()
    })

    function start() {
        if(min.textContent == 0){
            min.textContent = "00"
            sec.textContent = "00"
            modal.style.visibility = "visible"
            audio.play()
            audio.loop()
            

        }
        let strM = String(input.value).padStart(2,"0")
        min.textContent = strM
        let secungosInt = Number(sec.textContent)
        let strS = String(sec.textContent = secungosInt + 1).padStart(2,"0")
       
        sec.textContent = strS
        if( sec.textContent == 59){
                input.value -= 1
                sec.textContent = "00"
        }
        
    }

    startBTn.addEventListener("click",()=>{  
        document.getElementById("Pausar").textContent = "Pausar"
        if(!input.value){
            input.value = 30
        }
        zeta = setInterval(start,1000)
        document.getElementById("input").style.visibility ="hidden"
        
    })
    const btnPause = document.getElementById("Pausar").addEventListener("click",()=>{
        if(sec.textContent == "00"){
            return
        }
        document.getElementById("Pausar").textContent = "Pausado"
        clearInterval(zeta,1000)
    })
    
    



