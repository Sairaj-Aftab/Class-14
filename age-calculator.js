// ------------Age Calculator------------------//

const submit = document.querySelector('.age-calculator #action');
const html_year = document.querySelector('.age-calculator ul .year');
const html_month = document.querySelector('.age-calculator ul .month');
const html_day = document.querySelector('.age-calculator ul .day');
const html_hour = document.querySelector('.age-calculator ul .hour');
const html_min = document.querySelector('.age-calculator ul .min');
const html_sec = document.querySelector('.age-calculator ul .sec');

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    setInterval(() => {
        let date = document.querySelector('.age-calculator input[type="date"]').value;
        let time = document.querySelector('.age-calculator input[type="time"]').value;
    
        let current_time = new Date();
        let end_time     = new Date(date + ' ' + time);

        let deff_time    = end_time.getTime() - current_time.getTime()

        let total_sec    = Math.abs(Math.floor(deff_time / 1000));
        let total_min    = Math.abs(Math.floor(total_sec / 60));
        let total_hour   = Math.abs(Math.floor(total_min / 60));
        let total_day    = Math.abs(Math.floor(total_hour / 24));
        let total_month  = Math.abs(Math.floor(total_day / 30.416));
        let total_year   = Math.abs(Math.floor(total_month / 12));

        let month = total_month - (total_year * 12);
        let  day  = total_day - (total_year * 12 * 30.416) - (month * 30.416);
        let hour  = total_hour - (total_year * 12 * 30.416 * 24) - (month * 30.416 * 24) - (day * 24);
        let min  = total_min - (total_year * 12 * 30.416 * 24 * 60) - (month * 30.416 * 24 * 60) - (day * 24 * 60) - (hour * 60);
        let sec  = total_sec - (total_year * 12 * 30.416 * 24 * 60 * 60) - (month * 30.416 * 24 * 60 * 60) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);

        html_year.innerHTML = `${total_year < 10 ? '0'+total_year : total_year}`;
        html_month.innerHTML = `${month < 10 ? '0'+month : month}`;
        html_day.innerHTML = `${Math.abs(Math.floor(day)) < 10 ? '0'+Math.abs(Math.floor(day)) : Math.abs(Math.floor(day))}`;
        html_hour.innerHTML = `${Math.abs(Math.floor(hour)) < 10 ? '0'+Math.abs(Math.floor(hour)) : Math.abs(Math.floor(hour))}`;
        html_min.innerHTML = `${Math.abs(Math.floor(min)) < 10 ? '0'+Math.abs(Math.floor(min)) : Math.abs(Math.floor(min))}`;
        html_sec.innerHTML = `${Math.abs(Math.floor(sec)) < 10 ? '0'+Math.abs(Math.floor(sec)) : Math.abs(Math.floor(sec))}`;
    }, 1000)
    
})