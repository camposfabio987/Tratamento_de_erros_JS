const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton() {
    arquivo = document.getElementById("inputfile");

    var fr = new FileReader();

    try {

        fr.readAsText(arquivo.files[0]);

        fr.onload = function () {
            info = fr.result;
            document.getElementById('outputfile').textContent = fr.result;
        }

        var info = document.getElementById('outputfile').textContent
        if (info == "") {
            throw "Arquivo vazio!"
        }

    }

    catch (error) {
        document.getElementById('outputfile').textContent = "Arquivo não localizado."
        alert(error)
    }

    finally {
        alert("Obrigado(a) pela visita!");
    }



}

function clickNumberButton() {
    numb = document.getElementById("inputnumber").value

    try{    
        if(numb == ''){
         throw "Informe um valor"
        }
    }

    catch(erro){
     alert(erro)
       
    }
}
