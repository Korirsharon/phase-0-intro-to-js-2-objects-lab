const employee = {
    name: "Sharon Julia",
    streetAddress: "550 Down St"
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  
  console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "501 Uptown St"));


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "300 Uhuru Highway"));


  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
  

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
  
  
  