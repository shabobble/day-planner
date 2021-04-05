  
var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;

let currentDay = $("#currentDay");

function updateTime() {
    currentDay.text(moment().format("MMM DD, YYYY hh:mm:ss a"))
}

updateTime();

setInterval(function() {
    updateTime();
},1000)

//     function renderAppointments() {
//         storedAppointments = JSON.parse(localStorage.getItem("appointments"));
//         if (storedAppointments !== null) {
//             for (i = 0; i < storedAppointments.length; i++) {
//                 returnedAppointments = storedAppointments[i];
//                 details = returnedAppointments.details;
//                 timeIndex = returnedAppointments.time;
//                 timeIndex = timeIndex.replace(":00", '');
//                 if (details !== null) {
//                     $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
//                 }
//             }
//         }
//     }

//     renderAppointments();

//     for (i = 0; i <= 23; i++) {
//         CurrentContainer = i;
//         if (currentTime == i) {
//             $('#' + CurrentContainer).addClass("present");
//             $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("present");
//         }
//         else if (currentTime > i) {
//             $('#' + CurrentContainer).addClass("past");
//             $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("past");
//         }
//         else {
//             $('#' + CurrentContainer).addClass("future");
//             $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("future");
//         }
//     }
// })



// $(".saveBtn").click(function () {
//     appointText = $(this).parent('div').children('div').children('textarea').val();
//     appointTime = $(this).parent('div').parent().attr("id");
//     appointment = {
//         time: appointTime,
//         details: appointText
//     }
//     tempArray = JSON.parse(localStorage.getItem("appointments"));
//     if (tempArray === null) {
//         localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
//     }
//     else {
//         tempArray.push(appointment);
//         localStorage.setItem("appointments", JSON.stringify(tempArray));

//     }
//     $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
// })