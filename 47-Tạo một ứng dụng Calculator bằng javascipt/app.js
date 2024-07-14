function addToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    let input = document.getElementById('display').value;
    
    try {
      let result = eval(input);
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid input');
      clearDisplay();
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  