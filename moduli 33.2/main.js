$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('Testing text');
    $('#h1').append('Extra text');
});

    $('#btn2').on('click' , function(){
        console.log('clicked');
});


$('.hidden').show();
$('.hiddem').show(300);
$('.hiddem').show('slow');

$('#square').animate({
    'width' : '200px',
    'height' : '200px'
});

$('.testing').click(function(){ 
$('.testing').animate({
    'left' : '+= 50px',
    'opacity' : 0.25,
    'fontSize' : '12px'
},
    300,
    function(){
        console.log("Animation is complete");
    }
);
})