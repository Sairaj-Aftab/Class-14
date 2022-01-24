// -----------Fiverr Work Delivery Counter---------------//

const fiver_wraper = document.querySelector('#fiver-wraper');
const fi_day = document.querySelector('.counter li .day');
const fi_hour = document.querySelector('.counter li .hours');
const fi_min = document.querySelector('.counter li .minutes');
const fi_sec = document.querySelector('.counter li .seconds');


fiver_wraper.addEventListener('submit', (e) => {
    e.preventDefault();

    let date = document.querySelector('input[type="date"]').value;
    let time = document.querySelector('input[type="time"]').value;

    if (date == '' || time == '') {
        alert('Please fill in the gaps')
    } else {
        let cou = setInterval( () => {
            let start_time = new Date();
            let end_time   = new Date(date + ' ' + time);
    
            let deff_time  = (Math.floor(Math.abs(end_time.getTime() - start_time.getTime())));
        
            let total_sec   = Math.floor(deff_time / 1000);
            let total_min   = Math.floor(total_sec / 60);
            let total_hours = Math.floor(total_min / 60);
            let total_day   = Math.floor(total_hours / 24);
    
            let hours = total_hours - (total_day * 24);
            let min   = total_min - (total_day * 24 * 60) - (hours * 60);
            let sec   = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

            fi_day.innerHTML = `${total_day < 10 ? '0'+total_day : total_day}`;
            fi_hour.innerHTML = `${hours < 10 ? '0'+hours : hours}`;
            fi_min.innerHTML = `${min < 10 ? '0'+min : min}`;
            fi_sec.innerHTML = `${sec < 10 ? '0'+sec : sec}`;
            

            if (total_day == 0 && hours == 0 && min == 0 && sec == 0) {
            clearInterval(cou);
            };

        }, 1000);
    }
    
});