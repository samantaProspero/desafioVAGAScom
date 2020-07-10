let counter = document.querySelector("#counter");
let minnus = document.querySelector("#minnus");
let plus = document.querySelector("#plus");


plus.addEventListener('click', function(event){
  counter.value.innerHTML = counter.value++;
})
minnus.addEventListener('click', function(event){
  counter.value.innerHTML = counter.value--;
})
