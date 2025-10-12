//олученеи свойства
$('a').each(function(index,elem){
    console.log($(elem).prop('href'));
});

//изменение свойств	
$('a').first().prop('href','https://www.google.com');

//удаление свойства
$('a').first().removeProp('href');

//работа сос войствами
$('a').each(function(index,elem){
    console.log($(elem).attr('href'));
});

//изменение атрибута
$('a').first().attr('href','33.html');

//удаление атрибута
$('a').first().removeAttr('href');

//получение значения пользовательского атрибутта
console.log($('ul').data('year'));

//
console.log($('ul').data().year);

//изменение пользовательского атрибута
$('ul').first().data('year', '2012');

$('ul').first().data('lang', { rate: "tiobe", year: 2012 });

$('ul').removeData('year');

	
console.log($('body').css('font-size'));
	
$('a').css('font-weight', 'bold');

$('a').css('color', function(index, oldValue){
    if(oldValue=='rgb(0, 0, 238)')
    {return 'red';}
    else
    {return 'green';}
});

	
$('a').css({'color':'red', 'cursor':'pointer', 'font-size': '14px'});

$('a').css({'font-size': '-=1', 'margin-left': '+=10'});

var div = $('div').first();
var newWidth=div.width()+150;
div.width(newWidth);
var newHeight = div.height()+50;
div.height(newHeight);

$('ul').first().addClass("redStyle");
// добавление двух классов
$('div').first().addClass("black visible");

$('div').first().removeClass("black visible");

// получение разметки для элемента списка и вывод ее в консоль
var html = $('li.punkt2').html();
console.log(html);
     
// установка новой разметки элемента списка
$('li.punkt1').html("Пункт 1 <ul class='submenu'><li>Подпункт 1.1</li></ul>")

// получение разметки для элемента списка и вывод ее в консоль
var html = $('li.punkt2').html();
console.log(html);
     
// установка новой разметки элемента списка
$('li.punkt1').html("Пункт 1 <ul class='submenu'><li>Подпункт 1.1</li></ul>")

var oldHtml = $('div.header').html();
$('div.header').html(oldHtml+"<p> Новый параграф</p>")

//===============================

var oldText = $('div.header').text();
console.log(oldText);
 
$('div.header').text("Название статьи");
 
// использование функции
$('div').first().text(function(index,oldValue){
    console.log("Старый текст: " +oldValue);
    return "Новый текст";
});