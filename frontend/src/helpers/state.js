const queryStringToParam = (queryString, param) => {
  const params = new URLSearchParams(queryString);
  return params.get(param);
};

// get filter state from url
export const getFilterFromUrl = (location) => {
  return queryStringToParam(location.search, "filter");
};
