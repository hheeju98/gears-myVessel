let originData;
const shipParticularTab = document.getElementById("shipParticular");

let currentTab = document.getElementById("shipParticular");
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

function setData(e) {
  console.log(e.data);
  popupWithScrollView.show();
  setModal();
  shipParticularTab.style.display = "block";
  shipParticularBtn.classList.add("active-modal-btn");
  // IMO.value = e.data.IMO_NO;
  originData = e;
  setSelectBox("#iceClass", Ice_Class);
  setSelectBox("#flag", Flag);
  setSelectBox("#portOfRegistry", Port_of_Registry);
  setSelectBox("#classification", Classification);
  setSelectBox("#EUShipType", EU_Ship_Type);
  setSelectBox("#MRVcompany", MRV_Company);
  setSelectBox("#mrvMethod", MRV_Method);
  setSelectBox("#IMOshipType", IMO_Ship_type);
  setSelectBox("#DCSmethod", DCS_Method);
  setSelectBox("#trialPurpose", Trial_Puropse);
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
  console.log(currentTab);
  e.target.classList.add("active-modal-btn");
}

function saveData() {
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
  const EUShipType = document.getElementById("EUShipType");
  const MRVcompany = document.getElementById("MRVcompany");
  const mrvMethod = document.getElementById("mrvMethod");
  const IMO_ShipType = document.getElementById("IMOshipType");
  const DCS_Method = document.getElementById("DCSmethod");
  const Year_Of_Delivery = document.getElementById("yearOfDelivery");
  const EEXI = document.getElementById("EEXI");
  const FI = document.getElementById("fi");
  const FM = document.getElementById("fm");
  const FC = document.getElementById("fc");
  const FI_VSE = document.getElementById("fiVse");
  const Trial_Purpose = document.getElementById("trialPurpose");

  const shipParticularChangedData = {};
  const mrvChangedData = {};
  const dcsChangedData = {};
  const ciiChangedData = {};

  if (currentTab.id === "shipParticular") {
    shipParticularChangedData.IMO_NO = IMO.value;
    shipParticularChangedData.Ship_Name = shipName.value;
    shipParticularChangedData.GT = GT.value;
    shipParticularChangedData.NT = NT.value;
    shipParticularChangedData.DWT = DWT.value;
    shipParticularChangedData.EEDI = EEDI.value;
    shipParticularChangedData.Ice_Class = iceClass.textContent;
    shipParticularChangedData.PROPULSION = propulsion.value;
    shipParticularChangedData.AUXILIARY = auxiliary.value;
    shipParticularChangedData.SFOC = SFOC.value;
    shipParticularChangedData.Flag = flag.textContent;
    shipParticularChangedData.REGISTRY = registry.textContent;
    shipParticularChangedData.SHIPOWNER = shipOwner.value;
    shipParticularChangedData.Classification = classification.textContent;
    shipParticularChangedData.OfficialNO = officialNO.value;
    shipParticularChangedData.SignalLetter = signalLetter.value;
    shipParticularChangedData.remark = remark.value;
    console.log(shipParticularChangedData);
  } else if (currentTab.id === "mrv") {
    mrvChangedData.EU_ShipType = EUShipType.textContent;
    mrvChangedData.MRV_Company = MRVcompany.textContent;
    mrvChangedData.MRV_Method = mrvMethod.textContents;
    console.log(mrvChangedData);
  } else if (currentTab.id === "dcs") {
    dcsChangedData.IMO_ShipType = IMO_ShipType.textContent;
    dcsChangedData.DCS_Method = DCS_Method.textContent;
    dcsChangedData.Year_Of_Delivery = Year_Of_Delivery.value;
    dcsChangedData.EEXI = EEXI.value;
    console.log(dcsChangedData);
  } else if (currentTab.id === "cii") {
    ciiChangedData.FI = FI.value;
    ciiChangedData.FM = FM.value;
    ciiChangedData.FC = FC.value;
    ciiChangedData.FI_VSE = FI_VSE.value;
    ciiChangedData.Trial_Purpose = Trial_Purpose.textContent;
    console.log(ciiChangedData);
  }
  popupWithScrollView.hide();
}
