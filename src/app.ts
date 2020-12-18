const button = document.getElementById("add")! as HTMLButtonElement;
const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;
const alertEle = document.getElementById("alert")! as HTMLDivElement;
const answerInput = document.getElementById("value")! as HTMLInputElement;

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!input1.value || !input2.value) {
    alertEle.style.display = "block";

    setTimeout(() => (alertEle.style.display = "none"), 3500);
    return;
  }

  answerInput.value = JSON.stringify(
    parseInt(input1.value) + parseInt(input2.value)
  );
});
