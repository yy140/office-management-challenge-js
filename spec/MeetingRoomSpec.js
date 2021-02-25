describe('MeetingRoom', function() {
  var meetingRoom;
  beforeEach(function() {
    meetingRoom = new MeetingRoom();
  });
  it('checks if meeting room is available', function() {
   expect(meetingRoom.available()).toBe(true)
  });
  it('makes the room unavailable when you enter', function() {
    meetingRoom.enter();
    expect(meetingRoom.available()).toBe(false);
  });
  it('throws an error if you try to enter an unavailable room', function() {
    meetingRoom.enter();
    expect(function() {meetingRoom.enter()}).toThrow('Meeting room is unavailable');
  });
  it('makes the meeting room available when you leave', function() {
    meetingRoom.enter();
    meetingRoom.leave();
    expect(meetingRoom.available()).toBe(true);
  });
});