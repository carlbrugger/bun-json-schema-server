export const pureDataSchema  ={
  "$id": "https://localhost:3000/json",
  "description": "A basic set of JSON Schema to test data type conversions simply",
  "type": "object",
  "title": "ExampleData",
  "properties": {
    "stringColumn": {
      "description": "A column for strings!",
      "type": "string"
    },
    "integerColumn": {
      "description": "A column for integers!",
      "type": "integer"
    },
    "arrayColumn": {
      "description": "A column for string arrays!",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "objectColumn": {
      "description": "A column for nested columns containing numbers and strings!",
      "type": "object",
      "properties": {
        "nestedUniqueNumberColumn": {
          "description": "A column for unique numbers!",
          "type": "number",
          "uniqueItems": true
        },
        "nestedStringColumn": {
          "type": "string"
        }
      }
    }
  }
}