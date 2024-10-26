let saldo = 5000;

const elementoSaldo = document.querySelector('.saldo') as HTMLElement;
elementoSaldo.textContent = saldo.toString();

const formulario = document.querySelector('form') as HTMLFormElement;
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let inputTransacao = document.querySelector('#transacao') as HTMLSelectElement;
    let inputValor = document.querySelector('#valor') as HTMLInputElement;
    let inputData = document.querySelector('#data') as HTMLInputElement;

    let tipoTransacao = inputTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = inputData.value;

    const transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    }

    if (tipoTransacao === 'saque') {
        saldo -= valor;
    }

    if (tipoTransacao === 'deposito') {
        saldo += valor;
    }

    elementoSaldo.textContent = saldo.toString();

    formulario.reset();
});