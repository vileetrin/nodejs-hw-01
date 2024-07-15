import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
      const data = await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
      console.log('OK!')
  } catch {
    console.error(`Error when writing file ${PATH_DB}`, error);
  }
};

removeAllContacts();
