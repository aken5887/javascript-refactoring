export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI']
        .includes(state);
}
// 함수에 필요한 정보만 받음 
// -> 외부의 의존도를 줄이고 재사용성을 높임