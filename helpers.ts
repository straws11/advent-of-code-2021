import * as fs from 'fs';

export function readFile(filePath: string) {
  let contents: string = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
  return contents.split('\n');
}
