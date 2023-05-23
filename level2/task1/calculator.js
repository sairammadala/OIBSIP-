function calculate(button) {
    var resultElement = document.getElementById('result');
    var result = resultElement.innerText;
  
    if (button === '=') {
      try {
        result = eval(result);
      } catch (error) {
        result = 'Error';
      }
    } else if (button === 'C') {
      result = '';
    } else if (button === 'del') {
      result = result.slice(0, -1);
      result = result;
    } else {
      result += button;
      console.log(button, result)
    }
    resultElement.innerText=result
  }
  