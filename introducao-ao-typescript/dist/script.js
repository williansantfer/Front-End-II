let saldo = 5000;
const elementoSaldo = document.querySelector('.saldo');
elementoSaldo.textContent = saldo.toString();
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let inputTransacao = document.querySelector('#transacao');
    let inputValor = document.querySelector('#valor');
    let inputData = document.querySelector('#data');
    let tipoTransacao = inputTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = inputData.value;
    const transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    if (tipoTransacao === 'saque') {
        saldo -= valor;
    }
    if (tipoTransacao === 'deposito') {
        saldo += valor;
    }
    elementoSaldo.textContent = saldo.toString();
    formulario.reset();
});
