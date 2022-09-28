

function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = buscar().length;
}


function listarTarefas() {
    let conteudo = buscar().map(function (tarefas) {
        return `
            <div>
                <input type="checkbox"> 
                ${tarefas.titulo}

                <span class="badge ${tarefas.prioridade === 'Baixa' && 'bg-primary'} ${tarefas.prioridade === 'Media' && 'bg-warning'} ${tarefas.prioridade === 'Alta' && 'bg-danger'}">
                    ${tarefas.prioridade}
                </span>
            </div>
        `;
    });

    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');

}

function addTarefa() {
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') { 
        alert('Tarefa invalida');
        return;
    }

    let titulos = buscar().map((tarefa) =>{
        return tarefa ? tarefa.titulo: "";

    }); 

    let existe = false;
    titulos.forEach((t) => {
        if(true === t.includes(titulo)) {
            existe = true;
            return;

        }
    });

    if(existe == false) {
        salvar(titulo,input_prioridade.value);

    }else{
        alert('Tarefa já Existe')
    }

     document.getElementById('input_nova_tarefa').value = '';

    atualizarQuantidade();
    listarTarefas();
    
}



//vai acontecer assim que o usuario entrar na pagina
listarTarefas();
atualizarQuantidade();

