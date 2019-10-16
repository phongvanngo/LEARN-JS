var myhouse = {
  door: 2,
  toile: "not",
  family: "3 thousand",
  room: [1, 4, 5, 3],
};

// var a = 12;
// var b = ++a + a++;
// console.log(a);
// console.log(b);

// var k = parseInt("23", 5);
// console.log(k);
// console.log(myhouse);
// myhouse['toile'] = 'true';
// myhouse["room[1]"] = 15;
// console.log(myhouse.room[1]);

// console.log(myhouse.door);
// console.log(myhouse.toile);
// console.log(myhouse.family);
// console.log(myhouse.room[4]);
//----------------------------------------------
// var a = Number("a");
// console.log(a);
// if (isNaN(a)) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }
// console.log(a);

//---------------------------------------------

// var a = 10;
// var b = 18;

// var x = a-- + b++ - ++b - ++a;
// console.log(x);
//                             OBJEECT ---------------
// var rectangle = {
//   width : 10,
//   height: 100,
//   getWidth: function(){
//       return this.width;
//   },
//   getHeight:function(){
//       return this.height;
//   },
//   getArea: function(){
//       return this.width * this.heigth;
//   },
// }
// object [ 'index '] =    --> cach truy cap vao phan tu trong object
//console.log(rectangle.getArea);

// var a = [1, 3, 4, 5, 4];
// var b = [1, 3, 4, 5];
// console.log(JSON.stringify(a) !== JSON.stringify(b));

// function isPrimeNumber(x) {
//   if (x===1) return false; // phai dat trong dau ngoac
//   for (i=2;i<x/2;i++) if (x%i===0) return false;
//   return true;
// }
// console.log(isPrimeNumber(4));

// function fromCharCode(){
//   for (i = 97;i<123;i++) {
//     WriteLine(String.fromCharCode(i));
//   }
// }

// fromCharCode();
// var array = [424, 'sdfsdf', 'fdsfsddsf', 33434];
// var myhouse = {
//   room : 4,
//   dog: 'no',
//   food: 'full',
// }
// for (var element in array) {  // element --> ket //not VALUE 
//   console.log(array[element]);
// }

// for (var index in myhouse)
// {
//   console.log(index,myhouse[index],'hello');
// }

//--------------------------------------------------!!!!!!!!!!!!!!!!1 liet ke phan tu trong object
// var apartment = { 
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };

// function getObjectKey(obj) {
//   // Write code here...
//   for (var index in obj) {
//     console.log(index);
//     for (var k in index) console.log(k);
//   }
// }
//--------------------------------------------------!!!!!!!!!!!!!!!!1

///-----------------CAC METHODS CUA ARRAY -------------
// var a = ['sdfsdfd', 'fsdfdsfsdf', 'fsdfdsfds'];
// var b = [1, 3, 4, 3, 3, 32]
// var e = 12;
// var c = b.concat(a); // noi hai array 
//a.push(e); //  dau gia tri khac vao cuoi
// a.pop(); // lay ky tu cuoi, mang thay doi
// b.shift(); // lay ky tu dau , mang thay doi
// console.log(b);
// b.unshift(123); // them ky tu len dau

// console.log(b);
//------------------------------------------------------------------------------
// array.map ------------------------------------
// var array = [2,43,3,3,24,"dfdf"];
// var aa = array.map (function(x){return x*x;});
// console.log(aa);


//----------------------------------------------van de  truyen ham vao trong map da ok 
// var numbers = [1, 3, 4, 5];

// function tripple(num) {
//   // Write code here...
//   return num * 3;
// }

// // function multiply(numbers) {
// //   // Write code here...
// //   return numbers.map(tripple);
// // }

// var numm = numbers.map(tripple);
// console.log(numm);

//multiply(numbers);

//---------------------------------------------------------
//-------------array FILTER
//var words = [1,3,4,5,3,5,6,4,3,3,4,5,4,3,2,5,4,3,3];

// const result = words.filter(word => word.length > 6);
// const resultt = words.filter(function(x){return x.length>10});

// function check (x){
//   if (x % 3 === 0) return x;
// }

// function loc (array){
//   return array.filter(check);
// }

// console.log(loc(words));




//--------------------------------------- array . reduce 

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// function totalVotes(arr) {
//   return arr.reduce (function(prevote,vote){
//       prevote += vote.voted;
//       return prevote;
//   },0)  /// phải có số 0, duyệt từ 0;
// }

//  console.log(totalVotes(voters));

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
  // Write code here...
  return wishlist.reduce(function(a,b){
      return a.title.concat(b.title);
  })
}
console.log(arrayTitle(wishlist));

//------------------------------------------------------------------

