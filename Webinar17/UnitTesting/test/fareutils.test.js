const mocha = require('mocha')
const chai = require('chai')
const fareUtils = require('../fareutils')

const expect = chai.expect

describe('fareUtils', function () {

    it('expect fare to be 50 for 0km, 0min', () => {
        let fare = fareUtils.calcFare(0, 0)
        expect(fare).to.equal(50)
    })

    it('expect fare to be 100 for 10km, 0min', () => {
        let fare = fareUtils.calcFare(10, 0)
        expect(fare).to.equal(100)
    })

    it('expect fare to be 56 for 2km, 18min', () => {
        let fare = fareUtils.calcFare(2, 18)
        expect(fare).to.equal(56)
    })


})