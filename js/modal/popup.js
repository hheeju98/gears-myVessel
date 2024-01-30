let originData;
const IMO = document.querySelector(".IMO-input");
const shipName = document.querySelector(".ship-name-input");
const GT = document.querySelector(".gt-input");
const NT = document.getElementById("nt");
const DWT = document.querySelector(".dwt-input");
const EEDI = document.querySelector(".EEDI-input");
const iceClass = document.getElementById("iceClass");
const propulsion = document.querySelector(".propulsion-input");
const auxiliary = document.querySelector(".Auxiliary-input");
const SFOC = document.querySelector(".SFOC-input");
const flag = document.getElementById("flag");
const registry = document.getElementById("portOfRegistry");
const shipOwner = document.getElementById("shipOwner");
const classification = document.getElementById("classification");
const officialNO = document.getElementById("officialNO");
const signalLetter = document.getElementById("signalLetter");
const remark = document.querySelector(".remark-input");

function moveToTop() {
  htmlContent.scrollTop = 0;
}
function setData(e) {
  // 행눌러서 열때 호출
  console.log(e.IMO_NO);
  popupWithScrollView.show();
  shipParticular.style.display = "block";
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  shipParticularBtn.classList.add("active-modal-btn");
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
  IMO.value = e.IMO_NO; // 처음에 열때 데이터
  originData = e;
  moveToTop();
  setSelectBox("#iceClass", Ice_Class);
  setSelectBox("#flag", Flag);
  setSelectBox("#portOfRegistry", Port_of_Registry);
  setSelectBox("#classification", Classification);
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
  changedData.Ship_Name = shipName.value;
  changedData.GT = GT.value;
  changedData.NT = NT.value;
  changedData.DWT = DWT.value;
  changedData.EEDI = EEDI.value;
  changedData.Ice_Class = iceClass.value;
  changedData.PROPULSION = propulsion.value;
  changedData.AUXILIARY = auxiliary.value;
  changedData.SFOC = SFOC.value;
  changedData.Flag = flag.value;
  changedData.REGISTRY = registry.value;
  changedData.SHIPOWNER = shipOwner.value;
  changedData.Classification = classification.value;
  changedData.OfficialNO = officialNO.value;
  changedData.SignalLetter = signalLetter.value;
  changedData.remark = remark.value;
  console.log(changedData);

  popupWithScrollView.hide();
  if (originData.IMO_NO !== changedData.IMO_NO) {
    alert(changedData.IMO_NO); //객체 만들기
  }
}
