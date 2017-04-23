<!--

var rightnav, divmenu;

window.addEventListener('resize', function () { 

	document.getElementById('pagestyle').setAttribute('href', 'misc/photo.css');

});


function scrollRightNav(){
var topValue;
if (document.documentElement.scrollTop)
	topValue = document.documentElement.scrollTop;
else
	topValue = document.body.scrollTop;
//alert(topValue);
	rightnav.style.top = topValue + 7 + 'px';
if (!isMobile)
	divmenu.style.top = topValue + 'px';
}

var isMobile = false;
 if("matchMedia" in window) // Détection
   if(window.matchMedia("(max-width: 540px)").matches) 
		isMobile = true;

/*var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
*/
	
var sreenOrientation = -1;
window.onorientationchange = function(){
	//alert(window.orientation);
	//setFontSize();
    validOrientation();
}

function validOrientation(){
var showPhoto = document.getElementById('showPhoto');
var objImg = document.getElementById('objImg');

if (showPhoto.style.visibility == "visible"){
	objImg.style.maxWidth  = (getWindowWidth() - 30) + 'px';
	objImg.scrollIntoView (true);
	}
//alert(window.orientation);
}

if (document.images) {
	img1 = new Image();
	img2 = new Image();
	img3 = new Image();

	img1.src = "misc/taille.png";
	img2.src = "misc/taille2.png";
	img3.src = "misc/taille3.png";
}

function initPage(s_nav){
divmenu = document.getElementById('divmenu');
rightnav = document.getElementById('rightnav');
changeTaille();
//setFontSize();
if (s_nav)
	window.onscroll = scrollRightNav;
}

function getCookieVal(offset){
var endstr = document.cookie.indexOf(";", offset)
var tostr = ""+document.cookie.indexOf(";", offset)
if (tostr != ""){
if (endstr == -1)
	endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr))
}
}

function GetCookie(name){
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen){
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg){
		return getCookieVal (j);
		}
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0) break;
	}
	return null;
}

function SetCook(name,value){
	var exp = new Date();
	exp.setTime (exp.getTime() + (1000*60*60*24*720));
	document.cookie = name + "="+ escape(value) + "; expires=" + exp.toGMTString() ;
//alert(name + "="+ value + "; expires=" + exp.toGMTString())
}

var polSize;

function setFontSize(policeSize){
var bodyobj = document.getElementsByTagName("body")[0];
var pSize;

if (policeSize)
	pSize = policeSize;
else
	polSize = GetCookie("PolSize");

if (polSize == null || polSize == 0 )
	polSize = "1em";

if (pSize == null || pSize == undefined)
	pSize = polSize;
	
bodyobj.style.fontSize = pSize;
//bodyobj.style.width = '100%';
setImgTaille(pSize);
//alert(bodyobj.style.fontSize + "Ok");
}

function changeTaille(){
var bodyobj = document.getElementsByTagName('body')[0];
var policeSize;

//alert(bodyobj.style.fontSize + "polSize=" + polSize);
	
if (bodyobj.style.fontSize=="" || bodyobj.style.fontSize=="0.9em" || bodyobj.style.fontSize=="1em" || bodyobj.style.fontSize=="1.1em"){
	policeSize="1.3em";}
if (bodyobj.style.fontSize=="1.3em"){
	policeSize="1.7em";}
if (bodyobj.style.fontSize=="1.7em"){
	policeSize = "1em";}

SetCook("PolSize",policeSize);
//setFontSize(policeSize);
bodyobj.style.fontSize = policeSize;
setImgTaille(policeSize);
//bodyobj.style.height = '100%';
}

function setImgTaille(policeSize){
var imgT = document.getElementById('imgTaille');
var srcImg;

if (imgT){
	switch(policeSize)
		{
		case "0.9em" :
		case "1em" :
		case "1.1em" :
		case "1.2em" :
		  srcImg = img1.src;
		  break;
		case "1.3em" :
		case "1.6em" :
		  srcImg = img2.src;
		  break;
		case "1.7em" :
		case "2em" :
		  srcImg = img3.src;
		  break;
		}
	imgT.src = srcImg;
	}
}

function adjustScreen(hauteurUtil){
	var divMap, dispH, pxRatio
	
	pxRatio = 1;
	if( window.devicePixelRatio )
		pxRatio = window.devicePixelRatio;
		
	dispH = document.getElementsByTagName('body')[0].clientHeight - (hauteurUtil * pxRatio);
	divMap = document.getElementById("map_canvas");
	divMap.style.height = dispH + "px";
	//alert(pxRatio);

}

function getWindowWidth() {
	var windowWidth = 0;
	if (typeof(window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}
	
function GetCoordY(obj) {                       
var p = posObj(obj);             
//alert("X:" + p.x + " Y:" + p.y); 
return p.y;

function posObj(htmlelement){

var e = htmlelement; 
var offset = {x:0,y:0}; 
while (e) 
{ 
    offset.x += e.offsetLeft; 
    offset.y += e.offsetTop; 
    e = e.offsetParent; 
} 
return (offset);
}
}

function failed(e) {
   // video playback failed - show a message saying why
   switch (e.target.error.code) {
     case e.target.error.MEDIA_ERR_ABORTED:
       alert('You aborted the video playback.');
       break;
     case e.target.error.MEDIA_ERR_NETWORK:
       alert('A network error caused the video download to fail part-way.');
       break;
     case e.target.error.MEDIA_ERR_DECODE:
       alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
       break;
     case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
       alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
       break;
     default:
       alert('An unknown error occurred.');
       break;
   }
 }

function findIndex(el){
for ( var index = 0; index < el.parentNode.childNodes.length; index++ ) { 
if ( el == el.parentNode.childNodes[ index ] ) { 
	return index; } } 
return -1;
}

function playsong(aObj, fichier, titre){ alert(titre); //alert(findIndex(aObj.parentNode));
itemID = findIndex(aObj.parentNode);
}

//setFontSize();

// -->