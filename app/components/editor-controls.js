import Ember from 'ember';

export default Ember.Component.extend({
  previewVisible: false,

  actions: {
    save: function() {
      this.sendAction('save');
    },

    cancel: function() {
      this.sendAction('cancel');
    },

    toggle: function() {
      this.sendAction('toggle');
    }
  }
});
