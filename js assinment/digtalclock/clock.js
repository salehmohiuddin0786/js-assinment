function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    let date = now.toLocaleDateString();
    let time = `${hours}:${minutes}:${seconds} ${amPm}`;
    
    document.getElementById('clock').innerHTML = `${date} <br> ${time}`;
}
setInterval(updateClock, 1000);
updateClock(); 
