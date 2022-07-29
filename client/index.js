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
const getEmployees = async (queryParams) => {
  const res = await fetch(
    `${baseUrl}${path.employee}${generateQueryString(queryParams)}`
  );
  const count = +res.headers.get("X-Total-Count");
  const items = await res.json();
  return { items, count };
};

const getEmployee = async (id) => {
  const res = await fetch(
    `${baseUrl}${path.employee}/${id}`);
  const employee = await res.json();
  return employee;
};


// const main = async () => {
//   const employee = await getEmployees([
//     { key: "_page", value: 1 },
//     { key: "_limit", value: 2 },
//   ]);

//   console.log(employee);
// };

const main = async () => {
  const employee = await getEmployee(5);
  console.log(employee);
};
main();
