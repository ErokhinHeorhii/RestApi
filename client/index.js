const baseUrl = "http://localhost:3000";
const path = {
  employee: "/employees",
  comments: "/comments",
};

const generateQueryString = (queryParams = []) => {
  return queryParams.length
    ? `?${queryParams.map((x) => `${x.key}=${x.value}`).join("&")}`
    : "";
};

// [{key: 'role', value: "manager"}]
const getEmployee = async (queryParams) => {
  const res = await fetch(
    `${baseUrl}${path.employee}${generateQueryString(queryParams)}`
  );
  const data = await res.json();
  console.log(data);
};

getEmployee([{ key: "_page", value: 5 }, { key: "_limit", value: 1 }]);
