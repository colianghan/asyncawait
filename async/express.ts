﻿import references = require('references');
import oldBuilder = require('../src/asyncBuilder');
import protocol = require('../src/protocols/express');
export = newBuilder;


var newBuilder = oldBuilder.mod<AsyncAwait.Async.CPSBuilder>(protocol);
