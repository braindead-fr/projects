let hours = 0
let minutes = 0
let seconds = 0

function timer() {
    seconds++

    if (seconds === 60) {
        seconds = 0
        minutes++
    }
    if(minutes === 60){
        minutes = 0
        hours++
    }
    document.getElementById('timer').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', function() {
    timerInterval = setInterval(timer, 1000);
});

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(timerInterval);
});

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(timerInterval);

    let work = document.getElementById('work').value;
    let working = document.getElementById('working').value;
    let time = document.getElementById('timer').innerHTML;
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let del = document.createElement('button');

    div.setAttribute('class', 'storagediv');
    p1.setAttribute('class','storagework');
    p2.setAttribute('class','storageworking');
    p3.setAttribute('class','storagetime');
    del.setAttribute('class', 'storagedelete');

    p1.textContent = work;
    p2.textContent = working;
    p3.textContent = time;
    del.textContent = 'Delete';

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(del);

    del.addEventListener('click', function(){
        div.remove()
    })

    let output = document.getElementById('output');
    if (output.firstChild) {
        output.insertBefore(div, output.firstChild);
    } else {
        output.appendChild(div);
    }

    hours = 0
    minutes = 0
    seconds = 0

    document.getElementById('timer').innerText = '00:00:00';
    document.getElementById('work').value = '';
    document.getElementById('working').value = '';
});

