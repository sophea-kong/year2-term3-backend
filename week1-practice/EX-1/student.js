import * as fs from 'fs';
   

const filePath = "./hello.txt";
// Write to a file (synchronously)
setTimeout(()=>fs.writeFileSync(filePath, "Hello, Node.js beginner!"),1000);
// Read the file (synchronously)
setTimeout(() => {
    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
}, 2000);