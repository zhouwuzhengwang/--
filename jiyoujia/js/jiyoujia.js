function set_action(){	
	$("body .filter_row .by_or_hdfk").find("span").click(function(){
		if($(this).css("background-position")=="-435px -382px"){
			$(this).css("background-position","-435px -359px");
		}
		else{
			$(this).css("background-position","-435px -382px");
		}
	});

	$("body .find_price_div").mouseenter(function(){
		$(this).css("background-color","white").css("border","1px solid rgba(204,204,204,1)").css("border-bottom","1px solid rgb(232,232,232)");
	}).mouseleave(function(){
		$(this).css("background-color","rgb(245,245,245)").css("border","1px solid rgba(204,204,204,0)").css("border-bottom","1px solid rgb(232,232,232)");
	});

	$("body .navDiv .address").mouseenter(function(){
		$(this).css("background-color","white").css("border","1px solid rgba(204,204,204,1)").css("border-bottom","none");
		$("body .navDiv .address_info").css("display","block");
	}).mouseleave(function(){
		$(this).css("background-color","rgba(1,1,1,0)").css("border","1px solid rgba(204,204,204,0)").css("border-bottom","none");
		$("body .navDiv .address_info").css("display","none");
	});

	$("body .navDiv .address_info").mouseover(function(){
		$("body .navDiv .address").css("background-color","white").css("border","1px solid rgba(204,204,204,1)").css("border-bottom","none");
		$("body .navDiv .address_info").css("display","block");
	}).mouseleave(function(){
		$("body .navDiv .address_info").css("display","none");
		$("body .navDiv .address").css("background-color","rgba(1,1,1,0)").css("border","1px solid rgba(204,204,204,0)").css("border-bottom","none");
	});

	$("body .product_page .product .img").mouseenter(function(){
		var count=0;
		var _this=this;
		var timer=setInterval(function(){
			$(_this).find(".row").css("bottom",count-30+"px");
			if(count>=30){
				clearInterval(timer);
			}
			count++;
		},5);
	}).mouseleave(function(){
		var count=0;
		var _this=this;
		var timer=setInterval(function(){
			$(_this).find(".row").css("bottom",0-count+"px");
			if(count>=30){
				clearInterval(timer);
			}
			count++;
		},5);
	});

	$("body .navUl li").mouseenter(function(){
		$(this).css("color","rgb(255,68,0)").siblings().css("color","#6d6d6d");
	}).mouseleave(function(){
		$(this).css("color","#6d6d6d");
	});

	$("body .navDiv .which_page .left").mousedown(function(){
		$("body .navDiv .which_page").find(".left").find("span").css("background-position","-142px -423px");
	}).mouseup(function(){
		$("body .navDiv .which_page").find(".left").find("span").css("background-position","-126px -423px");
	});

	$("body .navDiv .which_page .right").mousedown(function(){
		$("body .navDiv .which_page").find(".right").find("span").css("background-position","-190px -423px");
	}).mouseup(function(){
		$("body .navDiv .which_page").find(".right").find("span").css("background-position","-174px -423px");
	});

	$("body .navDiv .which_page .left").click(function(){
		this_page=((this_page-1)<=0?0:(this_page-1));
		how_many_pages();
		console.log(max_page);
		$("body .navDiv .which_page").find("span").eq(2).text(""+max_page);
		$("body .navDiv .which_page").find("span").eq(1).text("").text(this_page+1);
		if(this_page==0){
			$("body .navDiv .which_page").find(".left").find("span").css("background-position","-158px -423px");
		}else{
			$("body .navDiv .which_page").find(".right").find("span").css("background-position","-126px -423px");
		}
		clear_action();
		createDOM(selector_arrs(this_page));
		set_action();
	});

	$("body .navDiv .which_page .right").click(function(){
		this_page=((this_page)>=(max_page-1)?(max_page-1):(this_page+1));
		how_many_pages();
		console.log(max_page);
		$("body .navDiv .which_page").find("span").eq(2).text(""+max_page);
		$("body .navDiv .which_page").find("span").eq(1).text("").text(this_page+1);
		if(this_page>=(max_page-1)){
			$("body .navDiv .which_page").find(".right").find("span").css("background-position","-206px -423px");
		}else{
			$("body .navDiv .which_page").find(".left").find("span").css("background-position","-126px -423px");
		}
		clear_action();
		createDOM(selector_arrs(this_page));
		set_action();
	});

	$("body .product_page .row .product").mouseover(function(){
		$(this).find(".tags").find(".buy").css("display","block");
	}).mouseleave(function(){
		$(this).find(".tags").find(".buy").css("display","none");
	});	

	$("body .product_page .row .product").find(".buy").click(function(){
		var _this=this;
		if(get_money){
			get_money=false;
			$.ajax({
				url:"http://www.ikindness.cn/api/test/getInfo",
				data:{
					userId:123456
				}
			}).done(function(data){
				money=parseFloat(data.data.money);
				var price_str=$(_this).parent().parent().find(".price")[0].innerHTML;
				price_str=price_str.substring(1,price_str.length);
				money=money-parseFloat(price_str);
				if(money>=0){
				alert("你还有"+ money +"块钱");
				}else{
					money=money+parseFloat(price_str);
					alert("当前账户余额不足");
				}
			});
		}
		else{
			var price_str=$(_this).parent().parent().find(".price")[0].innerHTML;
			price_str=price_str.substring(1,price_str.length);
			money=money-parseFloat(price_str);
			if(money>=0){
				alert("你还有"+ money +"块钱");
			}else{
				money=money+parseFloat(price_str);
				alert("当前账户余额不足");
			}
		}
	});


	$("body .product_page .row .product .store_info").mouseenter(function(){
		$(this).parent().find(".store_information").css("display","block");
	}).mouseleave(function(){
		$(this).parent().find(".store_information").css("display","none");
	});
	$("body .product_page .row .product .store_information").mouseover(function(){
		$(this).css("display","block");
	}).mouseleave(function(){
		$(this).css("display","none");
	});
}
function set_click(){
	$("body .navUl li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		this_page=0;
		switch($(this).index()){
			case 0:
				//arrs=o_arrs;
				sort_up_by_price(arrs);
				break;
			case 1:
				sort_down_by_price(arrs);
				break;
			case 2:
				sort_up_by_sales(arrs);
				break;
			case 3:
				sort_down_by_sales(arrs);
				break;
		}
		$("body .navDiv .which_page").find("span").eq(1).text(1);
		$("body .navDiv .which_page").find("span").eq(2).text("/"+max_page);
		clear_action();
		createDOM(selector_arrs(this_page));
		set_action();
	});
}
function clear_action(){
	$("body .navDiv .which_page .left").unbind();
	$("body .navDiv .which_page .right").unbind();
	$("body .navDiv .which_page .left").unbind();
	$("body .navDiv .which_page .right").unbind();
}
function to_find_price(){
	$("body .navDiv .find_price_div .to_find_price").click(function(){
		switch(type){
			case 1:
				o_arrs=sort_up_by_price(o_arrs);
				break;
			case 2:
				o_arrs=sort_down_by_price(o_arrs);
				break;
			case 3:
				o_arrs=sort_up_by_sales(o_arrs);
				break;
			case 4:
				o_arrs=sort_down_by_sales(o_arrs);
				break;
		}
		arrs=o_arrs;
		var min=($("body .navDiv .find_price_div .minprice")).val();
		var max=($("body .navDiv .find_price_div .maxprice")).val();
		arrs=selector(arrs,min,max);
		this_page=0;
		console.log(arrs.length);
		console.log(o_arrs.length);
		clear_action();
		createDOM(selector_arrs(this_page));
		set_action();
		how_many_pages();
		console.log(max_page);
		$("body .navDiv .which_page").find("span").eq(1).text(1);
		$("body .navDiv .which_page").find("span").eq(2).text("/"+max_page);
		if(type>=1&&type<=4){
			$("body .navDiv").find("li").eq(type-1).addClass("current").siblings().removeClass("current");
		}
	});
}
function how_many_pages(){
	max_page=parseInt(parseInt(arrs.length/10))+1;
	if((parseInt(arrs.length)%10==0)&&(parseInt(arrs.length)!=0)){
		max_page=max_page-1;
	}
}
var o_arrs,arrs;
var this_page;
var flag=false;
var max_page=6;
var get_money=true;
var money;
var type=0;
$.ajax({
	url:"http://www.ikindness.cn/api/test/getProduct",
	data:{

	}
}).done(function(data){
	arrs=data.data;
	o_arrs=arrs;
	this_page=0;
	createDOM(selector_arrs(this_page));
	set_click();
	set_action();
	to_find_price();
});
function selector(arrs,min,max){
	var new_arr=[];
	var count=0;
	for(var i=0;i<arrs.length;i++){
		if((parseFloat(arrs[i].price)>=min)&&(parseFloat(arrs[i].price)<=max)){
			new_arr[count]=arrs[i];
			count++;
		}
	}
	arrs=new_arr;
	return new_arr;
}
function sort_up_by_price(arrs){
	type=1;
	for(var i=0;i<arrs.length-1;i++){
		for(var j=0;j<arrs.length-1;j++){
			if(parseFloat(arrs[j].price)>parseFloat(arrs[j+1].price)){
				var temp=arrs[j];
				arrs[j]=arrs[j+1];
				arrs[j+1]=temp;
			}
		}
	}
	return arrs;
}
function sort_down_by_price(arrs){
	type=2;
	for(var i=0;i<arrs.length-1;i++){
		for(var j=0;j<arrs.length-1;j++){
			if(parseFloat(arrs[j].price)<parseFloat(arrs[j+1].price)){
				var temp=arrs[j];
				arrs[j]=arrs[j+1];
				arrs[j+1]=temp;
			}
		}
	}
	return arrs;
}
function sort_up_by_sales(arrs){
	type=3;
	for(var i=0;i<arrs.length-1;i++){
		for(var j=0;j<arrs.length-1;j++){
			if(parseFloat(arrs[j].sold)>parseFloat(arrs[j+1].sold)){
				var temp=arrs[j];
				arrs[j]=arrs[j+1];
				arrs[j+1]=temp;
			}
		}
	}
	return arrs;
}
function sort_down_by_sales(arrs){
	type=4;
	for(var i=0;i<arrs.length-1;i++){
		for(var j=0;j<arrs.length-1;j++){
			if(parseFloat(arrs[j].sold)<parseFloat(arrs[j+1].sold)){
				var temp=arrs[j];
				arrs[j]=arrs[j+1];
				arrs[j+1]=temp;
			}
		}
	}
	return arrs;
}
function createDOM(arrs){
	$("body .product_page").find(".row").remove();
	$("body .navDiv .which_page").find("span").eq(2).text("").text("/"+max_page);
	var str="";
	var max_length1,max_length2;
	if(parseInt(arrs.length)<=0){
		max_length1=0;
	}else if(parseInt(arrs.length)<=5){
		max_length1=1;
	}else if(parseInt(arrs.length)<=10){
		max_length1=2;
	}
	for(var i=0;i<max_length1;i++){
		str=str+"<div class='row'>";
		if(max_length1==0){
			return;
		}
		else{
			if(max_length1==1){
				max_length2=parseInt(arrs.length);
			}
			else if(max_length1==2&&i==0){
				max_length2=5;
			}
			else if(max_length1==2&&i==1){
				max_length2=parseInt(arrs.length)-5;
			}
		}
		for(var j=0;j<max_length2;j++){
			str=str+"<div class='product'>";
				str=str+"<div class='img'>";
					str=str+"<img ";
					str=str+"src='";
					str=str+"http:"+arrs[i*5+j].image.substring(0,arrs[i*5+j].image.length-6);
					str=str+"'/>";
					str=str+"<div class='row'>";
						str=str+"<a>找同款</a>";
						str=str+"<a>找相似</a>";
					str=str+"</div>"
				str=str+"</div>";
				str=str+"<div class='price_div'>";
					str=str+"<label class='price'>";
					str=str+"￥"+arrs[i*5+j].price;
					str=str+"</label>";
					str=str+"<label class='baoyou'>";
					str=str+"</label>";
					str=str+"<label class='amount'>";
					str=str+"已售"+arrs[i*5+j].sold+"件";
					str=str+"</label>";
					str=str+"<div class='clearFloatDiv'></div>";
				str=str+"</div>";
				str=str+"<div class='name'>";
					str=str+"<a>";
						str=str+arrs[i*5+j].name;
					str=str+"</a>";
				str=str+"</div>";
				str=str+"<div class='store_info'>";
					str=str+"<div class='three_info'>";
						str=str+"<div></div>";
						str=str+"<div></div>";
						str=str+"<div></div>";
					str=str+"</div>";
					str=str+"<div class='boss'>";
						str=str+"<a>";
							str=str+arrs[i*5+j].owner;
						str=str+"</a>";
					str=str+"</div>";
					str=str+"<div class='place'>";
						str=str+arrs[i*5+j].location;
					str=str+"</div>";
				str=str+"</div>";
				str=str+"<div class='clearFloatDiv'></div>";
				str=str+"<div class='tags'>";
					str=str+"<div class='gold'></div>";
					str=str+"<div class='fu'></div>";
					str=str+"<div class='xian'></div>";
					str=str+"<div class='buy'>购买</div>";
				str=str+"</div>";
				str=str+"<div class='clearFloatDiv'></div>";
				str=str+"<div class='store_information'>";
					str=str+"<div class='row'>";
						str=str+"<span></span>";
						str=str+"<span></span>";
						str=str+"<label>好评率：99.89%</label>";
					str=str+"</div>";
					str=str+"<div class='line'></div>";
					str=str+"<div class='row'>";
						str=str+"<label>如实描述：4.89</label>";
						str=str+"<label>比同行均值高</label>";
						str=str+"<label>16.39%</label>";
					str=str+"</div>";
					str=str+"<div class='row'>";
						str=str+"<label>服务态度：4.90</label>";
						str=str+"<label>比同行均值高</label>";
						str=str+"<label>14.32%</label>";
					str=str+"</div>";
					str=str+"<div class='row'>";
						str=str+"<label>物流服务：4.76</label>";
						str=str+"<label>比同行均值高</label>";
						str=str+"<label>20.06%</label>";
					str=str+"</div>";
				str=str+"</div>";
			str=str+"</div>";
		}
		str=str+"</div>";
	}
	$("body .product_page").append(str);
}
function selector_arrs(this_page){
	var new_arrs=[];
	var maxlength;
	if((arrs.length-this_page*10-10)>=0){
		maxlength=10;
	}
	else{
		maxlength=arrs.length%10;
	}
	for(var i=0;i<maxlength;i++){
		new_arrs[i]=arrs[this_page*10+i];
	}
	return new_arrs;
}
