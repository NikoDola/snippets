document.addEventListener('DOMContentLoaded', () => {
    console.log('filtering');

    const theInput = document.getElementById('theInput');
    const text = document.getElementById('text');

    const arr = ['javascript', 'python', 'powershell', 'html', 'css'];

    theInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const newArr = arr.filter(lng => lng.toLowerCase().includes(searchText));
        console.log(newArr);
        text.textContent = newArr.join(', ');
    });
});
