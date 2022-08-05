/**
 * 8-7. 반복문 쪼개기
 */
export function reportYoungestAgeAndTotalSalary(people) {
  // 함수선언은 호이스팅이 되기 때문에 return을 위로 올림
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge(){
    // let youngest = people[0] ? people[0].age : Infinity;
    // for (const p of people) {
    //   if (p.age < youngest) youngest = p.age;
    // }
    // return youngest;
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary(){
    // let totalSalary = 0;
    // for (const p of people) {
    //   totalSalary += p.salary;
    // }
    // return totalSalary;
    return people.reduce((total, p) => (total += p.salary), 0)
  }
}


const people = [{'age':'31', 'salary' : 50000}, {'age':'35', 'salary' : 100000}];
console.log(reportYoungestAgeAndTotalSalary(people));