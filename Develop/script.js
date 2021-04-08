let appointText = "";
let appointTime = "";
let currentTime;
let currentContainer;
let dataArray = [];
let storedAppointments;
let returnedAppointments;

let currentDay = $("#currentDay");
let fivePM = $('#five-pm');
let textArea = $('#textarea');
let saveButton = $('.saveBtn');

function updateTime() {
    currentDay.text(moment().format("MMM DD, YYYY hh:mm:ss a"))
}

updateTime();

setInterval(function() {
    updateTime();
},1000)


function checkTime() {

    if (moment('9:00', 'HH:mm').isBefore(moment()) && moment('10:00', 'HH:mm').isAfter(moment())) {
        $('#nine-am').closest('div').addClass('present');
        $('#ten-am').closest('div').addClass('future');
        $('#eleven-am').closest('div').addClass('future');
        $('#noon').closest('div').addClass('future');
        $('#one-pm').closest('div').addClass('future');
        $('#two-pm').closest('div').addClass('future');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('10:00', "HH:mm").isBefore(moment()) && moment('11:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('present');
        $('#eleven-am').closest('div').addClass('future');
        $('#noon').closest('div').addClass('future');
        $('#one-pm').closest('div').addClass('future');
        $('#two-pm').closest('div').addClass('future');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');

    } else if (moment('11:00', "HH:mm").isBefore(moment()) && moment('12:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('present');
        $('#noon').closest('div').addClass('future');
        $('#one-pm').closest('div').addClass('future');
        $('#two-pm').closest('div').addClass('future');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('12:00', "HH:mm").isBefore(moment()) && moment('13:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('present');
        $('#one-pm').closest('div').addClass('future');
        $('#two-pm').closest('div').addClass('future');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
   
    } else if (moment('13:00', "HH:mm").isBefore(moment()) && moment('14:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('present');
        $('#two-pm').closest('div').addClass('future');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('14:00', "HH:mm").isBefore(moment()) && moment('15:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('past');
        $('#two-pm').closest('div').addClass('present');
        $('#three-pm').closest('div').addClass('future');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('15:00', "HH:mm").isBefore(moment()) && moment('16:00', "HH:mm").isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('past');
        $('#two-pm').closest('div').addClass('past');
        $('#three-pm').closest('div').addClass('present');
        $('#four-pm').closest('div').addClass('future');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('16:00', "HH:mm").isBefore(moment()) && moment('17:00', 'HH:mm').isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('past');
        $('#two-pm').closest('div').addClass('past');
        $('#three-pm').closest('div').addClass('past');
        $('#four-pm').closest('div').addClass('present');
        $('#five-pm').closest('div').addClass('future');
    
    } else if (moment('17:00', 'HH:mm').isBefore(moment()) && moment('18:00', 'HH:mm').isAfter(moment())) {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('past');
        $('#two-pm').closest('div').addClass('past');
        $('#three-pm').closest('div').addClass('past');
        $('#four-pm').closest('div').addClass('past');
        $('#five-pm').closest('div').addClass('present');
    
    } else {
        $('#nine-am').closest('div').addClass('past');
        $('#ten-am').closest('div').addClass('past');
        $('#eleven-am').closest('div').addClass('past');
        $('#noon').closest('div').addClass('past');
        $('#one-pm').closest('div').addClass('past');
        $('#two-pm').closest('div').addClass('past');
        $('#three-pm').closest('div').addClass('past');
        $('#four-pm').closest('div').addClass('past');
        $('#five-pm').closest('div').addClass('past');
    }
}

checkTime();

saveButton.click(function() {

    let appointment = {
        time: $(this).parent('div').parent('div').attr('id'),
        task: $(this).parent('div').children('div').children('textarea').val(),
    }

    let allAppointments = localStorage.getItem('allAppointments');

    if (!allAppointments) {
        allAppointments = {};

    } else {
        allAppointments = JSON.parse(allAppointments)
    }

    allAppointments[appointment.time] = appointment.task;

    let newAppointment = JSON.stringify(allAppointments);
    localStorage.setItem("allAppointments", newAppointment);
})

function renderAppointments() {

    let storedAppointments = JSON.parse(localStorage.getItem('allAppointments'));

    if (storedAppointments == null) {
        return
    }

    let times = Object.keys(storedAppointments)

    for (let time of times) {
        let task = storedAppointments[time]
        $('#' + time).find('textarea').val(task)
    }

}

renderAppointments();
