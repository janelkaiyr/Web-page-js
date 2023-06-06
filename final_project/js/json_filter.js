

var request = new XMLHttpRequest();
request.open('get', 'services.json', true);;
request.responseType = 'json';
request.send();
request.onload = function () {
    var jsonfile = request.response;

    let elem1 = document.querySelector('.service-page-btn')
    elem1.classList.add('active')
    printAll(jsonfile)


    document.querySelector('.service-page__buttons').addEventListener("click", (event) => {
        event.preventDefault();

        if (event.target.tagName !== 'INPUT') return false;
        let serviceClass = event.target.dataset['category'];
        let activeelem = event.target;



        if (serviceClass == "all") {

            let filterbox = document.querySelectorAll('.service-page-btn')
            filterbox.forEach(elem => {
                elem.classList.remove('active');
            })

            printAll(jsonfile)
            elem1.classList.add('active')

        }
        else {
            let filterbox = document.querySelectorAll('.service-page-btn')
            filterbox.forEach(elem => {
                elem.classList.remove('active');
            })

            print(jsonfile, serviceClass)
            activeelem.classList.add('active')

        }

    })
}


function print(jsonfile, category, activeelem) {
    let output = "";

    for (let service of jsonfile) {

        if (service.category == category) {

            output += `
                    <div class="block__category ${service.category}">
                    <img class="block__img" src="img/${service.category}.svg" alt="${service.category}">
                    <div>
                        <h4 class="block__caption">${service.title}</h4>
                        <p class="block__text">${service.body}</p>
                    </div>
                    </div>
                    `;
        }
    }
    document.querySelector(".service-page__block").innerHTML = output;

}


function printAll(jsonfile) {
    let output = "";
    let arr = ["interior", "architecture", "planning"]
    let i = 0;

    for (let service of jsonfile) {

        if (service.category == arr[i]) {

            output += `
                    <div class="block__category ${service.category}">
                    <img class="block__img" src="img/${service.category}.svg" alt="${service.category}">
                    <div>
                        <h4 class="block__caption">${service.title}</h4>
                        <p class="block__text">${service.body}</p>
                    </div>
                    </div>
                    `;
            i++;
        }

    }

    document.querySelector(".service-page__block").innerHTML = output;
}
