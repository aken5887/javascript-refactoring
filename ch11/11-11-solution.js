/**
 * 11-11. 수정된 값 반환하기
 * 함수내에서 값이 수정되는 경우 "반환"을 함으로서 
 * 함수 결과 값을 명확히 하는 것이 좋다.
 */
export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent();
  console.log(`totalAscent : ${totalAscent}`);
  console.log(`totalMinutes : ${totalMinutes}`);
  return totalAscent / totalMinutes;
}


console.log(ascentVelocity([{ elevation: 11 }, { elevation: 99 }], 60));