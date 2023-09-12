require("dotenv").config({ path: "config/.env" });

const { setupBot } = require("./bot");

(async function () {
	try {
		await setupBot().launch();
	} catch (error) {
		console.log(error);
	}
})();
