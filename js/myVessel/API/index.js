const tableData = () => {
  const data2 = getGearsData.get().then((res) => res.data);
  return data2;
};
