function changeLights(lightId) {
    let red = document.getElementById(`red${lightId}`);
    let yellow = document.getElementById(`yellow${lightId}`);
    let green = document.getElementById(`green${lightId}`);
    
    setInterval(() => {
        red.style.background = 'red';
        yellow.style.background = 'gray';
        green.style.background = 'gray';
        
        setTimeout(() => {
            red.style.background = 'gray';
            yellow.style.background = 'yellow';
            
            setTimeout(() => {
                yellow.style.background = 'gray';
                green.style.background = 'green';
                
                setTimeout(() => {
                    green.style.background = 'gray';
                }, 3000);
            }, 2000);
        }, 1500);
    }, 10000);
}

for (let i = 1; i <= 4; i++) {
    changeLights(i);
}
