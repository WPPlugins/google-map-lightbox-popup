/*GoogleMap LightBox Popup Admin Script*/jQuery(document).ready(function() {	var targetfield= '';	var gfull_send_to_editor = window.send_to_editor;	jQuery('.gfull_upload_button').click(function(){		targetfield = jQuery(this).prev('.gfull_upload_image');		tb_show('', 'media-upload.php?type=image&TB_iframe=true');		window.send_to_editor = function(html) {			imgurl = jQuery('img',html).attr('src');			jQuery(targetfield).val(imgurl);			tb_remove();			window.send_to_editor = gfull_send_to_editor;		}		return false;	});	});jQuery(document).ready(function() {    jQuery('#fwgm_chk').change(function(){						if(jQuery(this).is(':checked')) 		jQuery('.fwgm_row').fadeOut(function(){jQuery(this).addClass('hide')}); 		else 		jQuery('.fwgm_row').fadeIn(function(){jQuery(this).removeClass('hide')}); 	});                      });  function fwgm_delconfirm(fwgm_map){   	fwgm_map = " '"+fwgm_map+"' ";	var fwgm_agree = confirm('Are you sure you want to delete ' + fwgm_map + ' googlemap ?');	return fwgm_agree; } function frmvalidation(){	var textarae = jQuery('#fwgm_add').val();	if(textarae == ""){		alert('Please fill');		return false;	}	return true;} 