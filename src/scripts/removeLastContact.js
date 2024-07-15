import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  let allContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    allContacts = JSON.parse(data);
  } catch {
    console.error(`error while reading file ${PATH_DB}`, error);
  }

  if (allContacts.length === 0) {
    console.log('Contacts array is empty!');
  } else {
    allContacts.pop();
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2), 'utf-8');
    console.log('OK');
  } catch (error) {
    console.error(`Error when writing file ${PATH_DB}`, error);
  }
};

removeLastContact();
