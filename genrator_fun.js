// function* numbersGen(){
//     yield 'rinki';
//     yield 'reena';
//     yield 'kabita';
//     yield 'navgurukul';
    
// }
// var gen=numbersGen()
// // console.log(gen);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);




function* idMaker() {
    var index = 0;
    while (true)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);

  