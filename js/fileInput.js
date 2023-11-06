let input = document.getElementById('customFileInput');
let fileData = document.getElementById('fileData');
input.addEventListener('input',()=>{
  fileData.innerHTML = input.files[0].name;
})

