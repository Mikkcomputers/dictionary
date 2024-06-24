var input = document.getElementById("in");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

btn.addEventListener("click", function(){
  const dict = {
    noun: " is a name of anything",
    verb: " is an action work",
    computer: " is an electronic machine"
  }
  let word = input.value;

  if(word == ""){
    result.innerHTML = "Please Enter a Serch Keyword";
  }
  else if(!dict[word]){
    result.innerHTML = "Soryy '"+word+"' Not Found";
  }
  else{
    result.innerHTML = word+":"+dict[word]
  }
})