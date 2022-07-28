/**
 * 8-8. 반복문을 파이프라인으로 바꾸기
 */
export function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  // 문제
  // let firstLine = true;
  // for (const line of lines) {
  //   if (firstLine) {
  //     firstLine = false;
  //     continue;
  //   }
  //   if (line.trim() === '') continue;
  //   const record = line.split(',');
  //   if (record[1].trim() === 'India') {
  //     result.push({ city: record[0].trim(), phone: record[2].trim() });
  //   }
  // }

  // My Version
  // lines.map((line) => {
  //   const r = line.split(',');
  //   if(r.length > 1 && r[1].trim() === 'India'){
  //     result.push({ city : r[0].trim(), phone : r[2].trim() });
  //   }
  // });
  // return result;

  // Solution
  return input 
        .split('\n')
        .splice(1)
        .filter(line => line.trim() != '')
        .map(line => line.split(','))
        .filter((line) => line[1].trim() === 'India')
        .map((line) => ({
          city : line[0].trim(), 
          phone : line[2].trim(),
        }));
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
