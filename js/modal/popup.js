let tabType; // 탭함수 매개변수로
function applyData(e) {
  console.log(e.IMO_NO);
  popup.show();
  shipParticular.style.display = "block";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  shipParticularBtn.classList.add("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
  IMO.value = e.IMO_NO;
  originData = e;
  setSelectBox("#iceClass", Ice_Class);
  setSelectBox("#portOf", Port_of_Registry);
}

function showModalTab(tabValue, tabBtn) {
  shipParticular.style.display = "none";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  shipParticularTab.classList.remove("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
  tabValue.style.display = "block";
  tabBtn.classList.add("active-modal-btn");
}

function saveData() {
  const changedData = {};
  changedData.IMO_NO = IMO.value;
  popup.hide();
  if (originData.IMO_NO !== changedData.IMO_NO) {
    alert(changedData.IMO_NO); //객체 만들기
  }
}
