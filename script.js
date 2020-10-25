
var currentDay = $("#currentDay");
currentDay.innerText = moment().format('LLLL');

var textbox = $("#col-10");
textboxs = $("#input");
$(textboxs).appendTo($(textbox));
var i = 0

setInterval(function () {
    currentDay.innerText = moment().format('LLLL');
}, 1000);

var currentHour = moment().hours()

$(".col-10").each(function () {


    var blockHour = parseInt($(this).attr("id"))

    if (currentHour < blockHour) {
        $(this).addClass("future")
    }
    else if (currentHour === blockHour) {
        $(this).removeClass("future")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("future")
        $(this).removeClass("present")
        $(this).addClass("past")
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
    var response = $(this).attr("13");
});
var listed = localStorage.getItem("13")
$("#13").val(listed)

$('#Btn-5').on("click", function () {


    event.preventDefault();
    userinput = $('#13')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("13", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("13");
});
var listed = localStorage.getItem("14")
$("#14").val(listed)

$('#Btn-6').on("click", function () {


    event.preventDefault();
    userinput = $('#14')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("14", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("14");
});
var listed = localStorage.getItem("15")
$("#15").val(listed)

$('#Btn-7').on("click", function () {


    event.preventDefault();
    userinput = $('#15')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("15", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("15");
});
var listed = localStorage.getItem("16")
$("#16").val(listed)

$('#Btn-8').on("click", function () {


    event.preventDefault();
    userinput = $('#16')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("16", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("16");
});
var listed = localStorage.getItem("17")
$("#17").val(listed)

$('#Btn-9').on("click", function () {


    event.preventDefault();
    userinput = $('#17')
        .val();

    console.log(userinput)
    if (userinput === "") {
        return;
    }
    localStorage.setItem("17", userinput);
});

$(document).on('click', function () {
    var response = $(this).attr("17");
});