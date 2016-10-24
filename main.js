/**
 * Created by seandove on 10/12/16.
 */
//declare variable val_array
var val_array = {
    value: '',
    type: null
};
var global_array = [];


//callback function defined
//function callback(type, value, item) {
/* switch (value) {
 case undefined:
 $('#display_area').html("");
 break;
 default:
 $('#display_area').html(value);
 break;

 }
 }*/
// my_calculator - creates a new calculator object
//var my_calculator = new calculator(callback);
//after DOM load add click handlers to all buttons
$(document).ready(function () {
    //  LFZ START
    //a function of on click is called for button
    $('button').on('click', function () {
        //sets the variable val and calls this and returns
        var val = $(this).text();
        //switch statement compares the value of each case
        switch (val) {
            /* case 'CE':
             allClear();
             break;*/
            //called when values don't match expression
            default:
                input_number(val);
                input_type(val);
                /*case 'C':
                 clear();*/
                break;
        }
    });
    // LFZ FINISH
});
//sets function for input_number with a peram of value
function input_number(value) {
    //concatinates
    val_array.value += value;
    //consoles out result of concatinatoin
    console.log('value is', val_array);
}
//sets function to input type with a peram of button
function input_type(button) {
    //if
    //  LFZ START
    //switch statment to call button peram to compare value
    switch (button) {
        //if button === +
            //case returns the variable to switch statement
        case '/':
            //do this
            val_array.type = 'operator';
            break;
        //else if
        case 'x':
            val_array.type = 'operator';
            break;
        case '-':
            val_array.type = 'operator';
            break;
        case '+':
            val_array.type = 'operator';
            break;
        case '=':
            val_array.type = 'equalSign';
            break;
        default:
            val_array.type = 'numbers';
    }
    //  LFZ FINISH
}