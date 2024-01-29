let originData;
const shipParticular = document.getElementById("shipParticular");
const mrvTab = document.getElementById("mrv");
const dcsTab = document.getElementById("dcs");
const ciiTab = document.getElementById("cii");
const shipParticularTab = document.getElementById("shipParticularBtn");
const mrv = document.getElementById("mrvBtn");
const dcs = document.getElementById("dcsBtn");
const cii = document.getElementById("ciiBtn");
const IMO = document.querySelector(".IMO-input");

const aa = [
  {
    displayValue: "",
    className: "CII-first1",
  },
];
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

function setSelectBox(id, arrayData) {
  $(id).dxSelectBox({
    items: arrayData,
    inputAttr: { "aria-label": "Simple Product" },
    value: arrayData[0],
  });
}
// api분라 api폴더

function getData() {
  axios
    .get("/js/gears.json") //axios분리
    .then((res) => {
      let tableData = res.data;
      dataCount = tableData.length;

      document.querySelector(
        ".gears-total"
      ).textContent = `Total : ${dataCount}`;
      showTable(tableData);
      setSelectBox("#productSimple", IMO_no);
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
