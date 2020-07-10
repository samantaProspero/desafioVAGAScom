let counter = document.querySelector("#counter");
let minnus = document.querySelector("#minnus");
let plus = document.querySelector("#plus");
let button = document.querySelector("#button");
// let react = document.querySelector("#react");

// react.addEventListener('click', function(event){
//   if(!react.classList.('checked)'){
//   react.classList.add('checked')
// } else {react.classList.add('checked') }
// })

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



