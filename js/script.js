

/** projects paginate */
window.addEventListener('load' , projectsPaginate );

function projectsPaginate() {
	cantBucles = 4;
	startBucle=1;
	startBucleImgs=1;
	arr_images =[];
	
	imgsProjectsContainer = document.querySelector('#imgsProjectsContainer');	
	imgsProjects = document.querySelectorAll('.imgsProjects');

	dataProjectsTitle = document.querySelector('.dataProjectsTitle');
	dataProjectsDescription = document.querySelector('.dataProjectsDescription');
	dataProjectsUrl = document.querySelector('.dataProjectsUrl');
	dataProjectsCont = document.querySelector('.dataProjectsCont');
}

function adelante(){

	startBucle++;

	if(startBucle>cantBucles){
		startBucle=1;
	}        
		
	if(startBucle==1){
		startBucleImgs=1;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 3; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;	
			dataProjectsTitle.innerHTML = "Monstera";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/monstera";
			dataProjectsUrl.href = "https://miguelpr123.github.io/monstera";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;
		}
		
	}
	if(startBucle==2){
		startBucleImgs=4;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 3; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;	
			dataProjectsTitle.innerHTML = "Serein";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/serein";
			dataProjectsUrl.href = "https://miguelpr123.github.io/serein";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;
		}
	}
	if(startBucle==3){
		startBucleImgs=7;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 2; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;
			dataProjectsTitle.innerHTML = "Full Gym";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/fullgym";
			dataProjectsUrl.href = "https://miguelpr123.github.io/fullgym";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;	
		}
	}
	if(startBucle==4){
		startBucleImgs=9;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 2; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;
			dataProjectsTitle.innerHTML = "Musical Instrumento";
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/musicalinstrumento";
			dataProjectsUrl.href = "https://miguelpr123.github.io/musicalinstrumento";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;		
		}
	}
}


//atras


function atras(){

	startBucle--;

	if(startBucle<1){
		startBucle=cantBucles;
	}        
		
	if(startBucle==1){
		startBucleImgs=1;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 3; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;	
			dataProjectsTitle.innerHTML = "Monstera";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/monstera";
			dataProjectsUrl.href = "https://miguelpr123.github.io/monstera";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;
		}
		
	}
	if(startBucle==2){
		startBucleImgs=4;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 3; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;	
			dataProjectsTitle.innerHTML = "Serein";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/serein";
			dataProjectsUrl.href = "https://miguelpr123.github.io/serein";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;
		}
	}
	if(startBucle==3){
		startBucleImgs=7;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 2; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;
			dataProjectsTitle.innerHTML = "Full Gym";	
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/fullgym";
			dataProjectsUrl.href = "https://miguelpr123.github.io/fullgym";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;	
		}
	}
	if(startBucle==4){
		startBucleImgs=9;
		while(imgsProjectsContainer.firstChild){
			imgsProjectsContainer.removeChild(imgsProjectsContainer.firstChild);
		}
		for (let i = 0; i < 2; i++) {
			images = document.createElement('img');
			images.src = "img/img_projects/IMG_"+ startBucleImgs +".PNG";
			images.className += 'img img-thumbnail shadow border-0 rounded-0 ' ;
			images.style = "max-height: 400px;";
			imgsProjectsContainer.appendChild(images);					
			startBucleImgs++;
			dataProjectsTitle.innerHTML = "Musical Instrumento";
			dataProjectsDescription.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cum nobis magnam quo voluptatum quia.";
			dataProjectsUrl.innerHTML = "https://miguelpr123.github.io/musicalinstrumento";
			dataProjectsUrl.href = "https://miguelpr123.github.io/musicalinstrumento";
			dataProjectsCont.innerHTML = ""+startBucle+" de "+cantBucles;		
		}
	}
}


/*smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth' 
		});
	});
});


/** owl carrousel */
jQuery(document).ready(function($) {
	'use strict';
      var owl = $("#owl-sliderMiguel");
        owl.owlCarousel({
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 2, //10 items above 1000px browser width
          itemsDesktop : [1000,2], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });
});

/** navbar scroll bg-dark */
window.addEventListener('scroll' , function () {
	menu =  document.querySelector('.navbar');
	scrolling = window.pageYOffset;
	if(scrolling > 0){
		menu.classList.add('bg-dark');
	}else{
		menu.classList.remove('bg-dark');
	} 
});


















