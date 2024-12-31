const images = ['https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/inlab.gif', 
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/kilig.gif', 
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/wowinlab.gif', 
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/bleeh.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/bleehhhh.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/flameheart.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartsparkling.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartvibration.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/bomb.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartrotate.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/rose.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartbeat.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartspear.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/starlink.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/heartdance.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/rolleyes.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/bubbles.gif',
'https://cdn.jsdelivr.net/gh/machetebot/zharlzzz@main/gif/kiss.gif'];
const rand = Math.floor(Math.random()*images.length);
const src = images[rand];
console.log(rand, src);
const img = document.createElement('IMG');
img.src = src;
img.height = "90";
img.width = "90";
img.style.position = "fixed";
img.style.right = "220px";
img.style.bottom = "141px";
img.style.zIndex = "-1x";
document.body.appendChild(img); 
