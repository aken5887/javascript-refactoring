/**
 * 12-14. 슈퍼클래스를 위임으로 바꾸기
 */
class List {}

// 내부에서 캡슐화 되어 List를 사용할 수 있다.
class Stack {
    constructor(){
        this.storage = new List();
    }

    pop() {

    }

    push() {

    }
}
