let aside=document.getElementsByClassName('aside')[0];
let lis= aside.getElementsByTagName('li');
let item = document.getElementsByClassName('item');
console.log(item);
	for(let i=0;i<item.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none'
		}
	}