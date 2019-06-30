let fact = document.querySelector("#facts");
let factText = document.querySelector("#outputFact");

let inputElem = document.querySelector("#inputNumber");

inputElem.addEventListener("input", getAjaxFetch);

function getAjaxFetch() {
    let inputVal = inputElem.value;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + inputVal);

    xhr.onload = function () {
        if (this.status === 200 && inputVal != '') {
            fact.style.display = "block";

            factText.innerHTML = this.responseText;
            factText.classList.add("slideInUp");

            setTimeout(() => {
                factText.classList.remove("slideInUp");
            }, 2000);

        }
    }

    xhr.send();
}