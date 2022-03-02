let carts=document.querySelectorAll(".addtocard");

let product_item=[
    {
        name:"icecake",
        tag:"icecake",
        price:4,
        incart:0,
    },
    {
        name:"icecoffee",
        tag:"icecoffee",
        price:5,
        incart:0,
    },
    {
        name:"colddrink",
        tag:"colddrink",
        price:6,
        incart:0,
        
    }
];


for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumber(product_item[i]);
        totalCost(product_item[i]);

               
    })
}




function cartReload(){
    let ProductNumber=localStorage.getItem("cartNumber");
    if(ProductNumber){

        document.querySelector(".cart .first").innerHTML='<i class="fa-solid fa-cart-plus"></i>';

        document.querySelector(".cart .second").textContent=ProductNumber;
        document.querySelector(".cart .third").innerHTML="products";
    }
}

function PriceBoard(){
    let total_cost=localStorage.getItem("product_price");
   
 
    if(total_cost){

        document.querySelector(".cart .fourth").textContent=","+total_cost+"$";
        document.querySelector(".cart button").style.background="yellow";
        document.querySelector(".cart button").style.padding="10px 20px";
    }
}


function cartNumber(product){

 
   
    let ProductNumber=localStorage.getItem("cartNumber")
    ProductNumber=  parseInt(ProductNumber);
    if( ProductNumber ){

        localStorage.setItem("cartNumber",ProductNumber + 1)
        

        document.querySelector(".cart .first").innerHTML='<i class="fa-solid fa-cart-plus"></i>';
        document.querySelector(".cart .second").textContent=ProductNumber+1;
        document.querySelector(".cart .third").innerHTML="products";
    }
    else{
        localStorage.setItem("cartNumber",1)
        document.querySelector(".cart .first").innerHTML='<i class="fa-solid fa-cart-plus"></i>';
        document.querySelector(".cart .second").textContent=1;
        document.querySelector(".cart .third").innerHTML="products";

    }
    setItem(product)

}

function setItem(product){
 
    let cartNumber=localStorage.getItem("productCardNumber");
    
    cartNumber=JSON.parse(cartNumber);
    if(cartNumber!=null){
        if(cartNumber[product.tag]==undefined){
            cartNumber={
                ...cartNumber,
                [product.tag]:product
            }
        }
        cartNumber[product.tag].incart+=1;
    }
    else{
        product.incart=1
        cartNumber={
            [product.tag]:product
        }
    }
   localStorage.setItem("productCardNumber",JSON.stringify(cartNumber))

}


function totalCost(product){
    let total_cost=localStorage.getItem("product_price");

    if(total_cost!=null){
        total_cost=parseInt(total_cost);
        
        localStorage.setItem("product_price",total_cost+product.price)
        document.querySelector(".cart .fourth").textContent=total_cost+product.price+"$";
        document.querySelector(".cart button").style.background="yellow";
        document.querySelector(".cart button").style.padding="10px 20px";






    }
    else{
        
    localStorage.setItem("product_price",product.price)
    document.querySelector(".cart .fourth").textContent=product.price+"$";
    document.querySelector(".cart button").style.background="yellow";
    document.querySelector(".cart button").style.padding="10px 20px";
        
    }


}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


cartReload();
PriceBoard();



