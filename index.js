
const temp = [20,30,10,73,65,11,21];

const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];


for(let i =0;i<temp.length;i++){
  // console.log(`the tempeeture on ${weekdays[i]} was ${temp[i]}`);
}

var total =0;
for(let i =0;i<temp.length;i++){
 total+=temp[i];
}

//console.log(total);

/////////////////////////
var x1 = ["a","e","i","o","u"];
var x2 = "abacudido";
var x3=x2.split("");
//console.log(x3);
var arr = [];

//console.log(x1.length);
// console.log(x1.indexOf("a"));

for(var i=0;i<x1.length;i++){
  // console.log(x3[i]);
   for(var j =0;j<x3.length;j++){
       if(x1[i]== x3[j]){
           arr.push(x3[j]);
             x3.splice(j,1);

          
       }
       else{
            //arr.push(x2.charAt(j));
            // arr.push(x3[j]);
            //  x3.splice(j,1);

       }
      
   }
  // console.log(arr);
}

   console.log(arr);
   var arrJoin=arr.join("");
   console.log(arrJoin);



//===================================================//
var reverse = function(x) {
    var revStr= x.toString().split("").reverse();
    if(revStr.length == 1 && revStr[0]=="0"){
        console.log(0);
    }
    else{
        
            var jj = revStr.length-1;
    for(var i =0; i<revStr.length;i++){
        if(revStr[jj]=="-"){
            revStr.pop();
            revStr.unshift("-")
            
        }
     if(revStr[0]=="0"){
            revStr.shift();
                 
                 }
        else{
            
        }
    }
    
    var str1= revStr.join("");
    var num = parseInt(str1);
        
    var arr2=num.toString().split("");
        var num2 = "";
        var num3=0;
  if(arr2[0]=="-"){
    //console.log(arr2);
      arr2.shift();
      //console.log(arr2);
      num2 = arr2.join("");
      num3 = parseInt(num2);
      if (num3 > 2**31){
        var dd = 0;
    }else{
      var dd =num;
    }
    return dd;
    console.log(dd);  
  }
        
    
    else if(num > 2**31){
       // return 0;
        console.log(0);
    }
    else{
       // return num;
        console.log(num);
    }
        
    }
  

    
    
    
};
reverse(0);
reverse(-123);
reverse(-898899666);
reverse(898899666);