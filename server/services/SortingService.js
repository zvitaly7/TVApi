const ApiController = require('./ExternalApiServicer');

let SortEpisodes = async function (id) {
    let SeriesDetails = await ApiController.getSeriesDetails(id);
    let SeasonDetails = await ApiController.getSeasonsDetails(SeriesDetails, id);
    let episodes = (SeasonDetails.map(season => {
        return season.data.episodes
    })).reduce((a, b) => {
        return a.concat(b)
    });
    return episodes.map(episode => {
        return {
            episodeName: episode.name,
            averageVotes: episode.vote_average
        }
    }).sort((ep1, ep2) => {
        return ep2.averageVotes - ep1.averageVotes
    }).slice(0, 20)
};

module.exports.SortEpisodes = SortEpisodes;
