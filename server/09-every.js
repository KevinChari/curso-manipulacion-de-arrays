const numbers = [1,30,49,29,10,13];


let rta = true;
for(let i = 0; i < numbers.length; i++){
    const itemAcumulator = numbers[i];
    if(itemAcumulator >= 40){
        rta = false;
    }
}

console.log('for',rta);
console.log('rta2',rta2);

const rta2 = numbers.every(item => item <= 40);


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const agePlayers = team.map(item => item.age);

const ageAdmited = agePlayers.every(age => age <= 15);

if(ageAdmited === true ) {
    console.log('Su equipo cumple con los requisitos, Felicidades!!')
} else {
    console.log('Su equipo no es admintido, algún miembro de su equipo no cumple con la edad establecida');
}