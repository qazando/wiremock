import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
  vus: 10, // Define 10 usuários virtuais simultâneos
  duration: '5s', // Executa o teste por 30 segundos
};

export default function () {
  const url = 'http://localhost:8080/api/cars';  // URL da sua API simulada no Wiremock

  const payload = JSON.stringify({
    brand: 'Volkswagen',
    model: 'up tsi',
    year: 2020,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  // Verifica se o status da resposta é 500 e se a mensagem de erro está correta
  check(response, {
    'status is 500 herbertao': (r) => r.status === 500,
    "error message is correct herbertao2": (r) => r.json('message') === "Internal server error: model 'up tsi' is not allowed.",
  });

  // Aguarda 1 segundo entre as requisições para simular um intervalo
  sleep(1);
}

// Exportando o resumo em HTML
export function handleSummary(data) {
  return {
    "./report/test-500.html": htmlReport(data), // Gera o relatório em HTML
  };
}