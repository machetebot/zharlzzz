const images = ['https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif', 
'https://fonts.gstatic.com/s/e/notoemoji/latest/263a_fe0f/512.gif', 
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif', 
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61d/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f61c/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f_200d_1f525/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f496/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f493/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f49e/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f339/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f497/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f498/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f495/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f644/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1fae7/512.gif',
'https://fonts.gstatic.com/s/e/notoemoji/latest/1f618/512.gif'];
const rand = Math.floor(Math.random()*images.length);
const src = images[rand];
console.log(rand, src);
const img = document.createElement('IMG');
img.src = src;
img.height = "100";
img.width = "100";
img.style.position = "fixed";
img.style.right = "160px";
img.style.bottom = "80px";
img.style.zIndex = "-1x";
document.body.appendChild(img); 
