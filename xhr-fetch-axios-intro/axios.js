const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://reqres.in/api/users')
        .then( response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
};

const sendData = () => {
    axios.post('https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
       // password: "pistol"
    })
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.log('Something went wrong - password missing');
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
