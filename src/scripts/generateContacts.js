import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let currentContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentContacts = JSON.parse(data);
  } catch {
    console.error(`error while reading file ${PATH_DB}`, error);
  }
  console.log(currentContacts);

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }
  const updatedContacts = [...currentContacts, ...newContacts];
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
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

generateContacts(5);
