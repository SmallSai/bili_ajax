window.onload=function(){
	//创建对象
	var xhr1=new XMLHttpRequest();
	var xhr2=new XMLHttpRequest();
	var xhr3=new XMLHttpRequest();
	
	//单字符串
	var button1=document.getElementById("but1");
	button1.onclick=function(){
		xhr1.open('GET','php/bookSum.php',true);
		xhr1.send();
		
		xhr1.onreadystatechange=function(){
			if(xhr1.readyState==4&&xhr1.status==200){
				var bookNum=document.getElementById("bookNum");
				bookNum.innerHTML=xhr1.responseText;
			}
		}
		
	}
	
	//一维数组GET方法
	// var button2=document.getElementById("but2");
	// button2.onclick=function(){
	// 	var inputBook=document.getElementById("inputBook").value;
	// 	xhr2.open('GET','php/queryBook.php?bookName='+inputBook,true);
	// 	xhr2.send();
		
	// 	xhr2.onreadystatechange=function(){
	// 		if(xhr2.readyState==4&&xhr2.status==200){
	// 			var bookInfoCont=document.getElementById("bookInfoCont");
	// 			var bookObj=JSON.parse(xhr2.responseText);
				
	// 			for(var key in bookObj){
	// 				bookInfoCont.innerHTML+="</p>"+key+" : "+bookObj[key]+"</p>";
	// 			}
	// 		}
	// 	}
	// }
	
	//一维数组POST方法
	var button2=document.getElementById("but2");
	button2.onclick=function(){
		var inputBook=document.getElementById("inputBook").value;
		xhr2.open('POST','php/queryBook.php',true);
		xhr2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr2.send('bookName='+inputBook);
		
		xhr2.onreadystatechange=function(){
			if(xhr2.readyState==4&&xhr2.status==200){
				var bookInfoCont=document.getElementById("bookInfoCont");
				var bookObj=JSON.parse(xhr2.responseText);
				
				for(var key in bookObj){
					bookInfoCont.innerHTML+="</p>"+key+" : "+bookObj[key]+"</p>";
				}
			}
		}
	}
	
	// 二维数组
	var buttom3=document.getElementById("but3");
	buttom3.onclick=function(){
		var allBook=document.getElementById("allBook");
		xhr3.open('GET','php/allBook.php',true);
		xhr3.send();
		
		xhr3.onreadystatechange=function(){
			if(xhr3.readyState==4&&xhr3.status==200){
				var allBook=document.getElementById("allBook");
				var infoString='{"book":['+xhr3.responseText+']}';//合法格式的JSON数据
				var infoObj=JSON.parse(infoString)['book'];//将JSON数据转化为JS对象
				
				var infoHtml='';//将输出到浏览器的内容
				for(var i=0;i<infoObj.length;i++){
					infoHtml+="<p>";
					for(var key in infoObj[i]){
						infoHtml+=key+" : "+infoObj[i][key]+'&nbsp&nbsp&nbsp&nbsp&nbsp';//&nbsp为空格
					}
					infoHtml+="</p>";
				}
				allBook.innerHTML=infoHtml;
			}
		}
	}
}