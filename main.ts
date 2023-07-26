import { constants } from 'buffer';
import { error, log } from 'console';
import * as fs from 'fs';
import { readFileSync, writeFileSync } from 'fs';
// const data=fs.readFileSync('text.text',{encoding:'utf-8'})
// console.log(data);
 import { join } from 'path';
 import * as promptSync from 'prompt-sync';

var obj=[{'path':'text.txt','name':'abdullah'}
,{'path':'text2.txt','name':'abdullah'},
{'path':'text3.txt','name':'abdullah'}]


//  const prompt = promptSync()
//   var userInput = prompt('Please enter your name.');
//   console.log(userInput)

// ✅ write to file SYNCHRONOUSLY
 async function syncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */

  var contents =  readFileSync(join(__dirname, filename), 'utf-8') as string;
  

if(contents.includes(data)){

 let replaceOperation=contents.split(data).join(' ');

     writeFileSync(join(__dirname, filename), replaceOperation, {
         flag: 'w',
       });


    return 1
}
//else{
//       await  writeFileSync(join(__dirname, filename), data, {
//             flag: 'a',
//           });

//         return 0}
}




  obj.forEach(element => {

    syncWriteFile(element.path, element.name)


  });


