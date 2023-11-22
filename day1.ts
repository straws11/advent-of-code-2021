import { readFile } from './helpers'

const contents: string[] = readFile('day1_in.txt')
let depths: number[] = contents.map(strVal => Number(strVal));

const count = depths.filter((val, idx, arr) => val < arr[idx + 3]).length;

console.log(count);
