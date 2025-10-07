// Seleciona os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Formata o valor digitado para o padrão BRL
amount.oninput = () => {
  // Remove tudo que não for número
  let value = amount.value.replace(/\D/g, "");

  // Se não houver valor, zera
  if (!value) {
    amount.value = "";
    return;
  }

  // Converte para número e formata em BRL
  value = Number(value) / 100;
  amount.value = formatCurrencyBRL(value);
};

// Função para formatar número em BRL
function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Ao enviar o formulário
form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  console.log(newExpense);
};
