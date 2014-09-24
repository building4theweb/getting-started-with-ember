import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');
  this.resource('documents', function() {
    this.route('new');
    this.resource('document', {path: ':document_id'});
  });
});

export default Router;
