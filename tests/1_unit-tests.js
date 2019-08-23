/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

    suite('Function convertHandler.getNum(input)', function() {

        test('Whole number input', function(done) {
            var input = '32L';
            assert.equal(convertHandler.getNum(input), 32);
            done();
        });

        test('Decimal Input', function(done) {
            const input = '3.1415';
            assert.equal(convertHandler.getNum(input), 3.1415);
            done();
        });

        test('Fractional Input', function(done) {
            const input = '4/2';
            assert.equal(convertHandler.getNum(input), 2);
            done();
        });

        test('Fractional Input w/ Decimal', function(done) {
            const input = '3/2';
            assert.equal(convertHandler.getNum(input), 1.5);
            done();
        });

        test('Invalid Input (double fraction)', function(done) {
            const input = '3/7.2/5/4';
            assert.strictEqual(convertHandler.getNum(input), 'invalid input');
            done();
        });

        test('No Numerical Input', function(done) {
            const input = 'input';
            assert.equal(convertHandler.getNum(input), 'invalid input');
            done();
        });

    });

    suite('Function convertHandler.getUnit(input)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
            input.forEach(function(ele) {
                assert.equal(convertHandler.getUnit(ele), ele)
            });
            done();
        });

        test('Unknown Unit Input', function(done) {
            var input = 'a';
            assert.equal(convertHandler.getUnit(input), 'invalid unit');
            done();
        });

    });

    suite('Function convertHandler.getReturnUnit(initUnit)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
            input.forEach(function(ele, i) {
                assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
            });
            done();
        });

    });

    suite('Function convertHandler.spellOutUnit(unit)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            const expect = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
            input.forEach(function(ele, i) {
                assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
            });
            done();
        });

    });

    suite('Function convertHandler.convert(num, unit)', function() {

        test('Gal to L', function(done) {
            var input = [5, 'gal'];
            var expected = 18.9271;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
            done();
        });

        test('L to Gal', function(done) {
            const input = [18.9271, 'l'];
            const expected = 5;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Mi to Km', function(done) {
            const input = [5, 'mi'];
            const expected = 8.0467;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Km to Mi', function(done) {
            const input = [8.0467, 'km'];
            const expected = 5;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Lbs to Kg', function(done) {
            const input = [5, 'lbs'];
            const expected = 2.26796;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });

        test('Kg to Lbs', function(done) {
            const input = [2.26796, 'kg'];
            const expected = 5
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
            done();
        });
    });
});