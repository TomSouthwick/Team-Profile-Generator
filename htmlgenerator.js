const { Employee } = require("./classes");
const fs = require("fs");
const path = require("path");
/**
 *
 * @param {Employee} employee
 */
function createCard(employee) {
  const { id, email, name, ...attribute } = employee;

  // read from card.html
  const cardTemplate = fs.readFileSync(
    path.join(__dirname, "views", "card.html"),
    "utf8"
  );

  console.log("attribute", attribute);

  // replace placeholders with employee data
  const attrName = Array.from(Object.keys(attribute))[0];
  const attrValue = Array.from(Object.values(attribute))[0];

  let attributePayload = `${attrName.toUpperCase()}: ${attrValue}`;

  if (attrName === "github") {
    attributePayload = `Github: <a href="https://github.com/${attrValue}">${attrValue}</a>`;
  }

  return (
    cardTemplate
      .replace("{{ id }}", id)
      .replace("{{ email }}", email)
      .replace("{{ email }}", email)
      .replace("{{ name }}", name)
      .replace("{{ role }}", employee.getRole())
      .replace(
        "{{ class-role }}",
        `card-image-${employee.getRole().toLowerCase()}`
      )
      // we want something like 'github': 'aaa'
      .replace("{{ attribute }}", attributePayload)
  );
}

// if (getRole() === "manager") {
//   // set image variable to manager pic
//   const image = "https://i.imgur.com/J5LVHEL.png";
// }

/**
 *
 * @param {Array<Employee>} employees
 */
function renderHtml(employees) {
  // read layout.html
  const layoutTemplate = fs.readFileSync(
    path.join(__dirname, "views", "layout.html"),
    "utf8"
  );
  // generate cards from employees
  const cards = employees.map(createCard).join("");

  // replace {{ content }} with cards
  return layoutTemplate.replace("{{ content }}", cards);
}

module.exports = renderHtml;
