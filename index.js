{
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
			pagers[index].classList.add('active');
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
}

//小米明星单品
{
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
		m++;
		if (m%2==0){
		danpinxia.style.transform="translateX(-1240px)"
			
		}else{
		danpinxia.style.transform="translateX(0)"

		}
	}
	let t=setInterval(starfn,2000);
	danpin.onmouseover=function(){
		clearInterval(t)
	}
	danpin.onmouseout=function(){
		t=setInterval(starfn,2000);
	}
}	

	
	
	

//内容
{   
	let list=document.querySelectorAll(".neironghezi")
			list.forEach(function(ele){
				ggb(ele)
			})
	function ggb(lyq){
	let inner=lyq.querySelector(".neironghezi .list")
	let prev=lyq.querySelector(".prev")
	let next=lyq.querySelector(".prev2")
	let item=lyq.querySelectorAll(".inner")
	let pages=lyq.querySelectorAll(".nrxy li")
	let items=item.length
	let n = 0;
	console.log(inner)
	next.onclick = function() {
		n++
		if(n >= items) {
			n = items - 1
				return
			}
			inner.style.marginLeft = -n * 300 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
				pages[n].classList.add("active")
			}
			prev.onclick = function() {
				n--
				if(n < 0) {
				    n = 0
					return
				}
		    inner.style.marginLeft = -n * 300 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
			}
			pages.forEach(function(ele, index) {
				let m = index
				ele.onclick = function() {
					for(let i = 0; i < pages.length; i++) {
						pages[i].classList.remove("active")
					}
					ele.classList.add("active")
					inner.style.marginLeft = -m * 300 + "px"
					n = index
				}
			})	
		}
}
//智能硬件
{
	let ywz=document.querySelectorAll(".youwenzi")
	let tu=document.querySelectorAll(".dabox-right .content")
//	console.log(ywz)
//	console.log(tu)
	ywz.forEach(function(ele,index){
		ele.onmouseover=function(){
			 for(let i=0;i<ywz.length;i++){
                ywz[i].classList.remove("active");
                tu[i].classList.remove("active");
            }
			 this.classList.add("active");
            tu[index].classList.add("active");
		}
	})
}

//侧banner
{
	let cenav=document.querySelectorAll(".aside .asideli")

	let cenavbox=document.querySelectorAll(".aside .asideli .children")
	let banner=document.querySelector(".banner")
	console.log(cenavbox)
	cenav.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<cenavbox.length;i++){
//				ele[i].classList.remove("active");
				cenavbox[i].classList.remove("active")
			}
//			ele[index].classList.add("active");
			cenavbox[index].classList.add("active")
		}
		cenavbox[index].onmouseleave=ele.onmouseleave=function(){
        	for(let i=0;i<cenavbox.length;i++){
            	 cenavbox[i].classList.remove("active")
       		}
        }
	})
	
}
	