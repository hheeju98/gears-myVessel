let originData;
const shipParticular = document.getElementById("shipParticular");
const mrvTab = document.getElementById("mrv");
const dcsTab = document.getElementById("dcs");
const ciiTab = document.getElementById("cii");
const shipParticularTab = document.getElementById("shipParticularBtn");
const mrv = document.getElementById("mrvBtn");
const dcs = document.getElementById("dcsBtn");
const cii = document.getElementById("ciiBtn");

const IMO = document.querySelector(".IMO-input"); //전역변수 최소화

// 탭 클릭시 색 변경
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
  $("#productSimple").dxSelectBox({
    items: ["IMO No", "Ship Name"],
    inputAttr: { "aria-label": "Simple Product" },
    value: "IMO No",
  });
}

function getData() {
  axios
    .get("/js/gears.json")
    .then((res) => {
      let tableData = res.data;
      dataCount = tableData.length;

      document.querySelector(
        ".gears-total"
      ).textContent = `Total : ${dataCount}`;
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
