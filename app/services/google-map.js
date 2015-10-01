import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    var newMap = new this.googleMaps.Map(container, options);
    var newMarker = new google.maps.Marker({
      position: options.center,
      map: newMap
    });
    return {map: newMap, marker: newMarker};
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  }
});
