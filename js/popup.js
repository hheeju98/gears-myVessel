function applyData(e) {
  //
  popup.show();
  IMO.value = e.data.IMO_NO;
  originData = e.data;
}

function showShipParticular() {
  shipParticular.style.display = "block";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
}

function showMRV() {
  mrvTab.style.display = "block";
  shipParticular.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
}
function showDCS() {
  shipParticular.style.display = "none";
  mrvTab.style.display = "none";
  dcsTab.style.display = "block";
  ciiTab.style.display = "none";
}
function showCII() {
  shipParticular.style.display = "none";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "block";
}

function saveData() {
  const changedData = {};
  changedData.IMO_NO = IMO.value;
  popup.hide();
  if (originData.IMO_NO !== changedData.IMO_NO) {
    alert(changedData.IMO_NO);
  }
  showShipParticular(); //오픈후 문서
}
