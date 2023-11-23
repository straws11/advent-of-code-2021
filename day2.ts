import { readFile } from './helpers'

const contents: string[] = readFile('day2_in.txt');

let x: number = 0;
let y: number = 0;
let aim: number = 0;

for (let i = 0; i < contents.length; i++) {
  const instruct: string = contents[i];
  const amount: number = Number(instruct.split(' ')[1]);

  if (instruct[0] == 'f') {
    x += amount;
    y += amount * aim;
  }
  else if (instruct[0] == 'd') {
    //y += amount;
    aim += amount;
  }
  else if (instruct[0] == 'u') {
    //y -= amount;
    aim -= amount;
  }
}

console.log(x * y);
