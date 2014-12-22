// hwk9 javascript

var pics=["<figure id=\"fig\"><img src=\"./beach.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>A relaxing foreign beach</figcaption></figure>",
         "<figure id=\"fig\"><img src=\"./cruise.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>A getaway cruise in an exotic location</figcaption></figure>",
         "<figure id=\"fig\"><img src=\"./mountains.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>Escape to an isolated mountain lake</figcaption></figure>",
         "<figure id=\"fig\"><img src=\"./plane.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>Use our renowned travel agency to book a flight today</figcaption></figure>",
         "<figure id=\"fig\"><img src=\"./safari.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>Take a walk on the wild side and see an African safari</figcaption></figure>",
         "<figure id=\"fig\"><img src=\"./tajmahal.jpeg\" alt=\"oops!\" height=\"200\" width=\"300\"><figcaption>Experience a World Wonder and see the world famous Taj Mahal</figcaption></figure>"];

var node = document.getElementById("frame");
function show(idx){
	
	var img = pics[idx];
	idx++;

	if (idx>pics.length-1){
	idx = 0;
	};

	return [img,idx];
};

node.innerHTML=show(0)[0];
var current = show(0)[1];

function alternate(){
	
	node.innerHTML="";
	node.innerHTML=show(current)[0];
	current=show(current)[1];
};

setInterval(function(){alternate()},5000);
