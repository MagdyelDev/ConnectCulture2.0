function mostrarSecao(id){

    document.querySelectorAll(".card").forEach(secao=>{
        secao.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");

}


function abrirModal(tipo){

    const overlay = document.getElementById("overlay");
    const titulo = document.getElementById("tituloModal");
    const campos = document.getElementById("camposModal");

    overlay.style.display = "flex";

    if(tipo === "cidade"){

        titulo.innerHTML = "Adicionar Cidade";

        campos.innerHTML = `

        <div class="campo">
            <label>Nome da Cidade</label>
            <input type="text">
        </div>

        <div class="campo">
            <label>UF</label>
            <input type="text">
        </div>

        <div class="campo">
            <label>Região</label>
            <input type="text">
        </div>

        `;
    }


    if(tipo === "ponto"){

        titulo.innerHTML = "Adicionar Ponto Turístico";

        campos.innerHTML = `

        <div class="campo">
            <label>Cidade</label>
            <select>
                <option>Serra Talhada</option>
                <option>Triunfo</option>
                <option>Sertânia</option>
                <option>Ibimirim</option>
            </select>
        </div>

        <div class="campo">
            <label>Nome do Ponto</label>
            <input type="text">
        </div>

        <div class="campo">
            <label>Descrição</label>
            <textarea></textarea>
        </div>

        `;
    }


    if(tipo === "curiosidade"){

        titulo.innerHTML = "Adicionar Curiosidade";

        campos.innerHTML = `

        <div class="campo">
            <label>Ponto Turístico</label>
            <input type="text">
        </div>

        <div class="campo">
            <label>Curiosidade</label>
            <textarea></textarea>
        </div>

        `;
    }

}


function fecharModal(){

    document.getElementById("overlay").style.display = "none";

}

//Falta a parte de buscar/filtras os resultados depois implemntar