let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
const container = document.createElement("div");
const mycontainer = document.createElement("div");
mycontainer.classList.add("mycontainer");
container.classList.add("container");
document.body.prepend(container);

const input = document.createElement("input");
input.placeholder = "Bir mebleg daxil edin...";
const button = document.createElement("button");
button.id = "btn_axtar";
button.textContent = "Axtar";
container.append(input, button, mycontainer);

let return_miqdar = [];
btn_axtar.addEventListener("click", () => {
  mycontainer.innerHTML = "";
  return_miqdar = setCountMoney(input.value);
  fillMoney(return_miqdar);
});

function setCountMoney(input_value) {
  let pul_emsali = [];
  let sum = input_value;
  let qismet = 0;

  for (let i = 0; i < pullar.length; i++) {
    qismet = Math.floor(sum / pullar[i]);
    if (qismet >= 1) {
      sum = sum - pullar[i] * qismet;
      pul_emsali.push(qismet);
    } else {
      pul_emsali.push(0);
    }
  }
  return pul_emsali;
}

function fillMoney(miqdar2) {
  miqdar2.map((value, index) => {
    if (value > 0 && value <= 5) {
      const board = document.createElement("div");
      mycontainer.append(board);
      for (let j = 1; j <= value; j++) {
        board.classList.add("board");
        const img = document.createElement("img");
        img.src = `./images/${pullar[index]}.jpg`;
        img.style.left = `${50 * j}px`;
        board.append(img);
      }
      const label = document.createElement("p");
      label.classList.add("label");
      label.innerHTML = `${value} X`;
      board.append(label);
    } else if (value > 5) {
      const board = document.createElement("div");
      board.classList.add("board");
      mycontainer.append(board);
      const img = document.createElement("img");
      img.src = `./images/${pullar[index]}.jpg`;
      img.style.left = `${50}px`;
      board.append(img);
      const label = document.createElement("p");
      label.classList.add("label");
      label.innerHTML = `${value} X`;
      board.append(label);
    }
  });
}
