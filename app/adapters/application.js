import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
    firebase: new window.Firebase('https://shining-torch-4524.firebaseio.com/')
});