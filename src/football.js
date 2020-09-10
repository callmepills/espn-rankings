const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');

function getOverall(td) {
    return td.substring(0, td.indexOf('.'));
}

function getPlayerName(td) {
    return td.substring(td.indexOf('.') + 2, td.indexOf(','));
}

function getDefenseName(td) {
    let name = td.substring(td.indexOf('.') + 2);
    return name.substring(name.lastIndexOf(' ') + 1);
}

function getTeam(td) {
    return td.substring(td.lastIndexOf(',') + 2).substr(0, 3).toUpperCase();
}

function getRankings(slotCategoryId, scoringPeriodId, seasonId, callback) {
    const url = `https://fantasy.espn.com/football/tools/fantasyRankings?slotCategoryId=${slotCategoryId}&scoringPeriodId=${scoringPeriodId}&seasonId=${seasonId}&rankType=ppr`;
    request.get(url, function (error, response, body) {
        const $ = cheerio.load(body);
        const rankings = $('tbody tr').map(function (i, elem) {
            const $tr = $(this), td = $tr.find('td:nth-child(1)').text();
            const ranking = {
                overall: +getOverall(td),
                opp: $tr.find('td:nth-child(2)').text(),
                berry: +$tr.find('td:nth-child(3)').text(),
                karabell: +$tr.find('td:nth-child(4)').text(),
                yates: +$tr.find('td:nth-child(5)').text(),
                cockroft: +$tr.find('td:nth-child(6)').text(),
                avg: +$tr.find('td:nth-child(7)').text()
            };
            if (slotCategoryId === 16) {
                ranking.name = getDefenseName(td);
            } else {
                ranking.name = getPlayerName(td);
                ranking.team = getTeam(td);
            }
            return ranking;
        }).get();
        callback(rankings);
    });
}

router.get('/:seasonId/:scoringPeriodId/qb', (req, res) => {
    getRankings(0, req.params.scoringPeriodId, req.params.seasonId, (rankings) => {
        res.json(rankings);
    });
});

router.get('/:seasonId/:scoringPeriodId/rb', (req, res) => {
    getRankings(2, req.params.scoringPeriodId, req.params.seasonId, (rankings) => {
        res.json(rankings);
    });
});

router.get('/:seasonId/:scoringPeriodId/wr', (req, res) => {
    getRankings(4, req.params.scoringPeriodId, req.params.seasonId, (rankings) => {
        res.json(rankings);
    });
});

router.get('/:seasonId/:scoringPeriodId/te', (req, res) => {
    getRankings(6, req.params.scoringPeriodId, req.params.seasonId, (rankings) => {
        res.json(rankings);
    });
});

router.get('/:seasonId/:scoringPeriodId/dst', (req, res) => {
    getRankings(16, req.params.scoringPeriodId, req.params.seasonId, (rankings) => {
        res.json(rankings);
    });
});

module.exports = router;
