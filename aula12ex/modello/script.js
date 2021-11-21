function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 2
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'img01.jpg'
        document.body.style.background
    } else if (hora >= 12 && hora <18) {
        img.crc = 'img02.jpg'
        document.body.style.color = ''
    }else {
        img.crc = 'img03.jpg'
    }
}