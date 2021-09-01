"use strict";

// const typeGoods = 'food';

// //console.log('https://market.com/'+ typeGoods);



// console.log(`https://market.com/${typeGoods}`);

let number = 10;

function showMessage(text) {
    console.log(text);
    //let number = 20;
    console.log(number);
}

showMessage("Hello!!!");
console.log(number);

const server = function(){
    console.log('server start...');
};

server();

const calc = (x, y) => x+y;
// const salc = (x,y) => {
    // return x+y
    // };

    //const salc = x => x+10;

    console.log(calc(10,5));
    
    function server(){
        setTimeout(function(){
            console.log(1);
        },1000)
    }
    function foo(){
                console.log(2);
    }

    server();
    foo();

    function serverNew(host, callback){
        console.log(`Server ${host} is starting...`);
        callback();
    }

    // serverNew('MyServer', function(){
        //      console.log('connect success!');
        // });
        function done(){
            console.log('connect success!');
        }

        serverNew('MyServer', done);
    