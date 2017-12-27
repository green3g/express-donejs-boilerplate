import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './page-test.less';
import view from './page-test.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the page-test component'
  }
});

export default Component.extend({
  tag: 'page-test',
  ViewModel,
  view
});
