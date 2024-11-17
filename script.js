document.getElementById('search-btn').addEventListener('click', () => {
    const keyword = document.getElementById('search-keyword').value.toLowerCase();
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = ''; // Clear previous results
            const filtered = data.filter(item => item.category.includes(keyword));
            if (filtered.length === 0) {
                results.innerHTML = '<p>No results found. Try another keyword!</p>';
            } else {
                filtered.forEach(place => {
                    const card = document.createElement('div');
                    card.className = 'recommendation';
                    card.innerHTML = `
                        <img src="${place.imageUrl}" alt="${place.name}">
                        <h3>${place.name}</h3>
                        <p>${place.description}</p>
                    `;
                    results.appendChild(card);
                });
            }
        });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('results').innerHTML = '';
    document.getElementById('search-keyword').value = '';
});
