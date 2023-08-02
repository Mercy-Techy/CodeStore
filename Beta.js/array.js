// ARRAY
// it can contain different types even an object
// let a = ["John","ife",8,true,{name:"johnson",Dept:"CHE"}]
let studentadmt = [];
let person1 = {
  name: [
    { fname: "john", lname: "ife" },
    { fname: "olaoluwa", lname: "emma" },
    { fname: "ayomide", lname: "paul" },
  ],
  Age: "15",
  SOO: "tokyo",
  Dept: "MED",
};
let person2 = {
  name: [
    { fname: "mercy", lname: "arawole" },
    { fname: "yemi", lname: "arawole" },
    { fname: "goke", lname: "adesida" },
  ],
  Age: "15",
  SOO: "tokyo",
  Dept: "MED",
};

// push is used to push items into an array
studentadmt.push(person1);
studentadmt.push(person2);
// let i;
// // for(i of studentadmt){
// // console.log(i.name);
// // }  (i also standing for each object )
// // for (i in studentadmit){
// //   console.log(studentadmt[i].name)
// // }(i is still representing)
// for (i = 0; i < studentadmt.length; i++) {
//   console.log(studentadmt[i].name);
// }
// ARRAY METHODS
//1) add an item to the end of an array we use push which adds to end
// for splice
// let fruits = ['banana','mercy','ola','joy','class']
// let removeditem = fruits.splice(2)
// will remove every element from index 2
// let removeditem = fruits.splice(2,1)
// remove one element from index 2 that is index 2 element
// let removeditem = fruits.splice(2,2)
// remove 2 element from index 2
let i 
for(i=0;i<studentadmt.length;i++){
    console.log(studentadmt[i].name[2].lname);
}