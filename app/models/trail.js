import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  distance: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  difficulty: DS.attr(),
  reviews: DS.hasMany('review', {async:true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  
});
