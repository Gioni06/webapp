/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });

        describe('Checking value of a', function () {
            var a = 0;
            it('should be 0', function () {
                 expect(a).to.equal(0);
            });
        });

    });


})();
