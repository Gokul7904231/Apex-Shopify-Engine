const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Starting setup...");
  const output1 = execSync('npm install', { encoding: 'utf-8' });
  fs.appendFileSync('logs.txt', '--- npm install ---\n' + output1 + '\n');
  
  const output2 = execSync('npx prisma generate', { encoding: 'utf-8' });
  fs.appendFileSync('logs.txt', '--- prisma generate ---\n' + output2 + '\n');
  
  const output3 = execSync('npx prisma db push', { encoding: 'utf-8' });
  fs.appendFileSync('logs.txt', '--- prisma db push ---\n' + output3 + '\n');
  
  const output4 = execSync('npx prisma db seed', { encoding: 'utf-8' });
  fs.appendFileSync('logs.txt', '--- prisma db seed ---\n' + output4 + '\n');
  
  console.log("Setup complete. Check logs.txt");
} catch (error) {
  console.error("Setup failed!");
  fs.appendFileSync('logs.txt', '--- ERROR ---\n' + error.message + '\n' + (error.stdout || '') + '\n' + (error.stderr || '') + '\n');
}
