import QUnit from 'steal-qunit';
import { ViewModel } from './page-test';

// ViewModel unit tests
QUnit.module('public/page-test');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the page-test component');
});
