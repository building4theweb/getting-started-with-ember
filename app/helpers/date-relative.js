/* global moment */

import Ember from 'ember';

function dateRelative(value) {
  return moment(value).fromNow();
}

export {
  dateRelative
};

export default Ember.Handlebars.makeBoundHelper(dateRelative);
