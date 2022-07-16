score =0;
cross = true;

window.onload = function(){
    document.getElementById("auo").play();
}

document.onkeydown = function(e){
    if(e.keyCode==38)
    {
        hero = document.querySelector('.hero');
        hero.classList.add('animationHero');
        setTimeout(()=> {
            hero.classList.remove('animationHero');
        },700);
    }

   if(e.keyCode==39)
    {
        hero = document.querySelector('.hero');
        heroX=parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left= heroX+120 +"px";
    }

    if(e.keyCode==37)
    {
        hero = document.querySelector('.hero');
        heroX=parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left= (heroX-120) +"px";
    }


}


setInterval(() =>{
    hero = document.querySelector('.hero');
    gameOver =document.querySelector('.gameOver');
    obs =  document.querySelector('.obs');

    hx=parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));  //postion of hero 
    hy=parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));   

    ox=parseInt(window.getComputedStyle(obs,null).getPropertyValue('left'));   //postion of obstacle
    oy=parseInt(window.getComputedStyle(obs,null).getPropertyValue('top'));


    offSetX=Math.abs(hx-ox);
    offSetY=Math.abs(hy-oy);

    if(offSetX<73 && offSetY<52)
{
   gameOver.style.visibility = 'visible';

   obs.classList.remove('animationObs');
   document.getElementById("auo").pause();
   document.getElementById("auoc").play();
  

   olast=parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
   obs.style.left= olast+50+ "px";
}
else if(offSetX<100 && cross)
{
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() =>{
        cross= true;
    },1000)

    //set timeout used to prevent lag during jump
  if(score<23)
  {
    setTimeout(() =>{
        aniDur = parseFloat(window.getComputedStyle(obs,null).getPropertyValue('animation-duration'));
        newDur=aniDur-0.05;
        obs.style.animationDuration = newDur + 's';
        console.log(newDur);
    },500)
  }
      else
      {
        obs.style.animationDuration = 4.75 + 's';
        console.log(newDur);
      }

  
}

},100);

function updateScore(score)
{
    scoreCount.innerHTML = "Your Score: "+ score
}