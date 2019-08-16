
exports.up = function(knex) {
    return knex.schema.createTable('cars',(tbl) =>{
    tbl.increments('id');
    tbl.string('vin').unique();
    tbl.text('make',128).notNullable();
    tbl.text('model',128).unique().notNullable();
    tbl.integer('milage').notNullable();
    tbl.text('transmission_type');
    tbl.text('title_status');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
