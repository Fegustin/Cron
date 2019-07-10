function cl_btn() {

    var cl_info_1 = document.getElementById('clients');
    cl_info_1.innerHTML = "<p>Имя: </p> <p>Домен: </p> <p>Почта: </p> <p>Телефон: </p><hr>";

    var cl_info_2 = document.getElementById('about');
    cl_info_2.innerHTML = "<p>Магомед-Салам Капиев </p> <p><a href='mgstone.com'>mgstone.com</a> </p> <p><a href='mailTo: mskapiev@mail.ru'>mskapiev@mail.ru</a></p> <p> <a href='tel:+79031280746'>+7(903)-128-07-46</a> </p><hr>";

    var cl_btn_add = document.getElementById('btn_add');
    cl_btn_add.innerHTML = "<button type='button' class='btn  btn-sm btn-outline-success'>Добавить</button>";
}

function ad_btn() {
    var ad_info_1 = document.getElementById('clients');
    ad_info_1.innerHTML = "";

    var ad_info_2 = document.getElementById('about');
    ad_info_2.innerHTML = "";
}

function rq_btn() {
    var ad_info_1 = document.getElementById('clients');
    ad_info_1.innerHTML = "";

    var ad_info_2 = document.getElementById('about');
    ad_info_2.innerHTML = "";
}

function st_btn() {
    var ad_info_1 = document.getElementById('clients');
    ad_info_1.innerHTML = "";

    var ad_info_2 = document.getElementById('about');
    ad_info_2.innerHTML = "";
}

function smm_btn() {
    var ad_info_1 = document.getElementById('clients');
    ad_info_1.innerHTML = "";

    var ad_info_2 = document.getElementById('about');
    ad_info_2.innerHTML = "";
}







// Форма регистрации
const registration = document.querySelector('.registration');

//   data-toggle="modal"
registration.addEventListener('submit', (e) => {
    e.preventDefault();

    let regEmail = document.querySelector('.registration__email');
    let regPassword = document.querySelector('.registration__password');
    let regPasswordRepeat = document.querySelector('.registration__password-repeat');

    if (regPassword.value == regPasswordRepeat.value) {
        let departureForm = {
            email: regEmail.value,
            password: regPassword.value,
        };

        let dataForm = new FormData();
        dataForm.append("json", JSON.stringify(departureForm));

        fetch('', {
            method: 'POST',
            body: dataForm
        }).then(res => {
            if (res.ok) return res.json();
            else return Promise.reject(new Error(`Respinse failed: ${res.status} /// (${res.statusText})`));
        }).then(data => {})
    }
});

// Форма входа
let switcher = document.querySelector('.box__reg');
let mainContent = document.querySelector('.main');
const signIn = document.querySelector('#reg');
signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // let email = document.querySelector('.sing__email')
    // let password = document.querySelector('.sing__password')

    switcher.className += ' dontSing';
    mainContent.className += ' activeMain';


    // let departureForm = {
    //     email: email.value,
    //     password: password.value,
    // };

    // let dataForm = new FormData();
    // dataForm.append("json", JSON.stringify(departureForm));

    // fetch('', {
    //     method: 'POST',
    //     body: dataForm
    // }).then(res => {
    //     if (res.ok) return res.json();
    //     else return Promise.reject(new Error(`Respinse failed: ${res.status} /// (${res.statusText})`));
    // }).then(data => {
    //     if (data == 1) {

    //     }
    // })
    
});