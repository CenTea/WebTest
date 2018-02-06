  function addtwo(id1, id2, final)
  {
   var first_number = parseInt(document.getElementById(id1).value);
   var second_number = parseInt(document.getElementById(id2).value);
   var result = first_number + second_number;
   document.getElementById(final).value = result;
  }
