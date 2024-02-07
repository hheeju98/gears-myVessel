const htmlContent = document.querySelector(".popup-lower-wrapper");
const deleteButton = document.getElementById("deleteButton");
const popupWithScrollView = $("#popup")
  .dxPopup({
    width: 740,
    height: 875,
    visible: false,
    title: "My Vessels",
    hideOnOutsideClick: true,
    showCloseButton: true,
    toolbarItems: [],
    contentTemplate() {
      const $scrollView = $("<div/>");
      $scrollView.append($("<div/>").html(htmlContent));
      $scrollView.dxScrollView({
        width: "100%",
        height: "100%",
      });
      return $scrollView;
    },
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
    .then((res) => {
      let tableData = res.data;
      dataCount = tableData.length;
      setSelectBox("#productSimple", IMO_no);

      data1 = new DevExpress.data.ArrayStore({
        key: "ID",
        data: tableData,
      });

      showTable(data1);
    })
    .catch((e) => {
      console.log("err=", e);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  getData();
  const stylingMode = "outlined";
  DevExpress.config({
    editorStylingMode: stylingMode,
  });
});
