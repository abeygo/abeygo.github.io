function changeMarge(idmarge){
var marge=document.getElementById("idmarge").value;
document.getElementById("id_body").style.margin=marge
}

function changeHtml(idarrp){
var colorhtml=document.getElementById("idarrp").value;
alert(colorhtml);
document.getElementById("id_html").style.backgroundColor=colorhtml
}
function changeBody(idcolbody){
var colorbody=document.getElementById("idcolbody").value;
document.getElementsByTagName("BODY")[0].style.backgroundColor=colorbody
}

function statPage(){
var eltBody= document.getElementById("id_body").childNodes;
var element=0;
var attribute=0;
var text=0;
var autres=0;


for( var i = 0 ; i < eltBody.length; i++){
	console.log(eltBody[i].nodeType);
	if(eltBody[i].nodeType==Node.ELEMENT_NODE){
		element=element+1;}
	else if(eltBody[i].nodeType==Node.ATTRIBUTE_NODE){
		attribute=attribute+1;}
	else if(eltBody[i].nodeType==Node.TEXT_NODE){
		text=text+1;}
	else {autres=autres+1;}

}

alert("Les nodes correspond aux types suivants "+"Type element="+element+", Type attribute="+ attribute+", Type text="+text+", Autre type="+autres )



}

function cacher(){

document.getElementById("corps").style.display = 'none'



}



function reveler(){
document.getElementById("corps").style.display = 'block'





}


