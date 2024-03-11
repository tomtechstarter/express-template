require("../../src/server");
const todoSequelize = require("../../src/database/setup/database");

module.exports = async () => {
  try {
    // todoSequelize.dropSchema("Todos").then(() => {
    //   todoSequelize.sync();
    // });
    console.log("PRDDD", process.env);
    await todoSequelize.sync();
    await todoSequelize.dropSchema("Todos");
    await todoSequelize.sync();
    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    console.log("Test DB init");
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};
