$(document).ready(function(){
  var textbox = $('.textbox');

  textbox.curval = "";

  function checkDecimal(){
    if (textbox.curval.indexOf(".") == -1) {
      return true;
    } else {
      return false;
    }
  }

  function resetCalc(){
    textbox.lastval = "";
    textbox.curval = "0";
    textbox.operation = "";
    textbox.val(textbox.curval);
  }

  function evalCalc(){
    var result = eval(textbox.lastval + textbox.operation + textbox.curval);
    textbox.val(result);
    textbox.lastval = result;
    textbox.curval = "";
  }

  resetCalc();
  console.log("ready");

  $(".number").click(function(){
    if (textbox.curval === "0") {
      textbox.curval = "";
    }
    textbox.curval += $(this).val();
    textbox.val(textbox.curval);
    console.log(textbox);
  });
  $(".basiccalc").click(function(){
    if (textbox.lastval === ""){
      textbox.operation = $(this).val();
      textbox.lastval = textbox.curval;
      textbox.curval = "";
    } else {
      evalCalc();
      textbox.operation = $(this).val();
    }
    console.log(textbox);
  });
  $(".AC").click(function(){
    resetCalc();
    console.log("PM");
  });
  $(".PM").click(function(){
    //TODO: Implement inverter; how does he work after all?
    console.log("PM");
  });
  $(".decimal").click(function(){
    if (checkDecimal() === true){
      textbox.curval += $(this).val();
      textbox.val(textbox.curval);
    }
  });
  $(".eval").click(function(){
    evalCalc();
    console.log(textbox);
  });
});
