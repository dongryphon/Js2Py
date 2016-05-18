// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-315
description: >
    Object.create - all properties in 'Properties' are enumerable
    (data property and accessor property) (15.2.3.7 step 7)
includes: [propertyHelper.js]
---*/

var newObj = {};
function getFunc() {
    return 10;
}
function setFunc(value) {
    newObj.setVerifyHelpProp = value;
}

newObj = Object.create({}, {
    foo1: {
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    },
    foo2: {
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    }
});

verifyEqualTo(newObj, "foo1", 200);

verifyWritable(newObj, "foo1");

verifyEnumerable(newObj, "foo1");

verifyConfigurable(newObj, "foo1");

verifyEqualTo(newObj, "foo2", getFunc());

verifyWritable(newObj, "foo2", "setVerifyHelpProp");

verifyEnumerable(newObj, "foo2");

verifyConfigurable(newObj, "foo2");