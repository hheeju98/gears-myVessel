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

function showTable(data) {
  const data1 = new DevExpress.data.ArrayStore({
    key: "ID",
    data: data,
  });
  const dataGrid = $("#gridContainer")
    .dxDataGrid({
      dataSource: data1,
      showBorders: true,
      selection: {
        mode: "multiple",
        selectAllMode: "page",
        showCheckBoxesMode: "always",
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
            location: "after",
            widget: "dxButton",
            options: {
              text: "Delete ",

              // disabled: true,
              onClick() {
                dataGrid.getSelectedRowKeys().forEach((key) => {
                  data1.remove(key);
                });
                dataGrid.refresh();
              },
            },
          },
        ],
      },
      onSelectionChanged(data) {
        dataGrid.option(
          // "toolbar.items[0].options.disabled",
          !data.selectedRowsData.length
        );
      },
      onRowClick: (e) => {
        setData(e);
      },
    })
    .dxDataGrid("instance");
}
