// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.22-9-c-i-10
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
    
        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        var arr = [0, , 2];

        Object.defineProperty(arr, "1", {
            get: function () {
                return 1;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn, "initialValue");
        return testResult;
    }
runTestCase(testcase);
