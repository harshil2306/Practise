//one of the ways to create javascript JSON-javascript object notation


//MORE WAYS TO CREATE JAVASCRIPT OBJECTS
//1ST WAY
var apple={ // this will create apple object
    taste:"sweet",
    color:"red",
}
//2nd way
function fruit(taste, color) {
    this.taste=taste;
    this.color=color;     
}

//3rd way
//new keyword
let mango=new fruit("Sweet","Yellow");
let orange=new fruit("Sour","Orange");
// IN 2015 JAVASCRIPT INTRODUCED ANOTHER WAY TO CREATE OBJECTS USING class Keyword (ECMAScript 2015), javascript is also known as ECMAScript (ES)

//class keyword
//1)class Declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }

};
let kiwi=new FruitClass("Sour","Green");
//just like there were 2 types of functions, 1)function declaration, 2)function Expression,just like that there are 2 type of class 1)Class declaration 2) Class Expression but functions hoisted concept IS NOT applied same as on Class
//2)Class Expression
let FruitClass2=class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
let kiwi2=new FruitClass2("Sour","Green")




/*
var bird={
    x:100,
    y:220,
    color:"white",
    eggs:["One","Two","Three","Four","Five"],

    fly:function(){
    console.log("Flying at:-",this.x,this.y,this.color);
    }
};
//for loop
for(i=0; i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}
bird.eggs.forEach(function(val,idx){
console.log(idx,val); 
});*/