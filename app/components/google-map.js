import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(trail) {
      debugger;
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(trail.get('latitude'), trail.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }

});
