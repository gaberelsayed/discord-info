function copy(arg, text){
	var copyinput = document.getElementById("copyinput");
	copyinput.value = arg;
	copyinput.removeAttribute("hidden");
	copyinput.select();
	copyinput.setSelectionRange(0, 999999999);
	document.execCommand('copy');
	copyinput.setAttribute("hidden", "");
	if(text){
		M.toast({html: '<i class="fs-4 fad fa-check text-success"></i>&nbsp; ' + text})
	}else{
		M.toast({html: '<i class="fs-4 fad fa-check text-success"></i>&nbsp; Copied'})
	}
}

function searchMain(feature){
	let elm = document.getElementById(feature);
	if(!feature || !elm){
		return false;
	}
	if(!elm.value){
		return M.toast({html: '<i class="fs-4 fad fa-times text-danger"></i>&nbsp; Input is required'})
	}
	elm.value = elm.value
	.replace("https://discord.new/", "")
	.replace("https://discord.com/template/", "")
	.replace("https://discord.gg/", "")
	.replace("discord.gg/", "")
	.replace("https://discord.com/invite/", "")
	location.href = "/" + feature + "/" + elm.value;
}

async function search(feature){
	if(!feature || !['user','server','invite','template'].includes(feature)) return false;
	let { value: value } = await Swal.fire({
		title: 'Discord Info',
		input: 'text',
		inputPlaceholder: 'Search',
		confirmButtonText: 'Search',
		showCancelButton: true
	})
	if(!value) {
		return M.toast({html: '<i class="fs-4 fad fa-times text-danger"></i>&nbsp; Input is required'})
	}
	value = value
	.replace("https://discord.new/", "")
	.replace("https://discord.com/template/", "")
	.replace("https://discord.gg/", "")
	.replace("discord.gg/", "")
	.replace("https://discord.com/invite/", "")
	location.href = "/" + feature + "/" + value;
}