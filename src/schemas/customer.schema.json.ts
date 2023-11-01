export const customerSchema = {
  $schema: "https://json-schema.org/draft/2020-12",
  $id: "http://localhost:1234/schema/customer",
  type: "object",
  properties: {
    name: { type: "string" },
    phone: { $ref: "/schema/common#/$defs/phone" },
    address: { $ref: "/schema/address" },
  },
  $defs: {
    "http://localhost:1234/schema/address": {
      $id: "http://localhost:1234/schema/address",
      type: "object",
      properties: {
        address: { type: "string" },
        city: { type: "string" },
        postalCode: { $ref: "/schema/common#/$defs/usaPostalCode" },
        state: { $ref: "#/$defs/states" },
      },
      $defs: {
        states: {
          enum: [
            "AL",
            "AK",
            "AS",
            "AZ",
            "AR",
            "CA",
            "CO",
            "CT",
            "DE",
            "DC",
            "FM",
            "FL",
            "GA",
            "GU",
            "HI",
            "ID",
          ],
        },
      },
    },
    "http://localhost:1234/schema/common": {
      $schema: "https://json-schema.org/draft/2019-09",
      $id: "http://localhost:1234/schema/common",
      $defs: {
        phone: {
          type: "string",
          pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
        },
        usaPostalCode: {
          type: "string",
          pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
        },
        unsignedInt: {
          type: "integer",
          minimum: 0,
        },
      },
    },
  },
};
