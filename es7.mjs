import * as fs from 'fs';

fs.writeFile('testo.txt', 'hello lucianoooo', (err) => {
  if (err) throw err;
  console.log('File saved!');
});