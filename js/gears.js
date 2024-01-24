// let data; //
let jsonValue;
const shipParticular = document.getElementById("shipParticular");
const gearsTotal = document.querySelector(".gears-total");
const shipParticularTab = document.getElementById("shipParticularBtn");
const mrvTab = document.getElementById("mrv");
const mrv = document.getElementById("mrv-btn");
const popupCloseBtn = document.querySelector(".popup-close-btn");
const dcs = document.getElementById("dcs-btn");
const cii = document.getElementById("cii-btn");
const dcsTab = document.getElementById("dcs");
const ciiTab = document.getElementById("cii");
const IMO = document.querySelector(".IMO-input"); //전역변수 최소화
let imo;
let originData;

const popup = $("#popup")
  .dxPopup({
    width: 740,
    height: 875,
    visible: false,
    title: "My Vessels",
    hideOnOutsideClick: true,
    showCloseButton: true,
    toolbarItems: [],
  })
  .dxPopup("instance");
//스크롤 금욜
function setSelectBox() {
  $("#products-simple").dxSelectBox({
    items: ["IMO No", "Ship Name"],
    inputAttr: { "aria-label": "Simple Product" },
    value: "IMO No",
  });
}

function getData() {
  axios
    .get("/js/gears.json")
    .then((res) => {
      let tableData = res.data; // r 전역
      dataCount = tableData.length; //
      gearsTotal.textContent = `Total : ${dataCount}`;
      showTable(tableData);
      setSelectBox();
    })
    .catch((e) => {
      console.log("err=", e); //빈테이블
    });
}

document.addEventListener("DOMContentLoaded", function () {
  getData();
  shipParticularTab.addEventListener("click", showShipParticular);
  mrv.addEventListener("click", showMRV);
  dcs.addEventListener("click", showDCS);
  cii.addEventListener("click", showCII);
});
