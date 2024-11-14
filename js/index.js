
// var users =[
//     {
//             name :"Ali",
//             age  :"29",
//             gender :"male",
//             Wife: {
//                 name :"sara",
//                 gender :"female",
//                 sons : [
//                     {
//                         name :"hassan"
//                     },
//                     {
//                         name:"mariam"
//                     },
//                 ]
//             }

//     }
// ]
// var users =[
//     {
//             name :"Ali",
//             age  :"29",
//             gender :"male",
//             Wife: {
//                 name :"sara",
//                 gender :"female",
//                 sons : [
//                     {
//                         name :"hassan"
//                     },
//                     {
//                         name:"mariam"
//                     },
//                 ]
//             }

//     }
// ]
// var users =[
//     {
//             name :"Ali",
//             age  :"29",
//             gender :"male",
//             Wife: {
//                 name :"sara",
//                 gender :"female",
//                 sons : [
//                     {
//                         name :"hassan"
//                     },
//                     {
//                         name:"mariam"
//                     },
//                 ]
//             }

//     }
// ]
// for ( var i =0; i< users.length; i++){
//     var usersName = users[i].name;
//     var WifeName = users[i].Wifename;
//     var sonsArr =users[i].Wife.sons;
//     for(var j =0; j < sonsArr.length; j++ ) {
//         var sonName =sonsArr[j].name;
//         console.log(WifeName + ":" + sonName+" " + usersName);
//     }
// }


const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `${arrayOfQuotes[random].quote}`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}


