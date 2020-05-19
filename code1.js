document.addEventListener("DOMContentLoaded",function(){
	
	// khai báo các biến cần dùng
	var nut = document.querySelector('.nut'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		trang = document.querySelector('.mautrang');

	//khi click vào nút xanh
	nut.onclick = function(){
		den.classList.add('len');
		trang.classList.add('trangquay');
		menutrai.classList.remove('vetrai');
	}	

	//Click ngược lại
	den.onclick = function(){
		den.classList.remove('len');
		trang.classList.remove('trangquay');
		menutrai.classList.add('vetrai');
	}

},false)