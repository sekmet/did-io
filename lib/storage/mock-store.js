/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

/**
 * Mock document store api, for use with unit testing etc.
 */
class MockStore {
  constructor(options = {}) {
    this._docs = {};
  }

  async get(key, options = {}) {
    return Promise.resolve(this._docs[key]);
  }

  async put(key, value, options = {}) {
    return Promise.resolve(this._docs[key] = value);
  }

  async remove(key) {
    return Promise.resolve(delete this._docs[key]);
  }
}

module.exports = MockStore;