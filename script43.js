var btn = document.querySelector('button')
var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//    var c1 = Math.floor(Math.random()*255)
//     var c2= Math.floor(Math.random()*255)
//    var c3= Math.floor(Math.random()*255)

//    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//       box.innerHTML  = `rgb(${c1},${c2},${c3})`;


// })
var arr = ['hima','sourav', 'sumit','ankit','himanshu','kamal']
var a= Math.floor(Math.random()*arr.length);
console.log(arr[a]);

var array = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'blue',
        fullname:"chennai super kings",
        captain:'ruturaj',
        trophies:'5',


},
{
        team:'RCB',
        primary:'red',
        secondary:'black',
        fullname:"royal chellegers bengaluru",
        captain:'patidar',
        trophies:'2',
},
{
        team:'MI',
        primary:'blue',
        secondary:'gold',
        fullname:"Mumbai indians",
        captain:'Hardik pandya',
        trophies:'5',
},
{
        team:'KKR',
        primary:'purple',
        secondary:'gold',
        fullname:"kolkata knight riders",
        captain:'Ajinkya rahane',
        trophies:'3',
},
{
        team:'pbks',
        primary:'crimson',
        secondary:'silver',
        fullname:"punjab kings",
        captain:'shreyas iyer',
        trophies:'0',
},
{
        team:'RR',
        primary:'pink',
        secondary:'blue',
        fullname:"rajasthan royals",
        captain:'riyan parag',
        trophies:'1',
},
{
        team:'DC',
        primary:'skyblue',
        secondary:'red',
        fullname:"delhi capitals",
        captain:'axar patel',
        trophies:'0',
},
{
        team:'SRH',
        primary:'orange',
        secondary:'black',
        fullname:"sunrisers hyderabad",
        captain:'pat cummins',
        trophies:'1',
},
{
        team:'GT',
        primary:'darkblue',
        secondary:'gold',
        fullname:"gujarat titans",
        captain:'shubman gill',
        trophies:'1',
},
{
        team:'LSG',
        primary:'lightseagreen',
        secondary:'red',
        fullname:"lucknow super jiants",
        captain:'rishabh pant',
        trophies:'0',
},

]


var butn =document.querySelector('button')
var h1 = document.querySelector('h1')
var h6 = document.querySelector('h6')
var main = document.querySelector('main')

butn.addEventListener('click',function(){
       var winner =array[Math.floor( Math.random()*array.length)]
       h1.innerHTML = winner.team 
       h1.style.backgroundColor =winner.secondary
        main.style.backgroundColor = winner.primary
        h6.innerHTML  = winner.fullname+
        '<br>'+winner.captain+
        '<br>'+winner.trophies;

        h6.style.backgroundColor = winner.secondary



        
})