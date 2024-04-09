const container = document.createElement("div");
container.classList.add("container");
document.body.prepend(container);

const input = document.createElement("input");
const button = document.createElement("button");
button.id = "btn_axtar";
button.textContent = "Axtar";
container.append(input, button);

btn_axtar.addEventListener("click", setCountMoney(input.value));

function setCountMoney(input_value) {
  let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
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

function fillMoney() {
  let pullar = [500, 200, 100, 50, 20, 10, 5, 1];
  let miqdar2 = setCountMoney();

  miqdar2.map((value, index) => {
    const board = document.createElement("div");
    container.append(board);
    for (let j = 1; j <= value; j++) {
      board.classList.add("board");
      const img = document.createElement("img");
      img.src = `./images/${pullar[index]}.jpg`;
      img.style.left = `${10 * j}px`;
      board.append(img);
    }
  });
}

// document.body.prepend(container);
