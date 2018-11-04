module.exports = {
	sortByObjectKey: (key) => {
		return (a, b) => {
			if(a[key] < b[key]) {
				return -1;
			}
			else if(a[key] > b[key]) {
				return 1;
			}

			return 0;
		}
	}
}