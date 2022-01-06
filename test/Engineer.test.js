const { Engineer } = require("../classes");

describe("Engineer", () => {
  it("getGitHub method", () => {
    const github = "tomSouthwick";
    const engineer = new Engineer("Tom Southwick", 24, "tom@gmail.com", github);

    expect(engineer.github).toEqual(github);
  });

  it("getRole method", () => {
    const role = "Engineer";
    const engineer = new Engineer("Tom Southwick", 24, "tom@gmail.com");

    expect(engineer.getRole()).toEqual(role);
  });
});
