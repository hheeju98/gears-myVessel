function applyData(e) {
  popup.show();
  showShipParticular();
  IMO.value = e.data.IMO_NO;
  originData = e.data;
}

function showShipParticular() {
  shipParticular.style.display = "block";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  shipParticularBtn.classList.add("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
}

function showMRV() {
  mrvTab.style.display = "block";
  shipParticular.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  mrv.classList.add("active-modal-btn");
  shipParticularBtn.classList.remove("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
}
function showDCS() {
  shipParticular.style.display = "none";
  mrvTab.style.display = "none";
  dcsTab.style.display = "block";
  ciiTab.style.display = "none";
  dcs.classList.add("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
  shipParticularBtn.classList.remove("active-modal-btn");
}
function showCII() {
  shipParticular.style.display = "none";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "block";
  cii.classList.add("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  shipParticularBtn.classList.remove("active-modal-btn");
}

function saveData() {
  const changedData = {};
  changedData.IMO_NO = IMO.value;
  popup.hide();
  if (originData.IMO_NO !== changedData.IMO_NO) {
    alert(changedData.IMO_NO);
  }
}
