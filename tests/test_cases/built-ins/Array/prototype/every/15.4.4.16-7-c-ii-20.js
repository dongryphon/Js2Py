// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-c-ii-20
description: >
    Array.prototype.every - callbackfn called with correct parameters
    (thisArg is correct)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return 10 === this.threshold;
        }

        var thisArg = { threshold: 10 };

        var obj = { 0: 11, length: 1 };

        return Array.prototype.every.call(obj, callbackfn, thisArg);
    }
runTestCase(testcase);
