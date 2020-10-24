
var currentDay = document.getElementById("currentDay");
var today = moment().format('LLLL');
currentDay.innerText = today;

var textbox = document.getElementById("col-10");
textboxs = document.createElement("input");
$(textboxs).appendTo($(textbox));
var i = 0

setInterval(function () {
    location.reload
}, (1000 * 60) * 5);
var currentHour = moment().hours()
$(".col-10").each(function () {


    var blockHour = parseInt($(this).attr("id"))
    console.log(blockHour)
    if (currentHour < blockHour) {
        $(this).addClass("past")
    }
    else if (currentHour === blockHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
        i = i++
    }

})

var list = localStorage.getItem("9")
$("#9").val(list)

$('#Btn-1').on("click", function () {


    event.preventDefault();

    userinput = $('#9')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("9", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("9");
});

var lists = localStorage.getItem("10")
$("#10").val(lists)

$('#Btn-2').on("click", function () {


    event.preventDefault();
    userinput = $('#10')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("10", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("10");
});

var listes = localStorage.getItem("11")
$("#11").val(listes)

$('#Btn-3').on("click", function () {


    event.preventDefault();
    userinput = $('#11')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("11", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("11");
});

var listed = localStorage.getItem("12")
$("#12").val(listed)

$('#Btn-4').on("click", function () {


    event.preventDefault();
    userinput = $('#12')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("12", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("1");
});
var listed = localStorage.getItem("1")
$("#1").val(listed)

$('#Btn-5').on("click", function () {


    event.preventDefault();
    userinput = $('#1')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("1", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("1");
});
var listed = localStorage.getItem("2")
$("#2").val(listed)

$('#Btn-6').on("click", function () {


    event.preventDefault();
    userinput = $('#2')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("2", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("2");
});
var listed = localStorage.getItem("3")
$("#3").val(listed)

$('#Btn-7').on("click", function () {


    event.preventDefault();
    userinput = $('#3')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("3", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("3");
});
var listed = localStorage.getItem("4")
$("#4").val(listed)

$('#Btn-8').on("click", function () {


    event.preventDefault();
    userinput = $('#4')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("4", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("4");
});
var listed = localStorage.getItem("5")
$("#5").val(listed)

$('#Btn-9').on("click", function () {


    event.preventDefault();
    userinput = $('#5')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("5", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("5");
});