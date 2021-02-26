class MeetingRoom {
  constructor(name) {
    this.name = name
    this.availability = true
  }
  available() {
    return this.availability;
  }
  enter() {
    if(this.availability === false) {
      throw "Meeting room is unavailable";
    } else {
      this.availability = false;
    }
  }
  getName() {
    return this.name;
  }
  leave() {
    this.availability = true;
  }
}

class Office {
  constructor() {
    this.meetingRoomList = [ ];
      for(var i = 1; i < 5; i++) {
        this.meetingRoomList.push(new MeetingRoom(`Meeting Room ${i}`));
        }
     }
  addMeetingRoom(room) {
    this.meetingRoomList.push(room);
  }
  availableRoomList() {
    let availableRoom = this.meetingRoomList.filter(room => 
    room.availability === true);
    return availableRoom;
  }
}