import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  let allContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    allContacts = JSON.parse(data);
  } catch {
    console.error(`error while reading file ${PATH_DB}`, error);
  }
  return allContacts;
};

console.log(await getAllContacts());
