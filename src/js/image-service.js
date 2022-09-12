const axios = require("axios").default;

export class Gallery {
	page = 1;
	searchQueryInput = '';

	async getImages(q) {
		const searchParams = new URLSearchParams({
			image_type: "photo",
			orientation: "horizontal",
			safesearch: "true",
			per_page: 200
		});

		const gallery = await axios.get(`https://pixabay.com/api/?key=29841815-11a861cc71d343152543274bc&q=${q}&page=${page}&${searchParams}`);
		return gallery;
	}

	pageIncrement() {
		page += 1;
	}
}










