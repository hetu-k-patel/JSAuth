const USERS = {
   'admin@gmail.com': 'admin@123',
};

const signinWrapper = document.querySelector('.signin-wrapper');
const signupWrapper = document.querySelector('.signup-wrapper');

const hide = () => {
   signinWrapper.classList.toggle('hide');
   signupWrapper.classList.toggle('hide');

   document.querySelector('#signup-form').reset();
   document.querySelector('#signin-form').reset();
};

document.querySelector('#signup-form').addEventListener('submit', (e) => {
   e.preventDefault();
   console.log(e);

   e.target.reset();
});

document.querySelector('#signin-form').addEventListener('submit', (e) => {
   e.preventDefault();
   const data = Object.fromEntries(new FormData(e.target).entries());
   if (USERS[data.email] && USERS[data.email] === data.password) {
      window.location = 'https://hetu-k-patel.github.io/Portfolio/';
      sessionStorage.setItem('isLoggedIn', true);
   } else {
      alert('Not Found..!');
   }
   e.target.reset();
   console.log(e);
});
