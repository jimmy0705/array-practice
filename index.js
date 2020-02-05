
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
//console.log(x3);

// for(var i=0;i<x1.length;i++){
//   // console.log(x3[i]);
//    for(var j =0;j<x2.length;j++){
//        if(x1[i]== x2.charAt(j)){
//            arr.push(x2.charAt(j));
//            x2.charAt(j).trim();
//        }
//        else{
//             arr.push(x2.charAt(j));

//        }
      
//    }
  
// }
