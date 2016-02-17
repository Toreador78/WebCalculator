$(document).ready(function(){
  var textbox = $('.textbox');

  textbox.curval = "";

  function checkDecimal(){
    return textbox.curval.indexOf(".") == -1 ? true : false;
  }

  function resetCalc(){
    textbox.lastval = "";
    textbox.curval = "0";
    textbox.operation = "";
    textbox.val(textbox.curval);
  }

  function evalCalc(){
    textbox.lastval = eval(textbox.lastval + textbox.operation + textbox.curval);
    textbox.val(parseFloat(textbox.lastval));
    textbox.curval = "";
    textbox.operation = "";
  }

  function addDigit(digit){
    textbox.curval += digit;
    textbox.val(textbox.curval);
  }

  resetCalc();

  $(".number").click(function(){
    if (textbox.curval === "0") {
      textbox.curval = "";
    }
    if ((textbox.curval === "") && (textbox.operation === "")){
      textbox.lastval = "";
    }
    addDigit($(this).val());
    console.log(textbox);
  });

  $(".basiccalc").click(function(){
    if (textbox.lastval === ""){
      textbox.lastval = textbox.curval;
      textbox.curval = "";
    } else if (textbox.curval !== ""){
      evalCalc();
    }
    textbox.operation = $(this).val();
  });

  $(".AC").click(function(){
    resetCalc();
  });

  $(".PM").click(function(){
    if (textbox.curval === ""){
      textbox.lastval = eval("-1" * textbox.lastval);      
      textbox.val(parseFloat(textbox.lastval));
    } else {
      textbox.curval = eval("-1" * textbox.curval);
      textbox.val(parseFloat(textbox.curval));
    }
  });

  $(".decimal").click(function(){
    if (checkDecimal() === true){
      addDigit($(this).val());
    }
  });

  $(".eval").click(function(){
    evalCalc();
    console.log(textbox);
  });
});
