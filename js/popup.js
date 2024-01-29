let tabType; // 탭함수 매개변수로

function applyData(e) {
  console.log(e.IMO_NO);
  popup.show();
  showShipParticular();
  IMO.value = e.IMO_NO;
  originData = e;
  setSelectBox("#iceClass", Ice_Class);
  setSelectBox("#portOf", Port_of_Registry);
}

function showShipParticular() {
  tabType = shipParticular.style.display = "block";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  shipParticularBtn.classList.add("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
}

function showMRV() {
  //함수 하나만 쓰는거
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
    alert(changedData.IMO_NO); //객체 만들기
  }
}
