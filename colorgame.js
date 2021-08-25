var colors = generateRandomColor(9);


var colorPicked = pickedColor();

  var numSquare = 9;    // for counting squares
  var squares = document.querySelectorAll(".square");  //for selecting squares
  var show = document.getElementById("show");      // for dispaying the rgb color format
  var display = document.querySelector("#message");  //for showing the tryagain and correct text
  var change = document.querySelector("h1");    // for manipulation of h1
  var resetButton = document.getElementById("reset");  //for change the newcolors and playagain
  var modes = document.querySelectorAll(".mode");     //for changing the easy and hard mode
  


for(var i = 0 ; i< modes.length ; i++){
	modes[i].addEventListener("click", function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		modes[2].classList.remove("selected");
		this.classList.add("selected");
		//this.textContent === "easy" ? numSquare =3: numSquare =6;
	      //update();
		if(this.textContent === "easy"){
			numSquare = 3;
		}
		else if(this.textContent === "hard"){
			numSquare = 6;
		}
		else {
			numSquare = 9;
		}
	    update();
	});
}


function update(){
	//generate new random color
	 colors = generateRandomColor(numSquare);
	 //picked the random array fom the random color
	  colorPicked = pickedColor();
	 //change rgb display
	 show.textContent = colorPicked;
	 
	 
	 //change the playagain text to newcolors
	 resetButton.textContent = "New colors";
	 
	 //to hide the messsage when click the playagain btn
	 display.textContent = " ";
	 
	 //apply  changes to all squares
	 for(var i = 0 ; i<squares.length ; i++){
	
		 if(colors[i]){
			 
			 squares[i].style.display = "block";
			 squares[i].style.backgroundColor = colors[i];
		 
		 }
	 else {
		 squares[i].style.display = "none";
	 }
		
		
		
	 }
	 //for removing the background color of var change
	 
	 change.style.backgroundColor = "steelblue";
	 
	 
	 
	
}


//making button for switching difficulties

// on clicking easyBtn
   /*easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");  //selected class will added
	hardBtn.classList.remove("selected");  //selected class will removed
	numSquare = 3;
	 colors = generateRandomColor(numSquare);
	 colorPicked = pickedColor();
	
	//loop through the squares
	   for(var i = 0 ; i<squares.length ; i++){
		   
		   //store random colors to the top 3 squares
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			//to hide the bottom 3 squares
			squares[i].style.display = "none";
		}
	}
	
});

// on clicking hardBtn
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	 colors = generateRandomColor(numSquare);
	 colorPicked = pickedColor();
	
	for(var i = 0 ; i<squares.length ; i++){
		
			squares[i].style.backgroundColor = colors[i];  //adding the colors to all the squares
            squares[i].style.display = "block";    // displaying all the squares
	}
});*/

 resetButton.addEventListener("click", function(){
	//generate new random color
	 colors = generateRandomColor(numSquare);
	 //picked the random array fom the random color
	  colorPicked = pickedColor();
	 //change rgb display
	 show.textContent = colorPicked;
	 
	 
	 //change the playagain text to newcolors
	 this.textContent = "New colors"
	 
	 //to hide the messsage when click the playagain btn
	 display.textContent = " "
	 
	 //apply  changes to all squares
	 for(var i = 0 ; i<squares.length ; i++){
		 squares[i].style.backgroundColor = colors[i];
	 }
	 //for removing the background color of var change
	 
	 change.style.backgroundColor = "steelblue";
	 
	 
	 
 });

show.textContent = colorPicked;


for(var i = 0 ; i<squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];   //add colors to the squares
	
	//add the clicklistners to all the squares
	squares[i].addEventListener("click",function(){
		 var clickedColor = this.style.backgroundColor;
		 
		//comapres the clicked color to the picked color
		console.log(clickedColor,colorPicked);
		if(clickedColor === colorPicked){
			display.textContent = "correct";
			resetButton.textContent = "Play Again ?";
			
			// below , call function and pass the value of clicked color
			changeColors(clickedColor);
			change.style.backgroundColor = clickedColor;
			
		} else {
			this.style.backgroundColor = "#232323";
			display.textContent = "try again";
		}
	});
	}
     //function to change the color of all squares when clicked the right color
	function changeColors(color){
		for(var i = 0 ; i<squares.length ; i++){
			squares[i].style.backgroundColor = color;
		}
	}				  
	
//create a function that return random number
  function pickedColor(){
	  var random = Math.floor(Math.random() * colors.length)
	  return colors[random];
  }

// create fuunction to generate random color
function generateRandomColor(num){
	//create an array
	var arr = []
	
	//put random rgb colors on array
	for(var i = 0 ; i<num ; i++){
		//make another function for random number
		arr.push(randomColor())
	}
	//return an array
	return arr;
}

//function for random color
function randomColor(){
	//make random number for R
	var r = Math.floor(Math.random() * 256);
	//make random number for G
	var g = Math.floor(Math.random() * 256);
	//make random number for B
	var b = Math.floor(Math.random() * 256);
	
	//return the colors in RGB format
	 return "rgb(" + r + ", " + g + ", " + b + ")"
}