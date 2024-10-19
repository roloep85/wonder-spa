var tradeStart = 1992;
var currentYear = (new Date).getFullYear();
var copyRight = $('#currentCopy span');
var currentDate = $('#currentDate span');

function changeCopy () {
    copyRight.html(currentYear);
}
function changeDate () {
    currentDate.html(parseInt(currentYear) - tradeStart);
}
changeCopy();
changeDate();