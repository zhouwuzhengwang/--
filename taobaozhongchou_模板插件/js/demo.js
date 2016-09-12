var count=0;
var _data=[];
var floor=0;
var _floors_name=["科技","生活","设计","娱乐","农业","公益"];


setInterval(function(){
	var timer=setInterval(function(){
		count=count+5;
		$("body .banner_info").css("left",-count+"px");
		if(count%540==0){clearInterval(timer);}
	},1);
	if(count>=(540*5)){count=0;}
	$("body .banner_em.rowDiv em").eq((count/540+1)%5).addClass("current").siblings().removeClass("current");
},2000);


$.ajax({
	url : "http://www.ikindness.cn/api/test/getInfo",
	data : {
		userId : 31514112//用户id，number类型随便给
	}
}).done(function(data){
	$.ajax({
		url : "http://www.ikindness.cn/api/test/getFund",
		data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
			type : 1//与楼层大类同序
		}
	}).done(function(data){
		for(var i=0;i<8;i++){
			_data[floor*8+i]=data.data[i];
		}
		floor++;
		console.log(_data);
		$.ajax({
			url : "http://www.ikindness.cn/api/test/getFund",
			data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
				type : 2//与楼层大类同序
			}
		}).done(function(data){
			for(var i=0;i<8;i++){
				_data[floor*8+i]=data.data[i];
			}
			floor++;
			console.log(_data);
			$.ajax({
				url : "http://www.ikindness.cn/api/test/getFund",
				data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
					type : 3//与楼层大类同序
				}
			}).done(function(data){
				for(var i=0;i<8;i++){
					_data[floor*8+i]=data.data[i];
				}
				floor++;
				console.log(_data);
				$.ajax({
					url : "http://www.ikindness.cn/api/test/getFund",
					data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
						type : 4//与楼层大类同序
					}
				}).done(function(data){
					for(var i=0;i<8;i++){
						_data[floor*8+i]=data.data[i];
					}
					floor++;
					console.log(_data);
					$.ajax({
						url : "http://www.ikindness.cn/api/test/getFund",
						data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
							type : 5//与楼层大类同序
						}
					}).done(function(data){
						for(var i=0;i<8;i++){
							_data[floor*8+i]=data.data[i];
						}
						floor++;
						console.log(_data);
						$.ajax({
							url : "http://www.ikindness.cn/api/test/getFund",
							data : {	//不给此参数，请求一次返回所有，或者给此参数，分别请求6种type
								type : 6//与楼层大类同序
							}
						}).done(function(data){
							for(var i=0;i<8;i++){
								_data[floor*8+i]=data.data[i];
							}
							console.log(_data);
							create_dom();
							set_src();
							set_action();
						})
					})
				})
			})
		})
	})
});
function set_src(){
	for(var i=0;i<_data.length;i++){
		if(i%8==0){
			$("body .infoDiv").eq(parseInt(i/8)).find(".back_img").find("img")[0].src=_data[i].image;
			$("body .infoDiv").eq(parseInt(i/8)).find(".first_info").find("div").eq(1).text(_data[i].name);
			$("body .infoDiv").eq(parseInt(i/8)).find(".first_info").find("div").eq(2).text("已筹金额￥"+_data[i].sum);
		}
		else{
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".imgDiv").css("background-image","url('"+_data[i].image+"')");
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".hrefDiv").text(_data[i].name);
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".rowDiv").find("a").eq(0).text(_data[i].label[0]);
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".rowDiv").find("a").eq(1).text(_data[i].label[1]);
			if(_data[i].label.length==3){
				$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".rowDiv").find("a").eq(2).text(_data[i].label[2]);
			}
			else{
				$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".rowDiv").find("a").eq(2).remove();
			}
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".progress_bar_blue").css("width",(parseInt(_data[i].rate)/100>=1?1:parseInt(_data[i].rate)/100)*250+"px");
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".info_foot").find(".info_footr").eq(0).find(".info_footr_up").text(_data[i].rate+"%");
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".info_foot").find(".info_footr").eq(1).find(".info_footr_up").text(_data[i].sum);
			$("body .infoDiv").eq(parseInt(i/8)).find(".information").eq(i%8-1).find(".info_foot").find(".info_footr").eq(2).find(".info_footr_up").text(_data[i].amount);
		}
	}
}
function create_dom(){
	$(".navDiv")[0].innerHTML=template("create_navDiv",{
		
	});
	$(".pageDiv")[0].innerHTML=template("create_pageDiv",{
		floors_name:_floors_name
	});
}
function set_action(){
	$("body").mouseleave(function(){
		$("ul3,ul4").slideUp();
	});
	$("body .navDiv .navDivFoot .ul1 li:nth-child(2) a").mouseenter(function(){
		$("body .navDiv .navDivFoot .ul3 li").css("background-color","white").css("color","black");
		$("body .navDiv .navDivFoot .ul3").css("display","none").slideDown();
		$("body .navDiv .navDivFoot .ul4").slideUp();
	});
	$("body .navDiv .navDivFoot .ul1 li:not(:nth-child(2))").mouseenter(function(){
		$("body .navDiv .navDivFoot .ul3").slideUp();
		$("body .navDiv .navDivFoot .ul4").slideUp();
	});
	$("body .navDiv .navDivFoot .ul3").mouseleave(function(){
		$(this).slideUp();
		$("body .navDiv .navDivFoot .ul4").slideUp();
	});
	$("body .navDiv .navDivFoot .ul2 li:nth-child(2) a").mouseenter(function(){
		$("body .navDiv .navDivFoot .ul4").css("display","none").slideDown();
		$("body .navDiv .navDivFoot .ul3").slideUp();
	});
	$("body .navDiv .navDivFoot .ul4").mouseleave(function(){
		$(this).slideUp();
		$("body .navDiv .navDivFoot .ul3").slideUp();
	});
	$("body .navDiv .navDivFoot .ul2 li:not(:nth-child(1))").mouseenter(function(){
		$("body .navDiv .navDivFoot .ul4").slideUp();
		$("body .navDiv .navDivFoot .ul3").slideUp();
	});
	$("body .navDiv .navDivFoot .ul3 li").mouseenter(function(){
		$(this).css("background-color","rgb(0,205,204)").css("color","white");
		$(this).siblings().css("background-color","white").css("color","black");
		$(this).find("div").css("backgroundPositionY","-50px");
		$(this).siblings().find("div").css("backgroundPositionY","0px");
	}).mouseleave(function(){
		$(this).css("background-color","white").css("color","black");
		$(this).find("div").css("backgroundPositionY","0px");
	});
	$("body .navDiv .navDivFoot .ul4 li").mouseenter(function(){
		$(this).css("background-color","rgb(0,205,204)").css("color","white");
		$(this).siblings().css("background-color","white").css("color","black");
		$(this).find("div").css("backgroundPositionY","-50px");
		$(this).siblings().find("div").css("backgroundPositionY","0px");
	}).mouseleave(function(){
		$(this).css("background-color","white").css("color","black");
		$(this).find("div").css("backgroundPositionY","0px");
	});
	$("body .navDiv .navDivFoot .ul2 li:nth-child(1)").mouseenter(function(){
		$("body .navDiv .navDivFoot .ul2 li div").css("background-image","url('./img/pen-blue.png')");
	}).mouseleave(function(){
		$("body .navDiv .navDivFoot .ul2 li div").css("background-image","url('./img/pen-black.png')");
	});
}