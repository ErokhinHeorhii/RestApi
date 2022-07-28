const baseUrl="http://localhost:3000";
const path ={
   employee: '/employees',
   comments: '/comments',
}

const generateQueryString =(queryParams) =>queryParams.length ? `?${queryParams.join('&')}` : ''

// [{key: 'role', value: "manager"}]
const getEmployee = async(queryParams=[])=>{
  const res =  await fetch(`${baseUrl}${path.employee}${queryParams.length ? `?${queryParams.join('&')}` : ''}`);
  const data = await res.json();
  console.log(data)
}
getEmployee();