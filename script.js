// input Minuto


    let min = document.getElementById("minutos")
    let sec = document.getElementById("segundos")
    let zeta;
    let input = document.getElementById("input")
    let audio = new Audio("./edgar_domingos_adoco_video_oficial_mp3_31265.mp3")
    let modal = document.querySelector("aside")
    let bar = document.querySelector(".roda")
    let clidado = ""
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
        let i = 1
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
        let x = secungosInt * 360 / 60
        bar.style.background =`conic-gradient(rgb(0, 106, 255) ${x}deg,rgb(0, 200, 255) 0deg)`
        sec.textContent = strS
        if( sec.textContent == 59){
                input.value -= 1
                sec.textContent = "00"
        }
        
    }

    startBTn.addEventListener("click",()=>{  
        if(!clidado){
            document.getElementById("Pausar").textContent = "Pausar"
            if(!input.value){
                input.value = 30
            }
            
            zeta = setInterval(start,1000)
            document.getElementById("input").style.visibility ="hidden"  
            clidado = "click"
        }
        
        return
        
    })
    const btnPause = document.getElementById("Pausar").addEventListener("click",()=>{
        if(sec.textContent == "00"){
            return
        }
        document.getElementById("Pausar").textContent = "Pausado"
        clearInterval(zeta,1000)
    })
    
    



