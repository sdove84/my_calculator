/**
 * Created by seandove on 10/12/16.
 */

$(document).ready(function () {
    var input_array=[''];
    var input_index=0;

    $('button').on('click', function () {
        var val = $(this).text();
    });
    apply_click_handlers();

    function apply_click_handlers(){
        $('.number').click(input_number);
        $('.operator').click(input_operator);
        $('#equal_button').click(calculate);
        $('.clear').click(clear);
    }

    function input_number(){
        console.log( $(this).text());
        input_array[input_index] += $(this).text();
        $("#display_area").empty();
        $("#display_area").append(input_array);

        console.log(input_array);
    }

    function input_operator(){
        //do I have enough to do math?
        //as long as do math returns it to the original state
        if (input_array.length===3){
            calculate();
        }
        input_index++;
        input_array[input_index] = $(this).text();
        console.log(input_array);
        input_index++;
        input_array[input_index] = '';
    }

    function calculate(){
        var operator=input_array[1];
        var num1=parseFloat(input_array[0]);
        var num2=parseFloat(input_array[2]);
        var total=0;

        switch (operator){
            case "+":
                total=num1+num2;
                input_array=[''];
                input_array[0]=total;
                $("#display_area").empty();
                $("#display_area").append(total);
                input_index=0;
                console.log(total);
                break;
            case "-":
                total=num1-num2;
                input_array=[''];
                input_array[0]=total;
                $("#display_area").empty();
                $("#display_area").append(total);
                input_index=0;
                console.log(total);
                break;
            case "x":
                total=num1*num2;
                input_array=[''];
                input_array[0]=total;
                $("#display_area").empty();
                $("#display_area").append(total);
                input_index=0;
                console.log(total);
                break;
            case "/":
                total=num1/num2;
                input_array=[''];
                input_array[0]=total;
                $("#display_area").empty();
                $("#display_area").append(total);
                input_index=0;
                console.log(total);
                break;
            default:
                total=0;
        }
    }

    function clear() {
        $("#display_area").empty();
        input_array=[''];
        input_index=0;
    }
});


