var button = document.getElementById("add");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var alertEle = document.getElementById("alert");
var answerInput = document.getElementById("value");
button.addEventListener("click", function (e) {
    e.preventDefault();
    if (!input1.value || !input2.value) {
        alertEle.style.display = "block";
        setTimeout(function () { return (alertEle.style.display = "none"); }, 3500);
        return;
    }
    answerInput.value = "" + (parseInt(input1.value) + parseInt(input2.value));
});
