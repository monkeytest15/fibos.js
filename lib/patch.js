var util = require('util');

module.exports = function(eosjs) {
	return config => {
		let eos = eosjs(config);
		for (var k in eos) {
			if (typeof eos[k] === "function") {
				eos[`${k}Sync`] = util.sync(eos[k]);
			}
		}
		return eos;
	};
}