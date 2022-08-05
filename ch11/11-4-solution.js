/**
 * 11-4. 객체 통째로 넘기기
 * 객체에 대한 의존성이 높아지므로 주의해야함!!
 */
export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }
  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low && 
      range.top <= this._temperatureRange.high
    );
  }
}
