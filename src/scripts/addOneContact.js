import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let currentContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentContacts = JSON.parse(data);
  } catch {
    console.error(`error while reading file ${PATH_DB}`, error);
  }
    console.log(currentContacts);
    
    let newContact = createFakeContact();
    currentContacts.push(newContact);
    try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, null, 2),
      'utf-8',
    );
    console.log('OK');
  } catch (error) {
    console.error(
      `Error when writing file ${PATH_DB}`,
      error,
    );
  }
};

addOneContact();
