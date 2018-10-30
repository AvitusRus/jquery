
// начало работы
// jQuery подключаем перед фалами стилей. 
$(document).ready(function() {

});

// можно

$(function() {

}); 

// хранение массивов
$k[3] = 15;

// создать пустой элемент

$("<div>")
$("<div></div>")

// создать с атрибутами и отобразить

$("img", 
{src: "images/flower.jpg",
title: "Rose_in_garden",
click: function() {...}
}).appendTo("body");


//

$("a")
$("#some-id")
$(".someclass")
$("header > ul:has(a)")

// animate

$("div").animate({left: "200px", top: "200px"}, 500);
$("div").animate({left: "+=200", top: "-=200"}, 500);

// события 

$('#селектор').hover(функция1, функция2);

// селекторы 

$('div') // все элементы данного типа на странице
$("p img")  // все элементы вложенные в элемент
$('.sidebar')  // все элементы заданного класса
$("#main")  // по идентефикатору
$("p.first")  // из элементов данного типа только с таким классом
$('.sidebar a') // все указанные элементы выбранного селектора
$('body > p')  // выбор дочерних элементов

$('h2 + p')
$('h2 ~ p') // все сестринские элементы, по отношению к первому

$('img[alt') // выбор по атрибуту
$('input[type='text']') //


// селекторы оформляются по правилам CSS

$('body > p')
$('h2 + div') // соседний родставнный селектор
$('img[alt]') // селектор атрибута
$('a[href]') // все элементы а, имеющие набор атрибутов

$('input[type='text']') // 

// $('a[href^='http://']') //  найти все внешние ссылки

// фильтры

$('tr:even'); // все четные ячейки
$('.striped tr:even'); // в четные с таким классом

$('p:first');   // last

$('a:not(navButton)');

$('li:has(a)');

$('a:contains(Щелкни по мне!)')  // все элементы , содержание текст

// display: none;

$('div:hidden').show(); // найти скрытые, отобразить

$('div:visible').hide(); 

// несколько элементов, возвращается особый объект, выборка
// автоматические циклы и связывание функций 

$('#slideshow img').hide();  // выбрать все и скрыть

// связывание функций
$('#popUp').width(300).height(300);


.html() // считывать код, замещать текущее содержимое другим

alert($('#errors').html())

alert($('#errors').html('заполнить содержимым с тегами'))

// если элементом много, в переменной будет хранится
// только одно значение

// а при вставке будут затронуты все элементы

.text() // не принимает html элементы, только текст

$('#errors h2').text('нет ошибок');

.append()  // добавляет в качестве последнего дочернего элемента

$('#errors').append('всего 4 ошибки')

.prepend()  // добавляет код прямо после открывающего тега выборки

.before()  .after()  // добавить вне выборки

// замена и удаление выборок

$('#popup').remove();
$('span.error').remove();


// замена другием элементом

$('#product101').replaceWith('добавлено в корзину');


addClass() // добавить класс css
removeClass() // удалить класс css 

$('#changeStyle').click(function() {
	$('body').toggleClass('altStyle');
});

//
css()

// получить в переменную значение css 
var bgColor = $('#main').css('background-color');

// css() присвоение

$('body').css('font-size', '200%');

$('pullquote').css('padding',100);   // на 100px 


// прочитать и изменить

var baseFont = $('body').css('font-size');
baseFont = parseInt(baseFont);
$('body').css('font-size',baseFont*2);

// изменение нескольких свойств
$('highlightedDiv').css({
	'background-color' : '#FF0000',
	'border': '2px solid #FE0037'
});

// Либо можно использовать связывание функций

// Атрибуты html

// чтение 
// установка второго аргумента, замена значения атрибута
var imageFile = $('#banner img').attr('src','images/newImage.png');

// удалить атрибут
$('body').removeAttr('bgColor') 

// работа с каждом элементом выборки
// большинство функций автоматически прорабатывает каждый элемент выборки

// скрыть все img
$('img').fadeOut();

// сделать для каждого элемента

$('selector').each( function() {
	var extLink = $(this).attr('href');
	$('#biblist').append('<li>' + extLink + '</li>');
});

// найти, скопировать, заменить классы 

$(document).ready(function() {
	$('span.pq').each(function() {
		var quote = $(this).clone();
		quote.removeClass('pq');
		quote.addClass('pullquote');
		$(this).before(quote);
	}); 
});

// События 

// событие наведения
$('a').mouseover();

// событие клика
$('#menu').click();

// передача функции событию

// !! скобки не надо
$('#start').click(startSlideShow);

// обычно передача анонимной функции

$('a').mouseover(function() {

});

// обработка события

$('#menu').mouseover(function() {
	$('#submenu').show();
});

//

$('html').dblclick(function() {
	alert('ой');
});

$('a').mouseover(function() {
	var message = '<p>вы навели указалтель</p>';
	$('.main').append(message);
});

$('#button').click(function() {
	$(this).val('прекрати это');
});

$('#textfield').focus(function() {
	$(this).css('background-color','red');
});

// hover() обработка наведение, 2 аргумента, 2 функции

$('#menu').hover(
	function() {
		$('#submenu').show();
	},
	function() {
		$('#submenu').hide();
	}
	);

// вариант через именованные функции

function showSubmenu() {
	$('#submenu').show();
}
function hideSubmenu() {
	$('#submenu').hide();
}

$('#menu').hover(showSubmenu,hideSubmenu);

// объект события 

$(document).click(fucntion(evt) {
	var xPos = evt.pageX;
	var yPos = evt.pageY;
	alert(xPos,yPos);
});

// есть target для передачи элемента

// узнать какая клавиша нажата

String.fromCharCode(evt.which);

// отмена обычного поведения событий 

$('#menu').click(function(evt) {
	evt.preventDefault();
});

// либо

$('#menu').click(function(evt) {
	return false; // не переходить по ссылке
});

// удаление событий 
// отменить реакцию всех элементов с этим классом
// на событие щелчка 
$('.tabButton').off('click');

// при щелчке  с идентификатором disable
// событие наведения удаляется со всех a 

$('a').mouseover(function() {
	alert('hello');
});
$('#disable').click(function() {
	$('a').off('mouseover');
});

// если хочу удалить все события - не передавать аргументов

// stopPropagation()

$('#theLink').click(function(evt){
// actions
evt.stopPropagation(); // останавливаем событие
});

// on()

// сохраняем литерал объекта для передачи
var linkVar = {message:'привет от ссылки'};

// можно без аргументов тогда аналогично

$('selector').on('mouseevent','function');
$('selector').click('fucntion');

//
var linkVar = {message:'привет от ссылки'};
var pVar = {message:'привет от абзаца'};

function showMessage(evt) {
	alert(evt.data.message);
}

$('a').on('mouseover',linkVar,showMessage);
$('p').on('click',pVar,showMessage);

// несколько событий обрабатывается одной функцией 

$(document).on('click keypress', function() {
	$('#lightbox').hide();
});

// работает только в том случае, если элемент уже существует
// для todo list не сработает, элементы  добавляются динамически
// обработчики стандартным образом нельзя повесить

// делегирование событий on()

// необходимо делегировать события к родительскому элементу
// который уже присутствует на странице

$('ul').on('click','li',function() {
	$(this).css('text-decoration' : 'line-through');
});

// ul здесь является просто контейнером, отреагирует li на событие
// this здесь относится к li

// если много  элементов лучше делегировать обработчик родителю

$('table').on('click','td',function() {
// actions 
});

//

.next()  // находит элемент, который следует непосредственной
// за текущим элементом

// показ / скрытие подразделов 

$(document).ready(function() {
	$('.answer').hide();
	$('.main h2').click(function(){
		var $answer = $(this).next('.answer');
		if ($answer.is(':hidden')) {
			$answer.slideDown();
			$(this).addClass('close');
		}
		else {
			$answer.fadeOut();
			$(this).removeClass('close');
		}
	})
}); // end ready

// Анимация и эффекты 

// скрытие / показ формы авторизации с анимацией

$(document).ready(function() {
	$('#open').click(function(evt) {
		evt.preventDefault();
		$('#login form').slideToggle(300);
		$(this).toggleClass('close');
	});
}); // окончание ready

// скрытие / пока формы, разные эффекты

$(document).ready(function() {
	$('#open').click(function(evt) {
		evt.preventDefault();
		if ($('#login form').is(':hidden')) {
			$('#login form').fadeIn(300);
			$(this).addClass('close');
		}
		else {
			$('#login form').slideUp(600);
			$(this).removeClass('close');
		}
	});
});

// Анимация 

// передать объектную константу
// смешанные значения в ковычках! 
{
	left: '650px',
	opacity: .5,
	font-size: '24px'
}

// брать в ковычки если не хочется менять

$('#message').animate(
{
	left: '650px';
	opacity: .5,
	fontSize: '24px';
},
1500);

// задание относительный параметров 

$('#moveIt').click(function() {
	$(this).animate({
		left:'+=50px'
	},
	1500);
});


// выполнение действия после завершения эффекта

// использование функции обратного вызова
// элемент появляется один за другим 

$('#photo, #caption').hide(); // предварительно скрыть
$('#photo').fadeIn(1000,function() {   // 1й эффект
	$('#caption').fadeIn(1000);  // к нему привязан второй
});

// появится фото, увеличть ширину и высоту с нуля

$(document).ready(function() {
	$('#photo').width(0).height(0).css('opacity',0);
	$('#caption').hide();
	$('#photo').animate(
	{
		width: '400px',
		height: '300px',
		opacity: 1
	},
	1000, 
	function() {
		$('#caption').fadeIn(1000);
	}
	); // end animate
});

// callback function 3x 


$(document).ready(function() {
	$('#photo').animate(
	{
		left: '+=400px',
	},
	1000, 
   function() { // first callback function
   	$('#caption').fadeIn(1000, 
       function() { // second callback function
       	$('#photo, #caption').fadeOut(1000);
       } // end second callback
    ); // end fadeIn
   } // end first callback function
); // end animate
});

// использование связывания для одного элемента

$('#photo').fadeIn(1000).fadeOut(2000).fadeIn(250);

// delay задержка анимации

$('#photo').fadeIn(1000).delay(10000).fadeOut(250);

// анимация выдвижного меню, с остановкой 

$(document).ready(function() {

	$('#dashboard').hover(

		function() {
			$(this).stop().animate( {
				left: '0',
				backgroundColor: 'rgb(27,45,94)'
			},
			500,
			'easeInSine'
			);
		},
		function() {
			$(this).stop().animate( {
				left: '-92px',
				backgroundColor: 'rgb(255,211,224)'
			},
			1500,
			'easeOutBounce'
			);
		}

		);
}); // end ready

// с помощью CSS невозможно запустить анимацию на одном
// элемента, когда посетитель взаимодействует с другим элементом
// в другом месте странциы 

// применить класс при клике на элемент

$('img').click(function() {
	$(this).addClass('faded');
});

// добавить убрать класс

$('img').click(function() {
	$(this).toggleClass('faded');
})

//

$(document).ready(function() {
	$('img').click(function(evt) {
		$(this).toggleClass('faded');
			evt.stopPropagation(); // prevent this click from going to the HTML element
		}); //end click
	$('html').click(function(){
		$('.faded').removeClass('faded');
		}); // end click
});


// запуск css анимации. Кнопки старт, пауза анимации

$('#start').click(function() {
	$('.porgressBar').css('animation-play-state', 'running');
});

//
$('#pause').click(function() {
	$('.progressBar').css('animation-play-state', 'paused')
});

// другой вариант, создание ключевых кадров и отдельного стиля класса
// в котором определены все свойства анимации

// .animateDiv {
// 	animation-name: growProgressBar;
// 	animation-duration: 10s;
// 	animationn-fill-mode: forwards;
// }

// как только элемент получает новый класс, начинается воспроизведение

$('#start').click(function() {
	$('.progressBar').addClass('animateDiv');
});

// замена атрибута файла

$('#photo').attr('src','images/newImage');


// вариант смены изображений

$('#swap').replaceWith('<img src=" ...');

// старое изображение добавить в переменную, если надо использовать
//

// предварительная загрузка изображений

var newPhoto = new Image();
newPhoto.src = 'images/newImage.jpg';

//  создание массива изображений

var preloadImages = ['images/roll.png', 'images/flower.png'];
for (var i=0; i < preloadImages.length; i++) {
	// new Image().src = preloadImages[i];
	$('<img>').attr('src'.preloadImages[i]);
}

// сменяемые изображения

var newPhoto = new Image();
newPhoto.src = 'images/newImage.jpg';
var oldSrc = $('#photo').arrt('src');
$('#photo').hover( 
	function() {
		$(this).attr('src', newPhoto.src);
	},
	function() {
		$(this).attr('src', oldSrc);
	});

// смена и возврат при клике на другом элементе

$(document).ready(function() {

	var newPhoto = new Image();
	newPhoto.src = 'images/newImage.jpg';
	var oldSrc = $('#photo').arrt('src');
	$('h1').hover(
		function() {
			$('#photo').attr('src', newPhoto.src);
		},
		function() {
			$('#photo').attr('src', oldSrc);
		});
});

// предзагрузка изображений

$(document).ready(function() {
	$('#gallery img').each(function() {
		var imgFile = $(this).attr('src');
		var preloadImage = new Image();
		var imgExt = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgExt,'_h$1');

		$(this).hover(
			function() {
				$(this).attr('src', preloadImage.src);
			},
			function () {
				$(this).attr('src', imgFile);
			}
	); // end hover
}); // end each
}); // end re

// постепенная смена изображений 

$(document).ready(function() {

	$('#gallery img').each(function(i) {
		var imgFile = $(this).attr('src');
		var preloadImage = new Image();
		var imgExt = /(\.\w{3,4}$)/;
		preloadImage.src = imgFile.replace(imgExt,'_h$1');
		
		$(this).hover(
			function() {
				$(this).attr('src', preloadImage.src);
			},
			function () {
				var currentSource=$(this).attr('src');
				$(this).attr('src', imgFile);
	}); // end hover
}); // end each
	
	$('#gallery a').click(function(evt) {
		//don't follow link
		evt.preventDefault();
		 //get path to new image
		 var imgPath = $(this).attr('href');
		 //get reference to old image
		 var oldImage = $('#photo img');

			 //create HTML for new image
			 var newImage = $('<img src="' + imgPath +'">');
			 //make new image invisible
			 newImage.hide();
			 //add to the #photo div
			 $('#photo').prepend(newImage);
			 //fade in new image
			 newImage.fadeIn(1000);
			 
			 //fade out old image and remove from DOM
			 oldImage.fadeOut(1000,function(){
			 	$(this).remove();
			 });		 
	}); // end click

	$('#gallery a:first').click();
}); // end ready

// работа со ссылками

// получить значение ссылки
var homePath = $('#homelink').attr('href');

// остановка преехода по ссылке

$('#showForm').click(function() {
	$('#loginForm').fadeIn('slow');
	return false;
});

// либо preventDefault()

$('#showForm').click(function(evt) {
	$('#loginForm').fadeIn('slow');
	evt.preventDefault();
});

// формы 

// <input name='user' type="text" id='user'>
var userField = $('#user').val();

.val() // доступ к значению элемента формы 

//

$(':text')  // все текстовые поля
$(':password') 
$(':button') 

$('#signup :text')  // можно комбинировать

//

$(':checked')  // выбрать все выбранные 

var selectedRegion = $('#region :selected').val();
var emailValue = $('#email').val();
// .val() работает на установку значений

// работа со значениями форм 

var unitCost = 9.95;
var amount = $('#quantity').val();
var total = amount*unitCost;
total = total.toFixed(2);
$('#total').val(total);  // задать значение


// проверка активности кнопок и флажков 

// возврат true / false 
if ($('#news').prop('checked')) {
// флажок установлен
}
else {
// флажок сброшен
}

// события формы 

// проверка заполнения формы 

$('signup').submit(function() {
	if ($('#username').val() == '') {
		alert('Введите имя')
		return false;
	}
});

// используй placeholder чтобы значение по умолчанию
// удалялось при фокусе

// проверять значение поля при потере фокуса

// <input name='quantity' type="text" id='quantity'>

$('#quantity').blur(function() {
	var fieldValue = $(this).val();
	if(isNan(fieldValue)) {
		alert('Введите число!')
	}
});

// если проверки однообразны,  начнать класс, 
// чтобы проверялись одним обработчиком

//  change()

$('#country').change(function() {
	if ($(this).val == 'Выберите страну') {
		alert('Change country')
	};
})
// фокусировка по-умолчанию
$('#username').focus();

// всегда выводить фокус в первое текстовое поле 

$(':text:first').focus();

// отключение/включение элементов формы 

// откчлючение всех полей

$(':input').prop('disabled', true);

// отключение в зависимости от значения

$('#single').click(function() {
	$('#spouseSSN').prop('disabled', false);
});

// скрытие / отображение параметров формы

$('#single').click(function() {
	$('#spouseSSN').hide();
});
$('#married').click(function() {
	$('#spouseSSN').show();
});

// предотврращение многократной оттправки формы

$('#formID').submit(function() {
	$('#submit').prop('disabled',true);
});


// управление элементами формы 

$(document).ready(function() {
	$(':text:first').focus();

	$('#paypal').click(function() {
		$('#creditCard input').prop('disabled',true).css('backgroundColor','#CCC');
		$('#creditCard label').css('color','#BBB');
	});

	$('#visa, #mastercard').click( function() {
		$('#creditCard input').prop('disabled',false).css('backgroundColor','');
		$('#creditCard label').css('color','');
	});

	$('#hideShip').click(function() {
		if ($(this).prop('checked')) {
			$('#shipping').slideUp('fast');
		}
		else {
			$('#shipping').slideDown('fast');
		}
	});
}); // end ready

// проверка  форм   HTLM

// поле обязательно и дата 
	// <input name='dob' type="text" class='required date'>
//

// jQuery UI

// создание диалогового окна 

$(document).ready(function() {
	$('#hello').dialog( {
		draggable : false,
		resizable : false,
		modal: true,
		hide : {effect: 'explode', delay: 250, duration: 1000, easing: 'easeInQuad'}
	});
});

// скрытие и вызов по событию диалоговых окон

$('#login').dialog({
	autoOpen: false
});

$('#loginLink').click(function(evt) {
	evt.preventDefault();
	$('#login').dialog('open');
});

// preventDefaul() чтобы пользователь не перешел по ссылке

// закрыть после отправки

$('#login form').submit(function() {
	$('#login').dialog('close');
});

// диалоговые окна, обработчики, кнопки, действия

$(document).ready(function() {
	$('#confirm').dialog({
		modal: true,
		autoOpen: false,
		buttons : {
			"Подтвердить" : function() {
				$('#robot').effect('explode');
				$(this).dialog('close');
			},
			"Отменить" : function() {
				$(this).dialog('close');
			}
    } // end buttons
  });
	$('#robot').click(function() {
		$('#confirm').dialog('open');
  }); // end click
}); // end ready


// всплывающие подсказки tooltips

$('[title]').tooltip();

// либо добавить класс желаемых элементом

$('.tooltip').tooltip();

// добавление подсказки из шаблона

$(document).ready(function() {
	$('#contact').tooltip({
		content: $('#contactInfo').html()
	});
}); 

// <script id='contactInfo' type='text/template'>
// 	<p>наш телефон 555-555-555</p>
// 	<p><img src="images/map.png" title='Я карта' alt=""></p>
// </script>

// панель с вкладками
// тут главное корректно оформить HTML
// хэш опционально

$(document).ready(function() {
	$('#tabContainer').tabs({
		show: 'fadeIn',
		hide: 'fadeOut'
	});
	var hash = location.hash;
	if (hash) {
		$('#tabContainer').tabs('load', hash)
	}
}); // end ready

// можно в качестве вкладок подгружать другие страницы

// Аккордеон

// кастомизация, другие действие и иконки
$('#accordion').accordion({
	event: 'mouseover',
	icons : {
		header: 'ui-icon-circle-plus',
		activeHeader: 'ui-icon-circle-minus'
	}
});

//

$('#accordion').accordion({
	active: false,
	collapsible: true,
	icons : {
		header: 'ui-icon-circle-plus',
		activeHeader: 'ui-icon-circle-minus'
	},
	animate: false
});

// Стилизация форм

// плагин datepicker

$(document).ready(function() {
	$('#dob').datepicker({
		changeMonth : true,
		changeYear : true,
		yearRange: '-120:+0',
		maxDate : 0,
		dateFormat : 'm-dd-yy'
	});
}); 

// форма select
// замена элемента при выборе

// <img src="red_shirt.jpg" id='shirt' alt="покупайте">
$('#shirt').attr('src', 'blue_shirt');

$('#colors').selectmenu({
	width: 300,
	change : function(event,ui) {
		var newImage;
		if (ui.item.label === 'Красный') {
			newImage = 'red_shirt.jpg';
		} else if (ui.item.label === 'Зеленый') {
			newImage = 'green_shirt.jpg'
		}
		$('#shirt').attr('src',newImage);
	}
});

// стилизация форм 

$(document).ready(function() {
	$('#departure').datepicker({
		minDate : 0,
		maxDate : '+1y'
	});

	$('#airport').autocomplete({ source : airports});
	$('#meal').selectmenu({width: 200 });
	$('#bags').buttonset();
	$('#seatTypes').buttonset();
	$('#next').button( {
		icons : {secondary : 'ui-icon-circle-arrow-e'}
	});

}); // end ready

// Переопределение стиилей
// Стили переопределяются только в пользовательском файле!!!

// Своя таблица стилей определяется после стилей jQuery


// эффекты
// лучше использовать css, если не нужна  поддержка старых браузеров

$('#theElement').click(function() {
	$(this).effect('bounce', {
		distance : 100,
		tomes : 20,
		easing : 'easeOutBounce'
	}, 1000);
});

//

$('#featrue').addClass('highlight',1000,'easeOutBack', function(){
	alert('completed');
});

// switchClass()
// замена одного класса на другой 

$('#feature').switchClass('defaultStyles','highlight',1000);

//

// технология Ajax 
// http://www.wampserver.com/ru/

// отправка запроса
xhr.send()

xhr.send('q=javascript');  // запрос с данными

// выбрать элемент , где должен быть размещен контент

$('#headlines').load('todays_news.html');

// html файл может содержать как целую страницу, так и отдельные элементы
// используй ссылки относительно корневого каталога

// если нужнно загрузить часть содержимого, указать элемент
// вторым аргументом 

$('#headlines').load('todays_news.html #news');

// загрузка элементов страниц

$(document).ready(function() {
	$('#newslinks a').click(function() {
		var url=$(this).attr('href');
		$('#headlines').load(url + ' #newsItem');
		return false;
  }); //end click
}); // end ready

// загрузить файл html и поместить в элемент headlines 
// только html-контент, находящийся внутри элемента
// newsItems 

$('#headlines').load('today.html #newsItems');

// загрузить файл feeds и встроить в контент

$("#feeds").load("feeds.html");

// отослать массив данных на сервер
$("#objectID").load("test.php", { 'choices[]': ["Jon", "Susan"] } );

//

$( "#result" ).load( "ajax/test.html" );

// callback function

$( "#result" ).load( "ajax/test.html", function() {
	alert( "Load was performed." );
});

// получить часть документа

$( "#result" ).load( "ajax/test.html #container" );

// в передаваемых данных скрипты отбрасываются

$( "#new-projects" ).load( "/resources/load.html #projects li" );

// обраотка ошибки

$( "#success" ).load( "/not-here.php", function( response, status, xhr ) {
	if ( status == "error" ) {
		var msg = "Sorry but there was an error: ";
		$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
	}
});

// передать массив данных на сервер

$( "#objectID" ).load( "test.php", { "choices[]": [ "Jon", "Susan" ] } );

// методы get() post()

$.get(url,data,callback);
$.post(url,data,callback);

// эти функции не связаны с элементами на странице

// отправка рейтинга

$.get('rateMovie.php','rating=5')

// get - если нужно получить информацию. Удобен для отправки данных
// изменяющих информацию на сервере.
// get имеет лимит на объем данных который можно послать 

// post удобно для больших объемов информации

// если нужно послать больше одной пары имя / значение

$.post('rateMovie.php','rating=5&user=foo');

// для специальных символом применять экранирование

var queryString = 'favFood=' + encodeURIComponent('Mac & Cheese');
$.post('foodChoice.php', queryString);

// использование метода литерала объекта

$.post('rankMovie.php',{ rating: 5 });

// сохранить в переменную 

var data = {rating: 5};
$.post('rankMovie.php', data);

//
$.get( "test.cgi", { name: "John", time: "2pm" } )
.done(function( data ) {
	alert( "Data Loaded: " + data );
});

// отправить запрос, отобразить данные 
// (<?php echo json_encode( array( "name"=>"John","time"=>"2pm" ) ); ?>),
//  and add it to the page.

$.get( "test.php", function( data ) {
	$( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
  }, "json" );

//

$.post( "ajax/test.html", function( data ) {
	$( ".result" ).html( data );
});

//

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post( "example.php", function() {
	alert( "success" );
})
.done(function() {
	alert( "second success" );
})
.fail(function() {
	alert( "error" );
})
.always(function() {
	alert( "finished" );
});

// Perform other work here ...

// Set another completion function for the request above
jqxhr.always(function() {
	alert( "second finished" );
});


// отправить данные, игнорировать результаты
$.post( "test.php", { name: "John", time: "2pm" } );

//

$.post( "test.php", { name: "John", time: "2pm" })
.done(function( data ) {
	alert( "Data Loaded: " + data );
});

// отправить запрос,вывести данные 

$.post( "test.php", { func: "getNameAndTime" }, function( data ) {
  console.log( data.name ); // John
  console.log( data.time ); // 2pm
}, "json");

//


// функция serialize ()
// собрать данные, создать единую строку запроса

var formData = $('#login').serialize();

// послать данные из формы в login.php
// loginResults - функция обратного вызова

var formData = $('#login').serialize();
$.get('login.php',formData,loginResults);

//

$( "form" ).on( "submit", function( event ) {
	event.preventDefault();
	console.log( $( this ).serialize() );
});
// element must have name attribute

// обработка данных с сервера

// перехват нажатий на ссылки и преобразование их в ajax-вызовы на сервер

$('#message a').click(function() {
	var href = $(this).attr('href');
	var queryString = href.slice(href.indexOf('?')+1);
	$.get('rate.php',queryString,processResponse);
	return false;
});

// и обработка возврата 

function processResponse(data) {
	var newHTML;
	newHTML = '<h2>Ваш голос учтен</h2>';
	newHTML += '<p>Средний рейтиинг';
	newHTML += data + '</p>';
	$('#message').html(newHTML);
}

// можно использовать анонимную функцию

$.get('file.php', data, function(data,status) {
	// code goes here
});

// обработка ошибок 

$.get('rate.php',querystring,processResponse).error(errorResponse);

function errorResponse() {
	var errorMsg = 'error';
	$('#message').html(errorMsg);
}

// поиск элементов на странице

$.get('xml.php','id=234',processXML);
function processXML(data) {
	var messageContent=$(data).find('content').text;
}

// find() по действию похоже на children()

$( "li.item-ii" ).find( "li" ).css( "background-color", "red" );

// поиск через переменные

var allListElements = $( "li" );
$( "li.item-ii" ).find( allListElements );

// найти первый в списке, и применить свойство

var item1 = $( "li.item-1" )[ 0 ];
$( "li.item-ii" ).find( item1 ).css( "background-color", "red" );

// использование find()

$( "p" ).find( "span" ).css( "color", "red" );

// форма авторизации

// http://localhost/ajaxtest/

$(document).ready(function() {
	$('#login').submit(function() {
		var formData = $(this).serialize();
		$.post('login.php',formData,processData).error('ой');
		function processData(data) {
			console.log(data==='pass');
			if (data==='pass') {
				$('.main').html('<p>Вы авторизованы!</p>');
			} else {
				if ($('#fail').length === 0) {
					$('#formwrapper').prepend('<p id="fail">Некорректная  информация. Попробуйте еще раз</p>');
				}
			}
      } // end processData
      return false;
  }); // end submit

}); // end ready

// .getJSON(url,data,callback)

.getJSON(url,data,callback)

// запрос и возврат данных
$.getJSON('contacts.php','contact=123',processContacts);

// результат обрабатывается и передается функции обратного вызова

function processContacts(data) {
// здесь один аргумент, в который получается объект
}

// доступ к данным json

var bdate = {
	'person' : 'pavel',
	'date' : '10/27/1980'
}

bdate.person;
bdate.date;

// запрос и обработка данных

$(document).ready(function() {

	var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var searchInfo = {
	// change this ID to another flickr ID (like your own if you have one)
	id : "25053835@N03",
	format : "json"
};

$.getJSON(URL,searchInfo,function(data) {
	$('h1').text(data.title);
	var photoHTML = '';
	$.each(data.items,function(i,photo) {
		photoHTML += '<span class="image">';
		photoHTML += '<a href="' + photo.link + '">';
		photoHTML += '<img src="' + photo.media.m.replace('_m','_s') + '"></a></span>';	
	}); // end each
	$('#photos').append(photoHTML);
}); // end get JSON

}); // end ready

// Диагностика, советы, нюансы 

// для ускорения работы используй связывание функций 

// вариант организации кода

var $tooltip = $('#tooltip');
$tooltip.html()('<p>Элемент</p>');
$tooltip.fadeIn(250);
$tooltip.animate({left : 100px},250);

// хороший стиль указывать $ в переменных и объектах jQuery

// хороший вариант сохранить this в переменную

$('a').click(function() {
	var $this = $(this);  // сохранение ссылки на элемент
	$this.css('outline', '2px solid red');
	var href = $this.attr('href');
	window.open(href);
	return false;
});

//  если на страницу нужно  добавить фрагмент HTML-кода
// делать это с помощью одной операции

var tooltip = '<div id='tooltip'><h2>Заголовок</h2><p>содержание</p></div>';
$('#elemForTooltip').append(tooltip);

// оптимизация поиска
// используй идентификаторы где возможно

// используй идентификатор в селекторе потомков
$('#main' a); // работает быстрее
$('a');

// применяй функцию .find()
// тот же выбор

$('#main').find('a');

// обход дерева DOM

// создание новой выборки на основанни текущей

$('#gallery').click(function() {
	$(this).find('img').fadeTo(500,.3);
});

// find() применяется , когда приходится иметь дело 
// с уже обработанным набором элементов
// find() используется для поиска потомков в существующей 
// выборке
//

// children ищет непосредственный потомков. find вообще всех потомков
$('mainDiv').click(function() {
	$(this).children('div').show().css('outline','red 2px solid red');
});

// .parent() удобно, если необходимо обработать одновременно внешний элемент
$('#gallery a').hover(
	function() {
		var $this = $(this);
	// добавление контура к ссылке
	$(this).css('outline','2px solid red');
	// Добавление цвета фона элементу div
	$(this).parent().css('backgroundColor','white');
},
function() {
	var $this = $(this);
	$(this).css('outline','');
	$(this).parent().css('backgroundColor','');
});

// .closest() поиск ближайшего предка, для заданного селектора
// элемент выше на два порядка например

$('#gallery img').click(function() {
	var $this = $(this);
	$(this).css('outline','2px red solid');
	$(this).closest('div').css('backgroundColor','white');
});


// .siblings()  // элементы на одном уровне

// клик на одном элементе, а примен для всех таких же

// выберет остальные сслыки из этого же элемента
$('#gallery a').click(function() {
	$(this).siblings().fadeTo(500,.3).fadeTo(250,1);
});

// если есть другие элменты,можно указать какие именно
// элементы нужны

$(this).siblings('a').fadeTo(500,.3).fadeTo(250,1);

// .next() находит следующий элемент, того же уровня в текущей выборке
// .prev() находит предыдущий элемент
// можно добавить конкретики, указав тег


// .text() заменяет текстовое содержимое выбранных элементов

$('#error').text('Укажите адрес электронной почты')

// .html()  всявляет html

// объединение в  цепочки элементов и событий 

$('div').css('outline','2px red solid').find('a').css('color','purple');


// одно событие, изменение нескольких элементов
$('div').click(function() {
	var $this = $(this);
	$(this).fadeTo(250,1);  // появление элемента div
	$(this).find('h2').css('color','#F30');
	$(this).find('p').css('backgroundColor','F343FF');
});

//  использование end()
// возврат к выборке по элементу div

$('div').click(function() {
	$(this).fadeTo(250,1)
	.find('h2')
	.css('color','F30')
	.end()  // снова возвращает выборку по элементу div
	.find('p') // выберет все элементы абзаца p из div 
	.('backgroundColor','#f343FF');
})

// функция wrap()
// обернуть все изображения

  // loop through the list of images
  $('img').each(function() {
   // save reference to current image
   var $this = $(this); 
   // get the alt property for the caption
   var caption = $this.attr('alt'); 
   // add the HTML
   $this.wrap('<div class="figure"></div>').after('<p>' + caption + '</p>');
}); // end each

// функция .wrapInner()

$('#outer').wrapInner('<div id="inner"></div>');

// <div id='outer'>
// <div id='inner'>
// 	<p>Содержимое элементаouter</p>
// </div>
// </div>

// unwrap() удалить родительский элемент, окружающий выборку

$('p').unwrap();
// без аргументов

// .empty() удалить все содержимое элементов выборки
// сама выборка останется
// не принимает оргументов
// очищает содержмое целевого элемента
$('#messageBox').empty();

// длина строки

var password = $('#password').val();
if (password.length <= 6) {
	alert('too small...')
}

//

function verifyPassword() {
	var password = $('#password').val();
	if (password.length <= 6) {
		alert('too small...')
	}
	else if (password.length > 15) {
		alert('too big');
	}
}

$('form').submit(verifyPassword);
$('#password').blur(verifyPassword);

// извлечение части строки

var url = 'http://www.sawmac.com';
var domain = url.slice(7); // www.sawmac.com

// поиск по маске в строках
// регулярные выражения 

// создать объект регулярного выражения

var myMatch = /привет/;

//

var myRegEx = /To be/;
var quote = 'To be or not to be.';
var foundPosition = quote.search(myRegEx);

//

var mask = /12/;
var frase = 'fgdf12gdfg';

if (frase.search(mask) == -1) {
	alert('not correct');
}
else {
	alert('correct');
}


//

var testString = 'Файл logo.gif автор alex.gifford@example.com';
var gifRegex = /\S+\.gif\b/i;
var results = testString.match(gifRegex);
var file = results[0];
alert(file);

// группировка частей маски

var sentence = 'April is the cruelest month.';
var aprMatch = /Apr(il)?\b/;
if (sentence.search(aprMatch) != -1) {
	alert('finded!');
}

//

var string = 'To be or not to be';
var regex = /be/;
var result = string.match(regex);
alert(result.index);

// добавить флаг глобального поиска, будет возвращать массив
// result.length количество найденных элементов
// стандартные  средства массивов

var string = 'To be or not to be';
var regex = /be/g;
var result = string.match(regex);
alert(result);

// замена текста

string.replace(regex,'replace');
// 1арг регулярное выражение
// 2арг строка, заменяющая любое совпадение

//

var date='28.10.2014';
var replaceRegex = /\./g;
var date = date.replace(replaceRegex,'/');
alert(date);  // 28/10/2014

// работа с числами


// дроби отбрасывает
var age = '20 лет';
age = parseInt(age);  //20 

//
// дроби оставляет
var space = '4.5 акра';
space = parseFloat(space);

//


var x = '10';
if (isNan(x)) {
	alert('not number');
}
else {
	alert('number');
}

// окргуление

var decimal = 10.25;
var rounded = Math.round(decimal);

// форматирование значений в валюте
// если знаков больше, окугляется

var cost = '10';
cost = +cost;
var printCost = cost.toFixed(2) + ' руб'; 
printCost;

// генерация случайных чисел

Math.floor(Math.random() * 10);

// от 0 до 6

var roll = Math.ceil(Math.random() * 6);
roll;

// генерация случайного элемента массива

var people = ['Иван','Саша','Ирина','Вова','Вася'];
var random = Math.floor(Math.random() * people.length);
var rndPerson = people[random];
rndPerson;


// функция генерации случайных чисел

function rndNum(from,to) {
	return Math.floor((Math.random() * (to - from + 1)) + from);
}

var dieRoll = rndNum(0,1000);
dieRoll;

// Дата, время

// название дня недели, месяц аналогично
var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

var now = new Date();
var dayOfWeek = days[now.getDay()];
dayOfWeek;


// оптимизация сценариев 

// сохранение параметров в переменных

// переменные можно хранить в объекте
// доступ к ним через точечный синтаксис

siteSettings.highlightColor;

// отладка
// в firefox наиболее полное описание ошибок

// создавать сценарий небольшими частями
// сначала проверяй каэжый шаг
// с накоплением опыта куски сценариев будут становится больше
// тестируй часто

// console.log()
// можно передавать несколько переменных


// пример отладки c помощью console.log

$(document).ready(function() {
			console.log('READY');
			$('#comments').keyup(function(){
				console.log('Событие: keyup');
				var text = $(this).val();
				console.log('Содержимое комментария: %s',text);
				var chars = text.length;
				console.log('Количество знаков:',chars);
				$('#count').text(chars + ' знаков');
			});
		});

//


function hideClicked() {
	var element = $(this)   // this is specific element
	element.hide();  // hide specific element
}

var listItem = $('li');
listItem.on('click', hideClicked);

//

li = $("li");
function toggleStriked() {
	$(this).toggleClass("striked");
}
li.on("click", toggleStriked);

// siblings

var neighbors = $(this).siblings();

// add remove classes

 var selectable = $(".selectable");
    function focusSelected() {
        var targetElement = $(this);
        var siblings = targetElement.siblings();
        siblings.addClass("mute");
        siblings.removeClass('sel')
        targetElement.removeClass("mute");
        targetElement.addClass('sel');
    }
    selectable.on("click", focusSelected);


// замена атрибута у всех

var elements = document.getElementsByTagName('img');
for (var i = 0; i < elements.length; i++) {
	elements[i].src = 'snowdrop.png';
}

// изменить для всех кроме первого

var elements = document.getElementsByTagName('img');
for (var i = 0; i < elements.length; i++) {
	if (i > 0) {
		elements[i].style.opacity = 0.5;
	}
}

// обработка событий при наведении и снятии 

var elements = document.getElementsByTagName('img');
for (var i = 0; i < elements.length; i++) {
	elements[i].onmouseover = handleMouseOver;
	elements[i].onmouseout = handleMouseOut;
}

function handleMouseOver(e) {
	e.target.style.opacity = 0.5;
}

function handleMouseOut(e) {
	e.target.style.opacity = 1;
}

//


$('img:odd').mouseenter(function(e) {
	$(this).css('opacity',0.5);
}).mouseout(function(e) {
	$(this).css('opacity',1.0);
});

// выбор элементов

:animated   // все анимируемые в данный момент
:contains(текст)
:eq(n)  // элементы с индексом n 
:first // первый из подходящих элементов
:has(селектор) // элементы, которые содержать хотя бы один элемент
// соответствующий указанному селектору
:text // все текстовые элементы

$('img:even');

// сужение области поиска с помощью контекста

$('img:odd', $('.drow'))
// сначал drow, потом img

// переход от объектов HTMLElement к объектам jQuery и обратно

var elem = document.getElementById('oblock');
$('img:odd', elem).mouseenter(function(e) {
	$(this).css('opacity',0.5);
}).mouseout(function(e) {
	$(this).css('opacity',1.0);
})


// итерирование функции по дом объектам

$('img:odd').each(function(index,elem) {
	console.log(elem.tagName + elem.src);
})

// определение индекса элемента

var elems = $('body *');

// индекс с помощью базово dom api
var index = elems.index(document.getElementById('oblock'));
// индекс с помощью другого объекта jQuery
index = elems.index($('#oblock'));

// получение элемента HTMLElement с заданным индексом

var elem = $('img:odd').get(1);
console.log(elem.tagName + elem.src);

// одновременное воздействие на множество элементов

$('label').css('color','blue');

var labelElems = document.getElementsByTagName('label');
for (var i = 0; i < labelElems.length; i++) {
	labelElems[i].style.color = 'blue';
}

// формирование цепочки вызовов

$('label').css('color','blue').css('font-size','0.75em');

var labelElems = document.getElementsByTagName('label');
for (var i = 0; i < labelElems.length; i++) {
	labelElems[i].style.color = 'blue';
	labelElems[i].style.fontSize = '.75em';
}

//

$('label').css('color','blue').add('input[name!="rose"]')


// работа с набором выбранных элементов

add()  // расширение текущего набора элементов
first(), last() eq()  // сужение до одного элемента
slice() // сужение набора до подмножества , индексы которых находятся в пределах указанного диапазона
filter(), not() // сужение с помощью фильтров
has() // сужение текущего набора до подмножества, имеющих текущих потомков
map() // преобразование набора в другой набор элементов JQ
is() // проверка соответствия условию
end() // возврат к предыдущему найденному набору
andSelf()  // добавление предыдущего найденного набора к текущему набору
children(), find() // получение дочерних элементов и потомков элементов текущего набора
parent()  // получение родительских элементов для элементов текущего набора
parents() // получение предков текущего набора
parentsUntil() // получение предков, пока не встретится указанный
closest() // получение ближайшего предка по условию

offsetParent() // ближайший предок, для которого задан тип позиционирования
siblings() // получение сестринских элементов для элементов текущего набора
next(), prev(), nextAll(), prevAll(), nextUntil(), prevUntil() 


var jq = $('label');

jq.slice(0,2).css('color','red'); // выбор первых двух элементов


// удаление элементов, и спользование функции

$('img').filter(function(index) {
	return this.getAttribute('src') ==
	'peony.png' || index == 4;
}).css('border','thick solid red')

//

$('div.dcell').has('img[src*=astor]').css('border','thick solid red');

// is()

var result = $('img').is(function(index) {
	return this.getAttribute('src') = 'rose.png';
});

// результат true, возрвщает булево значение

// end() вытакливает из стека текущий выбранный набор и возрвщает предыдущий
$('label').first().css('color','red').end().css('font-size', '1.5em');


// find() для создания пересечения выбранных наборов

var jq = $('label').filter('[for*=p]').not('[for=peony]');
$('div.drow').find(jq).css('border','thick solid blue');


// closest() с набором эталонных объектов

var jq = $('#row, row2, form');

$('img[src*=rose]').closest(jq); 

// DOM-манипуляции

// клонирование

var newElems = $('div.dcell').clone();

// вставка элементов

var newElems = $('<div class="dcell"></div>')
.append('<img src="lily.png">')
.append('<label for "lily">lilies</label>');
newElems.css('border, "thick solid red"');
$('#row1').append(newElems);

// prepend()

var orchidElems = $('<div class="dcell"/>')
.append('<img src="orchid.png">')
var newElems = $('<div class="dcell">')
.append('<img src="lily.png">')
.add(orchidElems); // Объединение элементов

newElems.css("border", "thick solid red");
$('#row1, #row2').prepend(newElems);

// можно передать несколько элементов методы prepend()

$('#row1, #row2').prepend(lilyElems, orchidElems);

// один и тот же набор новых элементов может быть вставлен
// только одина раз. Если еще раз применить, будет перенос
// для копирования необходимо создавать копии элементов

$('#row1').append(newElems);
$('#row2').prepend(newElems.clone());

// appendTo() prependTo()

// img вставляет в div в качестве дочернего
var newElems = $("<div class='dcell'>");
$('img').appendTo(newElems);
$('#row1').append(newElems);

// динамическая вставка с помощью функции
// в зависимости от id элемента

$('div.drow').append(function(index,html) {
	if (this.id == 'row1') {
return orchidElems;
	} else {
		return lilyElems;
	}
});

// wrapping - вставка родительских элементов, или внешняя вставка
// каждый элемент в аргументе метода может иметь не более одного
// родительского и не более одного дочернего элемента

var newElem = $('<div/>').css('color','red');
$('div.drow').wrap(newElem);

// создание общего родительского элемента
// новый элемент добавляет как обзщий родительский для всего
// набора выбранных элементов
var newElem = $('<div/>').css('color','red');
$('div.drow').wrapAll(newElem);


// wrapInner()
// вставка элементов между родительскм и дочерним
var newElem = $('<div/>').css('color','red');
$('.dcell').wrapInner(newElem);

// вставка сестринских элементов

orchidElems.insertAfter('#row1 div.dcell');
lilyElems.insertBefore('#row2 div.dcell');

// земена элементов

// замена первого дочернего элемента
$('#row1').children().first().replaceWith(newElems);

// все элементы заменяются изображением
$("<img src='carnation.png'>").replaceAll('#row2 img').css('color','red');

// замена элементов с помощью функции
// замена элементов  img на основании значений их атрибутов src

$('div.drow img').replaceWith(function() {
	if (this.src.indexOf('rose') > -1) {
return $('<img src="carnation.png">')
.css('border', "thick solid red");
	} else if (this.src.indexOf('peony') > -1) {
return $('<img src="lily.png">')
.css('border', "thick solid red");
	} else {
		return $(this).clone();
	}
});

// удаление элементов

// 
$('img[src*=daffodil], img[src*=snow]').parent().remove();

// или то же, фильтрация удаляемых элементов

$('div.dcell')
.remove(':has(img[src*=snow], img[src*=daffodil])');

// unwrap()
// удаляет родительские элеметы для элементов, водержащихся в объекте

$('#row1 div').unwrap().css({'display:' 'block'});


// Манипуляции элементами


// чтение значения атрибута

var srcValue = $('img').attr('src');

// получение значений через цикл

$('img').each(function(index,elem) {
	var srcValue = $(elem).attr('src');
	console.log('Значение атрибута: ' + srcValue);
});

// установка значений атрибутов
// значение применяется ко всем img

$('img').attr('src','lily.png');

// установка нескольких атрибутов
// используется объект

var attrValues = {
	src: 'lily.png',
	style: 'border: thick solid red'
};

$('img').attr(attrValues);

// динамическая установка значений атрибутов

$('img').attr('src', function(index, oldVal) {
	if (oldVal.indexOf('rose') > -1) {
return 'lily.png';
	} else if {
($(this).closest('#row2').length > 0) {
	return 'carnation.png';
	}
}
});


// удаление атрибутов
$('img').attr('style', 'border: thick solid red');
$('img:odd').removeAttr('style');

// работа с классами

// добавление классов с помощью функции

$('img').addClass(function(index, currentClasses) {
	if (index % 2 == 0) {
return 'blueBorder';
	} else {
		return 'redBorder';
	}
});

// переключение классов с помощью функции
// если переключение классов не требуется, возврат пустой строки

$('img').addClass('blueBorder');
$('img:even').addClass('redBorder');

$('<button>Переключить</button>')
.appendTo('#buttonDiv').click(doToggle);

function doToggle(e) {
	$('img').toggleClass(function(index, currentClasses) {
		if (index % 2 == 0) {
return 'redBorder';
		} else {
			return '';
		}
	});
	e.preventDefault();
};

// работа с CSS

// получение и установка значений

var sizeVal = $('label').css('font-size');
console.log('размер ' + sizeVal);
$('label').css('font-size', '1.5em');


// установка "" равносильно удалению этого свойства из атрибута

// установка нескольких свойство  одновременно
// так же используется объект

var cssVals = {
	'font-size': '1.5em',
	'color': 'blue'
};

$('label').css(cssVals);

// установка относительных значений

$('label:odd').css('font-size', '+=5');
$('label:even').css('font-size', '-=5');

// установка свойств с помощью функции

$('label').css('border', function(index,currentValue) {
	if $(this).closest('#row1').length > 0 {
		return 'thick solid red';
	} else if (index % 2 == 1) {
return 'thick double blue';
	}
});

// position() 

var pos = $('img').position();
console.log('Position top: ' + pos.top + " left: " pos.left);

// установка ширины и высоты с помощью функции
// значение индекса, определяющего позицию элемента в наборе,
// используется в качестве множиетля, регулирующего высоту
// элемента

$('#row1 img').css('border', 'thick solid red')
.height(function(index, currentValue) {
	return (index + 1) * 25;
});

// работа с содержимым элементов

// замена  содержимого одного элемента  другим

$('#row2 div.dcell').html($('div.dcell').html());

// изминение с помощью функции
// текстовое содержимое элементов label изменяется в зависимости
// от значения аргумента index, указывающую позицию элемента
// в выбранном наборе
$('label').css('border', 'thick solid red')
.text(function(index, currentValue) {
	return "Индекс" + index;
})

// работа с элементами форм

// получение значений элементов input

$('input').each(function(index,elem) {
	console.log("имя " + elem.name + "значение " + $(elem).val());
});

// изменение значений элементов форм

// выбрать все элементы input и установить им значение 100
function setValues(e) {
	$('input').val(100);
e.preventDefault();
};


// использование функции

$('input').val(function(index,currentVal) {
	return (index + 1) * 100;
});

// связывание данных с элементами

// обработка данных, связанных с элементами

// установить данные
$('img').each(function() {
	$(this).data('product', $(this)
		.siblings('input[name]')
		.attr('name'));
});

// найти элементы с данными и получить значения

$('*').filter(function() {
	return $(this).data('product') != null;
}).each(function() {
	console.log('Элемент: ' + this.tagName + " " + 
		$(this).data('product'));
});

// удалить все данные
$('img').removeData();

// работа с атрибутами данных html5 
// метод data() позволяет автоматически получать 
// и изменять атрибуты данных 

$('div.dcell').each(function() {
	var productVal = $(this).data('product');
	console.log('продукт: ' + productVal);
});

// работа с событиями

// bind()
//  регистрация обработчиков событий на элементах

$('img').bind('mouseenter', handleMouseEnter)
.bind('mouseout', handleMouseOut);

function handleMouseEnter(e) {
$(this).css({
'border': 'thick solid red',
'opacity': "0.5"
});
};


function handleMouseOut(e) {
$(this).css({
	'border': "",
	'opacity': ''
});
}

// регистрация функции для обработки нескольких событий
$('img').bind('mouseenter mouseout', handleMouse);


function handleMouse(e) {
	var cssData = {
		"border": 'thick solid red',
		'opacity': '0.5'
	}

if (event.type == 'mouseout') {
	cssData.border = '';
	cssData.opacity = '';
}
$(this).css(cssData);

};

// использование объекта отображения для регистрации обработчиков событий

$('img').bind({
	mouseenter: function() {
		$(this).css('border', 'thick solied red');
	},
	mouseout: function() {
		$(this).css('border', '');
	}
});

// передача данных обработчику событий


$('img:odd')
.bind('mouseenter mouseout', 'red', handleMouse);
$('img:even')
.bind('mouseenter mouseout', 'blue', handleMouse);

function handleMouse(e) {
	var cssData = {
		'border' : 'thick solid ' + e.data,
	}
	if (event.type == 'mouseout') {
		cssData.border = "";
	}
	$(this).css(cssData);
}

// отмена поведения бразуера по умолчанию

$('button:submit').bind('click',function(e) {
	e.preventDefault();
});

// либо с использование обработчика

$('button:submit').bind('click',false);

// удаление всех обработчиков событий

$('img').bind('mouseenter mouseout', handleMouse);
$('img[src*=rose]').unbind();

// избирательное открепление событий

$('img').bind('mouseenter mouseout', handleMouse);
$('img[src*=rose]').unbind('mouseout');

// открепление события внутри обработчика

$('img').bind('mouseenter', handleMouseEnter)
.bind('mouseout', handlemouseExit)

var handleCount = 0;

function handleMouseEnter(e) {
	$(this).css('border', 'thick solid red');
}

function handleMouseExit(e) {
	$(this).css('border', '');
	handleCount ++;
	if (handleCount == 2) {
		$(this).unbind(e);
	}
}

// разовый обработчик событий

$('img').one('mouseenter', handleMouseEnter)
.one('mouseout', handlemouseExit);

// bind() не раобтает с новыми созданными элементами
// используй метод live() для вновь созданных элементов

$('img').live({
	mouseenter: function() {
		$(this).css('border', 'thick solid red');
	},
	mouseout: function() {
		$(this).css('border', "");
	}
});

// используя метод delegate() можно указать , где именно
// в документе будет располагаться слушатель события
// delegate больше не используется, вместо него on()

$('#row1').delegate('img', {
	mouseenter: function() {
		$(this).css('border', 'thick solid red');
	}
})

// вызорв обработчика событий вручную

$('#row1 img').bind('mouseenter', function() {
	$(this).css('border', 'thick solid red');
});

$('#row2 img').bind('mouseenter', function(e) {
	$(this).css('border', 'thick solid blue');
	$('#row1 img').trigger(e);  // запуск обработчика #row1 img
})

// использование прямых методов для работы с событиями

$('img').mouseenter(function() {
	$(this).css('border', 'thick solid red');
});


// использование прямого метода для запуска обработчика событий

// после щелчка выбираются элементы img и вызываются их
// обработчики события mouseenter 

$('img').bind('mouseenter', function() {
	$(this).css('border', 'thick solid red');
});

$('<button>Запустить</button>')
.appendTo('#buttonDiv').click(function (e) {
	$('img').mouseenter();
	e.preventDefault();
})

// Использование эффектов jQuery

// использование show() hide() без агрументов


$('<button>Скрыть</button><button>Показать</button>')
.appendTo('#buttonDiv')
.click(function(e) {
	if ($(e.target).text() == 'Скрыть') {
		$('#row1 div.dcell').hide();
	} else {
		$('#row1 div.dcell').show();
	}
	e.preventDefault();
})

// изменение состояния видимости

$('<button>Переключить</button>').appendTo('#buttonDiv')
.click(function(e) {
	$('div.dcell:first-child').toggle();
	e.preventDefault();
});

// использование встроенных функций обратного вызова

var hiddenRow = '#row2';
var visibleRow = '#row1';

$(hiddenRow).hide();

$('<button>Поменять</button>')
.insertAfter('#buttonDiv button')
.click(function(e) {
	$(visibleRow).hide('fast', function() {
		$(hiddenRow).show('fast', function() {
			var temp = hiddenRow;
			hiddenRow = visibleRow;
			visibleRow = temp;
		});
	});
	e.preventDefault();
})

// применение пользовательской анимации


// выполнение пользовательской анимации с помощью относительных
// значений свойств

$('form')
.css({"position": 'fixed', 'top': '70px', 'z-index': '2'});

$('h1')
.css({"position": 'fixed', 'z-index': '1', 'min-width': '0'});

$('<button>Анимация</button>')
.insertAfter('#buttonDiv button')
.click(function(e) {
	$('h1').animate({
		height: +=100,
		width: -=700
	});
	e.preventDefault();
});

$('#button').on('click', function(evt) {
  evt.preventDefault();
  var content = $('<h1>Random Post Title</h1><p>Random post text.</p>');
  
  $('#element').append(content);
});





    
