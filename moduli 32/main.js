function search(){
    var input , filter , ul ,li , a , i ,txtValue ;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
        ul.document.getElementById("myList");
        li = ul.getElementById("li");

        for(i=0; i<li.length; i++){
            a = li[i]
            txtValue = a.textContext
            if(txtValue.toUpperCase().indexof(filter) >-1){
                li[i].style.display = "block";
            }
            else{
                li[i].style.display = "none";
            }
        }
}