let originData;
const shipParticularTab = document.getElementById("shipParticular");
const shipParticular = document.getElementById("shipParticularBtn");
const mrv = document.getElementById("mrvBtn");
const dcs = document.getElementById("dcsBtn");
const cii = document.getElementById("ciiBtn");

function setModal() {
  const mrvTab = document.getElementById("mrv");
  const dcsTab = document.getElementById("dcs");
  const ciiTab = document.getElementById("cii");
  mrvTab.style.display = "none";
  dcsTab.style.display = "none";
  ciiTab.style.display = "none";
  cii.classList.remove("active-modal-btn");
  dcs.classList.remove("active-modal-btn");
  mrv.classList.remove("active-modal-btn");
}

function showModalTab(e, type) {
  shipParticularTab.style.display = "none";
  document
    .getElementById("shipParticularBtn")
    .classList.remove("active-modal-btn");
  setModal();
  const tab = document.querySelector(`#${type}`);
  tab.style.display = "block";
  currentTab = tab;
  e.target.classList.add("active-modal-btn");
}

function setData(e) {
  popupWithScrollView.show();
  shipParticular.addEventListener("click", (e) =>
    showModalTab(e, "shipParticular")
  );
  mrv.addEventListener("click", (e) => showModalTab(e, "mrv"));
  dcs.addEventListener("click", (e) => showModalTab(e, "dcs"));
  cii.addEventListener("click", (e) => showModalTab(e, "cii"));
  setModal();
  shipParticularTab.style.display = "block";
  shipParticular.classList.add("active-modal-btn");
  originData = e; // 객체 키 클래스
  // setSelectBox("#iceClass", Ice_Class);
  // setSelectBox("#flag", Flag);
  // setSelectBox("#portOfRegistry", Port_of_Registry);
  // setSelectBox("#classification", Classification);
  // setSelectBox("#EUShipType", EU_Ship_Type);
  // setSelectBox("#MRVcompany", MRV_Company);
  // setSelectBox("#mrvMethod", MRV_Method);
  // setSelectBox("#IMOshipType", IMO_Ship_type);
  // setSelectBox("#DCSmethod", DCS_Method);
  // setSelectBox("#trialPurpose", Trial_Puropse);

  let aa = {
    "#iceClass": Ice_Class,
    "#flag": Flag,
    "#portOfRegistry": Port_of_Registry,
    "#classification": Classification,
    "#EUShipType": EU_Ship_Type,
    "#MRVcompany": MRV_Company,
    "#mrvMethod": MRV_Method,
    "#IMOshipType": IMO_Ship_type,
    "#DCSmethod": DCS_Method,
    "#trialPurpose": Trial_Puropse,
  };

  for (var key in aa) {
    setSelectBox(key, aa[key]);
  }
}

function saveData() {
  let test2 = null;
  if (currentTab.id === "shipParticular") {
    test2 = shipParticular1();
  } else if (currentTab.id === "mrv") {
    test2 = getMRV();
  } else if (currentTab.id === "dcs") {
    test2 = getDCS();
  } else if (currentTab.id === "cii") {
    test2 = getCII();
  } else {
    alert("error");
  }
  currentTab = document.getElementById("shipParticular");
  console.log(test2);
  popupWithScrollView.hide();
}
