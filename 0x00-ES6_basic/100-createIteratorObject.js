#!usr/bin/node

export default function createIteratorObject(report) {
    const totalEmployee = [];
    for (const idx of Object.values(report.allEmployees)) {
      totalEmployee.push(...idx);
    }
  
    return totalEmployee;
  }
  