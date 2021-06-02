let codigos=[];

function total(){
        let total_items=document.getElementById('totales_items');
        let total_costos= document.getElementById('total_costo');
        let num_items =codigos.length;
        var suma=0;
        for (let i = 0; i < num_items; i++) {
            suma = suma + Number(document.getElementById(codigos[i]).lastChild.previousSibling.textContent);
            total_costos.innerHTML = suma;
        }
        if (codigos[num_items] !="" ) {
            total_items.innerHTML = num_items;
        }
        if (suma==0) {
            total_costos.innerHTML = suma;
        }
}

// Mostrar menu principal
// Actividad de BOTONES

$(document).ready(function(){

    $('#buton_Regresar_ingreso').click(function(){
        $('#div_ingreso').css("display", "none");
        $('#div_principal').css("display", "flex");
    })

    $('#buton_Regresar_Editar').click(function(){
        $('#div_Editar').css("display", "none");
        $('#div_principal').css("display", "flex");
    })

    $('#buton_Regresar_Borrar').click(function(){
        $('#div_Borrar').css("display", "none");
        $('#div_principal').css("display", "flex");
    })

    $('#principal_ingreso').click(function(){
        $('#div_principal').css("display", "none");
        $('#div_ingreso').css("display", "flex");
    })

    $('#principal_Editar').click(function(){
        $('#div_principal').css("display", "none");
        $('#div_Editar').css("display", "flex");
    })

    $('#principal_Borrar').click(function(){
        $('#div_principal').css("display", "none");
        $('#div_Borrar').css("display", "flex");
    })

    $('#buton_editar').click(function(){
        $('#div_Editar').css("display", "none");
        $('#div_Editar3').css("display", "flex");
    })

    $('#button_regresar_editar3').click(function(){
        $('#div_Editar3').css("display", "none");
        $('#div_Editar').css("display", "flex");
    })


    $('#button_Editar3').click(function(){
        $('#div_Editar3').css("display", "none");
        $('#div_Editar2').css("display", "flex");
    })


    $('#button_editar2_regresar').click(function(){
        $('#div_Editar2').css("display", "none");
        $('#div_Editar').css("display", "flex");
    })


})


// Funcion de tiempo
setInterval(myTimer, 1000);
function myTimer() {
    var t = new Date();
    document.getElementById("tiempo").innerHTML = t.toLocaleTimeString();
    document.getElementById("fecha").innerHTML =  t.getDate() + "/" + (t.getMonth()+1) + "/"+t.getFullYear();

}

// Funciones para Ingresar, Editar y Borrar elementos.

function ingreso() {
    // obtenemos los datos de los inputs //
    var cod = document.getElementById("input_codigo").value;
    var table = document.getElementById("tabla_contener");

    // Obligar a rellenar los datos
    var valCodigo = document.getElementById("input_codigo").value;
    var valelemento = document.getElementById("input_elemento").value;
    var valcosto = document.getElementById("input_costo").value;

    if (valCodigo != "" && valelemento !="" && valcosto !="" && valcosto >=0) {
        // Dando formato a la fecha.

        var fecha__ = new Date();
        var year__ = fecha__.getFullYear();
        var day__ = fecha__.getDate();
        var month__ = fecha__.getMonth();
        month__ = month__ + 1;

        if (month__ < 10) {
            var __month = "0" + month__;}
        else{ var __month = month__;}

        if (day__ < 10) {
            var __day = "0"+day__;
        }
        else{ var __day = day__}

        __fecha = year__ + "-" + __month+ "-" + __day;

    for ( i = 0; i <= codigos.length; i++){
            var prueba =0;
        if (codigos.includes(cod)) {
            prueba = Number(1);
            break;
        }} // Comprobamos que sea unico codigo
        if (prueba == 1) {
            alert("CODIGO YA INGRESADO, INGRESE CORRECTAMENTE EL CODIGO");
        } // corroboramos que no sea codigo repetido
        else{

            // Creamos los elementos del HTML
            var new_element = document.createElement("tr");
            var new_cod = document.createElement("td");
            var new_name = document.createElement("td");
            var new_costo = document.createElement("td");
            var new_date = document.createElement("td");

            // Asignamos ID
            new_element.setAttribute("id", cod);

            //asignamos el valor del nuevo elementos
            new_cod.textContent = document.getElementById("input_codigo").value;
            new_name.textContent = document.getElementById("input_elemento").value;
            new_costo.textContent = document.getElementById("input_costo").value;
            new_date.textContent = document.getElementById("input_fecha").value;

            //verificamos que la fecha no sea posterios ni futura
            if (new_date.textContent != __fecha) {
                alert("Fecha ingresada Incorrecta");
                prueba = 1;
            }

            if(prueba == 0) {

                // Colocamos el formato convencional a la fecha
                __fecha = __day + "-" + __month+ "-" + year__;
                new_date.textContent =__fecha;

                //ubicamos los nuevos elementos
                new_element.appendChild(new_cod);
                new_element.appendChild(new_name);
                new_element.appendChild(new_costo);
                new_element.appendChild(new_date);
                table.appendChild(new_element);
                codigos.push(cod);
                total();
                document.getElementById("input_codigo").value="";
                document.getElementById("input_elemento").value="";
                document.getElementById("input_costo").value="";
            }
                // return codigos.push(cod);
        } // fin del if
    }
    else{
        alert("Debe llenar todos los campos, para ingresar un item o ha ingresado un costo negativo");
    }
} // Final de funcion ingreso

function confirmar_editar(cod){
        // Buscamos si el Codigo ya ha sido registrado
    var cod = document.getElementById("input_codigo_editar").value;
    var edit_element = document.getElementById(cod);

    // Identificamos el ID
    var arregloEditar = -1;
    for ( i = 0; i <= codigos.length; i++){
        if (cod == codigos[i]) {
            arregloEditar = i;
        }
    }
    var msgEditar = document.getElementById("h3_editar3");
    var msgEditar_div = document.getElementById("div_Editar3");
    // var msgSI = document.createElement("h3");
    // Verificamos que el codigo ya esté registrado
    if(arregloEditar <= -1){
        msgEditar.innerHTML = "Elemento no registrado";
        document.getElementById("div_Editar3").removeChild(button_Editar3);
    }
    else {
        msgEditar.innerHTML = "Elemento a editar tiene el codigo <br>" + cod;
    }

}

function editar(cod){
    var cod = document.getElementById("input_codigo_editar").value;
    var edit_element = document.getElementById(cod);

    if (document.getElementById("input_elemento_editar").value != "") {
                    var Mod_element = document.getElementById("input_elemento_editar").value;
                    edit_element.firstChild.nextSibling.innerHTML = Mod_element;
                }
    if (document.getElementById("input_costo_editar").value >=0) {
    if (document.getElementById("input_costo_editar").value != "" ) {
        var Mod_costo = document.getElementById("input_costo_editar").value;
        edit_element.lastChild.previousSibling.innerHTML = Mod_costo;
        total();
    }}
    else{
        alert("El costo no puede ser negativo");
    }
    document.getElementById("input_costo_editar").value="";
    document.getElementById("input_elemento_editar").value="";
}

function Borrar(){
    var idElemento = document.getElementById("input_codigo_borrar").value;
    // Comprobar que exista el item
    var confirmExistencia = -1;
        for ( i = 0; i <= codigos.length; i++){
            if (idElemento == codigos[i]) {
                confirmExistencia = i;
            }
        }
    if (confirmExistencia == -1) {
        alert("El elemento con el codigo " + idElemento + " no esta registrado");
    }
    else{
        for (let i = 0; i < codigos.length; i++) {
            if (idElemento == codigos[i]) {
                // Borramos el tr con el id indicado
                var trElemento = document.getElementById(idElemento);
                var tableElemento = trElemento.parentNode;
                tableElemento.removeChild(trElemento);
                // Borramos el codigo del arreglo
                codigos.splice(i,1);
                document.getElementById("input_codigo_borrar").value ="";
                // Actualizamos los totales
                total();
            }}
    }
}

