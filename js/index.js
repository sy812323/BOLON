function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
let myTimer=null;
let currIndex=0;
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer=setInterval(function(){
		currIndex+=1;
		if(currIndex>=3){
			currIndex=0;
		}
		let imgs=$("#box").children;
		for(let i=0;i<imgs.length-1;i++){
			imgs[i].style.zIndex=1;
		}
		imgs[currIndex].style.zIndex=2;
		let uls=$("#doudouBox").children;
		for(let i=0;i<uls.length;i++){
			uls[i].style.backgroundColor="gray";
		}
		uls[currIndex].style.backgroundColor="white";
	},2000);
}
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer=null;
}
function doudouChange(index){
	currIndex=index;
	let imgs=$("#box").children;
	for(let i=0;i<imgs.length-1;i++){
		imgs[i].style.zIndex=1;
	}
	imgs[currIndex].style.zIndex=2;
	let uls=$("#doudouBox").children;
	for(let i=0;i<uls.length;i++){
		uls[i].style.backgroundColor="gray";
	}
	uls[currIndex].style.backgroundColor="white";
}
window.onload=function(){
	autoPlay();
	$("#box").onmouseover=function(){
		stopPlay();
	}
	$("#box").onmouseout=function(){
		autoPlay();
	}
	$("#doudouBox").onclick=function(event){
		let evt=event||window.event;
		if(evt.target.tagName.toLowerCase()=="li"){
			doudouChange(evt.target.getAttribute("index"));
		}
	}
}

// $(function(){
// 	function getCookie(key){
// 		let str = unescape(document.cookie);	
// 		let arr = str.split("; ");
// 		for(let i in arr){
// 			if(arr[i].indexOf(key+"=")==0){
// 				return arr[i].split("=")[1];
// 				// alert(arr[i].split("=")[1]);
// 			}
// 		}
		
// 		return null;
// 	}	
// 	let temp = getCookie("userphone");
// 	// console.log(temp);
// 		$.post("loginCheckone.php",{"userphone":temp},function(data){
// 			// console.log(data);
// 			if (data==1) {
// 				console.log("haha");
// 				$(".login a").css("display","none");
// 				$(".login span").css("display","block");
// 				$(".login span").html("欢迎："+temp);
// 			}
// 		})
// })
