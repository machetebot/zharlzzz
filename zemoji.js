const images = ['https://file.garden/Zzg7g9nzzkEeNTar/inlab.gif', 
'https://file.garden/Zzg7g9nzzkEeNTar/kilig.gif', 
'https://file.garden/Zzg7g9nzzkEeNTar/wowinlab.gif', 
'https://file.garden/Zzg7g9nzzkEeNTar/bleeh.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/bleehhhh.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/flameheart.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartsparkling.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartvibration.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/bomb.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartrotate.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/rose.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartbeat.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartspear.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/starlink.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/heartdance.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/rolleyes.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/bubbles.gif',
'https://file.garden/Zzg7g9nzzkEeNTar/kiss.gif'];
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
