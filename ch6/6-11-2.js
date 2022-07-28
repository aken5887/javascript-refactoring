import fs from 'fs';

run(process.argv[2]);

// 1. 첫번째 run 함수를 만들어서 테스트 성 높이기
function run(args){
  return countOrders(parseCommandLine(args));
}

function parseCommandLine(args){
  if (!args) {
    throw new Error('파일 이름을 입력하세요');
  }
  const fileName = `./${args}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
  const countReadyOnly = process.argv.includes('-r');
  return {
    fileName,
    countReadyOnly
  }
}

function countOrders(command){
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  
  if (command.countReadyOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}