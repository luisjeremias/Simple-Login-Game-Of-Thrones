let session = localStorage.getItem('@name')
if(!session){
window.location.href = '../index.html'
}else{
  document.addEventListener("DOMContentLoaded",()=>{
    const name = document.querySelector('#name');
    const logout = document.querySelector('#logout')
    name.innerText =session
    logout.addEventListener('click',()=>{
      localStorage.clear()
      window.location.href = '../index.html';
    })
  })
}