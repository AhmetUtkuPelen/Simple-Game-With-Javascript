const zorluk = document.getElementById('select')
const tahmin = document.getElementById('tahmin')
const btn = document.getElementById('btn')
const sonuc = document.getElementById('sonuc')
const badge = document.getElementById('hak')


btn.disabled = true
tahmin.disabled = true

let random 


zorluk.addEventListener('change',function zorlukSec(){

    random = Math.round(Math.random()*Number(zorluk.value))

    btn.disabled = false
    tahmin.disabled = false

})

let hak = 3
btn.addEventListener('click',isYapan)
tahmin.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        isYapan()
    }

})



function isYapan(){

    let kullaniciTahmin = Number(tahmin.value)
    if(isNaN(tahmin.value)){
        sonuc.classList.remove('text-primary')
        sonuc.classList.add('text-danger')
        sonuc.textContent = 'DO YOU KNOW THE DIFFERENCE BETWEEN WORDS AND NUMBERS?'
        btn.disabled = true
        btn.textContent = 'BRUH'

    }
    
    hak --
    badge.textContent = hak
    
    
    if(random == kullaniciTahmin){
    
    sonuc.textContent = 'U WON'
    sonuc.classList.remove('text-primary','text-danger')
    sonuc.classList.add('text-success')
    btn.textContent ='YOU WON'
    btn.disabled = true
    btn.classList.remove('btn-primary','btn-danger')
    btn.classList.add('btn-success')
    
    }else if(random > kullaniciTahmin){
        sonuc.textContent = 'Choose A Bigger Number Plz'
        sonuc.classList.remove('text-primary')
        sonuc.classList.add('text-danger')
    }else if(random < kullaniciTahmin){
        sonuc.textContent = 'Choose A Smaller Number Plz'
        sonuc.classList.remove('text-primary')
        sonuc.classList.add('text-danger')
    
    }
    
    if(hak == 0 && random != kullaniciTahmin){
        sonuc.textContent = 'YOU LOST'
    
        btn.disabled = true
        btn.textContent ='YOU LOST'
        btn.classList.remove('btn-primary')
        btn.classListadd('btn-danger')
    
    
    }
    
    }