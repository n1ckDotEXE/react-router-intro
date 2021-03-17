const getErrorMessage = (err) => {
	let message = "";

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = getUniqueErrorMessage(err);
				break;
			default:
				message = "Something went wrong, please contact support!";
		}
	} else if (err.message) {
		return err.message;
	} else {
		for (let errName in err.errors) {
			if (err.errors[errName].message) {
				message = err.errors[errName].message;
			}
		}
	}
};

module.exports = getErrorMessage;
