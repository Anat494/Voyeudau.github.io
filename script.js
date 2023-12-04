const btn_open = document.getElementById("btn-open");
const btn_close = document.getElementById("btn-close");
const modal = document.getElementById("modal");

const modal_container = document.getElementById("model-container");

btn_open.addEventListener("click", () => {
  //add class.show
  modal_container.classList.add("show");
});

btn_close.addEventListener("click", () => {
  //add class.show
  modal_container.classList.remove("show");
  modal.classList.remove("check");
});

// var textAnimate = eval(
//   Jscex.compile("async", function () {
//     var together = new Date();
//     var year = 2020,
//       month = 7,
//       day = 20; // 5. thay đổi ngày tháng năm yêu nhau tại đây hoặc ngày sinh của người mà bạn muốn chúc
//     together.setFullYear(year, month - 1, day);
//     together.setHours(0);
//     together.setMinutes(0);
//     together.setSeconds(0);
//     together.setMilliseconds(0);

//     $("#code").show().typewriter();
//     $("#clock-box").fadeIn(500);
//     while (true) {
//       timeElapse(together);
//       $await(Jscex.Async.sleep(1000));
//     }
//   })
// );
