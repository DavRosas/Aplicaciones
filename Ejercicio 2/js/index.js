let monthNames = ['Enero', 'Febrero', 'Marzo' ,'Abril' ,'Mayo', 'Junio' ,'Julio' 
,'Agosto', 'Septiembre' ,'Octubre' ,'Noviembre' ,'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

writeMonth(monthNumber);

function  writeMonth (month) {

    for (let i=1; i<=getTotalDays(month); i++) {
        if(i===currentDay) {
            dates.innerHTML += `<div class="calendar-date calendar-item calendar-today">${i}</div>`;
        }else {
            dates.innerHTML += `<div class="calendar-date calendar-item ">${i}</div>`;
        }
    }
}

function getTotalDays(month) {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 
        || month == 7 || month == 9 ||month == 11) {
            return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 8 ) {
        return isLeap() ? 29:28; 
    }
}

function isLeap() {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

function startDay() {
    let star = new Date( currentYear, monthNumber, 1);
    return ((start.getDay()-1)  === -1) ? 6 : star.getDay()-1;
}

function lastMonth() {
    if(monthNumber !== 0) {
        monthNumber--;
    }else {
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

function nextMonth() {
    if(monthNumber !== 11) {
        monthNumber++;
    }else {
        monthNumber = 0;
        currentYear++ ;
    }

    setNewDate();
}

function setNewDate(currentYear, monthNumber, currentDay) {
    currentDate.setFullYear(currentDate, monthNumber, currentDay)
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString(); 
    dates.textContent = '';
    writeMonth(monthNumber);
}

