const faker = require('faker');
var fs = require('fs');


var dummyData = [];


var generateData = () => {
  let ctr = 10000;
  for (var i = 0; i < 100; i++) {
    dummyData.push(
      { zipcode: ctr,
        address: `${faker.address.city()}, ${faker.address.state()}`,
        street: `${faker.address.streetName()}`,
        product_ids: '1,2,3,4,5'
      }
    );
    ctr += 1000;
  }
  var json = JSON.stringify(dummyData);
  fs.writeFile('zipcodes.json', json, 'utf8', ()=> {
    console.log('done');
  });
};

generateData();