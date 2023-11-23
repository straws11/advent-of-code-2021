import { readFile } from './helpers'

const count: number = readFile('day1_in.txt')
  .map(strVal => Number(strVal))
  .filter((val, idx, arr) => val < arr[idx + 3]).length;

console.log(count);
