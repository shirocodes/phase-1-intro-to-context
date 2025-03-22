// Your code here


function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [], 
    }
}
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    })
    return employee
}
function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(" ");
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return employee;
  }

  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(e => e.date === date);
    let timeOut = employee.timeOutEvents.find(e => e.date === date);
  
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
  }
  function allWagesFor(employee) {
    return employee.timeInEvents.reduce((total, event) => {
      return total + wagesEarnedOnDate(employee, event.date);
    }, 0);
  }

  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
  }
  
  