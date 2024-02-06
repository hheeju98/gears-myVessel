let dataGrid;
let data1;

function createCIIcell(container, options) {
  const wrapper = $("<div>").addClass("wrapper").appendTo(container);
  const firstSpan = $("<div>")
    .addClass(options.data.No <= 3 ? "CII-Rating1" : "CII-Rating")
    .appendTo(wrapper);
  $("<div>")
    .addClass(options.data.No <= 3 ? "CII-first1" : "CII-first")
    .text(options.data.No <= 3 ? "C " : "-")
    .appendTo(firstSpan);
  $("<div>")
    .addClass(options.data.No <= 3 ? "CII-second1" : "CII-second")
    .text(options.data.No <= 3 ? "21 " : "-")
    .appendTo(firstSpan);

  for (let i = 1; i < 3; i++) {
    const secondSpan = $("<div>").addClass("CII-Rating").appendTo(wrapper);
    $("<div>").addClass("CII-first").text("-").appendTo(secondSpan);
    $("<div>").addClass("CII-second").text("-").appendTo(secondSpan);
  }
}
// $(function () {
//   $("#gridContainer").dxToolbar({
//     items: [
//       { text: "Add", locateInMenu: "auto" },
//       { text: "Change", locateInMenu: "always" },
//       { text: "Remove", locateInMenu: "always" },
//     ],
//   });
// });

function showTable(data1) {
  dataGrid = $("#gridContainer")
    .dxDataGrid({
      dataSource: data1,
      showBorders: true,
      selection: {
        mode: "multiple",
        selectAllMode: "page",
        showCheckBoxesMode: "always",
      },
      searchPanel: {
        visible: true,
        location: "before",
        highlightCaseSensitive: true,
      },
      columns: [
        "No",
        "IMO_NO",
        "Vessel_Name",
        {
          dataField: "DOC",
          dataType: "img",
          width: 140,
          cellTemplate(container) {
            $('<img src="/img/btn_doc.png">')
              .addClass("btn_do")
              .appendTo(container);
          },
        },
        "Technical_Manager",
        "Sync_API",
        {
          dataField: "CII_Rating",
          dataType: "number",
          width: 190,
          cellTemplate(container, options) {
            createCIIcell(container, options);
          },
        },
      ],
      toolbar: {
        items: [
          {
            location: "before",
            widget: "dxButton",
            options: {
              text: `Total : ${dataCount}`,
              width: 150,
              height: 38,
            },
          },
          {
            location: "before",
            widget: "dxButton",
            options: {
              text: "Delete ",
              onClick() {
                dataGrid.getSelectedRowKeys().forEach((key) => {
                  data1.remove(key);
                });
                dataGrid.refresh();
              },
            },
          },
          {
            location: "after",
            widget: "dxSelectBox",
            locateInMenu: "auto",
            options: {
              width: 140,
              items: productTypes,
              valueExpr: "id",
              displayExpr: "text",
              value: productTypes[0].id,
              inputAttr: { "aria-label": "Categories" },
              onValueChanged(args) {
                if (args.value > 1) {
                  productsStore.filter("type", "=", args.value);
                } else {
                  productsStore.filter(null);
                }
                productsStore.load();
              },
            },
          },
          "searchPanel",
          {
            location: "after",
            widget: "dxButton",
            options: {
              text: "Search",
              width: 110,
              height: 38,
            },
          },
          {
            location: "after",
            widget: "dxButton",
            locateInMenu: "auto",
            options: {
              icon: "refresh",
              onClick() {
                DevExpress.ui.notify("Refresh button has been clicked!");
              },
            },
          },
        ],
      },
      onRowClick: (e) => {
        setData(e);
      },
    })
    .dxDataGrid("instance");
}
