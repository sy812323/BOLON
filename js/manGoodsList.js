$(function(){
	$(".change").click(function(){
		if($(".change").hasClass("change1")){
			$(".change").removeClass("change1");
			$(".cm_ul").css("display","block");
		}else{
			$(".change").addClass("change1");
			$(".cm_ul").css("display","none");
		}
	});

	//点击点点切换商品图片
	$(".yan_list1 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list1 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list1 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list2 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list2 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list2 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list3 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list3 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list3 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list4 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list4 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list4 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list5 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list5 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list5 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list6 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list6 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list6 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
	$(".yan_list7 .diandian a").click(function(event){ 
		if(event.currentTarget === this){
			let dds=$(".yan_list7 .click_toggle dd");
			// console.log(dds.length);
			let currIndex=$(this).attr("index");
			// console.log(currIndex);
			for(let i=0;i<dds.length;i++){
				dds[i].style.display="none";
			}
			dds[currIndex].style.display="block";
			let uls=$(".yan_list7 .diandian a");
			for(let i=0;i<uls.length;i++){
				uls[i].style.backgroundColor="white";
			}
			uls[currIndex].style.backgroundColor="#7f7f7f";
		}
	});
});