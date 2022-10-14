function addValor(valor){
    let visor = document.getElementById("visor").value;
    let operador = "";

    if(valor == 0 && visor == 0){
        console.log(valor);
        return false;
    }else if(valor == "C"){
        $("#visor").val("0");
        return false;
    }else if(valor == "%" || valor == "/" || valor == "x" || valor == "-" || valor == "+" ){
        console.log("boa chefe");
        operador = valor;
        $("#visor").val("");
    } 
    else if(valor == "="){
        resultado = valor01 + operador;
        $("#visor").val(resultado);
    }else{
        $("#visor").val(valor);
    }
}