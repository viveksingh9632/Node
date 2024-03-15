// // // // // // // //  let fruits=[]
// // // // // // // // fruits[0]="Apple"
// // // // // // // // fruits[1]="Banana"
// // // // // // // // fruits[2]="Mango"
// // // // // // // // fruits.push("orange")add an element to the end of an array?

// // // // // // // // //  fruits.unshift("vivek") first element add

// // // // // // // //  fruits.shift("vivek")
// // // // // // // // first element remove

// // // // // // // // console.log(fruits)

// // // // // // // // let arr = [1, 2, 3, 4];
// // // // // // // // a=arr[0]
// // // // // // // // console.log(a)

// // // // // // // // b=arr.length-1
// // // // // // // // console.log(b)

// // // // // // // // let arr = [1, 2, 3];

// // // // // // // // if (arr.indexOf(2) !== -1) {

// // // // // // // // console.log('Element found');

// // // // // // // // } else {

// // // // // // // // console.log('Element not found');

// // // // // // // // }

// // // // // // // fruit=["Apple","orange","Mango","papaya"]
// // // // // // // M="orange"
// // // // // // // a=fruit.includes(M)
// // // // // // // if(a){
// // // // // // //     console.log(M,"is present in array")
// // // // // // // }
// // // // // // // else{
// // // // // // //     console.log(M,"is not present in array")

// // // // // // // }

// // // // // // // fruit=[3,5,6,1,7,8]
// // // // // // //  M=4
// // // // // // // index=fruit.indexOf(M)
// // // // // // // if(index>=0){
// // // // // // //     console.log(index,"is present in array")
// // // // // // // }
// // // // // // // else{
// // // // // // //     console.log(index,"is not present in array")

// // // // // // // }

// // // // // // let fruit=[]

// // // // // // fruit[0]="Apple"
// // // // // // fruit[1]="Banana"
// // // // // // fruit[2]="Orange"
// // // // // // fruit[3]="Date"

// // // // // // // fruit.push("Nandi")
// // // // // // // Add a new item to an array:

// // // // // // // fruit.pop("grapes")
// // // // // // // Remove (pop) the last element:
// // // // // // // console.log(fruit)

// // // // // // //Shift (remove) the first element of the array:
// // // // // // //  const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // // // // // fruits.shift();
// // // // // // // console.log(fruits)

// // // // // // //Add new elements to an array:
// // // // // // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // // // // fruits.unshift("Monkey");
// // // // // // console.log(fruits)

// // // //  a=[1,2,4,5]
// // // // // b=a.map((e)=>{
// // // // //     return e+1

// // // // // })
// // // // // console.log(b)
// // // // // node Array.js
// // // //  b=a.reduce((r,t)=>{
// // // // return r+t
// // // //  })
// // // //  console.log(b)

// // // a = [1, 2, 8, 2, 9, 8];
// // // n=6
// // // // b = a.filter((ele,index,arr) => arr.indexOf(ele) !== index);
// // // // console.log(b);


// // // max=0
// // // for(i=0;i<n;i++){
// // //     if(a[i]<max){
// // //         max=a[i]
// // //         break
// // //     }
// // // }

// // // console.log(max)



//  var a=1
// console.log( a++)
// console.log( ++a)
// console.log( a --)
// console.log( -- a)

// //  console.log("The value of num1 ++ is "+(++num1))
 
//  console.log("The value of num1 ++ is "+(--num1))
//  console.log("The value of num1 ++ is "+(num1--))


// var string="thi's"
// var name="vivek"
// var channel='codewithHarry'

// var y=new String("vivek")
// console.log(y)




// let a=[5,2,8,3,10980808,9,4]
// n=7
// max=0
// for(i=0;i<n;i++){
//     if(a[i]>max){
//     max=a[i]
    
//     }

// let num=153;
// let sum=0;
// let temp=num;



// while (num>0) 
// {
//     r=num%10;
//     sum=sum+(r*r*r);
//     // num=num/10;
    
//     num=parseInt(num/10);

    
// }
// if (temp==sum) {
//     console.log("arm strong number")
// }
// else{
//     console.log("no arm strong number")
// }



// let num=101;
// let sum=0;
// let temp=num;
// while (num>0) {
//     r=num%10;
//     sum=(sum*10)+r;
//     num=parseInt(num/10)
// }
// if (sum==temp) {
//     console.log("polidrom number")
// }
// else{
//     console.log(" no polidrom number")

// }


// let num=18;
// let sum=0;
// while (num>0) {
//     rem=num%10;
//     sum=sum+rem;
//     num=parseInt(num/10)
// }
// console.log(sum)
// let sum=0
// let num=10;
// for ( i= 1; i<=10; i++) {
//     sum=sum+i
    
// }
// console.log(sum)



// let a=0;
// console.log(0)

// let b=1;
// console.log(1)

// for (let i= 0; i<10; i++) {
// temp=a+b
// console.log(temp)
// a=b
// b=temp    
// }


// let num=2
// for ( i= 1; i <=10; i++) {
// console.log(num*i)    
// }


function table(n) {
    for ( i= 1; i <=10; i++) {
        res=n*i
        console.log(res) 
        }
        
}
table(5)






