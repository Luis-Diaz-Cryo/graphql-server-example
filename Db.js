let empleados = [
    {id: '1' ,nombre: "john", direccion:"123 Main St",telefono: 434342435 , Cargo: "Manager"},
    {id:'2' ,nombre: "Jane", direccion:"123 Main St",telefono: 434342435 , Cargo: "Developer"},
    {id:'3' ,nombre: "David", direccion:"123 Main St",telefono: 434342435 , Cargo: "Designer"},
    {id:'4' ,nombre: "Emily", direccion:"123 Main St",telefono: 434342435 , Cargo: "Analyst"},
    {id:'5' ,nombre: "Michael", direccion:"123 Main St",telefono: 434342435 , Cargo: "Engineer"},
    {id:'6' ,nombre: "Sophia", direccion:"123 Main St",telefono: 434342435 , Cargo: "Manager"},
    {id:'7',nombre: "Robert", direccion:"123 Main St",telefono: 434342435 , Cargo: "Developer"},
    {id:'8',nombre: "Olivia", direccion:"123 Main St",telefono: 434342435 , Cargo: "Designer"},
    {id:'9',nombre: "William", direccion:"123 Main St",telefono: 434342435 , Cargo: "Analyst"},
    {id:'10' ,nombre: "Ava", direccion:"123 Main St",telefono: 434342435 , Cargo: "Engineer"}
]

let perfiles = [
    {empId:'1',habilidades:"JavaScript" ,experiencias:"5 years", certificaciones :"AWS Certified"},
    {empId:'2',habilidades:"Python" ,experiencias:"7 years", certificaciones :"Google Cloud Certified"},
    {empId:'3',habilidades:"React" ,experiencias:"9 years", certificaciones :"Microsoft Certified"},
    {empId:'4',habilidades:"Node.js" ,experiencias:"1 years", certificaciones :"Oracle Certified"},
    {empId:'5',habilidades:"HTML" ,experiencias:"10 years", certificaciones :"Oracle Certified"},
    {empId:'6',habilidades:"CSS" ,experiencias:"3 years", certificaciones :"Google Cloud Certified"},
    {empId:'7',habilidades:"SQL" ,experiencias:"2 years", certificaciones :"AWS Certified"},
    {empId:'8',habilidades:"Java" ,experiencias:"6 years", certificaciones :"Oracle Certified"},
    {empId:'9',habilidades:"C++" ,experiencias:"4 years", certificaciones :"Microsoft Certified"},
    {empId:'10',habilidades:"Angular" ,experiencias:"5 years", certificaciones :"Google Cloud Certified"}


]

let roles = [

    {nombre: "Manager",responsibilidades:["Team management", "Project planning", "Budgeting"]},
    {nombre: "Developer",responsibilidades:["Coding", "Testing", "Debugging"]},
    {nombre: "Designer",responsibilidades:["UI/UX design", "Wireframing", "Prototyping"]},
    {nombre: "Analyst",responsibilidades:["Data analysis", "Report generation", "Problem-solving"]},
    {nombre: "Engineer",responsibilidades:["Software development", "System architecture", "Code review"]}


]

export default { empleados, perfiles, roles}