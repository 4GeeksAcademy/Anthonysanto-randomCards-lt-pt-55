
window.onload = function() {
  //write your code here
 
  const allIcons = ["♦","♥", "♠", "♣"];
  const allValues =['A','1','2','3','4','5','6','7','8','9','10','J','K','Q']

  let randomValues = allValues[Math.floor(Math.random() * allValues.length)] ;
  
  let randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];

  let color; 
  if (randomIcon == "♦" || randomIcon == "♥") {
  color= 'red';
} else {
  color= 'black';}
  
  document.getElementById('getNumber').textContent= randomValues;
  document.getElementById('getIconTop').textContent= randomIcon;
  document.getElementById('getIconBottom').textContent= randomIcon;
  document.getElementById('getIconTop').style.color= color;
  document.getElementById('getIconBottom').style.color= color;

};

