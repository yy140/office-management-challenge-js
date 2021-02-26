describe('Office', function() {
  var office;
  var meetingRoom;
  beforeEach(function() {
    office = new Office();
    meetingRoom = new MeetingRoom("Ping Pong");
    meetingRoom2 = new MeetingRoom("Tennis");
  });
it('adds a new meeting room to the office', function() {
  office.addMeetingRoom(meetingRoom)
  expect(office.meetingRoomList).toContain(meetingRoom);
  expect(meetingRoom).toBeInstanceOf(MeetingRoom)
});

it('list all available meeting rooms', function() {
  office.addMeetingRoom(meetingRoom);
  office.addMeetingRoom(meetingRoom2);
  meetingRoom2.enter();
  expect(office.availableRoomList()).toContain(meetingRoom)
});
});