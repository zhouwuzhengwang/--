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
							create_navDiv();
							create_pageDiv();
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
function create_navDiv(){
	var str="<div class='navDivFoot'>"+
			"<ul class='ul1'>"+
				"<li><a>首页</a></li>"+
				"<li><a>浏览项目</a></li>"+
				"<li><a>新手帮助</a></li>"+
			"</ul>"+
			"<ul class='ul2'>"+
				"<li><div></div><a>发布项目</a></li>"+
				"<li><a>我的众筹</a></li>"+
			"</ul>"+
			"<ul class='ul3'>"+
				"<li><div></div><a>影音</a></li>"+
				"<li><div></div><a>公益</a></li>"+
				"<li><div></div><a>书籍</a></li>"+
				"<li><div></div><a>娱乐</a></li>"+
				"<li><div></div><a>科技</a></li>"+
				"<li><div></div><a>设计</a></li>"+
				"<li><div></div><a>动漫</a></li>"+
				"<li><div></div><a>游戏</a></li>"+
				"<li><div></div><a>农业</a></li>"+
				"<li><div></div><a>其他</a></li>"+
			"</ul>"+
			"<ul class='ul4'>"+
				"<li><div></div><a>我支持的项目</a></li>"+
				"<li><div></div><a>我喜欢的项目</a></li>"+
				"<li><div></div><a>我发起的项目</a></li>"+
			"</ul>"+
			"<div class='clearFloatDiv'></div>"+
		"</div>";
	$(".navDiv").append(str);
}
function create_pageDiv(){
	var str=
	"<div class='main rowDiv'>"+
		"<div class='main_left'>"+
			"<div class='on_banner rowDiv'>"+
				"<div class='banner'>"+
					"<div class='banner_info rowDiv'>"+
						"<div class='banner_01'></div>"+
						"<div class='banner_02'></div>"+
						"<div class='banner_03'></div>"+
						"<div class='banner_04'></div>"+
						"<div class='banner_05'></div>"+
						"<div class='banner_01'></div>"+
					"</div>"+
					"<div class='banner_em rowDiv'>"+
						"<em></em>"+
						"<em></em>"+
						"<em></em>"+
						"<em></em>"+
						"<em></em>"+
					"</div>"+
				"</div>"+
				"<div class='banner_right'>"+
					"<div class='banner_right_Div'></div>"+
					"<div class='banner_right_Div'></div>"+
				"</div>"+
			"</div>"+
			"<div class='under_banner rowDiv'>"+
				"<div class='totle_money'>"+
					"<div class='main_money_title'>累计众筹金额</div>"+
					"<div class='main_how_money'>206834万</div>"+
				"</div>"+
				"<div class='main_line'></div>"+
				"<div class='totle_money'>"+
					"<div class='main_money_title'>累计支持人数</div>"+
					"<div class='main_how_money'>2543.1万</div>"+
				"</div>"+
				"<div class='main_line'></div>"+
				"<div class='totle_money'>"+
					"<div class='main_money_title'>单向支持最高金额</div>"+
					"<div class='main_how_money'>3559万</div>"+
				"</div>"+
				"<div class='main_line'></div>"+
				"<div class='totle_money'>"+
					"<div class='main_money_title'>单向支持最高人数</div>"+
					"<div class='main_how_money'>34.8万</div>"+
				"</div>"+
			"</div>"+
		"</div>"+
		"<div class='main_right'>"+
			"<div class='main_right_top rowDiv'>"+
				"<div><label>即将开始</label></div>"+
				"<div><</div>"+
				"<div>></div>"+
			"</div>"+
			"<div class='main_right_info'>"+
				"<div class='main_right_info_date'>上线日期 07/17</div>"+
			"</div>"+
			"<div class='main_right_info'>"+
				"<div class='main_right_info_date'>上线日期 07/17</div>"+
			"</div>"+
			"<div class='main_right_info'>"+
				"<div class='main_right_info_date'>上线日期 07/17</div>"+
			"</div>"+
		"</div>"+
	"</div>"+
	"<div class='s_hot'>"+
		"<div class='s_hot_title'>热门推荐</div>"+
		"<div class='rowDiv div1'>"+
			"<div>大家都在看</div>"+
			"<a>无人机</a>"+
			"<a>VR</a>"+
			"<a>机器人</a>"+
		"</div>"+
		"<div class='rowDiv div2'>"+
			"<div class='tab-pannel'>"+
				"<div>1秒精准测温度计</div>"+
				"<div>医疗级1秒精准测量温度，让宝宝、牛奶、环境、宠物等测温变简单。</div>"+
				"<div>达成率</div>"+
				"<div>1047%</div>"+
				"<div class='tab-pannel_img'></div>"+
			"</div>"+
			"<div class='tab-pannel'>"+
				"<div>大圣之大胜</div>"+
				"<div>铜师傅力作，全黄铜，纯手绘</div>"+
				"<div>达成率</div>"+
				"<div>18950%</div>"+
				"<div class='tab-pannel_img'></div>"+
			"</div>"+
			"<div class='tab-pannel'>"+
				"<div>Kalar洗衣机</div>"+
				"<div>只能无线超声波</div>"+
				"<div>达成率</div>"+
				"<div>1447%</div>"+
				"<div class='tab-pannel_img'></div>"+
			"</div>"+
			"<div class='tab-pannel'>"+
				"<div>人脸加密U盘</div>"+
				"<div>人脸加密U盘，用前“刷”脸，U盘无忧！保护你的隐私。</div>"+
				"<div>达成率</div>"+
				"<div>5075%</div>"+
				"<div class='tab-pannel_img'></div>"+
			"</div>"+
			"<div class='tab-pannel'>"+
				"<div>三体挂壁智能音箱</div>"+
				"<div>FDY开启智能家居音箱壁挂时代.让你享受完美的家居音乐体验.</div>"+
				"<div>达成率</div>"+
				"<div>1074%</div>"+
				"<div class='tab-pannel_img'></div>"+
			"</div>"+
		"</div>"+
	"</div>"+
	"<div class='title'>"+
		"<div class='title_name1'>类目精选</div>"+
		"<div class='title_name2'>潮品尖货，创造力聚集地</div>"+
		"<div class='title_line left_line'></div>"+
		"<div class='title_line right_line'></div>"+
		"<div class='title_floor'>"+
			"<a>"+
				"<label>1F</label>"+
				"<label>科技></label>"+
			"</a>"+
		"</div>"+
	"</div>";

	for(var i=0;i<6;i++){
		str=str+
	"<div class='infoDiv'>"+
		"<div class='rowDiv'>"+
			"<div class='first_info'>"+
				"<div class='back_img'><img height='370px'/></div>"+
				"<div>口袋里的魔拍精灵</div>"+
				"<div>已筹金额￥743342.00</div>"+
				"<a class='first_info_href color1'>查看项目></a>"+
			"</div>";
		for(var j=0;j<3;j++){
			str=str+
			"<div class='information'>"+
				"<div class='imgDiv'><a></a></div>"+
				"<div class='hrefDiv'>【用前“刷”脸,U盘无忧!】人脸加密U盘</div>"+
				"<div class='rowDiv'>"+
					"<a>家电</a>"+
					"<a>网络设备</a>"+
					"<a>家电</a>"+
				"</div>"+
				"<div class='progress_bar_gray'></div>"+
				"<div class='progress_bar_blue'></div>"+
				"<div class='info_foot rowDiv'>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>1347%</div>"+
						"<div class='info_footr_down'>达成率</div>"+
					"</div>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>13472082.00</div>"+
						"<div class='info_footr_down'>已筹金额</div>"+
					"</div>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>12418</div>"+
						"<div class='info_footr_down'>支持人数</div>"+
					"</div>"+
				"</div>"+
			"</div>";
		}
			str=str+"</div>"+
		"<div class='rowDiv'>";
		for(var j=0;j<4;j++){
			str=str+
			"<div class='information'>"+
				"<div class='imgDiv'><a></a></div>"+
				"<div class='hrefDiv'>【用前“刷”脸,U盘无忧!】人脸加密U盘</div>"+
				"<div class='rowDiv'>"+
					"<a>家电</a>"+
					"<a>网络设备</a>"+
					"<a>家电</a>"+
				"</div>"+
				"<div class='progress_bar_gray'></div>"+
				"<div class='progress_bar_blue'></div>"+
				"<div class='info_foot rowDiv'>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>1347%</div>"+
						"<div class='info_footr_down'>达成率</div>"+
					"</div>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>13472082.00</div>"+
						"<div class='info_footr_down'>已筹金额</div>"+
					"</div>"+
					"<div class='info_footr'>"+
						"<div class='info_footr_up'>12418</div>"+
						"<div class='info_footr_down'>支持人数</div>"+
					"</div>"+
				"</div>"+
			"</div>";
		}
		str=str+
		"</div>"+
	"</div>";
		if(i<5){
			str=str+
	"<div class='title nohead'>"+
		"<div class='title_floor'>"+
			"<a>"+
				"<label>"+(i+2)+"F"+"</label>"+
				"<label>"+_floors_name[i+1]+"></label>"+
			"</a>"+
		"</div>"+
	"</div>";
		}
	}
	str=str+
	"</div>"
	$(".pageDiv").append(str);
}