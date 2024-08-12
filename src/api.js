import axios from "axios";

const fetchArticles = async params => {
    const { data } = await axios.get(`https://api.unsplash.com/`, {
        params: {
            params: {
                client_id: 'G8achiIfmiTJytPDdZzLHvNc0119fFy9VYXUzCkSP80',
                hitsPerPage: 10,
                query: ' ',
                page,
                per_page,
                orientation: 'landscape',
                ...params,
            },
        });
    return data;
};

export default fetchArticles;
