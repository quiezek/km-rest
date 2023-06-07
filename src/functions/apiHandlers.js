const { employees } = require("../employees");

const apiHandlers = {
    handleGetEmployees : (department) => {
        let employeeList = employees;

        if(department){
            employeeList = employees.filter((employee) => {
                return employee.department === department;
            })
        }
        
        return employeeList;
    },
    handleGetSpecificEmployee : (employee_id) => {
        if(!employee_id) throw "employee_id is required."
        const employee = employees.find((employee) => {
            return parseInt(employee.id) === parseInt(employee_id);
        });

        if(!employee){
            throw ("Employee not found.");
        }

        return employee;
    }
}

module.exports =  apiHandlers;