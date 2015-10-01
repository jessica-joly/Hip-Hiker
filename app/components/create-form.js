import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        location: this.get('location'),
        image: this.get('image'),
        difficulty: this.get('difficulty'),
        distance: this.get('distance'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.sendAction('save', params);
    }
  }
});
