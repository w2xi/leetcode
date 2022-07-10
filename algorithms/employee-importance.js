/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  //       1 (5)
  //      / \
  // (3) 2   3 (3)
  // { id: 1, importance: 5, subordinates: [ 2, 3 ] }

  let result = 0;
  const employee = employees.find((item) => item.id === id);
  if (employee) {
    result += employee.importance;
    if (employee.subordinates.length) {
      employee.subordinates.forEach((id) => {
        result += GetImportance(employees, id);
      });
    }
  }
  return result;
};
