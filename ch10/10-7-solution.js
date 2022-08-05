/**
 * 10-7. 제어 플래그를 탈출문으로 바꾸기
 */
function sendAlertToPerson(){
  for (const p of people) {
      if (p === 'Don') {
        sendAlert();
        break;
      }
  }
}

// const elements = ['a','b1','ca','ka'];
// let index = 0;
// for(const element of elements){
//   if(element.indexOf('a')>-1){
//       console.log(element);
//   }
// }
// console.log(elements);
// const elementCopy = elements.filter((e) => e.indexOf('a')>-1);
// console.log(elementCopy);

// const concatResult 
//     = elementCopy.reduce(
//             (previous, current) => previous+=current
//             , "");
// console.log(concatResult);