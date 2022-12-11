const goToTop = function() {
	$(window).scroll(function(){
		var $win = $(window);
		if ($win.scrollTop() > 800) {
			$('.js-top').addClass('active')
		} else {
			$('.js-top').removeClass('active')
		}
	});
};

const animateResume = function() {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animateSlide');
				}
			})
		})
		const panels = document.querySelectorAll('.timeline-panel')
		panels.forEach((el)=>{
			observer.observe(el)
		})
		const badges = document.querySelectorAll('.timeline-badge')
		badges.forEach((el) => {
			observer.observe(el)
		})
}



$(function(){
	goToTop()
	animateResume()
});