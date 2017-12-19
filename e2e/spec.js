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
                            type: "number"
                        },
                        opp: {
                            type: "string"
                        },
                        berry: {
                            type: ["number", "null"]
                        },
                        karabell: {
                            type: ["number", "null"]
                        },
                        yates: {
                            type: ["number", "null"]
                        },
                        cockroft: {
                            type: ["number", "null"]
                        },
                        avg: {
                            type: ["number", "null"]
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