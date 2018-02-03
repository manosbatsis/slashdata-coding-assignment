import PrimeUtils from '../app/nthprime';
import { assert, expect } from 'chai';

describe("Prime number utilities", function() {
    describe("Find the Nth prime", function() {
        it("Expect the 10001st prime to be 104743", function() {
            var prime = PrimeUtils.nthPrime(10001);
            expect(prime).to.equal(104743);
        });
    });
});
