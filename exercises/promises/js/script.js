/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

async function get_individual(num, all_numbers) {
    console.log("Calling resolve_with_wait asynchronously");
    let result = await resolve_with_wait();
    console.log(result);
    console.log("Done");
}


}

async function get_batch(num, all_numbers) {
    let result = resolve_with_wait();
    console.log(result);
    console.log("Done");

}

async function clickedon() {
    let num = parseInt(document.querySelector('#number').value);
    let all_numbers = document.querySelector('#number_info');
    if (document.querySelector('#batch').checked) {
        get_batch(num, all_numbers);
    } else {
        get_individual(num, all_numbers);
    }
}
