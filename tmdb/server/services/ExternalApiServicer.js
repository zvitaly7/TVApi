const config = require('../config');
const axios = require('axios');
const Storage = require('./SeriesCashService');

let getSeriesDetails = async function (id) {
    let result = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${config.apiKey}`);
    Storage.setStorage(result);
    return result
};

let getSeasonsDetails = async function (SeriesDetails, id) {
    let requests = [];
    for (let i = 1; i < SeriesDetails.data.number_of_seasons; i++) {
        requests.push(axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=${config.apiKey}`));
    }
    let seasons = await axios.all(requests);
    return seasons
};

module.exports.getSeriesDetails = getSeriesDetails;
module.exports.getSeasonsDetails = getSeasonsDetails;
