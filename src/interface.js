$(document).ready(function() {
  var office = new Office();
    list = document.getElementById('meeting-rooms');
    for(i = 0 ; i < office.meetingRoomList.length; i++) { 
    listItem = document.createElement("li");
    listItem.innerHTML = "Hello";
    listItem.innerHTML = office.meetingRoomList[i];
    list.appendChild(listItem);
    }


    // office.meetingRoomList.forEach(room){ 
    //   return room.name && room.availability

    // }
});