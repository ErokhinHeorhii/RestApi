const baseUrl="http://localhost:3000";
const path ={
   employee: '/employees',
   comments: '/comments',
}

const generateQueryString =(queryParams=[]) => queryParams.length ? `?${queryParams.map(x=> `${x.key}=${x.value}`).join('&')}` : '';

// [{key: 'role', value: "manager"}]
const getEmployee = async(queryParams)=>{
  const res =  await fetch(`${baseUrl}${path.employee}${generateQueryString(queryParams)}`);
  const data = await res.json();
  console.log(data);

};

getEmployee();