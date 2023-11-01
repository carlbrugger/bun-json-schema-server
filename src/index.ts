import { customerSchema } from "./schemas/customer.schema.json";
import { employeeSchema } from "./schemas/employee.schema.json";
import { personSchema } from "./schemas/person.schema.json";
import { productSchema } from "./schemas/product.schema.json";

const server = Bun.serve({
  port: 1234,
  async fetch(req: Request) {
    let responseBody = "Success!";
    const url = new URL(req.url);
    if (url.pathname === "/schema/address") {
      responseBody = JSON.stringify(
        customerSchema.$defs["http://localhost:1234/schema/address"]
      );
    } else if (url.pathname === "/schema/common") {
      responseBody = JSON.stringify(
        customerSchema.$defs["http://localhost:1234/schema/common"]
      );
    } else if (url.pathname === "/schema/customer") {
      responseBody = JSON.stringify(customerSchema);
    } else if (url.pathname === "/schema/person") {
      responseBody = JSON.stringify(personSchema);
    } else if (url.pathname === "/schema/product") {
      responseBody = JSON.stringify(productSchema);
    } else if (url.pathname === "/schema/employee") {
      responseBody = JSON.stringify(employeeSchema);
    }
    return new Response(responseBody, {
      headers: {
        "Content-Type": "application/schema+json",
      },
    });
  },
});

console.log(`Listening on http://${server.hostname}:${server.port} ...`);
