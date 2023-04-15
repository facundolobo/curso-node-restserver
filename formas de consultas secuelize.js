await db.query("CALL validarUserPass(:_email, :_password, :_id)",
            {replacements: {  _email:email, _password:password }})
    .then(results => {
        res.json({
            ok: true,
            msg: 'validarUserPass Api - Controller',
            results
        })
    })
    .catch(err =>{
        console.log('ERROR')
        res.status(400).json(err);
    })


//

sequelize.query('DECLARE @out AS int;' + 
               'EXEC stored_procedure_name :param1, :param2, @out output, :param4;' +
               'SELECT @out AS result;',
                { replacements: { param1: value1, param2: value2, param4: value4 }, 
         type: QueryTypes.SELECT });

//traduccion

sequelize.query('DECLARE @out AS int;' + 
               'CALL validarUserPass(:_email, :_password, @out output)' +
               'SELECT @out AS result;',
                { replacements: { param1: value1, param2: value2, param4: value4 }});

                ///////////
"DECLARE @outParam1 INT, @outParam2 INT EXEC procedureName @param1=:param, @outParam1 = @outParam1 output, @outParam2 = @outParam2 output SELECT @outParam1 AS "outParam1", @outParam2 AS "outParam2""
//
async function createNewUser({
    email, password, firstName, lastName,
   }) {
    const hashedPassword = await hashPayload(password);
    const user = await MySQL.sequelize.query(
     'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
     {
      type: MySQL.sequelize.QueryTypes.INSERT,
      replacements: [email, hashedPassword, firstName, lastName],
     },
    );
    return {
     user: {
      id: user[0],
      email,
      firstName,
      lastName,
     },
    };
   }

///
      sequelize.query("DELETE FROM `"+TABLE_PREFIX+req.params.table+"` WHERE `"+ primary_key +"` = "+mysql_clean(req.params.id), { type: sequelize.QueryTypes.DELETE})

          // //let SQL= `Call getUsuarios(`+ id +`)`;
    // // let SQL2 = `call getUsuarios2( `+ id +`,@_status)`;    
    
    // //Armado de SP con llamada getUsuarios devuelve todos los usuarios.
    
    // // const results = await db.query(`call getUsuarios2( :_id )`,
    // //                     {replacements: { _id: id }})

    // // const results = await db.query(SQL )              
             
    // // const results =await db.query('SET @outputData = null; CALL getUsuarios2 (:id, @outputData); SELECT @outputData;',
    
    // const resp = await db.query(`call getUsuarios2( :_id )`,
    // {
    //   replacements: {
    //     _id: id,
    //   }//,type: QueryTypes.SELECT
    // })