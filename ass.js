const kiosk={
Fruit:"mango",
get newFruit(){
return this.Fruit;
},
 set a(newFruit){
this.Fruit=newFruit;
}
};
console.log(kiosk.Fruit);
kiosk.a="strawberry";
console.log(kiosk.Fruit)

