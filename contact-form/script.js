const form = document.querySelector("form")
const fieleds = form.querySelectorAll("input:not([type='password']),textarea");
fieleds.forEach(function(field){
    const saved = localStorage.getItem(field.name)
    if(saved!==null){
        field.value = saved
    }
})

fieleds.forEach(function(field){
   field.addEventListener("input",function(){
    localStorage.setItem(field.name,field.value)
   })
})
form.addEventListener("submit",function(){
    fieleds.forEach(function(field){
        localStorage.removeItem(field.name)
    })
})