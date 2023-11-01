export const personSchema = {
  $id: "http://localhost:1234/person.schema.json",
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Person",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      description: "The person's first name.",
    },
    lastName: {
      type: "string",
      description: "The person's last name.",
    },
    age: {
      description: "Age in years which must be equal to or greater than zero.",
      type: "integer",
      minimum: 0,
    },
  },
};
