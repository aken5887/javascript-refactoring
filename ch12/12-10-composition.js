// 컴포지션(위임) - 필요한 부품을 외부로 부터 주입 받아, 주입 받은 부품을 활용
// 동일한 클래스를 이용하여 전달된 위임자에 따라 다른 행동을 할 수 있도록
// 만들 수 있음, 상속은 정말 필요한 경우를 위해 남겨 둘 수 있다.
class Printer {
    #printHeader;
    constructor(printHeader){
        this.#printHeader = printHeader
    }
    print() {
        this.#printHeader ?
        this.#printHeader.print():
        console.log('기본적인 출력');
    }
}

class RedPrinterHeader {
    print() {
        console.log('🔴 출력');
    }
}

class RainbowPrinterHeader {
    print(){
        console.log('🏳‍🌈 프린트!')
    }
}

const printers = [new Printer(), 
                new Printer(new RedPrinterHeader()),
                new Printer(new RainbowPrinterHeader())];
printers.forEach((p) => p.print());
