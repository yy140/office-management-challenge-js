class MeetingRoom {
  constructor() {
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
  leave() {
    this.availability = true;
  }
}

class Office {
  constructor() {
    this.meetingRoomList = []
  }
  addMeetingRoom(room) {
    this.meetingRoomList.push(room)
  }
  availableRoomList() {
    // this.meetingRoomList.forEach(function(room) => {
    //console.log(room) ;
    //})
    let availableRoom = this.meetingRoomList.filter(room => 
    room.availability === true);
    console.log(availableRoom);
  }
}
