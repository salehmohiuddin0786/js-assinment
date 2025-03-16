async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const list = document.getElementById('data-list');
        list.innerHTML = "";

        data.slice(0, 10).forEach(item => { 
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            list.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(); 
