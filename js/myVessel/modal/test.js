function shipParticular1() {
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

  const test = {
    IMO_NO: IMO.value,
    Ship_Name: shipName.value,
    GT: GT.value,
    NT: NT.value,
    DWT: DWT.value,
    EEDI: EEDI.value,
    Ice_Class: iceClass.textContent,
    PROPULSION: propulsion.value,
    AUXILIARY: auxiliary.value,
    SFOC: SFOC.value,
    Flag: flag.textContent,
    REGISTRY: registry.textContent,
    SHIPOWNER: shipOwner.value,
    Classification: classification.textContent,
    OfficialNO: officialNO.value,
    SignalLetter: signalLetter.value,
    remark: remark.value,
  };
  return test;
}

function getMRV() {
  const EUShipType = document.getElementById("EUShipType");
  const MRVcompany = document.getElementById("MRVcompany");
  const mrvMethod = document.getElementById("mrvMethod");
  const MRVdata = {
    EU_ShipType: EUShipType.textContent,
    MRV_Company: MRVcompany.textContent,
    MRV_Method: mrvMethod.textContents,
  };
  return MRVdata;
}

function getDCS() {
  const IMO_ShipType = document.getElementById("IMOshipType");
  const DCS_Method = document.getElementById("DCSmethod");
  const Year_Of_Delivery = document.getElementById("yearOfDelivery");
  const EEXI = document.getElementById("EEXI");

  const DCSdata = {
    IMO_ShipType: IMO_ShipType.textContent,
    DCS_Method: DCS_Method.textContent,
    Year_Of_Delivery: Year_Of_Delivery.value,
    EEXI: EEXI.value,
  };
  return DCSdata;
}

function getCII() {
  const FI = document.getElementById("fi");
  const FM = document.getElementById("fm");
  const FC = document.getElementById("fc");
  const FI_VSE = document.getElementById("fiVse");
  const Trial_Purpose = document.getElementById("trialPurpose");
  const CIIdata = {
    FI: FI.value,
    FM: FM.value,
    FC: FC.value,
    FI_VSE: FI_VSE.value,
    Trial_Purpose: Trial_Purpose.textContent,
  };
  return CIIdata;
}
