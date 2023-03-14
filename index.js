// code your solution here
function saturdayFun(){
    console.log("This Saturday, I want to hike!");
}saturdayFun();

function saturdayFun(roskate){
    if (roskate === undefined){
        roskate = "roller-skate";
}return (`This Saturday, I want to ${roskate}!`);
}

let mondayWork = function(office = "go to the office"){
    return `This Monday, I will ${office}.`
}

function wrapAdjective(adjective){
    return function wrap(text){
        return `You are ${adjective}${text}${adjective}!`
    }
}

let adjective = wrapAdjective ('||');
let nest = adjective('a dedicated programmer');

let emphatic = wrapAdjective('*')('a hard worker');
let other = wrapAdjective('||')('a dedicated programmer');

console.log(emphatic,'\n',other);