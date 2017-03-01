$(document).ready(function(){
	//��ȡê�㼴��ǰͼƬid
	var picid = location.hash;
	picid = picid.substring(1);
	if(isNaN(picid) || picid=='' || picid==null) {
		picid = 1;
	}
	picid = parseInt(picid);

	//ͼ��ͼƬ����
	var totalnum = $("#pictureurls li").length;
	//�����ǰͼƬid����ͼƬ������ʾ��һ��ͼƬ
	if(picid > totalnum || picid < 1) {
		picid = 1;
		next_picid = 1;	//��һ��ͼƬid
	} else {
		next_picid = picid + 1;
	}

	url = $("#pictureurls li:nth-child("+picid+") img").attr("rel");
	$("#big-pic").html("<img src='"+url+"' onload='loadpic("+next_picid+")'>");
	$('#big-pic img').LoadImage(true, 890, 650,$("#load_pic").attr('rel'));
	$("#picnum").html("("+picid+"/"+totalnum+")");
	$("#picinfo").html($("#pictureurls li:nth-child("+picid+") img").attr("alt"));

	$("#pictureurls li").click(function(){
		i = $(this).index() + 1;
		showpic(i);
	});

	//����ʱͼƬ�������м�
	var _w = $('.cont li').width()*$('.cont li').length;
	if(picid>2) {
		movestep = picid - 3;
	} else {
		movestep = 0;
	}
	$(".cont ul").css({"left":-+$('.cont li').width()*movestep});

	//���ͼƬ����
	$('.cont ul').width(_w);
	$(".cont li").click( function () {
	    if($(this).index()>2){
			movestep = $(this).index() - 2;
			$(".cont ul").css({"left":-+$('.cont li').width()*movestep});
		}
	});
	//��ǰ����ͼ�����ʽ
	$("#pictureurls li:nth-child("+picid+")").addClass("on");

});

$(document).keyup(function(e) {     
	var currKey=0,e=e||event;
	currKey=e.keyCode||e.which||e.charCode;
	switch(currKey) {     
		case 37: // left
			showpic('pre');
			break;
		case 39: // up
			showpic('next');
			break;
		case 13: // enter
			var nextpicurl = $('#nextPicsBut').attr('href');
			if(nextpicurl !== '' || nextpicurl !== 'null') {
				window.location=nextpicurl;
			}
			break;
	}   
});


function showpic(type, replay) {
	//�����ظ�����div
	$("#endSelect").hide();

	//ͼ��ͼƬ����
	var totalnum = $("#pictureurls li").length;
	if(type=='next' || type=='pre') {
		//��ȡê�㼴��ǰͼƬid
		var picid = location.hash;
		picid = picid.substring(1);
		if(isNaN(picid) || picid=='' || picid==null) {
			picid = 1;
		}
		picid = parseInt(picid);

		if(type=='next') {
			i = picid + 1;
			//��������һ��ͼƬ��ָ��ָ���һ��
			if(i > totalnum) {
				$("#endSelect").show();
				i=1;
				next_picid=1;
				//���²���
				if(replay!=1) {
					return false;
				} else {
					$("#endSelect").hide();
				}
			} else {
				next_picid = parseInt(i) + 1;
			}

		} else if (type=='pre') {
			i = picid - 1;
			//����ǵ�һ��ͼƬ��ָ��ָ�����һ��
			if(i < 1) {
				i=totalnum;
				next_picid = totalnum;
			} else {
				next_picid = parseInt(i) - 1;
			}
		}
		url = $("#pictureurls li:nth-child("+i+") img").attr("rel");
		$("#big-pic").html("<img src='"+url+"' onload='loadpic("+next_picid+")'>");
		$('#big-pic img').LoadImage(true, 890, 650,$("#load_pic").attr('rel'));
		$("#picnum").html("("+i+"/"+totalnum+")");
		$("#picinfo").html($("#pictureurls li:nth-child("+i+") img").attr("alt"));
		//����ê��
		location.hash = i;
		type = i;

		//���ͼƬ����
		var _w = $('.cont li').width()*$('.cont li').length;
		if(i>2) {
			movestep = i - 3;
		} else {
			movestep = 0;
		}
		$(".cont ul").css({"left":-+$('.cont li').width()*movestep});
	} else if(type=='big') {
		//��ȡê�㼴��ǰͼƬid
		var picid = location.hash;
		picid = picid.substring(1);
		if(isNaN(picid) || picid=='' || picid==null) {
			picid = 1;
		}
		picid = parseInt(picid);

		url = $("#pictureurls li:nth-child("+picid+") img").attr("rel");
		window.open(url);
	} else {
		url = $("#pictureurls li:nth-child("+type+") img").attr("rel");
		$("#big-pic").html("<img src='"+url+"'>");
		$('#big-pic img').LoadImage(true, 890, 650,$("#load_pic").attr('rel'));
		$("#picnum").html("("+type+"/"+totalnum+")");
		$("#picinfo").html($("#pictureurls li:nth-child("+type+") img").attr("alt"));
		location.hash = type;
	}

	$("#pictureurls li").each(function(i){
		j = i+1;
		if(j==type) {
			$("#pictureurls li:nth-child("+j+")").addClass("on");
		} else {
			$("#pictureurls li:nth-child("+j+")").removeClass();
		}
	});
}
//Ԥ����ͼƬ
function loadpic(id) {
	url = $("#pictureurls li:nth-child("+id+") img").attr("rel");
	$("#load_pic").html("<img src='"+url+"'>");
}