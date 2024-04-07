//https://www.youtube.com/watch?v=O269ctk5b5k&ab_channel=NsquaredCoding
//fix me
// copyText.querySelector("button").addEventListener("click",function(){
//   let input = "michaelfrancis@uga.edu"
//   input.select();
//   document.execCommand("copy");
//   contactInfo.classList.add("active");
// });

const myInp = "michaelfrancis@uga.edu";
const btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function(){
  myInp.select();
  document.execCommand("copy");
}