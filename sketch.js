var player;
var edges=[];
var obstacle;
var fish;
var cactus;
var plants;
var food, foodImg1, foodImg2, foodImg3, foodImg4, foodImg5, foodImg6;
var foodGroup ;
var score;
var gameState;
var landImg , waterImg , desertImg;

function preload(){
	foodImg1 = loadImage("bread.png");
	foodImg2 = loadImage("cupcake.png");
	foodImg3 = loadImage("fruit.png");
	foodImg4 = loadImage("icecream.png");
	foodImg5 = loadImage("soda.png");
        foodImg6 = loadImage("juice.png");
        landImg = loadImage("land.jpg");
        waterImg =loadImage("water.jpg");
        desertImg =loadImage("desert.jpg");
        
	
}

function setup() {
	createCanvas(400,800);
   player = createSprite(200,800,50,50);
 foodGroup =  new Group();
 score=0;
 gameState = "playstage1";

}


function draw() {
  background(0,0,0);
   
  if(gameState==="form"){
  // code for form
}

  if(gameState==="playstage1"){

        fill("white");
        textSize(22);
        text("SCORE : "+score,250,50);

        if(keyIsDown(UP_ARROW)){
                player.y = player.y-3;
                
        }
        if(keyIsDown(RIGHT_ARROW)){
                
                player.x = player.x+3;
        }
        if(keyIsDown(LEFT_ARROW)){
                
                player.x = player.x-3;
        }
      
        if (foodGroup.isTouching(player)){
              score = score+5;
              foodGroup.destroyEach();
        }
      
        if(foodGroup.isTouching(obstacle)){
                score = score-5;
                obstacle.destroy();
        }    
        createObstacles();
        createFood(); 
  }

  
  if(gameState==="playstage2"){
          var water = createSprite(80,200,30,40);
          water.addImage(waterImg);
          water.visible=true;

          var land = createSprite(120,200,30,40);
          land.addImage(landImg);
          land.visible=true;

          var desert = createSprite(160,200,30,40);
          desert.addImage(desertImg);
          desert.visible=true;

          if(mousePressedOver(water)){
               land.visible=false;
               desert.visible=false;
               background(blue);
               createFishes();
        }

          if(mousePressedOver(land)){
                water.visible=false;
                desert.visible=false;
                background(yellow);
                createPlants();
        }

         if(mousePressedOver(desert)){
                land.visible=false;
                water.visible=false;
                background(green);
                createCactus();
        }

        if(keyIsDown(UP_ARROW)){
                player.y = player.y-3;
                
        }
        if(keyIsDown(RIGHT_ARROW)){
                
                player.x = player.x+3;
        }
        if(keyIsDown(LEFT_ARROW)){
                
                player.x = player.x-3;
        }

}

 if(gameState==="end"){
  // code for ending the game
 }
  
   edges = createEdgeSprites();
  player.collide(edges[1]);
  player.collide(edges[0]);
  player.collide(edges[3]);
  
  
  
  drawSprites();
 
}

function createFishes (){
        if(frameCount%55===0){
                fish = createSprite(random(20,380),0,30,30);
                obstacle.velocityY = 2;
        }
}

function createCactus(){
        if(frameCount%55===0){
                cactus = createSprite(random(20,380),0,30,30);
                cactus.velocityY = 2;
        }
}

function createPlants(){
        if(frameCount%55===0){
                plants = createSprite(random(20,380),0,30.30);
                plants.velocityY = 2;
        }
}

function createObstacles(){
	if(frameCount%100===0){
		obstacle = createSprite(random(20,370),0,30,30);
	   
		obstacle.velocityY = 2;
		
	}

}

function createFood(){
	if(frameCount%60===0){
	food = createSprite(random(30,380),0,20,20);
	
	food.scale = 0.1;
	food.velocityY=2.5;
	

	var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: food.addImage(foodImg1);
              break;
      case 2: food.addImage(foodImg2);
              break;
      case 3: food.addImage(foodImg3);
              break;
      case 4: food.addImage(foodImg4);
              break;
      case 5: food.addImage(foodImg5);
              break;
      case 6: food.addImage(foodImg6);
              break;
      default: break;
	}
	
	foodGroup.add(food);
	}
}



