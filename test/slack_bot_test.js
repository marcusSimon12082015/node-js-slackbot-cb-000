"use strict";

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const request = require('supertest');
const server = require('../slack_bot');
const baseUrl = 'http://localhost:3000';

describe('server', () => {

  before(() => {
    server.listen(3000);
  });

});
