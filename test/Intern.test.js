const { Intern } = require("../classes");

describe("Intern", () => {
  it("getSchool method", () => {
    const school = "USYD FSF";
    const intern = new Intern("Tom Southwick", 24, "tom@gmail.com", school);

    expect(intern.school).toEqual(school);
  });

  it("getSchool method", () => {
    const role = "Intern";
    const intern = new Intern("Tom Southwick", 24, "tom@gmail.com");

    expect(intern.getRole()).toEqual(role);
  });
});
