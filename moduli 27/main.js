for(var i = 0; i<5; i++){
    console.log("Vlera e i-se eshte:"+ i);
}
console.log("--------------");

var personat = {emri: "Agon", mbiemri: "Ramadani", mosha: 18};

var text ="";

var z;

for(z in personat){
    text += personat[z];
}

console.log(text);

console.log("--------------");

var emrat = ["Altina", "Andi", "Anila"];

var y;

for(y of emrat){
    console.log(y);
}

console.log("--------------");
var f = 0;
do{
    f=f+1;
    console.log(f);
}while(f<5);


console.log("--------------");

var x= 0;
while(x<17){
    x=x+1;
    console.log(x);
}

console.log("--------------");

var l= 0;
var c= 0;
while(l<3){
    l++;
    c+=l;
    console.log(l);
    console.log(c);

    
    console.log(text);

    console.log("----------");

    var mbiemrat = ["Krasniqi", "Bekolli","Berisha"];

    var m;
     for(m of mbiemrat){
        console.log(m);
     }

}

var students = ["John", "Mark", "Ana"];

var names_input = document.getElementById("name_input");
var btnAdd = document.getElementById("btnAdd");
var btnShow = document.getElementById("btnShow");

btnAdd.onclick= function(){
    students.push(names_input.value);
}

bentShow.onclick= function(){
    for(i=0; i<stundemts.length; i++){
        document.write(students[i] + '<br>' );
    }
}