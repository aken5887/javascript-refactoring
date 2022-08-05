// 상속 - 수직적인 관계를 이용하여 코드를 재사용
class Printer {
    print() {
        console.log('기본적인 출력');
    }
}

class RedPrinter extends Printer {
    print() {
        console.log('🔴 출력');
    }
}

// 상속을 이용
// 슈퍼 클래스의 기본적인 메소드를 재사용 할 수 있음
// 오버라이딩을 이용해서 동일한 함수의 이름을 가지고 있응면서 
// 다른 행동을 할 수 있음 -> 다형성 활용
const printers = [new Printer(), new RedPrinter];
// const result = printers.map((p) => p.print());
printers.forEach((p) => p.print());

// 문제점 : 상속의 문제점 : 다중 상속이 되지 않음
// 수정이 어렵고, 확장이 어려움 -> 컴포지션을 사용 
