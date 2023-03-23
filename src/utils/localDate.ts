export const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

// Intl - специальный js-объект, отвечающий за интернационализацию. Его метод DateTimeFormat умеет под разные локалии добавлять разное форматирование
// В проекте Intl используется для того, чтобы получить нужный внешний вид даты