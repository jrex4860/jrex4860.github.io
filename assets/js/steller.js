$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });

	$('#download-btn').on('click', function(){
        var link = document.createElement('a');
        link.href = 'https://raw.githubusercontent.com/jrex4860/jrex4860.github.io/main/assets/cv/'; // 다운로드할 PDF 경로
        link.download = 'cv_yeonwoojang.pdf'; // 다운로드 파일 이름
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
