import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  let allContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    allContacts = JSON.parse(data);
    let countOfContacts = allContacts.length;
    return `Number of contacts: ${countOfContacts}`;
  } catch {
    console.error(`error while reading file ${PATH_DB}`, error);
  }
};

console.log(await countContacts());
