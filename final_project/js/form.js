var allInputs = document.querySelectorAll('.form-input');


function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }


    let result = true;
    const email_test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const letter_test = /^[A-Za-z]+$/;

    var allInputs = form.querySelectorAll('.form-input');

    for (const input of allInputs) {

        removeError(input)

        if (input.dataset.letters) {
            if (letter_test.test(input.value)) {
                removeError(input)
            }
            else {
                createError(input, `You have to enter only latin letters, numbers and spaces are not allowed`)
                result = false
            }
        }
        if (input.dataset.capital) {
            if (input.value[0] === input.value[0].toUpperCase()) {
                removeError(input)
            }
            else {
                createError(input, `The first letter must be capitalized`)
                result = false
            }

        }

        if (input.dataset.email == "true") {
            if (email_test.test(input.value)) {
                removeError(input)
            }
            else {
                createError(input, `You have entered an invalid email address!`)
                result = false
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'The field is not filled!')
                result = false
            }
        }

    }

    return result
}


document.querySelector('.form-page__form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validation(this) == true) {
        /*let userInfo = []
        this.querySelectorAll('input').forEach(input => {
            //userInfo.push(input.value);
        });
        localStorage.setItem(`user-${userInfo[0]}`, JSON.stringify(userInfo));*/
        const name = this.querySelector("#name").value;
        const surname = this.querySelector("#surname").value;
        const email = this.querySelector("#email").value;
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('email', email);



        document.querySelector(".modal").classList.add("open");
        const nameStorage = localStorage.getItem('name');
        var today = new Date();
        if (nameStorage == "Zhanel") {
            document.querySelector('.modal__caption1').innerHTML = `Special offer for users named ${nameStorage}!!`;
            document.querySelector('.modal__caption2').innerHTML = `If today(${today.toLocaleDateString()}) you placing an order, you will have discount 120% !!`;
        }
        else {
            document.querySelector('.modal__caption1').innerHTML = `Thanks for your attention ${nameStorage}!!`;
            document.querySelector('.modal__caption2').innerHTML = `Today (${today.toLocaleDateString()}) your form has been submitted`;
        }



        setTimeout(() => {
            document.querySelector(".modal").classList.remove("open")
        }, 5000)

    }

})


