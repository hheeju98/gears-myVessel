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

function getData() {
  tableData
    .get()
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
      console.log("err=", e);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  getData();
  shipParticularTab.addEventListener("click", () =>
    showModalTab(shipParticular, shipParticularTab)
  );
  mrv.addEventListener("click", () => showModalTab(mrvTab, mrv));
  dcs.addEventListener("click", () => showModalTab(dcsTab, dcs));
  cii.addEventListener("click", () => showModalTab(ciiTab, cii));
  shipParticularTab.addEventListener("click", () =>
    showModalTab(shipParticular, shipParticularTab)
  );
});
