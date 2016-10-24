/**
 * Created by seandove on 10/12/16.
 */
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
    $('button').on('click', function () {
        var val = $(this).text();
        switch (val) {
            /* case 'CE':
             allClear();
             break;*/
            default:
                input_number(val);
                input_type(val);
                /*case 'C':
                 clear();*/
                break;
        }
    });
})

function input_number(value) {
    val_array.value += value;
    console.log('value is', val_array);
}
function input_type(button) {
    //if
    switch (button) {
        //if button === +
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
}