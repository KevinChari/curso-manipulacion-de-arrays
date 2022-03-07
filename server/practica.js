const letters = ['a','b','c'];

for(let i= 0; i <= letters.length; i++) {
    const acumulator = letters[i];
    console.log(acumulator);
};

letters.forEach(item => console.log(item));

//MAP => Lo que hace es transformar =! es inmutable, una ves corras las transformación
//vas a optner el mismo n´mero de elementos

const letters2 = ['a','b','c'];


const newArray = letters2.map(item => item + '++');
/* let newArray = [];

for(let i = 0; i <= letters2.length; i++) {
    const itemRepeat = letters2[i];
    newArray.push(itemRepeat + '++');
} */

console.log('original', letters2);
console.log('new', newArray);

//Map Reloaded

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
console.log('original', orders);
const rta =  orders.map(item => item.total);
console.log('rta', rta);
/* const rta2 =  orders.map(item => {
    item.tax = .19;
    return item;
});
console.log('rta2', rta2);
console.log('original', orders); */
const rta3 =  orders.map(item => {
    
    return {
        ...item,
        tax: .19
    };
});

console.log('rta3', rta3);
console.log('original', orders);

//Filter => ayuda a filtrar los elementos de un array con base a un condicional, los elementos que cumplan con la condición
// van hacer parte de ese  nuevo array y es inmutable, es un método que puede retornar hasta 0 elementos , nunca más elementos.


const words = ['spray','limit','elite','exuberant'];

const newArray1 = [];

for (let i = 0; i <= words.length; i++) {
  const itemRepeat3 = words[i];
  if(itemRepeat3.length >= 6) {
    newArray1.push(itemRepeat3);
  }
};
console.log('newArray',newArray);
console.log('original',words);

const rta = words.filter(item => item.length >= 6);

console.log('rta',rta);
console.log('original',words);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 240546,
    delivered: true,
  },
];



const orders1 = orders.filter(item => item.delivered && item.total >= 100);
console.log('orders1', orders1);

const search = (query) => {
  return orders.filter(item  => {
    return item.customerName.includes(query);
  });
};

console.log(search('Nico'));

//REDUCE
//coje un array y lo reduce a un solo valor, no devielve otro array como map o filter
//reduce no debería retornar un array en algunos casos lo hace, depende más del código o el algoritmo que ejecutes para
//reducir, y se utiliza mucho para hacer cálculos 

const totals = [1,2,3,4];



let sum = 0;
for(let i = 0; i <= totals.length; i++) {
  const itemAcomulator = totals[i];
  sum = sum + itemAcomulator;
}
console.log(sum);

const rta7 = totals.reduce((sum, item)=> sum + item, 0);//primer parámtro un arrow fuction y el segundo el estado inicial(0)
console.log(rta7);

//en reduce es importante tener un estado inicial, con este acumulador lo va procesando de esta manera 

//REDUCE RELOADED


const items = [1,3,2,3];

const rta5 = items.reduce((obj, item)=> {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta5);