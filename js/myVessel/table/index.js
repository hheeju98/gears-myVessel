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
    .appendTo(firstSpan); // 여기도 스크립트로

  for (let i = 1; i < 3; i++) {
    //스크립트로
    const secondSpan = $("<div>").addClass("CII-Rating").appendTo(wrapper);
    $("<div>").addClass("CII-first").text("-").appendTo(secondSpan);
    $("<div>").addClass("CII-second").text("-").appendTo(secondSpan);
  }
}

function showTable(data) {
  $("#gridContainer").dxDataGrid({
    dataSource: data,
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
    selection: {
      mode: "multiple",
      selectAllMode: "page",
      showCheckBoxesMode: "always",
    },
    onRowClick: (e) => {
      console.log(e.data);
      setData(e);
    },
    showBorders: true,
  });
}
