// console.log('hello')
let y = 1
let z = 0

function roll_dice(){
    let x = Number(Math.floor(Math.random(0,1)*6+1))
    document.getElementById('dice_value').innerHTML = x

    if(y%2===0){
        console.log('harry potter')
        let num2 = Number(document.getElementById('p2_score').innerHTML)
        num2 = num2 + x
        document.getElementById('p2_score').innerHTML = num2
        y = 1
        if(num2>=50){
          z = 1

    }}
    else{
        console.log('voldemort')
        let num1 = Number(document.getElementById('p1_score').innerHTML)
        num1 = num1 + x
        document.getElementById('p1_score').innerHTML = num1
        y = y + 1
        if(num1>=50){
          z = 1
    }
}
    if(z===1){

        let num1 = Number(document.getElementById('p1_score').innerHTML)
        let num2 = Number(document.getElementById('p2_score').innerHTML)

        if(num1>num2){
        document.getElementById('result').innerHTML='Harry potter won'
        document.getElementById('btn1').disabled=true
        confetti()
        const bg = new Audio('game_music.mp3');
        bg.play();
        bg.loop = true;
        }
        if(num1<num2){
        document.getElementById('result').innerHTML='voldemort won'
        document.getElementById('btn1').disabled=true
        confetti()
        const bg = new Audio('game_music.mp3');
        bg.play();
        bg.loop = true;
        }            
    }

}

function confetti1() {
    const duration = 15 * 200,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 50 * (timeLeft / duration);
  
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }

