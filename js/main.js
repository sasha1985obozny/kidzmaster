$(function(){

	$('.btn_menu').click(function(){
	$('.menu ul').slideToggle();
    });

	$('#owl1').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('#owl2').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500,
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("#bottom_menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

 

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

 

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });


});