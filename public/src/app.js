import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import stache from 'can-stache';
import 'can-stache/helpers/route';
import navigation from './config/navigation';

const AppViewModel = DefineMap.extend('AppViewModel', {
  title: {
    type: 'string',
    value: 'Evil Corp',
    serialize: false,
  },
  componentProps: {
    value() {
      return navigation;
    },
    serialize: false,
  },
  activeComponentProps: {
    get() {
      const filtered = this.componentProps.filter(comp => {
        return this.page === comp.id;
      });
      return filtered[0];
    },
    serialize: false,
  },
  activeComponentTemplate: {
    get() {
      const comp = this.activeComponentProps;
      return stache(`<${comp.tag} ${comp.attributes || ''} />`);
    },
    serialize: false,
  },
  page: {
    type: 'string',
  },
  init() {
    window.route = route;
    route('{page}', { page: 'home' });
    route.data = this;
    route.start();
  },
});

export default AppViewModel;
