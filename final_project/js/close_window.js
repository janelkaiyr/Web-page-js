/*
if (document.body.addEventListener("mouseover", close(), false)) {
    setTimeout(() => {
        let user_activity = document.body.addEventListener("mouseover", () => {
            window.close()
            /*let answer = confirm("Would you like to close the window?");
            if (answer) user()
            else window.close()
            setTimeout(window.close(), 5000)
        }, false)
    }, 10000)

}
function user() {
    setTimeout(() => {
        let user_activity = document.body.addEventListener("mouseover", close(), false)
    }, 10000)

}
function close() {

}
user();
*/
let arr = [];
let timer = setInterval(go(), 1000)


function go() {
    let answer = document.body.addEventListener("mouseover", () => {
        arr.push("false")
    }, false);
    return answer
}
setTimeout(function go2() {
    clearInterval(timer)
    if (arr.length == 60) {
        window.close()
    }
    else {
        arr = [];
        SetInterval(() => {
            let answer = document.body.addEventListener("mouseover", () => {
                arr.push("false")
            }, false);
        }, 1000);

        setTimeout(go2, 6000);
    }
}, 6000);