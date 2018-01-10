import QUnit from 'steal-qunit';
import { ViewModel } from './nav-menu';

// ViewModel unit tests
QUnit.module('public/nav-menu');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the nav-menu component');
});
