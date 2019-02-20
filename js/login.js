$(function(){
	$(".gou a").toggle(
		function(){
			$(".gou a").css({"background-image":"url(img/dui1.png)","background-size":"100%"});
		},
		function(){
			$(".gou a").css({"background-image":"","background-size":""});
		}
	);
	// 点击登录提示
	// $(".login_sub1").click(function(){
	// 	$(".push_zhang").css("visibility","visible");
	// });
	// $(".btn").click(function(){
	// 	$(".push_zhang").css("visibility","hidden");
	// });

	$(".login_sub1").click(function(){
		if($(".login_input_zhang").val()==""){
			$(".push_zhang").css("visibility","visible");
		}else if($(".login_input_mi").val()==""){
			$(".push_mi").css("visibility","visible");
		}
	});
	$(".btn").click(function(){
		$(".login_alert").css("visibility","hidden");
	});
	//鼠标移入注册按钮变色
	$(".register_alert").mouseover(function(){
		$(".register_alert").css({"background-color":"#000","color":"white"});
	});
	$(".register_alert").mouseout(function(){
		$(".register_alert").css({"background-color":"","color":"#333"});
	});
	//点击注册提示
	$(".register_alert").click(function(){
		$(".register").css("display","block");
	});
	$(".close").click(function(){
		$(".register").css("display","none");
	});
	//点击忘记密码提示
	$(".forgetM").click(function(){
		$(".forgetM_alert").css("display","block");
	});
	$(".close").click(function(){
		$(".forgetM_alert").css("display","none");
	});
})