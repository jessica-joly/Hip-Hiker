import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trail', {path: '/trail/:trail_id'});
  this.route('new-hike');
});

export default Router;
