var authFiles = [
	"amazon",
	"bitly",
	"google_analytics",
	"hashing"
];

for(var i = 0; i < authFiles.length; i++) {
	try {
		exports[authFiles[i]] = require("./" + authFiles[i] + ".js");
	} catch (err) {
		console.log("Missing (optional) auth file: auth/" + authFiles[i] + ".js");
	}
}
