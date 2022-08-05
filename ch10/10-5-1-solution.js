/**
 * 10-7.특이 케이스 추가하기
 * (다형성을 활용하여 ~~~ )
 * Null객체, Unknown객체
 * 유지보수성, 확장성이 좋아짐 ~~~
 */
class Hotel {
    constructor(){
        this.rooms = [];        
    }

    addRoom(roomNumber){
        this.rooms[roomNumber] = new Room(roomNumber);
    }

    emptyRoom(roomNumber){
        console.log(`${roomNumber}방은 퇴실 처리 되었습니다.`)
        this.rooms[roomNumber] = new EmptyRoom(roomNumber);
    }

    cleanRooms() {
        this.rooms.forEach((r) => r.cleanRoom());
    }
}

class Room {
    constructor(roomNumber) {
        this.roomNumber = roomNumber;
    }

    cleanRoom() {
        console.log(`${this.roomNumber}번 방을 청소 합니다.`);
    }
}

class EmptyRoom extends Room {
    cleanRoom(){
        console.log(`${this.roomNumber}번 방은 빈방입니다.`)
    }
}


const myHotel = new Hotel();
myHotel.addRoom(1);
myHotel.addRoom(2);

myHotel.cleanRooms();
myHotel.emptyRoom(2);

myHotel.cleanRooms();