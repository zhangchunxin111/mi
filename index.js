
	let imgs=document.querySelectorAll('.img-box li')
	let pagers=document.querySelectorAll('.xiaoyuandian li')
	let banner=document.querySelector(".banner")
	let bannerleft=document.querySelector(".banner-left")
	let bannerright=document.querySelector(".banner-right")
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
			}
			this.classList.add('active');
			imgs[index].classList.add('active');
			n=index
		}
	})
	let n=0;
	function fn(dir="r"){
//如果n等于imgs的个数  就循环
		if(dir=="r"){
			n++;
			}
		else if(dir=="l"){
			n--;
		}
	
		if(n==imgs.length){
			n=0;
		}
		if(n===-1){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			pagers[i].classList.remove('active');
			imgs[i].classList.remove('active')
		}
			pagers[n].classList.add('active');
			imgs[n].classList.add('active')
	}
	let st=setInterval(fn,3000);
	banner.onmouseover=function(){
		clearInterval(st)
	}
	banner.onmouseout=function(){
		st=setInterval(fn,3000);
	}
	let flag=true;
	bannerright.onclick=function(){
//	alert(1)
		if(flag){
		flag=false;
		fn();
		}
	}
	
	bannerleft.onclick=function(){
		if(flag){
		flag=false;
		fn("l");
		}
	}
	imgs.forEach(function(ele,index){
	ele.addEventListener("transitionend",function(){
		flag=true;
	})

	})

	

	
	
	



//小米明星单品

	let z=document.querySelector(".zuohezi");

	let y=document.querySelector(".youhezi");
	let danpinxia=document.querySelector(".danpin-bottom");
	let danpin=document.querySelector(".danpin")
	y.onclick=function(){
		this.classList.remove("active");
		z.classList.add("active");
		danpinxia.style.transform="translateX(-1240px)"
		
	};
	z.onclick=function(){
		this.classList.remove("active");
		y.classList.add("active");

		danpinxia.style.transform="translateX(0)"
	}
	let m=0;
	function starfn(){
		if (m%2==0){
		danpinxia.style.transform="translateX(-1240px)"
			m++;
		}else{
		danpinxia.style.transform="translateX(0)"
			m++;
		}
	}
	let t=setInterval(starfn,2000);
	danpin.onmouseover=function(){
		clearInterval(t)
	}
	danpin.onmouseout=function(){
		t=setInterval(starfn,2000);
	}


