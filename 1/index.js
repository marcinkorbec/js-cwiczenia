/* JS CWICZENIA */

/* zadanie 4 */

// const e = 2.718228;
// alert(e);

/* zadanie 5 */

// let zmienna = 12;
// console.log(typeof (zmienna));

// zmienna = "Język Java Script"
// console.log(typeof (zmienna));

/* zadanie 6 */
// const opis = "JavaScript to język programowania.";
// console.log(`Informacja: ${opis}`);

/* zadanie 7 */
// const a = 21;
// const b = 17;

// alert(`${a} + ${b} = ${a + b}`);

/* zadanie 8 */
// const a = prompt();
// console.log(`Pobrana wartość: ${a}`);

/* "Wstrzykiwanie" kodu HTML do wybranego elementu */

/* zadanie 1 */
// {
//     const a = 15;
//     const b = 5;

//     const div = document.createElement('div');
//     div.id = 'wynik';
//     document.body.appendChild(div);
//     div.innerText = `wynik: ${a + b}`;
// };

/* zadanie 2 */
// {
//     const a = 75;
//     const b = 123;

//     const div = document.createElement('div');
//     div.id = 'wynik';
//     document.body.appendChild(div);
//     div.innerHTML = `<h1>wynik: ${a + b} </h1>`;
// }

/* zadanie 3 */
// to samo co przedtem 

/* --------------------------------------------- PĘTLE -----------------------------------------*/
/* ZADANIE 1 */
// {
//     const div = document.createElement('div');
//     div.id = 'wynik';
//     document.body.appendChild(div);
//     let codeHtml = '';

//     for (step = 1; step <= 100; step++) {
//         codeHtml = codeHtml + step + ', '
//     }

//     div.innerText = ` ${codeHtml}, `
// }

/* ZADANIE 2 */
// {
//     const div = document.createElement('div');
//     div.id = 'wynik';
//     document.body.appendChild(div);


//     for (step = 1; step <= 100; step++) {
//         div.innerText += ` ${step}, `;
//     }
// }

/* ZADANIE 3 */
// const th = document.querySelectorAll('th');
// const tr = document.querySelector('.row')
// const td = document.createElement('td');

// tr.innerHTML = '';
// for (let item of th) {
//     let outputValue = Number(item.outerText) * Number(item.outerText);
//     let text = `<td>${outputValue}</td>`    
//     tr.innerHTML += text;
// }

/* ZADANIE 4 */

/* ----------------------------- INSTRUKCJE WARUNKOWE ----------------------------------------------*/
/* ZADANIE 1 */

// const div = document.querySelector('.text');
// console.log(div);
// const liczba = 0;

// if (liczba > 0 ) {
//     const linkHtml = `<h1>${liczba} - większa od zera.`;
//     div.insertAdjacentHTML('beforeend', linkHtml);
// }
// else {
//     const html = `<h1>${liczba} - zero lub liczba ujemna`;
//     div.insertAdjacentHTML('beforeend', html);
// }
