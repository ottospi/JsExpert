"use strict";var mocha,describe,it;module.link('mocha',{default(v){mocha=v},describe(v){describe=v},it(v){it=v}},0);var chai,expect;module.link('chai',{default(v){chai=v},expect(v){expect=v}},1);var Person;module.link('../src/person.js',{default(v){Person=v}},2);



describe('Person', () => {
    it('should return a person intance from a string', () => {
        const person = Person.generateInstanceFromString(
            '1 bike,aviao,navio 200000 2000-01-01 2022-02-01'
        )
        const expected = {
            from: '2000-01-01',
            to: '2022-02-01',
            id: '1',
            kmTraveled: '200000',
            vehicles: ['bike', 'aviao', 'navio']
        }

        expect(person).to.be.deep.equal(expected)
    })

    it('should return values', () => {
        const person = new Person({
            from: '2000-01-01',
            to: '2022-02-01',
            id: '1',
            kmTraveled: '200000',
            vehicles: ['bike', 'aviao', 'navio']
        })
        const result = person.formatted("pt-BR")
        const expected = {
            id: 1,
            vehicles: 'bike, aviao e navio',
            kmTraveled: '200.000 km',
            from: '01 de janeiro de 2000',
            to: '01 de fevereiro de 2022'
        }

        expect(result).to.be.deep.equal(expected)
    })

})