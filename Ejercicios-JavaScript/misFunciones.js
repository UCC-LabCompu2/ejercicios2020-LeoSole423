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
    var metro,pulgada,pie,yarda;

    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se Ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }
    else if(id=="metro"){
        metro = valor;
        pulgada = valor*39.3701;
        pie = valor*3.28084;
        yarda = valor*1.09361;
    }
    else if(id=="pulgada"){
        metro = valor*0.0254;
        pulgada= valor;
        pie = valor*0.0833333;
        yarda = valor*0.0277778;
    }
    else if(id=="pie"){
        metro = valor*0.3048;
        pulgada = valor*12;
        pie = valor;
        yarda = valor*0.333333;
    }
    else if(id=="yarda"){
        metro = valor*0.9144;
        pulgada = valor*36;
        pie = valor*3;
        yarda = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirgr(id) {
    var grad, rad;
    if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad=grad*Math.PI/180;
    }
    if(id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }
    else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcular_suma() {
    var n1,n2;
    n1=Number(document.getElementsByName("sum_num1")[0].value);
    n2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = n1 + Number(n2);
}
function calcular_resta() {
    var n1,n2;
    n1=Number(document.getElementsByName("res_num1")[0].value);
    n2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= n1 - Number(n2);
}
function calcular_mul() {
    var n1,n2;
    n1=Number(document.getElementsByName("mul_num1")[0].value);
    n2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= n1 * Number(n2);
}
function calcular_div() {
    var n1,n2;
    n1=Number(document.getElementsByName("div_num1")[0].value);
    n2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= n1 / Number(n2);
}