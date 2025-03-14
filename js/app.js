let input = document.querySelector(".email");
let btn = document.querySelector(".next-btn");
let sendMoneyBtn = document.querySelector(".send-money");
let mainPage = document.querySelector(".main");
let secondPage = document.querySelector(".second-page");
let loader = document.querySelector(".loader");
let transferFoundBtn = document.querySelector(".transfer-btn");
let dashboard = document.querySelector(".dashboard");
let sendAndRequest = document.querySelector(".send-and-request");
let inputUsd = document.querySelector(".input-usd");
let finishBtn = document.querySelector(".finish-btn");
let chosedUser = document.querySelector(".choseduser");
let thirdPage = document.querySelector(".third-page");
let finishPage = document.querySelector(".ssecssesfuly-wrapper");
let makeMorePayment = document.querySelector(".make-more-btn");
let countUsd = document.querySelector(".count-usd");
let sendingUser = document.querySelector(".sending-user");
let balance = document.querySelector(".balance");
let balanceCount = 1278152000;
let count = 0;
let recentActivity = document.querySelector(".reacent-activity-wrapper");
const maxTransactions = 6;
const sendAgainWrapper = document.querySelector(".send-again-wrapper");
const maxTransactionsUser = 3;
let generatedColor = ""; // ცალკე ცვლადი ფერისთვის
let generatedInitial = ""; // ცალკე ცვლადი ასოსთვის

inputUsd.addEventListener("keypress", (e) => {
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    finishBtn.classList.add("active");
  } else {
    finishBtn.classList.remove("active");
  }
});

makeMorePayment.addEventListener("click", () => {
  loader.classList.remove("hidden");
  finishPage.classList.add("hidden");
  sendAndRequest.classList.remove("active");

  setTimeout(() => {
    loader.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }, 1000);
});

finishBtn.addEventListener("click", () => {
  let numberValue = 0;
  numberValue = inputUsd.value;
  if (balanceCount < numberValue) {
    balance.innerHTML = "0";
  } else {
    count = balanceCount - parseInt(numberValue);
    balanceCount = balanceCount - parseInt(numberValue);
    balance.innerHTML = `${count.toLocaleString()} `;
    addTransaction();
    addUserTransaction();
  }
  thirdPage.classList.add("hidden");
  loader.classList.remove("hidden");
  countUsd.innerHTML = `${inputUsd.value}`;
  sendingUser.innerHTML = `@${input.value}`;
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    finishPage.classList.remove("hidden");
  }, 1000);
});

btn.addEventListener("click", () => {
  chosedUser.innerHTML = `@${input.value}`;
  secondPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  loader.classList.remove("hidden");
  generateAvatar();

  setTimeout(() => {
    thirdPage.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1000);
});

sendAndRequest.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

dashboard.addEventListener("click", () => {
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  sendAndRequest.classList.remove("active");
  secondPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }, 1000);
});

transferFoundBtn.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

sendMoneyBtn.addEventListener("click", () => {
  sendAndRequest.classList.add("active");
  thirdPage.classList.add("hidden");
  finishPage.classList.add("hidden");
  dashboard.classList.remove("active");
  mainPage.classList.add("hidden");
  loader.classList.remove("hidden");
  input.value = "";
  inputUsd.value = "";
  setTimeout(() => {
    loader.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }, 1000);
});

input.addEventListener("keypress", (e) => {
  if (
    e.key === "q" ||
    e.key === "w" ||
    e.key === "e" ||
    e.key === "r" ||
    e.key === "t" ||
    e.key === "y" ||
    e.key === "u" ||
    e.key === "i" ||
    e.key === "o" ||
    e.key === "p" ||
    e.key === "a" ||
    e.key === "s" ||
    e.key === "d" ||
    e.key === "f" ||
    e.key === "g" ||
    e.key === "h" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l" ||
    e.key === "z" ||
    e.key === "x" ||
    e.key === "c" ||
    e.key === "v" ||
    e.key === "b" ||
    e.key === "n" ||
    e.key === "m" ||
    e.key === "Q" ||
    e.key === "W" ||
    e.key === "E" ||
    e.key === "R" ||
    e.key === "T" ||
    e.key === "Y" ||
    e.key === "U" ||
    e.key === "I" ||
    e.key === "O" ||
    e.key === "P" ||
    e.key === "A" ||
    e.key === "S" ||
    e.key === "D" ||
    e.key === "F" ||
    e.key === "G" ||
    e.key === "H" ||
    e.key === "J" ||
    e.key === "K" ||
    e.key === "L" ||
    e.key === "Z" ||
    e.key === "X" ||
    e.key === "C" ||
    e.key === "V" ||
    e.key === "B" ||
    e.key === "N" ||
    e.key === "M" ||
    e.key === "@" ||
    e.key === "-" ||
    e.key === "_" ||
    e.key === "." ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0"
  ) {
    btn.classList.add("btn-active");
  } else {
    btn.classList.remove("btn-active");
  }
});

function addTransaction() {
  let transactionHTML = `
   <div class="recent-history">
            <div class="hist-img">
                <div class="sen-avatar" style="width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; color: white; background-color: ${generatedColor};">
          ${generatedInitial}
        </div>

              <div class="balance-wrapper">
                
                <h3 class="transfer-using user">@${input.value}</h3>
                <p class="transfer-using">التحويل الفوري باستخدام الرصيد</p>
              </div>
            </div>
            <div class="transfer-count">
              <h4 class="sending">- ${inputUsd.value}.00</h4>
            </div>
          </div>
  `;

  recentActivity.insertAdjacentHTML("afterbegin", transactionHTML);

  if (recentActivity.children.length > maxTransactions) {
    recentActivity.removeChild(recentActivity.lastElementChild);
  }
}

function addUserTransaction() {
  let transactionHTML = `
    <div class="newuser">
      <div class="avatar">
       <div class="sen-avatar" style="width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; color: white; background-color: ${generatedColor};">
          ${generatedInitial}
        </div>
      </div>
      <p class="usernam">@${input.value}</p>
    </div>
  `;

  const usersWrapper = sendAgainWrapper.querySelector(".users-wrapper");
  usersWrapper.insertAdjacentHTML("afterbegin", transactionHTML);

  if (usersWrapper.children.length > maxTransactionsUser) {
    usersWrapper.removeChild(usersWrapper.lastElementChild);
  }
}

// function generateAvatar() {
//   const username = input.value.trim();
//   if (username) {
//     // აიღე პირველი ასო
//     const initial = username.charAt(0).toUpperCase();

//     // არჩევა შემთხვევითი ფერი
//     const randomColor = getRandomColor();

//     // მიიღე ელემენტი და დააყენე სტატიკური ფერი და ინიციალი
//     const avatarr = document.getElementById("avatarr");
//     avatarr.style.backgroundColor = randomColor;
//     avatarr.textContent = initial;
//   }
// }

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

function generateAvatar() {
  const username = input.value.trim();
  if (username) {
    // აიღე პირველი ასო
    generatedInitial = username.charAt(0).toUpperCase();

    // არჩევა შემთხვევითი ფერი
    generatedColor = getRandomColor();

    // მიიღე ელემენტი და დააყენე სტატიკური ფერი და ინიციალი
    const avatarr = document.getElementById("avatarr"); // შეცვლილი
    avatarr.style.backgroundColor = generatedColor;
    avatarr.textContent = generatedInitial;
  }
  console.log(generatedColor);
  console.log(generatedInitial);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(generatedColor);
console.log(generatedInitial);
