import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';

import { createContract } from '/imports/startup/both/modules/Contract';

import './touchmenu.html';
import './toolbar/toolbar.html';
import './toolbar/toolbar.js';

Template.touchmenu.onRendered(() => {
});

Template.touchmenu.helpers({
  newPostEditor() {
    return Session.get('showPostEditor');
  },
});

Template.touchmenu.events({
  'click #button-post'() {
    createContract();
    $('#mobileKeyboard').focus();
  },
});
