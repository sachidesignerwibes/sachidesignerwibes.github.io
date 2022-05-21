var page="start";
var idea;
var logo;
var up;
var buy1,buy1img;
var buy2,buy2img;
var buy3,buy3img;
var ptb;
var address;
var money = 0;
var change;
var buy;
var backtohome;
var buy4, buy4img, buy5, buy5img, buy6, buy6img, buy7, buy7img, buy8, buy8img, buy9, buy9img, buy10, buy10img;
var donateus;
var donationmoney;

function preload(){
logo = loadImage("Letter S logo design template.png");
buy1img = loadImage("buy1.jpg");
buy2img = loadImage("buy2.jpg");
buy3img = loadImage("buy3.jpg");
buy4img = loadImage("buy4.jpg");
buy5img = loadImage("buy5.jpg");
buy6img = loadImage("buy6.jpg");
buy7img = loadImage("buy7.jpg");
buy8img = loadImage("buy8.jpg");
buy9img = loadImage("buy9.jpg");
buy10img = loadImage("buy10.jpg");
}


function setup(){
createCanvas(windowWidth,windowHeight + 50);



idea = createButton("INDOWESTERN ON THE CORNER");
idea.position(235, height/2 - 290);
idea.class("idea");

buy1 = createButton("Buy Now");
buy1.position(idea.x,idea.y + 270);
buy1.class("buybuttons");
buy1.mouseClicked(buy1f);

buy2 = createButton("Buy Now");
buy2.position(idea.x + 165,buy1.y);
buy2.class("buybuttons");
buy2.mouseClicked(buy2f);

buy3 = createButton("Buy Now");
buy3.position(idea.x + 330,buy1.y);
buy3.class("buybuttons");
buy3.mouseClicked(buy3f);

buy4 = createButton("Buy Now");
buy4.position(idea.x + 495,idea.y + 270);
buy4.class("buybuttons");
buy4.mouseClicked(buy4f);

buy5 = createButton("Buy Now");
buy5.position(idea.x + 660,buy1.y);
buy5.class("buybuttons");
buy5.mouseClicked(buy5f);

buy6 = createButton("Buy Now");
buy6.position(buy1.x,buy1.y + 250);
buy6.class("buybuttons");
buy6.mouseClicked(buy6f);

buy7 = createButton("Buy Now");
buy7.position(idea.x + 165,buy1.y + 250);
buy7.class("buybuttons");
buy7.mouseClicked(buy7f);

buy8 = createButton("Buy Now");
buy8.position(idea.x + 330,buy1.y + 250);
buy8.class("buybuttons");
buy8.mouseClicked(buy8f);

buy9 = createButton("Buy Now");
buy9.position(idea.x + 495,buy1.y + 250);
buy9.class("buybuttons");
buy9.mouseClicked(buy9f);

buy10 = createButton("Buy Now");
buy10.position(idea.x + 660,buy1.y + 250);
buy10.class("buybuttons");
buy10.mouseClicked(buy10f);

ptb = createButton("Procced To Buy");
ptb.position(width/2 - 100, height/2);
ptb.class("buybuttons");
ptb.hide();
ptb.mouseClicked(ptbf);

address = createInput("","text").attribute("placeholder","Address To Deliver");
address.position(ptb.x, ptb.y + 50);
address.class("input");
address.hide();

change = createButton("Change Address");
change.position(10, height/2);
change.class("buybuttons");
change.hide();
change.mouseClicked(changeaddress);

backtohome = createButton("Back To Home");
backtohome.position(width - 250, height/2);
backtohome.class("buybuttons");
backtohome.mouseClicked(backtohomego);
backtohome.hide();

donateus = createButton("Donate Us");
donateus.position(75,10);
donateus.class("buybuttons");
donateus.mouseClicked(donate);

donationmoney = createInput("","text").attribute("placeholder","Enter Donation Amount");
donationmoney.position(donateus.x, donateus.y + 75);
donationmoney.class("input");
donationmoney.hide();

}

function draw(){
background("white");
imageMode(CENTER);
if(page === "start"){
fill("black");
textSize(35);
text("Today's Idea",width/2 - 100, 40);
image(logo,30,30,50,50);
image(buy1img,buy1.x + 45,buy1.y + 50, 150,220);
image(buy2img,buy1.x + 225,buy1.y + 25, 100,160);
image(buy3img,idea.x + 400,buy1.y + 50, 150,220);
image(buy4img,buy1.x + 550,buy1.y + 25, 100,160);
image(buy5img,buy1.x + 720,buy1.y + 50, 150,220);
image(buy6img,buy1.x + 45,buy1.y + 300, 100,160);
image(buy7img,buy1.x + 225,buy1.y + 300, 150,220);
image(buy8img,buy1.x + 400,buy1.y + 300, 100,160);
image(buy9img,buy1.x + 550,buy1.y + 300, 150,220);
image(buy10img,buy1.x + 720,buy1.y + 300, 100,160);
}

if(page === "buy1"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy1img,width - 150,150, 150,220);
    fill("black");
    textSize(35);
    text("plane designer",width/2 - 150, 200);
    money = 1000;
    ptb.show();
    address.show();
    change.hide();
    buy = "plane designer";
    backtohome.show();
    scroll();

}

if(page === "buy2"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy2img,width - 150,150, 100,160);
    fill("black");
    textSize(35);
    text("shirtskirt",width/2 - 150, 200);
    money = 2500;
    ptb.show();
    address.show();
    change.hide();
    buy = "shirtskirt";
    backtohome.show();
    scroll();
}

if(page === "buy3"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy3img,width - 150,150, 150,220);
    fill("black");
    textSize(35);
    text("tradition in fashion",width/2 - 150, 200);
    money = 3000;
    ptb.show();
    address.show();
    change.hide();
    buy = "tradition in fashion";
    backtohome.show();
    scroll();
}

if(page === "buy4"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy4img,width - 150,150, 100,160);
    fill("black");
    textSize(35);
    text("designers",width/2 - 150, 200);
    money = 2500;
    ptb.show();
    address.show();
    change.hide();
    buy = "designers";
    backtohome.show();
    scroll();
}

if(page === "buy5"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy5img,width - 150,150, 150,220);
    fill("black");
    textSize(35);
    text("functional",width/2 - 150, 200);
    money = 4500;
    ptb.show();
    address.show();
    change.hide();
    buy = "functional";
    backtohome.show();
    scroll();
}

if(page === "buy6"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy6img,width - 150,150, 100,160);
    fill("black");
    textSize(35);
    text("trendz",width/2 - 150, 200);
    money = 3000;
    ptb.show();
    address.show();
    change.hide();
    buy = "trendz";
    backtohome.show();
    scroll();
}

if(page === "buy7"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy7img,width - 150,150, 150,220);
    fill("black");
    textSize(35);
    text("indo traditional",width/2 - 150, 200);
    money = 5000;
    ptb.show();
    address.show();
    change.hide();
    buy = "indo traditional";
    backtohome.show();
    scroll();
}

if(page === "buy8"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy8img,width - 150,150, 100,160);
    fill("black");
    textSize(35);
    text("frills on the go",width/2 - 150, 200);
    money = 3500;
    ptb.show();
    address.show();
    change.hide();
    buy = "frills on the go";
    backtohome.show();
    scroll();
}

if(page === "buy9"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy9img,width - 150,150, 150,220);
    fill("black");
    textSize(35);
    text("gorgo functional",width/2 - 150, 200);
    money = 5500;
    ptb.show();
    address.show();
    change.hide();
    buy = "gorgo functional";
    backtohome.show();
    scroll();
}

if(page === "buy10"){
    idea.hide();
    buy1.hide();
    buy2.hide();
    buy3.hide();
    buy4.hide();
    buy5.hide();
    buy6.hide();
    buy7.hide();
    buy8.hide();
    buy9.hide();
    buy10.hide();
    image(logo,30,30,50,50);
    image(buy10img,width - 150,150, 100,160);
    fill("black");
    textSize(35);
    text("over the golden",width/2 - 150, 200);
    money = 3500;
    ptb.show();
    address.show();
    change.hide();
    buy = "over the golden";
    backtohome.show();
    scroll();
}




if(page == "payment"){
address.hide();
fill("black");
textSize(35);
text("Only Pay In Cash Aftre Delivery Reaches",15,height / 2 - 200);
text("Money to be paid:"+money,15,height/2 - 125);
text("Your Address:"+address.value(),15,height/2 - 50);
fill("red");
text("Confirmation !!!",15,50);
image(logo,width - 100,30,50,50);
change.show();
backtohome.show();
donateus.hide();
}

if(page === "comingdelivery"){
    ptb.hide();
    change.hide();
    fill("black");
    textSize(20);
    text("Package "+buy+" will arrive at "+address.value(),50,height/2 - 200);
    image(logo,30,30,50,50);
    backtohome.show();
    donateus.show();
    
    }

    if(page === "donate"){
        idea.hide();
        buy1.hide();
        buy2.hide();
        buy3.hide();
        buy4.hide();
        buy5.hide();
        buy6.hide();
        buy7.hide();
        buy8.hide();
        buy9.hide();
        buy10.hide();
        ptb.hide();
        change.hide();
        image(logo,30,30,50,50);
        backtohome.show();
        donationmoney.show();
        address.hide();
        
        
        
        }


        if(page === "donated"){
            idea.hide();
            buy1.hide();
            buy2.hide();
            buy3.hide();
            buy4.hide();
            buy5.hide();
            buy6.hide();
            buy7.hide();
            buy8.hide();
            buy9.hide();
            buy10.hide();
            ptb.hide();
            change.hide();
            image(logo,30,30,50,50);
            backtohome.show();
            donationmoney.show();
            address.hide();
            fill("black");
            textSize(35);
            text("Thank you for donating:"+donationmoney.value()+"rs",15,height/2);
            
            
            
            }
            console.log(buy);
drawSprites();
}

function ptbf(){
    if(page === "buy1"){
    page = "payment";
    }
    else if(page === "buy2"){
page = "payment";
    }
    else if(page === "buy3"){
        page = "payment";
            }
    else if(page === "buy4"){
    page = "payment";
     }
    else if(page === "buy5"){
    page = "payment";
     }
    else if(page === "buy6"){
    page = "payment";
  }
  else if(page === "buy7"){
 page = "payment";   }
  else if(page === "buy8"){
 page = "payment";
  }
   else if(page === "buy9"){
  page = "payment";
  }
  else if(page === "buy10"){
   page = "payment";
 }
    else{
        page = "comingdelivery"
    }
}

function changeaddress(){
    if(buy === "plane designer"){
    page = "buy1";
    }
   else if(buy === "shirtskirt"){
        page = "buy2";
    }
    else if(buy === "tradition in fashion"){
        page = "buy3";
    }
    else if(buy === "designers"){
        page = "buy4";
    }
    else if(buy === "functional"){
        page = "buy5";
    }
    else if(buy === "trendz"){
        page = "buy6";
    }
    else if(buy === "indo traditional"){
        page = "buy7";
    }
    else if(buy === "frills on the go"){
        page = "buy8";
    }
    else if(buy === "gorgo functional"){
        page = "buy9";
    }
    else if(buy === "over the golden"){
        page = "buy10";
    }
    else{
        page = "myau";
    }

            

}

function backtohomego(){
    location.reload();
}

function buy1f(){
    page = "buy1";
}

function buy2f(){
    page = "buy2";
}

function buy3f(){
    page = "buy3";
}

function buy4f(){
    page = "buy4";
}

function buy5f(){
    page = "buy5";
}

function buy6f(){
    page = "buy6";
}

function buy7f(){
    page = "buy7";
}

function buy8f(){
    page = "buy8";
}

function buy9f(){
    page = "buy9";
}

function buy10f(){
    page = "buy10";
}

function donate(){
    if(page === "start" ||
    page === "buy1" ||
    page === "buy2" ||
    page === "buy3" ||
    page === "buy4" ||
    page === "buy5" ||
    page === "buy6" ||
    page === "buy7" ||
    page === "buy8" ||
    page === "buy9" ||
    page === "buy10" ||
    page === "comingdelivery" ||
    page === "payment"
    ){
    page = "donate";
    }else{
        page = "donated";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }