"use strict";
//Orginal code
//const year = document.getElementById('year');
//const thisYear = new Date().getFullYear();
//year.setAttribute('datetime', thisYear);
//year.textContent = thisYear;
// 1.Variation
//let year: HTMLElement | null;
//year = document.getElementById('year');
//let thisYear: string;
//thisYear = new Date().getFullYear().toString();
//if (year) {
//  year.setAttribute('datetime', thisYear);
//  year.textContent = thisYear;
//}
//2.Variation
let year = document.getElementById('year');
let thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
}
