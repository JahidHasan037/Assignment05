

// common function part added

function getInputFieldValueById(id)
{
    const InputValue=Number(document.getElementById(id).value);
    document.getElementById(id).value='';
    return InputValue;  
}

function getInputFieldBeforNumberValueById(id)
{

    const InputValue=document.getElementById(id).value;
   
    return InputValue; 
}

function getTextFieldValueById(id)
{
    const textValue=document.getElementById(id).innerText;
    const textNumber=Number(textValue);
    return textNumber;

}
