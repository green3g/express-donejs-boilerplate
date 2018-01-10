import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'public/models/test';

import 'public/page-home/page-home-test';

import 'public/page-test/page-test-test';

import 'public/nav-menu/nav-menu-test';

F.attach(QUnit);

QUnit.module('public functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('public main page shows up', function() {
  F('title').text('public', 'Title is set');
});
