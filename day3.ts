import { readFile } from './helpers';

const contents: string[] = readFile('day3_in.txt');

const counts: number[] = new Array(contents[0].length).fill(0);

contents.forEach((element) => {
  element.split('').forEach((char, idx) => {
    counts[idx] += Number(char);
  });
});
console.log(counts);
const binGamma: string = counts.map((element) => String(Math.round(element / contents.length))).join('');
const decGamma: number = parseInt(binGamma, 2);
const decEpsilon: number = parseInt(
  binGamma.split('').map((element) => String(Number(element) ^ 1)).join(''),
  2);

console.log(binGamma);
console.log(decGamma * decEpsilon);

