
//THIS VARIABLE MUST BE SET TO THE TOTAL NUMBER OF POSTERS IN THE EXHIBITION
var totalPosters = 16;


//extracting the Poster ID and language - id and la from the url
var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
	var num;
};



var num = getQueryString("id");
var language = getQueryString("la");
var num = Number(num);



// Setting counters so that number links at the foot of the page so not show posters with zero or minus numbers

//subset of above dealing with the follow on posters
if (num == totalPosters){
	var nextNum=1;
} else {
	var nextNum=num+1;
}

if (num == totalPosters){
	var nextNumPlus1=2;
} else {
	var nextNumPlus1=num+2;
}


if (num == totalPosters){
	var nextNumPlus2=3;
} else {
	var nextNumPlus2=num+3;
}

if (num == totalPosters-2){
	var nextNumPlus2=1;
}


if (num == totalPosters-1){
	var nextNumPlus2=2;
	var nextNumPlus1=1;
}


//subset of above dealing with the previous posters

if (num == 1){
	var previousNum = totalPosters;
} else {
	var previousNum = num-1;
}

if (num == 2){
	var previousNumLess1 = totalPosters;
} else {
	var previousNumLess1 = num-2;
}
if (num == 1){
	var previousNumLess1 = totalPosters-1;
} 

if (num == 1){
	var previousNumLess2 = totalPosters-2;
} else {
	var previousNumLess2 = num-3;
}
if (num==2){
	var previousNumLess2 = totalPosters-1;
} 

if (num==3){
	var previousNumLess2 = totalPosters;
} 
	
// Setting up the link for the flag icons
// Inserting the falgs of all languages not in the url  &la= variable
// Flags for next up langauges are, french, spanish and italian 

if (language!= "english"){	
	var image = new Image();
		image.src = '../flags/GBsq.png';
		image.style.align = "right";
		image.onclick = function(){
			window.location.href ="../english/poster_"+num+"_english.html&id="+num+"&la=english";
		};
};


if (language!= "deutsch"){	
	var image = new Image();
		image.src = '../flags/DEsq.png';
		image.style.align = "right";
		image.onclick = function(){
			window.location.href ="../deutsch/poster_"+num+"_deutsch.html&id="+num+"&la=deutsch";
		};
};

//setting correct language text for home, next and previous links.

if (language=="english"){
	var homeLink = "<a href='../index.html'>Home</a>"
	var previousText = "<a href='./poster_"+previousNum+"_"+language+".html&id="+previousNum+"&la="+language+"'>Previous</a>";
	var nextText= "<a href='./poster_"+nextNum+"_"+language+".html&id="+nextNum+"&la="+language+"'>Next</a>";
}

if (language=="deutsch"){
	var homeLink = "<a href='../index.html'>Startseite</a>"
	var previousText = "<a href='./poster_"+previousNum+"_"+language+".html&id="+previousNum+"&la="+language+"'>Zur&#252;ck</a>";
	var nextText= "<a href='./poster_"+nextNum+"_"+language+".html&id="+nextNum+"&la="+language+"'>Weiter</a>";
	//var nextText= nextText.fontsize(5);
}



//Setting the numerical links for previous and next pages

var nextplus2= "<a href='./poster_"+nextNumPlus2+"_"+language+".html&id="+nextNumPlus2+"&la="+language+"'><script>document.write(nextNumPlus2)</script></a>";
var nextplus1= "<a href='./poster_"+nextNumPlus1+"_"+language+".html&id="+nextNumPlus1+"&la="+language+"'><script>document.write(nextNumPlus1)</script></a>";
var next= "<a href='./poster_"+nextNum+"_"+language+".html&id="+nextNum+"&la="+language+"'><script>document.write(nextNum)</script></a>";
var previous= "<a href='./poster_"+previousNum+"_"+language+".html&id="+previousNum+"&la="+language+"'><script>document.write(previousNum)</script></a>";
var previousless1= "<a href='./poster_"+previousNumLess1+"_"+language+".html&id="+previousNumLess1+"&la="+language+"'><script>document.write(previousNumLess1)</script></a>";
var previousless2= "<a href='./poster_"+previousNumLess2+"_"+language+".html&id="+previousNumLess2+"&la="+language+"'><script>document.write(previousNumLess2)</script></a>";

var first= "<a href='./poster_"+1+"_"+language+".html"+"'>First</a>";
var last= "<a href='./poster_"+totalPosters+"_"+language+".html"+"'>Last</a>";


var test = "<a href='../english/poster_"+num+"_english.html&id="+num+"&la=english'><script>document.write(linkToUkPhoto)</script></a>";







