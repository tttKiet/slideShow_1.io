const init = [
  {
    id: 1,
    name: "Basas Bumper Gum NE - Low Top",
    src: "./asset/imgs/1_basas.jpg",
    price: "58$",
    desc: "Đánh dấu một bước trưởng thành nữa, Basas Bumper Gum NE (New Episode) ra đời với những cải tiến nhẹ nhàng nhưng đủ tạo được sự thay đổi trong cảm nhận khi trải nghiệm.",
  },
  {
    id: 2,
    name: "Track 6 Class E - Low Top",
    src: "./asset/imgs/2_Track6.jpg",
    price: "103$",
    desc: "Sử dụng chất da bò Nappa có bề mặt nhẵn bóng, kết hợp cùng mesh và Suede (da lộn) thường xuất hiện ở các đôi Sneaker cao cấp.",
  },
  {
    id: 3,
    name: "Basas Bumper Gum EXT NE - Low Top",
    src: "./asset/imgs/3_bumper_gum.jpg",
    price: "46$",
    desc: "Bumper Gum EXT (Extension) NE là bản nâng cấp được xếp vào dòng sản phẩm Basas, nhưng lại gây ấn tượng với diện mạo phá đi sự an toàn thường thấy",
  },
  {
    id: 4,
    name: "Urbas Pineapple or Ananas - Low Top",
    src: "./asset/imgs/4_Urbas.jpg",
    price: "78$",
    desc: "Urbas Pineapple or Ananas Pack 'với quai dán tiện lợi gây ấn tượng với những phối màu' rất vui",
  },
];

function html([first, ...strings], ...values) {
  console.log(strings);

  return values
    .reduce(
      (acc, cur) => {
        console.log(cur);
        return acc.concat(cur, strings.shift());
      },
      [first]
    )
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

const htmls = html`
  <header class="header">Snipper Shose</header>
  ${init.map((item) => {
    return `
      <div class="shose_item">
            <img src="${item.src}" alt="" class="img" />
            <div class="wrap_item">
              <h1 class="name">${item.name}</h1>
              <span class="price">${item.price}</span>
              <span class="desc">${item.desc}</span>
            </div>
            </div>`;
  })}
  <i class="fa-solid fa-caret-left icon icon-left"></i>
  <i class="fa-solid fa-caret-right icon icon-right"></i>
`;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const container = $(".container");

function random() {
  container.innerHTML = htmls;
}

random();

const iconLeft = $(".icon-left");
const iconRight = $(".icon-right");
const item_shoes = $$(".shose_item");

console.log(item_shoes);

let n = item_shoes.length;
let currentIndex = 0;

function app() {
  //xu ly handle
  const handleOnclickL = () => {
    item_shoes[currentIndex].style.display = "none";
    item_shoes[currentIndex].style.visibility = "hidden";

    if (currentIndex === 0) {
      currentIndex = n - 1;
    } else {
      currentIndex--;
    }

    item_shoes[currentIndex].style.display = "flex";
    item_shoes[currentIndex].style.visibility = "visible";
  };

  const handleOnclickR = () => {
    item_shoes[currentIndex].style.display = "none";
    item_shoes[currentIndex].style.visibility = "hidden";
    if (currentIndex === n - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    item_shoes[currentIndex].style.display = "flex";
    item_shoes[currentIndex].style.visibility = "visible";
  };

  //Su kien
  iconLeft.onclick = handleOnclickL;
  iconRight.onclick = handleOnclickR;
}

app();
