/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiarunidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas
 * @return
 */

function cambiarunidades(id,valor) {
    if(isNaN(valor)){
        alert("Se Ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }
    else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = valor*39.3701;
        document.lasUnidades.unid_pie.value = valor*3.28084;
        document.lasUnidades.unid_yarda.value = valor*1.09361;
    }
    else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value = valor*0.0254;
        document.lasUnidades.unid_pie.value = valor*0.0833333;
        document.lasUnidades.unid_yarda.value = valor*0.0277778;
    }
    else if(id=="pie"){
        document.lasUnidades.unid_metro.value = valor*0.3048;
        document.lasUnidades.unid_pulgada.value = valor*12;
        document.lasUnidades.unid_yarda.value = valor*0.333333;
    }
    else if(id=="yarda"){
        document.lasUnidades.unid_metro.value = valor*0.9144;
        document.lasUnidades.unid_pulgada.value = valor*36;
        document.lasUnidades.unid_pie.value = valor*3;
    }
}