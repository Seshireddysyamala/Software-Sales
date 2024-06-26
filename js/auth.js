document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('user', JSON.stringify({ email: e.target.username.value }));
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('user', JSON.stringify({ email: e.target.email.value }));
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        });
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user && !['/login.html', '/signup.html'].includes(window.location.pathname)) {
        window.location.href = 'login.html';
    }
});