// const wait = (number) => {
//     return new Promise((res) => {
//         setTimeout(() =>) {
//             res(number);
//         }, number);
//     });
// };

// wait(2000).then(() => {
//     console.log('You\'ll see this after 1 second');
// });

// fetch(url, {headers: {'Authorization': 'token 77a76a7eb817d1d0628b3849a889a9c3f4c683e4'}});


// let headers = {'Authorization': 'token 77a76a7eb817d1d0628b3849a889a9c3f4c683e4'};


// fetch('https:api.github.com/users/HarleyGarcia36')
//     .then((data) => {
//         console.log(data);
//         return data.json().append('To The HIgher poWer');
//   })
//     .then(data) => {
//     console.log(data);
//   }

//     .then((data) =>{
//         return fetch(data.events.url), {headers: headers}

//   });









//practice promises

// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('okden');
//     }, 300);
// });

// promise1.then(function(value) {
//     console.log(value);
// });

// console.log(promise1);

fetch('https://hookb.in/03E9Ln9l1lUGmGkNPo9l', {
    method: 'POST',
    body: JSON.stringify({home: 'Devine', State: 'Texas'})
}).then(console.log);