const IMO = document.querySelector(".IMO-input");
const shipName = document.querySelector(".ship-name-input");
const GT = document.querySelector(".gt-input");
const EEDI = document.querySelector(".EEDI-input");
const DWT = document.querySelector(".dwt-input");

function moveToTop() {
  console.log(htmlContent);
  htmlContent.scrollTop = 0;
}
function applyData(e) {
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
  changedData.IMO_NO = IMO.value; //변한 후 데이터 save할때 호출
  popupWithScrollView.hide();
  if (originData.IMO_NO !== changedData.IMO_NO) {
    alert(changedData.IMO_NO); //객체 만들기
  }
}
