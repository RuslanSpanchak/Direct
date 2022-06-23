$(".chennels_choose").hide(0);
$(".friends_choose").hide(0);

let chennels = 0;

$("#channels").click(function() {

	$(".chennels_choose").slideToggle(300);
	$(".friends_choose").hide(300);
 
});

let friends = 0;

$("#friends").click(function() {

	$(".friends_choose").slideToggle(300);
	$(".chennels_choose").hide(300);
 
});

$(".center_title").html("General");
$("#general_message").css("display", "block")
$(".center_footer").css("top", "5px")

let a = 0;

$("#general").click(function() {

	$(".center_title").html("General");
	$(".center_header_right").css("margin-left", "485px")
	$(".center_footer").css("top", "5px")

	$("#general_message").css("display", "block")

	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 0;

});

$("#support").click(function() {

	$(".center_title").html("Support");
	$(".center_header_right").css("margin-left", "485px")
	$(".center_footer").css("top", "5px")

	$("#support_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 1;

});

$("#marketing").click(function() {

	$(".center_title").html("Marketing");
	$(".center_header_right").css("margin-left", "458px")
	$(".center_footer").css("top", "5px")

	$("#marketing_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 2;

});

$("#ukraine").click(function() {

	$(".center_title").html("Ukraine");
	$(".center_header_right").css("margin-left", "485px")
	$(".center_footer").css("top", "5px")

	$("#ukraine_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 3;

});

$("#bali").click(function() {

	$(".center_title").html("Bali");
	$(".center_header_right").css("margin-left", "527px")
	$(".center_footer").css("top", "5px")

	$("#bali_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 4;

});

$("#poland").click(function() {

	$(".center_title").html("Poland");
	$(".center_header_right").css("margin-left", "499px")
	$(".center_footer").css("top", "5px")

	$("#poland_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 5;

});

$("#australia").click(function() {

	$(".center_title").html("Australia");
	$(".center_header_right").css("margin-left", "458px")
	$(".center_footer").css("top", "5px")

	$("#australia_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 6;

});

$("#jobs").click(function() {

	$(".center_title").html("Jobs");
	$(".center_header_right").css("margin-left", "527px")
	$(".center_footer").css("top", "5px")

	$("#jobs_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 7;

});

$("#startups").click(function() {

	$(".center_title").html("Startups");
	$(".center_header_right").css("margin-left", "472px")
	$(".center_footer").css("top", "5px")

	$("#startups_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 8;

});

$("#italy").click(function() {

	$(".center_title").html("Italy");
	$(".center_header_right").css("margin-left", "513px")
	$(".center_footer").css("top", "5px")

	$("#italy_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 9;

});

$("#freelance").click(function() {

	$(".center_title").html("Freelance");
	$(".center_header_right").css("margin-left", "458px")
	$(".center_footer").css("top", "5px")

	$("#freelance_message").css("display", "block")

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")

	$("#general_message_user").css("display", "none")
	$("#support_message_user").css("display", "none")
	$("#marketing_message_user").css("display", "none")
	$("#ukraine_message_user").css("display", "none")
	$("#bali_message_user").css("display", "none")
	$("#poland_message_user").css("display", "none")
	$("#australia_message_user").css("display", "none")
	$("#jobs_message_user").css("display", "none")
	$("#startups_message_user").css("display", "none")
	$("#italy_message_user").css("display", "none")
	$("#freelance_message_user").css("display", "none")

	a = 10;

});

$(".user_name").html("Ruslan Spanchak");
$(".user_job").html("Progremmer");
$("#username").html("@ruslan_spanchak");
$("#email").html("ruslanspanchakigorovych@gmail.com");
$("#skype").html("ruslan_spanchak");

$("#Orlando_Diggs").click(function() {

	$(".center_title").html("Orlando Diggs");
	$(".center_header_right").css("margin-left", "403px")
	$(".center_footer").css("top", "20px")
	$(".friends_circule_active").removeClass("friends_circule")

	$(".user_name").html("Orlando Diggs");
	$(".user_job").html("Friend");
	$("#username").html("@orlando_diggs");
	$("#email").html("orlandodiggs@gmail.com");
	$("#skype").html("orlando_diggs");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 11;

});

$("#Carmen_Velasco").click(function() {

	$(".center_title").html("Carmen Velasco");
	$(".center_header_right").css("margin-left", "389px")
	$(".center_footer").css("top", "20px")


	$(".user_name").html("Carmen Velasco");
	$(".user_job").html("Friend");
	$("#username").html("@carmen_velasco");
	$("#email").html("carmenvelasco@gmail.com");
	$("#skype").html("carmen_velasco");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 12;

});

$("#Marie_Jensen").click(function() {

	$(".center_title").html("Marie Jensen");
	$(".center_header_right").css("margin-left", "417px")
	$(".center_footer").css("top", "20px")
	

	$(".user_name").html("Marie Jensen");
	$(".user_job").html("Friend");
	$("#username").html("@marie_jensen");
	$("#email").html("mariejensen@gmail.com");
	$("#skype").html("marie_jensen");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 13;

});

$("#Alex_Leen").click(function() {

	$(".center_title").html("Alex Leen");
	$(".center_header_right").css("margin-left", "458px")
	$(".center_footer").css("top", "20px")
	

	$(".user_name").html("Alex Leen");
	$(".user_job").html("Friend");
	$("#username").html("@alex_leen");
	$("#email").html("alexleen@gmail.com");
	$("#skype").html("alex_leen");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 14;

});

$("#Leo_Gill").click(function() {

	$(".center_title").html("Leo Gill");
	$(".center_header_right").css("margin-left", "472px")
	$(".center_footer").css("top", "20px")
	

	$(".user_name").html("Leo Gill");
	$(".user_job").html("Friend");
	$("#username").html("@leo_gill");
	$("#email").html("leogill@gmail.com");
	$("#skype").html("leo_gill");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 15;

});

$("#Britney_Cooper").click(function() {

	$(".center_title").html("Britney Cooper");
	$(".center_header_right").css("margin-left", "389px")
	$(".center_footer").css("top", "20px")
	

	$(".user_name").html("Britney Cooper");
	$(".user_job").html("Friend");
	$("#username").html("@britney_cooper");
	$("#email").html("britneycooper@gmail.com");
	$("#skype").html("britney_cooper");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

	a = 16;

});

$(".icon_4").click(function() {

	$(".center_footer").css("top", "20px")
	$(".center_header_right").css("margin-left", "554px")
	$(".center_title").html("Me");

	$(".user_name").html("Ruslan Spanchak");
	$(".user_job").html("Progremmer");
	$("#username").html("@ruslan_spanchak");
	$("#email").html("ruslanspanchakigorovych@gmail.com");
	$("#skype").html("ruslan_spanchak");

	$("#general_message").css("display", "none")
	$("#support_message").css("display", "none")
	$("#marketing_message").css("display", "none")
	$("#ukraine_message").css("display", "none")
	$("#bali_message").css("display", "none")
	$("#poland_message").css("display", "none")
	$("#australia_message").css("display", "none")
	$("#jobs_message").css("display", "none")
	$("#startups_message").css("display", "none")
	$("#italy_message").css("display", "none")
	$("#freelance_message").css("display", "none")

});

$("#general_message_user").hide(0);
$("#support_message_user").hide(0);
$("#marketing_message_user").hide(0);
$("#ukraine_message_user").hide(0);
$("#bali_message_user").hide(0);
$("#poland_message_user").hide(0);
$("#australia_message_user").hide(0);
$("#startups_message_user").hide(0);
$("#italy_message_user").hide(0);
$("#freelance_message_user").hide(0);
$("#Orlando_Diggs_message_user").hide(0);
$("#Carmen_Velasco_message_user").hide(0);
$("#Marie_Jensen_message_user").hide(0);
$("#Alex_Leen_message_user").hide(0);
$("#Leo_Gill_message_user").hide(0);
$("#Britney_Cooper_message_user").hide(0);

$(".icon_6").click(function() {

	if (a === 0) {

		$("#general_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#general_message_user").show(250);
		$("#general_message_user").css("display", "flex");
		$("#general_message_user").css("flex-wrap", "wrap");

	} else if (a === 1) {

		$("#support_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#support_message_user").show(250);
		$("#support_message_user").css("display", "flex");
		$("#support_message_user").css("flex-wrap", "wrap");

	} else if (a === 2) {

		$("#marketing_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#marketing_message_user").show(250);
		$("#marketing_message_user").css("display", "flex");
		$("#marketing_message_user").css("flex-wrap", "wrap");

	} else if (a === 3) {

		$("#ukraine_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#ukraine_message_user").show(250);
		$("#ukraine_message_user").css("display", "flex");
		$("#ukraine_message_user").css("flex-wrap", "wrap");

	} else if (a === 4) {

		$("#bali_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#bali_message_user").show(250);
		$("#bali_message_user").css("display", "flex");
		$("#bali_message_user").css("flex-wrap", "wrap");

	} else if (a === 5) {

		$("#poland_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#poland_message_user").show(250);
		$("#poland_message_user").css("display", "flex");
		$("#poland_message_user").css("flex-wrap", "wrap");

	} else if (a === 6) {

		$("#australia_message_user").html($(".input_footer").val());
		$(".input_footer").val("");

		$("#australia_message_user").show(250);
		$("#australia_message_user").css("display", "flex");
		$("#australia_message_user").css("flex-wrap", "wrap");

	} else if (a === 7) {

		$("#jobs_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#jobs_message_user").show(250);
		$("#jobs_message_user").css("display", "flex");
		$("#jobs_message_user").css("flex-wrap", "wrap");

	} else if (a === 8) {

		$("#startups_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#startups_message_user").show(250);
		$("#startups_message_user").css("display", "flex");
		$("#startups_message_user").css("flex-wrap", "wrap");

	} else if (a === 9) {

		$("#italy_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#italy_message_user").show(250);
		$("#italy_message_user").css("display", "flex");
		$("#italy_message_user").css("flex-wrap", "wrap");

	} else if (a === 10) {

		$("#freelance_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#freelance_message_user").show(250);
		$("#freelance_message_user").css("display", "flex");
		$("#freelance_message_user").css("flex-wrap", "wrap");

	} else if (a === 11) {
		$("#Orlando_Diggs_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Orlando_Diggs_message_user").show(250);
		$("#Orlando_Diggs_message_user").css("display", "flex");
		$("#Orlando_Diggs_message_user").css("flex-wrap", "wrap");

	} else if (a === 12) {
		$("#Carmen_Velasco_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Carmen_Velasco_message_user").show(250);
		$("#Carmen_Velasco_message_user").css("display", "flex");
		$("#Carmen_Velasco_message_user").css("flex-wrap", "wrap");

	} else if (a === 13) {
		$("#Marie_Jensen_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Marie_Jensen_message_user").show(250);
		$("#Marie_Jensen_message_user").css("display", "flex");
		$("#Marie_Jensen_message_user").css("flex-wrap", "wrap");

	} else if (a === 14) {
		$("#Alex_Leen_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Alex_Leen_message_user").show(250);
		$("#Alex_Leen_message_user").css("display", "flex");
		$("#Alex_Leen_message_user").css("flex-wrap", "wrap");

	} else if (a === 15) {
		$("#Leo_Gill_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Leo_Gill_message_user").show(250);
		$("#Leo_Gill_message_user").css("display", "flex");
		$("#Leo_Gill_message_user").css("flex-wrap", "wrap");

	} else if (a === 16) {
		$("#Britney_Cooper_message_user").html($(".input_footer").val());
		$(".input_footer").val("");


		$("#Britney_Cooper_message_user").show(250);
		$("#Britney_Cooper_message_user").css("display", "flex");
		$("#Britney_Cooper_message_user").css("flex-wrap", "wrap");

	}

});