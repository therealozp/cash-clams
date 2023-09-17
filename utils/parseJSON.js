const parseJSONfromString = (str) => {
	try {
		return JSON.parse(str);
	} catch (e) {
		console.log('error while parsing JSON');
		return null;
	}
};

export default parseJSONfromString;
// Path: utils/parseJSON.js
