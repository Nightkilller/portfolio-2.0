const fs = require('fs');

const normalPath = '/Users/adityagupta/.gemini/antigravity-ide/brain/293b2064-3cf6-4253-b894-eccea66680ac/media__1784963115528.png';
const winkPath = '/Users/adityagupta/.gemini/antigravity-ide/brain/293b2064-3cf6-4253-b894-eccea66680ac/media__1784963121335.png';

try {
  const bufNormal = fs.readFileSync(normalPath);
  fs.writeFileSync('./public/avatar-normal.png', bufNormal);
  fs.writeFileSync('./assets/avatar-normal.png', bufNormal);
  console.log('Successfully wrote avatar-normal.png!');
} catch (err) {
  console.error('Error normal:', err.message);
}

try {
  const bufWink = fs.readFileSync(winkPath);
  fs.writeFileSync('./public/avatar-wink.png', bufWink);
  fs.writeFileSync('./assets/avatar-wink.png', bufWink);
  console.log('Successfully wrote avatar-wink.png!');
} catch (err) {
  console.error('Error wink:', err.message);
}
