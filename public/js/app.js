const form = document.querySelector('.form');
let submitted = '';
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const number = document.querySelector('.number').value;
    const data = {
        name,
        email,
        number,
    };
    console.log(data);
    fetch('https://portfolio-f8f91.firebaseio.com/data.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(data);
    const feedBack = document.querySelector('.feedback');
    feedBack.textContent = `${data.name}, I will contact you soon, Thanks`;
});
