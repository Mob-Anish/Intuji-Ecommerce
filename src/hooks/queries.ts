export const getCustomQueries = (data: any) => {
  let query = "";
  if (data) {
    Object.keys(data).map((each) => {
      query = `${query}&${each}=${data[each]}`;
    });
  }
  return query;
};
