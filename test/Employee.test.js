// const { testing } = require("jest");
const { Employee } = require("../classes");

describe("Employee", () => {
  it("Creating employee constructor", () => {
    const employee = new Employee("Tom Southwick", 24, "tom@gmail.com");

    expect(typeof employee).toEqual("object");
  });

  it("Describing the name parameter of employee", () => {
    const name = "Tom Southwick";
    const employee = new Employee(name);

    expect(employee.name).toEqual(name);
  });

  it("Describing the id parameter of employee", () => {
    const testId = 24;
    const employee = new Employee("Tom Southwick", 24);

    expect(typeof employee.id).toEqual("number");
    expect(employee.id).toEqual(testId);
  });

  it("Describing the email parameter of employee", () => {
    const email = "tom@gmail.com";
    const employee = new Employee("Tom Southwick", 24, "tom@gmail.com");

    expect(employee.email).toEqual(email);
  });
});
