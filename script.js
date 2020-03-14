/* var button = document.getElementById("btn")
button.addEventListener('onclick', getVal)
*/
var getVal = (function() {
    var obj = ( function( thisId ) {
    var myObj = document.getElementById( thisId ) || document.all[ thisId ];
      return myObj;
      } );
    var newtext2 = obj( "reply" ).value;
      obj( "layer1" ).innerHTML = (( newtext2 ) ? newtext2 : "null" );
      var button = document.getElementById("btn")

    });

  /*
  var button = document.getElementById("btn")
  button.addEventListener('onclick', myForm)
  function myFunction() {
    document.getElementById("myForm").submit();
  }

  const input = document.querySelector('input');
    const log = document.getElementById('log');

    input.addEventListener('change', updateValue);

    function updateValue(e) {
      log.textContent = e.target.value;
    }

    const selectElement = document.querySelector('.ice-cream');

    selectElement.addEventListener('change', (event) => {
      const result = document.querySelector('.result');
      result.textContent = `You like ${event.target.value}`;
    });
*/
