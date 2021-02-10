let db = require('../database');

async function updater() {
	db.query("SELECT prod_id FROM products", function (error, results, fields) {
 	 if (error) throw error;
   let volume = results.length;
   console.log(volume)
   let query = ("INSERT INTO warehouse_volume (warehouse_volume) VALUES (?) ");
   db.query(query, volume);
   console.log("WAREHOUSE VOLUME ----- UPDATED");
 });
}

module.exports = { updater };
