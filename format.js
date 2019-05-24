function format(json) {
    const parsedJson = JSON.parse(json);
    let formatted = '';
    parsedJson.forEach(data => {
        const date = new Date(Date.parse(data.date));
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth()+1).toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const dateString = `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
        formatted += `Имя покупателя: ${data.name}\n` +
        `Номер карты: ${data.cardNumber.substr(0, 4)} **** **** ${data.cardNumber.substr(12, 4)}\n` +
        `Дата и время операции: ${dateString}\n`+
        `Сумма операции: ${data.currency}${data.amount}\n\n`;
    });
    return formatted
}

const json = `[
  {
    "name": "Ashlynn Hartmann",
    "cardNumber": "4929289137092267",
    "date": "2019-01-24T17:39:07.347Z",
    "amount": "579.63",
    "currency": "$"
  },
  {
    "name": "Philip Stoltenberg",
    "cardNumber": "4916258329158678",
    "date": "2018-09-07T02:21:03.144Z",
    "amount": "10472.99",
    "currency": "$"
  }
]`;

format(json);