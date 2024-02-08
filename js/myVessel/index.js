const htmlContent = document.querySelector(".popup-lower-wrapper");

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

document.addEventListener("DOMContentLoaded", function () {
  tableData()
    .then((res) => {
      console.log(res);
      let tableData = res;
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
  const stylingMode = "outlined"; //직접
  DevExpress.config({
    editorStylingMode: stylingMode,
  });
});
