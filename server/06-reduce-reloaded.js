const totals = [1,3,2,3];

const rta = reduce.totals((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);


const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log('rta1', rta1);

//ha esto normalmente se los llama paynames y es donde la salida de uno es la entrada de información del otro.


const numbers = [1, 2, 4, 7, 6, 9, 7, 3, 7,
   9, 8, 6, 4, 5, 5, 1, 2, 3, 5, 4, 6, 8, 7, 
   10, 10, 5, 3, 2, 1, 10, 2, 10];



const answ = numbers.reduce((object, value)=> {
  if(value < 5) {
    object["1-4"] += 1;
} else if(value < 9){
    object["5-8"] += 1;
}else {
  object["9-10"] += 1;
}
return object;
}, {
  "1-4": 0,
  "5-8": 0,
  "9-10": 0,
});

console.log(answ);









const respuesta = numbers.reduce((object, value) => {
  if(value < 5) {
    object["1-4"] += 1;
  } else if(value < 9) {
    object["5-8"] += 1;
  } else {
    object["9-10"];
  }
  return object;
}, {
  "1-4": 0,
  "5-8": 0,
  "9-10": 0,
});

