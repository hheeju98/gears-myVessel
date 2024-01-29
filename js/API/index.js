function getTableData() {
  alert("g");
  axios.get("/js/data/gears.json");
}
const tableData = axios.create({
  baseURL: "/js/data/gears.json",
});
