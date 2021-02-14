import firebase from 'firebase-admin';
import { db } from '../database/firestore';
import { USERS } from '../../constants';
import { cache } from './cache';

// get users from firestore
export const getUsers = async (userQuery) => {
  const { username } = userQuery;
  let userSearch = '';
  if (username) {
    userSearch = db.collection(USERS).where('username', '>=', username).where('username', '<=', `${username}\uf8ff`);
  } else {
    userSearch = db.collection(USERS);
  }
  // create list for users and populate it with data in firestore
  const userList = [];
  await userSearch.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      userList.push(doc.data());
    });
  });

  return userList;
};

export const getUserById = async (userID) => {
  let user = cache.get(userID);
  if (user) return user;

  const doc = await db.collection(USERS).doc(userID).get();
  user = doc.data();
  cache.set(userID, user);
  return user;
};

// add users to firestore
export const addUser = async (user) => {
  const newUserID = user.uid; // from firebase. Will replace autogenerated id created by firestore for new documents.
  const now = firebase.firestore.Timestamp.now();
  const newUser = {
    username: user.username,
    email: user.email,
    id: newUserID,
    image: user.picture,
    createdAt: now,
    updatedAt: now,
  };

  // https://firebase.google.com/docs/firestore/manage-data/add-data
  return db.collection(USERS).doc(newUserID).set(newUser);
};
