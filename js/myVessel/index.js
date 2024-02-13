const htmlContent = document.querySelector(".popup-lower-wrapper");

const deleteButton = document.querySelector(".gears-delete-btn");
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
      document.querySelector(
        ".gears-total"
      ).textContent = `Total : ${dataCount}`;
      setSelectBox("#productSimple", IMO_no);
      data1 = new DevExpress.data.ArrayStore({
        key: "ID",
        data: tableData,
      });

      showTable(data1);

      // dataGrid = $("#gridContainer")
      //   .dxDataGrid({
      //     dataSource: data1,
      //     showBorders: true,

      //     selection: {
      //       mode: "multiple",
      //       selectAllMode: "page",
      //       showCheckBoxesMode: "always",
      //     }, //click이벤트
      //     onContentReady(e) {
      //       totalCount = e.component.totalCount();
      //       console.log(totalCount);
      //     },
      //     // searchPanel: {
      //     //   visible: true,
      //     //   location: "before",
      //     //   highlightCaseSensitive: true,
      //     // },
      //     columns: [
      //       "No",
      //       "IMO_NO",
      //       "Vessel_Name",
      //       {
      //         dataField: "DOC",
      //         dataType: "img",
      //         width: 140,
      //         cellTemplate(container) {
      //           $('<img src="/img/btn_doc.png">')
      //             .on("dxclick", (e) => setData(e))
      //             .addClass("btn_do")
      //             .appendTo(container);
      //         },
      //       },
      //       "Technical_Manager",
      //       "Sync_API",
      //       {
      //         dataField: "CII_Rating",
      //         dataType: "number",
      //         width: 190,
      //         cellTemplate(container, options) {
      //           createCIIcell(container, options);
      //         },
      //       },
      //     ],

      //     // toolbar: {
      //     //   items: [
      //     //     {
      //     //       location: "before",
      //     //       widget: "dxButton",
      //     //       options: {
      //     //         text: `Total : ${dataCount}`,
      //     //         elementAttr: {
      //     //           id: "toolbarTotal",
      //     //         },
      //     //       },
      //     //     },
      //     //     {
      //     //       location: "before",
      //     //       widget: "dxButton",
      //     //       options: {
      //     //         elementAttr: {
      //     //           id: "toolbarDeleteButton",
      //     //         },
      //     //         text: "Delete",
      //     //         onClick() {
      //     //           dataGrid.getSelectedRowKeys().forEach((key) => {
      //     //             data1.remove(key);
      //     //           });
      //     //           dataGrid.refresh();
      //     //         },
      //     //       },
      //     //     },
      //     //     {
      //     //       location: "after",
      //     //       widget: "dxSelectBox",
      //     //       locateInMenu: "auto",
      //     //       options: {
      //     //         elementAttr: {
      //     //           id: "toolbarSelectbox",
      //     //         },
      //     //         editorStylingMode: "outlined",
      //     //         width: 140,
      //     //         items: productTypes,
      //     //         valueExpr: "id",
      //     //         displayExpr: "text",
      //     //         value: productTypes[0].id,
      //     //         inputAttr: { "aria-label": "Categories" },
      //     //         onValueChanged(args) {
      //     //           if (args.value > 1) {
      //     //             productsStore.filter("type", "=", args.value);
      //     //           } else {
      //     //             productsStore.filter(null);
      //     //           }
      //     //           productsStore.load();
      //     //         },
      //     //       },
      //     //     },
      //     //     "searchPanel",
      //     //     {
      //     //       location: "after",
      //     //       widget: "dxButton",
      //     //       options: {
      //     //         elementAttr: {
      //     //           id: "toolbarSearchButton",
      //     //         },
      //     //         text: "Search",
      //     //         width: 110,
      //     //         height: 38,
      //     //       },
      //     //     },
      //     //     {
      //     //       location: "after",
      //     //       widget: "dxButton",
      //     //       locateInMenu: "auto",
      //     //       options: {
      //     //         elementAttr: {
      //     //           id: "refreshButton",
      //     //         },
      //     //         icon: "refresh",
      //     //         onClick() {
      //     //           DevExpress.ui.notify("Refresh button has been clicked!");
      //     //         },
      //     //       },
      //     //     },
      //     //   ],
      //     // },
      //   })
      //   .dxDataGrid("instance");
    })
    .catch((e) => {
      console.log("err=", e);
    });

  function deleteSelectedData() {
    dataGrid.getSelectedRowKeys().forEach((key) => {
      data1.remove(key);
    });
    dataGrid.refresh();
  }
  deleteButton.addEventListener("click", () => {
    deleteSelectedData();
  });
  const stylingMode = "outlined"; //직접
  DevExpress.config({
    editorStylingMode: stylingMode,
  });
});
