const APIManager = require("./api/APIManager")

APIManager.getAllObjects("employees").then(employee => {

    employee.forEach(e => {
        // ajax call to departments
        APIManager.getAllObjects("departments").then(department => {
            // match fk for deptId in employee to pk in department
            const arrayOfEmployees = department.find(dept => dept.id === e.departmentId)
            // log name + dept name
            console.log(e.name, arrayOfEmployees.name);
        })
    })
})


