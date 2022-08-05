/**
 * 9-2. 필드 이름 바꾸기
 * 모듈 내 변수를 더 잘 표현할 수 있는 네이밍을 쓰는 것이 좋다.
 */
class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  title: '드림코딩',
  country: '대한민국',
});

console.log(`${organization.title}과 ${organization.country}`);