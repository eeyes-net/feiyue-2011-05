/**
 * ��Ա���Ĺ���js
 *
 */

/**
 * ����html element
 */
function hide_element(name) {
	$('#'+name+'').fadeOut("slow");
}

/**
 * ��ʾhtml element
 */
function show_element(name) {
	$('#'+name+'').fadeIn("slow");
}

$(document).ready(function(){
����$("input.input-text").blur(function () { this.className='input-text'; } );
����$("input.input-text',input[type='password'],textarea").focus(function () { this.className='input-focus'; } );
});

/**
 * url��ת
 */
function redirect(url) {
	if(url.indexOf('://') == -1 && url.substr(0, 1) != '/' && url.substr(0, 1) != '?') url = $('base').attr('href')+url;
	location.href = url;
}


function thumb_images(uploadid,returnid) {
	var d = window.top.art.dialog({id:uploadid}).data.iframe;
	var in_content = d.$("#att-status").html().substring(1);
	if(in_content=='') return false;
	if($('#'+returnid+'_preview').attr('src')) {
		$('#'+returnid+'_preview').attr('src',in_content);
	}
	$('#'+returnid).val(in_content);
}
function change_images(uploadid,returnid){
	var d = window.top.art.dialog({id:uploadid}).data.iframe;
	var in_content = d.$("#att-status").html().substring(1);
	var str = $('#'+returnid).html();
	var contents = in_content.split('|');
	$('#'+returnid+'_tips').css('display','none');
	$.each( contents, function(i, n) {
		var ids = parseInt(Math.random() * 10000 + 10*i); 
		str += "<div id='image"+ids+"'><input type='text' name='"+returnid+"_url[]' value='"+n+"' style='width:360px;' ondblclick='image_priview(this.value);' class='input-text'> <input type='text' name='"+returnid+"_alt[]' value='ͼƬ˵��"+(i+1)+"' style='width:100px;' class='input-text' onfocus=\"if(this.value == this.defaultValue) this.value = ''\" onblur=\"if(this.value.replace(' ','') == '') this.value = this.defaultValue;\"> <a href=\"javascript:remove_div('image"+ids+"')\">�Ƴ�</a> </div><div class='bk10'></div>";
		});
	$('#'+returnid).html(str);
}
function image_priview(img) {
	window.top.art.dialog({title:'ͼƬ�鿴',fixed:true, content:'<img src="'+img+'" />',id:'image_priview',time:5});
}

function remove_div(id) {
	$('#'+id).html(' ');
}