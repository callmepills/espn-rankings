var chakram = require('chakram'),
    expect = chakram.expect;

describe('espn-rankings', function () {

    before(function () {
        chakram.setRequestDefaults({
            baseUrl: 'http://localhost:8090'
        });
    });

    describe('GET /football/{season}/{week}/{position}', function () {
        it('returns well formed response', function () {
            var response = chakram.get('/football/2017/15/qb');
            expect(response).to.have.status(200);
            expect(response).to.have.schema({
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        overall: {
                            type: "string"
                        },
                        opp: {
                            type: "string"
                        },
                        berry: {
                            type: "string"
                        },
                        karabell: {
                            type: "string"
                        },
                        yates: {
                            type: "string"
                        },
                        cockroft: {
                            type: "string"
                        },
                        avg: {
                            type: "string"
                        },
                        name: {
                            type: "string"
                        },
                        team: {
                            type: "string"
                        }
                    }
                }
            });
            return chakram.wait();
        });
    });
});