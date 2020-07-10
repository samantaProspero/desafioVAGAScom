let counter = document.querySelector("#counter");
let minnus = document.querySelector("#minnus");
let plus = document.querySelector("#plus");
let button = document.querySelector("#button");


plus.addEventListener('click', function(event){
  minnus.classList.remove('disabled');
  counter.value.innerHTML = counter.value++;
})
minnus.addEventListener('click', function(event){
  if (counter.value !== '0'){
    counter.value.innerHTML = counter.value--
  };
  if (counter.value === '0') {
    minnus.classList.add('disabled');
  }
})



