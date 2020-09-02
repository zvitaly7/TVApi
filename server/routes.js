const {Router} = require('express');
const Episodes = require('./services/SortingService');
const TopSeriesStorage = require('./services/SeriesCashService');
const router = Router();

router.get("/topEpisodes/:id",
    async (req, res) => {
        try {
            res.json(await Episodes.SortEpisodes(req.params.id))
        } catch (e) {
            console.log(e)
        }
    }
);
router.get("/analytics/popularSeries",
    async (req, res) => {
        try {
            res.json(TopSeriesStorage.getStorage())
        } catch (e) {
            console.log(e)
        }
    }
);

module.exports = router;
