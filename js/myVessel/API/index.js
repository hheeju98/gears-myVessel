const tableData = () => {
  const gg = getGearsData.get().then((res) => res.data);
  console.log(gg);
  return gg;
};
