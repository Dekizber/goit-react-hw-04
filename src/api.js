import axios from 'axios';

const fetchImages = async (query, page) => {
	const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
		params: {
			client_id: 'G8achiIfmiTJytPDdZzLHvNc0119fFy9VYXUzCkSP80',
			page,
			query,
			orientation: 'landscape',
		},
	});
	console.log(data);

	return data;
};

export default fetchImages;
