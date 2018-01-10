import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './nav-menu.less';
import view from './nav-menu.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the nav-menu component'
  }
});

export default Component.extend({
  tag: 'nav-menu',
  ViewModel,
  view
});
