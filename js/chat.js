document.getElementById('usr1btn').addEventListener("click",showFirstphone);
document.getElementById('usr2btn').addEventListener("click",showSecphone);
document.getElementById('usr1phoneRightbtn').addEventListener("click",usr1Rbtn);
document.getElementById('usr2phoneRightbtn').addEventListener("click",usr2Rbtn);
document.getElementById('usr1phoneCrossbtn').addEventListener("click",usr1Cbtn);
document.getElementById('usr2phoneCrossbtn').addEventListener("click",usr2Cbtn);
document.getElementById("msgusr1send").addEventListener("click", msgUsr1Send);
document.getElementById("msgusr2send").addEventListener("click", msgUsr2Send);
document.getElementById("msg1TextBox").addEventListener("focus", typingMsg1);
document.getElementById("msg2TextBox").addEventListener("focus", typingMsg2);
document.getElementById("msg1TextBox").addEventListener("blur", typingMsg1clr);
document.getElementById("msg2TextBox").addEventListener("blur", typingMsg2clr);
document.getElementById('clearOp1').addEventListener("click",clearchat1);
document.getElementById('clearOp2').addEventListener("click",clearchat2);
document.getElementById('logout1').addEventListener("click",logoutFun1);
document.getElementById('logout2').addEventListener("click",logoutFun2);
document.getElementById('leftback1').addEventListener("click",logoutbackbtn1);
document.getElementById('leftback2').addEventListener("click",logoutbackbtn2);
document.getElementById('chngtheme1').addEventListener("click",chngthemeFun1);
document.getElementById('chngtheme2').addEventListener("click",chngthemeFun2);
document.getElementById('chngDp1').addEventListener("click",chngProfile1);
document.getElementById('chngDp2').addEventListener("click",chngProfile2);
document.getElementById('like1').addEventListener("click", likefun1);
document.getElementById('like2').addEventListener("click", likefun2);
document.getElementById('smile1').addEventListener("click", Smilefun1);
document.getElementById('smile2').addEventListener("click", Smilefun2);

function showFirstphone()
{
	document.getElementById('user1phone').style.display="block";
	document.getElementById('phone1').style.display="none";
}
function showSecphone()
{
	document.getElementById('user2phone').style.display="block";
	document.getElementById('phone2').style.display="none";
}

function usr1Rbtn()
{
	pin=document.getElementById('usr1textBox').value;
	if (pin=="111111")
	 {	
	 	document.getElementById('user1phone').style.display="none";
	 	document.getElementById('user1chat').style.display="block";
	 	document.getElementById('usr1textBox').value="";

	 }
	 else
	 {
	 	document.getElementById('usr1EnterPin').innerHTML="Incorrect Password please try again";
	 	document.getElementById('usr1EnterPin').style.color="red";
	 	document.getElementById('usr1EnterPin').style.fontSize="18px";
	 	document.getElementById('usr1textBox').value="";
	 	document.getElementById('usr1textBox').focus();
	 }
	 if ((pin.length<6)||(pin.length>6))  
	 {
	 	document.getElementById('pinlen1').innerHTML="please your pin atlist 6 digit";
	 	document.getElementById('pinlen1').style.color="blue";
	 }
}

function usr2Rbtn()
{
	let pin=document.getElementById('usr2textBox').value;
	if (pin=="141414")
	 {	
	 	document.getElementById('user2phone').style.display="none";
	 	document.getElementById('user2chat').style.display="block";
	 	document.getElementById('usr2textBox').value="";
	 }
	 else
	 {
	 	document.getElementById('usr2EnterPin').innerHTML="Incorrect Password please try again";
	 	document.getElementById('usr2EnterPin').style.color="red";
	 	document.getElementById('usr2EnterPin').style.fontSize="18px";
	 	document.getElementById('usr2textBox').value="";
	 	document.getElementById('usr2textBox').focus();
	 }
	 if ((pin.length<6)||(pin.length>6))   
	 {
	 	document.getElementById('pinlen2').innerHTML="please your pin atlist 6 digit";
	 	document.getElementById('pinlen2').style.color="blue";
	 }
}

function msgUsr1Send()
{
	let mymsg=document.getElementById('msg1TextBox').value;
	let myele1=document.createElement('p');

	myele1.style.width="170px";
    myele1.style.backgroundColor="#c6e6c5";
    myele1.style.padding="5px";
    myele1.style.borderTopRightRadius="8px";
    myele1.style.borderBottomRightRadius="6px";
    myele1.style.borderBottomLeftRadius="6px";
    myele1.style.marginTop="-4px";
    myele1.style.float="right";
    myele1.style.textAlign="left";
    myele1.innerHTML=mymsg;


   

	let myTime1=document.createElement('span');
    let date=new Date();
	let hour=date.getHours();
	let min=date.getMinutes();
	// let sec=date.getSeconds();
    myTime1.innerHTML="<span>"+hour+":"+min;

    myTime1.style.width="35px";
    myTime1.style.marginLeft="260px";
    myTime1.style.marginTop="-15px";
    myTime1.style.fontSize="10px";
    myTime1.style.textAlign="left"
    myTime1.style.color="white";
    myTime1.style.float="right"; 
    // document.getElementById("usr1TextArea").appendChild(myTime1);

    if(mymsg)
    {
 	document.getElementById("usr1TextArea").appendChild(myele1);
 	document.getElementById("usr1TextArea").appendChild(myTime1);
 	document.getElementById('msg1TextBox').value="";
 	myele1.scrollIntoView(); 
	}
	else
	{

	}


 	let myele2=document.createElement('p');
	myele2.style.width="170px";
    myele2.style.backgroundColor="#c5dee6";
    myele2.style.padding="5px";
    myele2.style.borderTopRightRadius="8px";
    myele2.style.borderBottomRightRadius="6px";
    myele2.style.borderBottomLeftRadius="6px";
    myele2.style.marginTop="-4px";
    myele2.style.float="left";
    myele2.style.textAlign="left";
    myele2.innerHTML=mymsg;


    let myTime2=document.createElement('p');
    let da=new Date();
	let ho=da.getHours();
	let mi=da.getMinutes();
	// let se=da.getSeconds();
    myTime2.innerHTML="<span>"+ho+":"+mi;

    myTime2.style.width="45px";
    myTime2.style.marginTop="30px";
    myTime2.style.marginLeft="-58%";
    myTime2.style.fontSize="10px";
    myTime2.style.textAlign="left"
    myTime2.style.color="white";
    myTime2.style.float="left"; 
    // document.getElementById("usr2TextArea").appendChild(myTime2);

    setTimeout(Display2Data, 1000);
    function Display2Data()
    {
    	if (mymsg)
    	 {
 		document.getElementById("usr2TextArea").appendChild(myele2);
 		document.getElementById("usr2TextArea").appendChild(myTime2);
 		myele2.scrollIntoView();
 		}
 		else
 		{

 		}
    }
 }


function msgUsr2Send()
{
	let mysms=document.getElementById('msg2TextBox').value;
	let myele3=document.createElement('p');

	myele3.style.width="170px";
    myele3.style.backgroundColor="#572f47";
    myele3.style.color="white";
    myele3.style.padding="5px";
    myele3.style.borderTopRightRadius="7px";
    myele3.style.borderBottomRightRadius="6px";
    myele3.style.borderBottomLeftRadius="6px";
    myele3.style.marginTop="-4px";
    myele3.style.float="right";
    myele3.style.textAlign="left";
    myele3.innerHTML=mysms;
    if(mysms)
    {
 	document.getElementById("usr2TextArea").appendChild(myele3);
 	document.getElementById('msg2TextBox').value="";
 	myele3.scrollIntoView();
 	}
 	else
 	{

 	}

 	let myTime3=document.createElement('span');
    let dt=new Date();
	let hr=dt.getHours();
	let Minut=dt.getMinutes();
	// let Second=dt.getSeconds();
    myTime3.innerHTML="<span>"+hr+":"+Minut;

    myTime3.style.width="35px";
    myTime3.style.marginLeft="260px";
    myTime3.style.marginTop="-15px";
    myTime3.style.fontSize="10px";
    myTime3.style.textAlign="left"
    myTime3.style.color="white";
    myTime3.style.float="right"; 
    document.getElementById("usr2TextArea").appendChild(myTime3);



 	let myele4=document.createElement('p');

	myele4.style.width="170px";
    myele4.style.backgroundColor="#4e4154";
    myele4.style.padding="5px";
    myele4.style.color="white";
    myele4.style.borderTopRightRadius="7px";
    myele4.style.borderBottomRightRadius="6px";
    myele4.style.borderBottomLeftRadius="6px";
    myele4.style.marginTop="-4px";
    myele4.style.float="left";
    myele4.style.textAlign="left";
    myele4.innerHTML=mysms;

    let myTime4=document.createElement('span');
    let d=new Date();
	let hor=d.getHours();
	let mint=d.getMinutes();
	// let sect=d.getSeconds();
    myTime4.innerHTML="<span>"+hor+":"+mint;

    myTime4.style.width="45px";
    myTime4.style.marginTop="30px";
    myTime4.style.marginLeft="-58%";
    myTime4.style.fontSize="10px";
    myTime4.style.textAlign="left"
    myTime4.style.color="white";
    myTime4.style.float="left"; 
    // document.getElementById("usr1TextArea").appendChild(myTime4);

    setTimeout(Display1Data, 1000);
    function Display1Data()
    {
    	if (mysms) 
    	{
 		document.getElementById("usr1TextArea").appendChild(myele4);
 		document.getElementById("usr1TextArea").appendChild(myTime4);
 		myele4.scrollIntoView();
 	    }
 	    else
 	    {
 	    	
 	    }
    }
}

function typingMsg1()
{
	document.getElementById('typmsg2').innerHTML="Typing . . . . ";
}
function typingMsg2()
{
	document.getElementById('typmsg1').innerHTML="Typing . . . . ";
}
function typingMsg1clr()
{
	document.getElementById('typmsg2').innerHTML="";
}
function typingMsg2clr()
{
	document.getElementById('typmsg1').innerHTML="";
}


function usr1Cbtn()
{
	let text=document.getElementById('usr1textBox').value;
	let data=text.slice(0,-1);
	document.getElementById('usr1textBox').value=data;

}
function usr2Cbtn()
{
	let text=document.getElementById('usr2textBox').value;
	let data=text.slice(0,-1);
	document.getElementById('usr2textBox').value=data;
}


function clearchat1()
{
	document.getElementById('usr1TextArea').remove();
}
function clearchat2()
{
	document.getElementById('usr2TextArea').remove();
}

function logoutFun1()
{
	document.getElementById('user1chat').style.display="none";
	document.getElementById('user1phone').style.display="block";
}
function logoutFun2()
{
	document.getElementById('user2chat').style.display="none";
	document.getElementById('user2phone').style.display="block";
}
function logoutbackbtn1()
{
	document.getElementById('user1chat').style.display="none";
	document.getElementById('user1phone').style.display="block";
}
function logoutbackbtn2()
{
	document.getElementById('user2chat').style.display="none";
	document.getElementById('user2phone').style.display="block";
}
function chngthemeFun1()
{
	document.getElementById('user1chat').style.backgroundImage="url(image/img2.jpg)"
}
function chngthemeFun2()
{
	document.getElementById('user2chat').style.backgroundImage="url(image/img6.jpg)"
}
function chngProfile1()
{
	document.getElementById('dp1').src="image/dp5.jpg";
	document.getElementById('dp1').style.width="37px";
	document.getElementById('dp1').style.height="37px";
}
function chngProfile2()
{
	document.getElementById('dp2').src="image/dp6.jpg";
	document.getElementById('dp2').style.width="37px";
	document.getElementById('dp2').style.height="37px";
}

function likefun1()
{
	let like1=document.createElement('p');
	let heart1=document.getElementById('like1').innerHTML=`<i class="fa-solid fa-heart"></i>`
	like1.innerHTML=heart1;

	like1.style.width="150px"
	like1.style.float="right";
	like1.style.color="#f2421b";
	like1.style.fontSize="30px";
	like1.style.textAlign="right";
	document.getElementById("usr1TextArea").appendChild(like1);


	let likeTime1=document.createElement('span');
    let dat=new Date();
	let Hr=dat.getHours();
	let minu=dat.getMinutes();
	// let sec=date.getSeconds();
    likeTime1.innerHTML="<span>"+Hr+":"+minu;

    likeTime1.style.width="29px";
    likeTime1.style.marginLeft="270px";
    likeTime1.style.marginTop="-22px";
    likeTime1.style.fontSize="10px";
    likeTime1.style.textAlign="left"
    likeTime1.style.color="white";
    likeTime1.style.float="right"; 
    document.getElementById("usr1TextArea").appendChild(likeTime1);


	let like2=document.createElement('p');
	let heart2=document.getElementById('like1').innerHTML=`<i class="fa-solid fa-heart"></i>`
	like2.innerHTML=heart2;

	like2.style.width="150px"
	like2.style.float="left";
	like2.style.color="#f2421b";
	like2.style.fontSize="30px";
	like2.style.textAlign="left";
	

	let likeTime2=document.createElement('p');
    let da=new Date();
	let ho=da.getHours();
	let mi=da.getMinutes();
	// let se=da.getSeconds();
    likeTime2.innerHTML="<span>"+ho+":"+mi;

    likeTime2.style.width="45px";
    likeTime2.style.marginTop="38px";
    likeTime2.style.marginLeft="-52%";
    likeTime2.style.fontSize="10px";
    likeTime2.style.textAlign="left"
    likeTime2.style.color="white";
    likeTime2.style.float="left"; 
  

	setTimeout(Send1Data, 1000);
	function Send1Data()
	{
		document.getElementById("usr2TextArea").appendChild(like2);
		document.getElementById("usr2TextArea").appendChild(likeTime2);
	}
}

function likefun2()
{
	let like3=document.createElement('p');
	let heart3=document.getElementById('like2').innerHTML=`<i class="fa-solid fa-heart"></i>`
	like3.innerHTML=heart3;

	like3.style.width="150px";
	like3.style.float="right";
	like3.style.color="#f2421b";
	like3.style.fontSize="30px";
	like3.style.textAlign="right";
	document.getElementById("usr2TextArea").appendChild(like3);


	let likeTime3=document.createElement('span');
    let dat=new Date();
	let Hr=dat.getHours();
	let minu=dat.getMinutes();
	// let sec=date.getSeconds();
    likeTime3.innerHTML="<span>"+Hr+":"+minu;

    likeTime3.style.width="29px";
    likeTime3.style.marginLeft="270px";
    likeTime3.style.marginTop="-22px";
    likeTime3.style.fontSize="10px";
    likeTime3.style.textAlign="left"
    likeTime3.style.color="white";
    likeTime3.style.float="right"; 
    document.getElementById("usr2TextArea").appendChild(likeTime3);


	let like4=document.createElement('p');
	let heart4=document.getElementById('like1').innerHTML=`<i class="fa-solid fa-heart"></i>`
	like4.innerHTML=heart4;

	like4.style.width="150px"
	like4.style.float="left";
	like4.style.color="#f2421b";
	like4.style.fontSize="30px"
	like4.style.textAlign="left"
	

	let likeTime4=document.createElement('p');
    let date=new Date();
	let hor=date.getHours();
	let min=date.getMinutes();
	// let se=da.getSeconds();
    likeTime4.innerHTML="<span>"+hor+":"+min;

    likeTime4.style.width="45px";
    likeTime4.style.marginTop="38px";
    likeTime4.style.marginLeft="-52%";
    likeTime4.style.fontSize="10px";
    likeTime4.style.textAlign="left"
    likeTime4.style.color="white";
    likeTime4.style.float="left"; 
  

	setTimeout(Send1Data, 1000);
	function Send1Data()
	{
		document.getElementById("usr1TextArea").appendChild(like4);
		document.getElementById("usr1TextArea").appendChild(likeTime4);
	}
}

function Smilefun1()
{
	let smile1=document.createElement('p');
	let sml1=document.getElementById('smile1').innerHTML=`<i class="fa-solid fa-face-smile"></i>`
	smile1.innerHTML=sml1;

	smile1.style.width="150px"
	smile1.style.float="right";
	smile1.style.color="#f5bc2c";
	smile1.style.fontSize="30px";
	smile1.style.textAlign="right";
	document.getElementById("usr1TextArea").appendChild(smile1);


	let smileTime1=document.createElement('span');
    let dat=new Date();
	let Hr=dat.getHours();
	let minu=dat.getMinutes();
	// let sec=date.getSeconds();
    smileTime1.innerHTML="<span>"+Hr+":"+minu;

    smileTime1.style.width="29px";
    smileTime1.style.marginLeft="270px";
    smileTime1.style.marginTop="-22px";
    smileTime1.style.fontSize="12px";
    smileTime1.style.textAlign="left"
    smileTime1.style.color="white";
    smileTime1.style.float="right"; 
    document.getElementById("usr1TextArea").appendChild(smileTime1);


	let smile2=document.createElement('p');
	let sml2=document.getElementById('smile1').innerHTML=`<i class="fa-solid fa-face-smile"></i>`
	smile2.innerHTML=sml2;

	smile2.style.width="150px"
	smile2.style.float="left";
	smile2.style.color="#f5bc2c";
	smile2.style.fontSize="30px";
	smile2.style.textAlign="left";
	

	let smileTime2=document.createElement('p');
    let da=new Date();
	let ho=da.getHours();
	let mi=da.getMinutes();
	// let se=da.getSeconds();
    smileTime2.innerHTML="<span>"+ho+":"+mi;

    smileTime2.style.width="45px";
    smileTime2.style.marginTop="38px";
    smileTime2.style.marginLeft="-52%";
    smileTime2.style.fontSize="12px";
    smileTime2.style.textAlign="left"
    smileTime2.style.color="white";
    smileTime2.style.float="left"; 
  

	setTimeout(Send1Data, 1000);
	function Send1Data()
	{
		document.getElementById("usr2TextArea").appendChild(smile2);
		document.getElementById("usr2TextArea").appendChild(smileTime2);
	}
}

function Smilefun2()
{
	let smile3=document.createElement('p');
	let sml3=document.getElementById('like2').innerHTML=`<i class="fa-solid fa-face-smile"></i>`
	smile3.innerHTML=sml3;

	smile3.style.width="150px";
	smile3.style.float="right";
	smile3.style.color="#f5bc2c";
	smile3.style.fontSize="30px";
	smile3.style.textAlign="right";
	document.getElementById("usr2TextArea").appendChild(smile3);


	let smileTime3=document.createElement('span');
    let dat=new Date();
	let Hr=dat.getHours();
	let minu=dat.getMinutes();
	// let sec=date.getSeconds();
    smileTime3.innerHTML="<span>"+Hr+":"+minu;

    smileTime3.style.width="29px";
    smileTime3.style.marginLeft="270px";
    smileTime3.style.marginTop="-22px";
    smileTime3.style.fontSize="12px";
    smileTime3.style.textAlign="left"
    smileTime3.style.color="white";
    smileTime3.style.float="right"; 
    document.getElementById("usr2TextArea").appendChild(smileTime3);


	let smile4=document.createElement('p');
	let sml4=document.getElementById('like1').innerHTML=`<i class="fa-solid fa-face-smile"></i>`
	smile4.innerHTML=sml4;

	smile4.style.width="150px"
	smile4.style.float="left";
	smile4.style.color="#f5bc2c";
	smile4.style.fontSize="30px"
	smile4.style.textAlign="left"
	

	let smileTime4=document.createElement('p');
    let date=new Date();
	let hor=date.getHours();
	let min=date.getMinutes();
	// let se=da.getSeconds();
    smileTime4.innerHTML="<span>"+hor+":"+min;

    smileTime4.style.width="45px";
    smileTime4.style.marginTop="38px";
    smileTime4.style.marginLeft="-53%";
    smileTime4.style.fontSize="12px";
    smileTime4.style.textAlign="left"
    smileTime4.style.color="white";
    smileTime4.style.float="left"; 
  

	setTimeout(Send1Data, 1000);
	function Send1Data()
	{
		document.getElementById("usr1TextArea").appendChild(smile4);
		document.getElementById("usr1TextArea").appendChild(smileTime4);
	}
}