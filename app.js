let pullar = [500, 200, 100, 50, 20, 10, 5, 1];

const container = document.createElement("div");
const mycontainer = document.createElement("div");
mycontainer.classList.add("mycontainer");
container.classList.add("container");
document.body.prepend(container);

const input = document.createElement("input");
input.placeholder = "Bir Mebleg Daxil Edin...";
const button = document.createElement("button");
button.id = "btn_axtar";
button.textContent = "Axtar";
container.append(input, button, mycontainer);

btn_axtar.addEventListener("click", () => {
  mycontainer.innerHTML = "";
  fillMoney(setCountMoney(input.value));
});

function setCountMoney(input_value) {
  let bolunen = input_value;
  let pul_emsali = [];
  let qismet = 0;

  pullar.map((eded, indeksi) => {
    qismet = Math.floor(bolunen / eded);
    if (qismet >= 1) {
      bolunen = bolunen - eded * qismet;
      pul_emsali.push(qismet);
    } else {
      pul_emsali.push(0);
    }
  });
  
  console.log(pullar);
  console.log(pul_emsali);
  return pul_emsali;
}

function fillMoney(miqdar) {
  miqdar.map((value, index) => {
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
