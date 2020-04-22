const createUniqueId = require("../../src/utils/createUniqueId");

describe("Create Unique Id", () => {
  it("should generete an unique id", () => {
    const id = createUniqueId();
    expect(id).toHaveLength(8);
  });
});
