import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
export * from './deleteUser';
export * from './deleteUser-functions';
export * from './bookCount';
export * from './createUser';
