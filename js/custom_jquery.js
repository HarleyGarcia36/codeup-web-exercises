//exercise 1(Intro to JQuery):
// $(alert('The DOM has finished loading'));


//exercise 2(JQuery selectors):
// var contents = $('#welcome-header').html();
// alert(contents);

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');

// $('h1').css('background', 'blue');
// $('p').css('background', 'blue');
// $('li').css('background', 'blue');

// var contents = $('h1').html();
// alert(contents);

// $('h1, p, li').css('background', '#007bfc');


//exercise 3(JQuery mouse events):
$('h1').click(function () {
    $(this).css('background-color','#00ff00')
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px')
});

$('li').hover(function() {
    $(this).css('color', 'red');
}, function() {
    $(this).css('color', 'black');
});



//practice:
// $('*').html('ok den');

// $('#welcome-header').css('color', '#00b400');

// $('li:nth-child(2)').css('color', '#007bfc');

// $('h1').css('color', '#ff0001');

// var enterColor = $(prompt('enter a color'));

// $('#the-rules').css('border', '5px solid gold');

// $('div').width(10);

// jQuery('#welcome-header').html('<h2>Huhhhh</h2>');

// jQuery('h2').css('color', '#00ff00');

// $('h3').click(function () {
//    $('h3').html('<h1>THIS IS NOT A DRILL</h1>')
// });

// $('h3').dblclick(function () {
//     $('h3').css('background-color', '#ffef6d')
// });