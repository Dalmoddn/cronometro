let counter = 0;
const temporizador = setInterval(()=> {
  console.log('This is a test');
  counter += 1;
  if (counter === 5)
    clearInterval(temporizador);
},1000)

const setTimer = (h,m,s) => {
  
}