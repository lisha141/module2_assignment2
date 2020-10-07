(function(){
'use strict';


angular.module('ShoppingListCheckOff',[]).controller('ToBuyController',tobuy).controller('AlreadyBoughtController',alreadybought).service('ShoppingListCheckOffService',serviceList);
tobuy.$inject=['ShoppingListCheckOffService'];
alreadybought.$inject=['ShoppingListCheckOffService'];

function tobuy(ShoppingListCheckOffService){
var ToBuy=this;

ToBuy.ShoppingList=ShoppingListCheckOffService.geta();
ToBuy.count=0;
ToBuy.msg="Everything is bought!";


ToBuy.remove1=function(i){
ShoppingListCheckOffService.removefroma(ToBuy.ShoppingList,i);
ToBuy.count++;
};
ToBuy.give=function(){
ShoppingListCheckOffService.getval();
};

}

function alreadybought(ShoppingListCheckOffService){
var ablist=this;
ablist.count=ShoppingListCheckOffService.retval();
ablist.list=ShoppingListCheckOffService.getb();
ablist.msg="Nothing bought yet!";
}
function serviceList(){
var service=this;
var a=[
{name:"cookies",
qty:"10"},{
name:"burgers",
qty:"2"},{
name:"pasta",
qty:"3"},{
name:"groceries",
qty:"2 bags"},{
name:"Cheese",
qty:"2 packs"}];

var b=[];
var c=1;
service.removefroma=function(a,i){
var item=a[i];
a.splice(i,1);
b.push(item);
};
service.geta=function(){
return a;
}
service.getb=function(){
return b;
};
service.getval=function(){
c++;
};
service.retval=function(){
return c;
};
}
})();
