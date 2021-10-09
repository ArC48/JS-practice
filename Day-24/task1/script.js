const textBox = document.getElementById('textBox')

textBox.addEventListener('mouseenter', function(event){
    const strong = document.querySelectorAll('strong')
    for(var i =0; i < strong.length; i++){
    strong[i].style.color = '#48ff00b0'
    strong[i].style.fontSize = '2.3rem' 
    this.style.cursor = "pointer"
    }
})

textBox.addEventListener('mouseleave', function(event){
    const strong = document.querySelectorAll('strong')
    for(var i =0; i < strong.length; i++){
    strong[i].style.color = ''
    strong[i].style.fontSize = ''
    this.style.cursor = "pointer"
    }
})
