const { Manager } = require("../classes");

describe("Manager", () => {
  it("getOfficeNumber method", () => {
    const officeNumber = 56;
    const manager = new Manager(
      "Tom Southwick",
      24,
      "tom@gmail.com",
      officeNumber
    );

    expect(manager.officeNumber).toEqual(officeNumber);
  });

  it("getRole method", () => {
    const role = "Manager";
    const manager = new Manager("Tom Southwick", 24, "tom@gmail.com");

    expect(manager.getRole()).toEqual(role);
  });
});
