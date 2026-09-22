import { readFile } from 'node:fs/promises';
// Or if using CommonJS: const { readFile } = require('node:fs/promises');

async function readMyFile() {
  try {
    // Specifying 'utf8' returns the file as a string instead of a raw Buffer
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

readMyFile();
