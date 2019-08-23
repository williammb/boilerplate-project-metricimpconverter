/*
 *
 *
 *       Complete the handler logic below
 *       
 *       
 */

function ConvertHandler() {
    this.getNum = function(input) {
        const arr = input.split('/')
        if (arr.length > 2) {
            return 'invalid input';
        } else if (arr.length === 2) {
            return arr[0] / arr[1];
        } else {
            if (isNaN(parseFloat(input))) {
                return 'invalid input';
            } else {
                return parseFloat(input);
            }
        }
    };

    this.getUnit = function(input) {
        const validate = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
        input = input.replace(/[^a-zA-Z]+/g, '');
        if (validate.indexOf(input) !== -1) {
            return input;
        } else {
            return 'invalid unit';
        }
    };

    this.getReturnUnit = function(initUnit) {
        const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
        const output = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
        if (initUnit === 'invalid unit') {
            return 'invalid unit';
        }
        if (this.getUnit(initUnit) === initUnit) {
            return output[input.indexOf(initUnit.toLowerCase())];
        } else {
            return 'invalid unit';
        }
    };

    this.spellOutUnit = function(unit) {
        const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
        const output = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
        if (unit === 'invalid unit') {
            return 'invalid unit';
        }
        if (this.getUnit(unit) === unit) {
            return output[input.indexOf(unit.toLowerCase())];
        } else {
            return 'invalid unit';
        }
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        if (initNum === 'invalid input') {
            return 'invalid input';
        }
        switch (initUnit.toLowerCase()) {
            case 'gal':
                return initNum * galToL;
            case 'l':
                return initNum / galToL;
            case 'mi':
                return initNum * miToKm;
            case 'km':
                return initNum / miToKm;
            case 'lbs':
                return initNum * lbsToKg;
            case 'kg':
                return initNum / lbsToKg;
            case 'invalid unit':
                return 'invalid unit';
        }
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        var result;

        return result;
    };

}

module.exports = ConvertHandler;