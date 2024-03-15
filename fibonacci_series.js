// // let a = 0;
// // console.log(a);
// // let b = 1;
// // console.log(b);
// // for (i = 1; i < 10; i++) {
// //   test = a + b;
// //   a = b;
// //   b = test;
// //   console.log(test);
// // }

// // // let num=153;
// // // let sum=0;
// // // let temp=num;
// // // while (num>0) {
// // //     r=num%10;
// // //     sum=sum+(r*r*r)
// // //     num=parseInt(num/10)
// // // }
// // // if (temp==sum) {
// // //     console.log("Armstrong Number")
// // // }
// // // else{
// // //     console.log("No Armstrong Number")
// // // }

// // let no=101;
// // let sum=0;
// // let temp=no;
// // while (no>0) {
// //     r=no%10;
// //     sum=(sum*10)+r
// //     no=parseInt(no/10)
// // }
// // if (sum==temp) {
// //     console.log("Polidrom No")
// // }
// // else{
// //     console.log(" No Polidrom No")
// // }

// // const emArr=[
// //     {name:"vivek",age:36},
// //     {name:"Nandi",age:46},
// //     {name:"Manjeet",age:22},
// //     {name:"Ariesh",age:62},
// //     {name:"Vipin",age:52},
// //     {name:"Nitsh",age:28},
// //     {name:"Divya",age:27},
// //     {name:"rohan",age:26},
// //     {name:"shubham",age:25},

// // ]
// // let x=emArr.filter((item)=>{
// //     return item.age>30
// // })
// // console.log(x)

// // let y=emArr.find((item)=>{
// // return item.age>30
// // })
// // console.log(y)

// // const numbers=[0,1,2,3,4,5]

// // const p=numbers.filter((item)=>{
// //         return item>4
// // }).map((val)=>{
// //     return val+2
// // })
// // console.log(p)

// // let a="i am vivek "
// // let x=a.split(' ')
// // console.log(x)

// // let number=[5,2,8,3,1]
// // let max=0;
// // console.log(max)
// // for(i=1;i<number.length;i++){
// // if(number[i]>max){
// // max=number[i]
// //     }
// //     console.log(max)

// // }

// // let number=[5,2,23,8,10,]

// // let mini=number[0];
// // for(i=1;i<number.length;i++){
// //     if (number[i]<mini) {
// //         mini=number[i]
// //     }

// // }
// // console.log(mini)

// // arr = [5, 6, 9, 7];
// // max = 0;
// // for (i = 0; i < arr.length; i++) {
// //   if (arr[i] > max) {
// //     max = arr[i];
// //   }
// // }
// // console.log(max);


// arr=[34,45,34,33,78]
// // max=0;
// // for(i=0;i<arr.length;i++){
// //     if (arr[i]>max) {
// //         max=arr[i]
// //     }
// // }
// // console.log(max)


// // mini=arr[0];
// // for(i=1;i<arr.length;i++){
// //     if (arr[i]<mini) {
// //         mini=arr[i]
// //     }
// // }
// // console.log(mini)

// arr=[23,45,67,78,99,456,2]
// max=arr[0];
    
// for(i=1;i<arr.length;i++){
//     if (arr[i]<max) {
//         max=arr[i]
//     }
// }
// console.log(max)



arr=[2,4,6,8,10,56,3,45]
// max=0;
// for(i=0;i<arr.length;i++){
//     if (arr[i]>max) {
//         max=arr[i]
//     }
// }
// console.log(max)
mini=arr[0]
for(i=1;i<arr.length;i++){
    if (arr[i]<mini) {
       mini=arr[i] 
    }
}
console.log(mini)