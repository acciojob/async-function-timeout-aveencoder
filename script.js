//your JS code here. If required.

text = document.getElementById('text');
delay= document.getElementById('delay');
btn = document.getElementById('btn');
output = document.getElementById('output')


  function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

btn.addEventListener('click',async()=>{
const message = text.value ;
	const delayMS = parseInt(delay.value)
	
    if(!text || isNaN(delayMS)  ){
		 output.textContent = 'Please enter valid message and delay.';
    return;
	}

	await wait(delayMS);
  output.textContent = message;
	
});
