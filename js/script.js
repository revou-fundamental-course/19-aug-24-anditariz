// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan nav

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// // Get the form element
const form = document.querySelector('form');

// // Listen for the form submission event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Get form data
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

//     // Validate the form data
    if (!name || !date || !gender || !message) {
        alert('Please fill in all fields.');
        return;
    }

//     // Log the form data to the console (or send it to a server)
    console.log('Name:', name);
    console.log('Date of Birth:', date);
    console.log('Gender:', gender);
    console.log('Message:', message);

//     // Display a success message to the user
    alert('Form submitted successfully!');

//     // Optionally, you could clear the form after submission
    form.reset();
});

function getCurrentTime() {
    const date = new Date().toString()
    return date
}

function formValidation() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    if (name && date && gender && message) {
        document.querySelector('#result-wrapper').classList.add('active')
        const result = `
            Current Time: ${getCurrentTime()}<br><br>
            Nama: ${name} <br>
            Tanggal Kehadiran: ${date} <br>
            Jenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Perempuan'} <br>
            Pesan: ${message}
        `;
        document.getElementById('result').innerHTML = result;
    } else {
        alert('Semua kolom harus diisi.');
    }
}