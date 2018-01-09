import app from './app';

export default class Todo {
  find(params) {
    return Promise.resolve([{ name: 'help', details: 'me' }]);
  }
  get(id, params) {

  }
  create(data, params) {}
  update(id, data, params) {}
  patch(id, data, params) {}
  remove(id, params) {}
  setup(app, path) {}
}

app.use('api/todo', new Todo);
