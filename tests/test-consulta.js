import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'http://localhost:8080/api/cars';  // URL da sua API simulada no Wiremock

  const response = http.get(url);

  // Verifica se o status da resposta é 200
  check(response, {
    'status is 200': (r) => r.status === 200,
    'contains 5 cars': (r) => r.json().length === 5,
    'car 1 is Toyota Corolla': (r) => r.json()[0].model === 'Corolla' && r.json()[0].brand === 'Toyota',
    'car 5 is BMW M3': (r) => r.json()[4].model === 'M3' && r.json()[4].brand === 'BMW',
  });

  // Aguarda 1 segundo entre as requisições
  sleep(1);
}