--VARIABLES DE USUARIO
SET @nombre_var = expr [, @nombre_var = expr] ...
EJ:
mysql> SET @t1=0, @t2=0, @t3=0;
mysql> SELECT @t1:=(@t2:=1)+@t3:=4,@t1,@t2,@t3;

Con SET, tanto = como := pueden usarse como operadores de asignación. La expr asignada a cada
variable puede evaluarse a un valor entero, real, cadena, o NULL.


Si se hace referencia a una variable aún sin inicializar, su valor será NULL.

--VARIABELS DE SP
    /*========================*/
    /*DECLARACIONDE VARIABLES - INICIO*/
    DECLARE _estado INTEGER;
    DECLARE _msg VARCHAR(255);
    /*DECLARACIONDE VARIABLES - FIN*/
    /*========================*/

    /*========================*/
    /*INICIALIZACION DE VARIABLES - INICIO*/
    SET _estado = 0;
    /*INICIALIZACION DE VARIABLES - FIN*/
    /*========================*/

--SELECT CON IF

SELECT IF (‘Esto’ = ‘Esto’, ‘Es igual’, ‘No es igual’);

--IF
IF search_condition THEN statement_list
[ELSEIF search_condition THEN statement_list] ...
[ELSE statement_list]
END IF

--CASE
CASE case_value
WHEN when_value THEN statement_list
[WHEN when_value THEN statement_list] ...
[ELSE statement_list]
END CASE

--WHILE
CREATE PROCEDURE dowhile()
BEGIN
DECLARE v1 INT DEFAULT 5;
WHILE v1 > 0 DO
...
SET v1 = v1 - 1;
END WHILE;
END

--DECLARAR VARIABLES LOCALES
DECLARE var_name[,...] type [DEFAULT value]

--ASIGNAR VALOR A UNA VARIABLE
SET var_name = expr [, var_name = expr] ...

--La sentencia SELECT ... INTO
SELECT col_name[,...] INTO var_name[,...] table_expr


/*========================*/
/*Verificacion de un Error - INICIO*/
	IF (_estado != 0) 
	THEN
	
		SELECT _estado AS estado, _msg AS msg ;
	
	END IF;
/*Verificacion de un Error - FIN*/
/*========================*/

--Agregar un error
SET _estado = 401;
SET _msg = "Error ded autenticacion - email/Password";