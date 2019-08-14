
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "vin":"12345",
          "make":"porshe",
          "model":"cayenne",
          "milage":"2230",
          "transmission_type":"automatic",
          "title_status":"clean"
      },
      {
          "vin":"1234567",
          "make":"ford",
          "model":"fiesta",
          "milage":"112930",
          "transmission_type":"manual",
          "title_status":"clean"
      },
      {
          "vin":"12345678",
          "make":"toyota",
          "model":"rav4",
          "milage":"32000",
          "transmission_type":"automatic",
          "title_status":"salvage"
      },
      {
          "vin":"123456789",
          "make":"chevrolet",
          "model":"corvette",
          "milage":"55000",
          "transmission_type":"automatic",
          "title_status":"clean"
      },
      {
          "vin":"12345678923",
          "make":"Honda",
          "model":"Civic",
          "milage":"43790",
          "transmission_type":"manual",
          "title_status":"salvage"
      }
      ]);
    });
};
