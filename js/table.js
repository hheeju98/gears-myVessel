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

        cellTemplate(container) {
          //행마다 넣는법
          const fieldData = data; //중복
          var wrapper = $("<div>").addClass("wrapper").appendTo(container);
          var firstSpan = $("<div>")
            .addClass(fieldData.length >= 0 ? "CII-Rating1" : "CII-Rating")
            .appendTo(wrapper);
          $("<div>")
            .addClass(fieldData.length >= 0 ? "CII-first1" : "CII-first")
            .text("C")
            .appendTo(firstSpan);
          $("<div>")
            .addClass(fieldData.length >= 0 ? "CII-second1" : "CII-second")
            .text("21")
            .appendTo(firstSpan);

          var firstSpan = $("<div>").addClass("CII-Rating").appendTo(wrapper);
          $("<div>").addClass("CII-first").text("-").appendTo(firstSpan);
          $("<div>").addClass("CII-second").text("-").appendTo(firstSpan);

          var firstSpan = $("<div>").addClass("CII-Rating").appendTo(wrapper);
          $("<div>").addClass("CII-first").text("-").appendTo(firstSpan);
          $("<div>").addClass("CII-second").text("-").appendTo(firstSpan);
        },
      },
    ],
    selection: {
      mode: "multiple",
      selectAllMode: "page",
      showCheckBoxesMode: "always",
    },
    onRowClick: (e) => {
      applyData(e); // e.data
    },
    showBorders: true,
  });
}
