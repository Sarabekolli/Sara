var input =document.getElementbyId("Input_id")
var button = document.getElementById("btn_id")
var text = document.getElementById("text_id")

var input =document.getElementbyId("Input_id")
var input2= document.getElementbyId("Input2_id")
var btn2 = document.getElementById("btn2_id")
var ans = document.getElementById("answer")

//var input1 = document.querzSelector ("#input_")

btn2.addEventListener("click", function(){
    ans.innerHTML = parsInt(input1.value) + parseInt( input2.value)
} )

button.onclick = function(){
    if(input.value > 10){
        text.innerHTML = " Input Value is greater than 10"
    }
    else if (input.value < 10){
        text.innerHTML = "Input value is less than 10"
    }
    else{
        text.innerHTML= " Input value is equal to 10"
    }
}