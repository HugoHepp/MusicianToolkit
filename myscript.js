
var chordfromscale =
{
"cmaj":"I - C maj <br> ii - D min <br> iii - E min <br> IV - F maj <br> V - G maj <br> vi - A min <br> vii - B dim",
"dbmaj":"I - Db maj <br> ii - Eb min <br> iii - F min <br> IV - Gb maj <br> V - Ab maj <br> vi - Bb min <br> vii - C dim",
"dmaj":"I - D maj <br> ii - E min <br> iii - F# min <br> IV - G maj <br> V - A maj <br> vi - B min <br> vii - C# dim",
"ebmaj":"I - Eb maj <br> ii - F min <br> iii - G min <br> IV - Ab maj <br> V - Bb maj <br> vi - C min <br> vii - D dim",
"emaj":"I - E maj <br> ii - F# min <br> iii - G# min <br> IV - A maj <br> V - B maj <br> vi - C# min <br> vii - D# dim",
"fmaj":"I - F maj <br> ii - G min <br> iii - A min <br> IV - Bb maj <br> V - C maj <br> vi - D min <br> vii - E dim",
"gbmaj":"I - Gb maj <br> ii - Ab min <br> iii - Bb min <br> IV - Cb maj <br> V - Db maj <br> vi - Eb min <br> vii - F dim",
"gmaj":"I - G maj <br> ii - A min <br> iii - B min <br> IV C - maj <br> V - Dm aj <br> vi - E min <br> vii - F# dim",
"abmaj":"I - Ab maj <br> ii - Bb min <br> iii - C min <br> IV - Db maj <br> V - Eb maj <br> vi - F min <br> vii - G dim",
"amaj":"I - A maj <br> ii - B min <br> iii - C# min <br> IV - D maj <br> V - E maj <br> vi - f# min <br> vii - G# dim",
"bbmaj":"I - Bb maj <br> ii - C min <br> iii - D min <br> IV - Eb maj <br> V - F maj <br> vi - G min <br> vii - A dim",
"bmaj":"I - B maj <br> ii - C# min <br> iii - D# min <br> IV - E maj <br> V - F# maj <br> vi - G# min <br> vii - A# dim",

"cmin":"i - C min <br> ii - D dim <br> III - Eb maj <br> iv - F min <br> v - G min <br> VI - Ab maj <br> VII - Bb maj",
"dbmin":"i - Db min <br> ii - Eb dim <br> III - Fb maj <br> iv - Gbmin <br> v - Ab min <br> VI - Bbb maj <br> VII - Cb maj",
"dmin":"i - D min <br> ii -  E dim <br> III - F maj <br> iv - G min <br> v - A min <br> VI - Bb maj <br> VII - C maj",
"ebmin":"i - Eb min <br> ii - F dim <br> III - G maj <br> iv - Ab min <br> v - Bb min <br> VI - Cb maj <br> VII - Db maj",
"emin":"i - E min <br> ii - F# dim <br> III - G maj <br> iv - A min <br> v - B min <br> VI - C maj <br> VII - D maj",
"fmin":"i - F min <br> ii - G dim <br> III - Ab maj <br> iv - Bb min <br> v - C min <br> VI - Db maj <br> VII - Eb maj",
"gbmin":"i - Gb min <br> ii - Ab dim <br> III - Bbb maj <br> iv - Cb min <br> v - Db min <br> VI - Ebb maj <br> VII - Fb maj",
"gmin":"i - G min <br> ii - A dim <br> III - Bb maj <br> iv - C min <br> v - D min <br> VI - Eb maj <br> VII - F maj",
"abmin":"i - Ab min <br> ii - Bb dim <br> III - Cb maj <br> iv - Db min <br> v - Eb min <br> VI - Fbmaj <br> VII - Gb maj",
"amin":"i - A min <br> ii - B dim <br> III - C maj <br> iv - D min <br> v - E min <br> VI - F maj <br> VII - G maj",
"bbmin":"i - Bb min <br> ii - C dim <br> III - Db maj <br> iv - Eb min <br> v - F min <br> VI - Gb maj <br> VII - A bmaj",
"bmin":"i - B min <br> ii - C# dim <br> III - D maj <br> iv - E min <br> v - F# min <br> VI - G maj <br> VII - A maj",
}

function myFunction() {

	var keyfin = keycount.concat(keyton);
	if(keyfin != " " && keycount != " "){
    document.getElementById("datares").innerHTML = chordfromscale[keyfin];
    document.getElementById("datares").style["padding-top"] = "27px";
    document.getElementById("waiting").style.display ="none";
    document.getElementById("datares").style['font-size'] ="135%";
	}
}

var keyton = " ";
var keycount = " ";

function keytonmaj(){
	keyton = "maj";
}
function keytonmin(){
	keyton = "min";
}

function keyselectc(){
	keycount = "c";
}
function keyselectdb(){
	keycount = "db";
}
function keyselectd(){
	keycount = "d";
}
function keyselecteb(){
	keycount = "eb";
}
function keyselecte(){
	keycount = "e";
}
function keyselectf(){
	keycount = "f"
}
function keyselectgb(){
	keycount = "gb";
}
function keyselectg(){
	keycount = "g";
}
function keyselectab(){
	keycount = "ab";
}
function keyselecta(){
	keycount = "a";
}
function keyselectbb(){
	keycount = "bb";
}
function keyselectb(){
	keycount = "b";
}