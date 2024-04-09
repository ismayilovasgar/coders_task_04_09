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

let miqdar2 = [];
btn_axtar.addEventListener("click", () => {
  mycontainer.innerHTML = "";
  miqdar2 = setCountMoney(input.value);
  fillMoney(miqdar2);
});

function setCountMoney(input_value) {
  let miqdar = [];
  let k;
  let sum = input_value;
  for (let i = 0; i < pullar.length; i++) {
    k = 0;
    while (true) {
      if (sum / pullar[i] >= 1) {
        sum = sum - pullar[i];
        k++;
      } else {
        break;
      }
    }
    miqdar.push(k);
  }
  console.log(miqdar);
  console.log(pullar);
  return miqdar;
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
