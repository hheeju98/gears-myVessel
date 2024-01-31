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
const remark = document.querySelector(".remark-input"); //탭마다 값 들고오기

function setModal() {
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
}

function setData(e) {
  popupWithScrollView.show();
  setModal();
  shipParticular.style.display = "block"; // 안에서 전역말고
  shipParticularBtn.classList.add("active-modal-btn");
  IMO.value = e.IMO_NO;
  originData = e;
  setSelectBox("#iceClass", Ice_Class);
  setSelectBox("#flag", Flag);
  setSelectBox("#portOfRegistry", Port_of_Registry);
  setSelectBox("#classification", Classification);
}

function showModalTab(e, tabValue, tabBtn) {
  console.log(e);
  // console.log(document.querySelector(`#${type}`));
  shipParticular.style.display = "none";
  shipParticularTab.classList.remove("active-modal-btn");
  setModal();
  tabValue.style.display = "block";
  tabBtn.classList.add("active-modal-btn");
}

function saveData() {
  // 함수 호출-> 무슨 탭인지 전달 함수에 -> 하수에 전달받은 타입에 따른 객체-> 리턴
  const changedData = {};
  changedData.IMO_NO = IMO.value;
  changedData.Ship_Name = shipName.value;
  changedData.GT = GT.value;
  changedData.NT = NT.value;
  changedData.DWT = DWT.value;
  changedData.EEDI = EEDI.value;
  changedData.Ice_Class = iceClass.textContent;
  changedData.PROPULSION = propulsion.value;
  changedData.AUXILIARY = auxiliary.value;
  changedData.SFOC = SFOC.value;
  changedData.Flag = flag.textContent;
  changedData.REGISTRY = registry.textContent;
  changedData.SHIPOWNER = shipOwner.value;
  changedData.Classification = classification.textContent;
  changedData.OfficialNO = officialNO.value;
  changedData.SignalLetter = signalLetter.value;
  changedData.remark = remark.value;
  console.log(changedData);
  popupWithScrollView.hide();
}
