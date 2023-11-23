import { readFile } from './helpers';

const contents: string[] = readFile('day3_in.txt');


let ratings: string[] = contents;
let bitCrit: string = "";
while (ratings.length > 1) {
  bitCrit += (ratings.filter((val) => val[bitCrit.length] == "1").length >= ratings.length / 2) ? '1' : '0';
  ratings = ratings.filter((val) => val.startsWith(bitCrit));
}

const oxyRating: number = parseInt(ratings[0], 2);

ratings = contents;
bitCrit = "";
while (ratings.length > 1) {
  bitCrit += (Number(ratings.filter((val) => val[bitCrit.length] == "1").length >= ratings.length / 2) ^ 1) ? '1' : '0';
  ratings = ratings.filter((val) => val.startsWith(bitCrit));
}

console.log(parseInt(ratings[0], 2) * oxyRating);
