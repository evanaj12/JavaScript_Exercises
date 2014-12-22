//6 image randomizer

//Evan Johnston
//hwk5 js
//2014


var pics=["<figure><img src=\"./GalaxyCluster.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Galaxy Cluster</figcaption></figure>",
	 "<figure><img src=\"./InteractingGalaxies.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Interacting Galaxies</figcaption></figure>",
	 "<figure><img src=\"./M51.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Whirlpool Galaxy M51</figcaption></figure>",
	 "<figure><img src=\"./M104.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Majestic Sombrero Galaxy M104</figcaption></figure>",
	 "<figure><img src=\"./NGC1300.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Barred Spiral Galaxy NGC 1300</figcaption></figure>",
	 "<figure><img src=\"./NGC6217.jpg\" alt=\"oops!\" height=\"580\" width=\"800\"><figcaption>Barred Spiral Galaxy NGC 6217</figcaption></figure>"];

var select=Math.floor(Math.random()*6);

document.write(pics[select])
