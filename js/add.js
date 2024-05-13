// const bilet = {
//     id: 0,
//     tochkaA: '',
//     tochkaB: '',
//     timeA: 0,
//     timeB: 0
// }
//
// console.log(bilet)
//
// const formAdd = document.querySelector('form'),
//     inTochkaA = document.querySelector('.boxA'),
//     inTochkaB = document.querySelector('.boxB'),
//     inDate = document.querySelector('.boxDate'),
//     inTimeA = document.querySelector('.boxTimeA'),
//     inTimeB = document.querySelector('.boxTimeB')
//
// formAdd.addEventListener('submit', (event) => {
//     event.preventDefault()
//     inTA = inTochkaA.value.t
//     inTB = inTochkaB.value
//     inD = inDate.value
//     inTA = inTimeA.value
//     inTB = inTimeB.value
//
//     for (item in bilet){
//         bilet.timeA = inTA
//     }
//
//
//
// })


    document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвратить стандартное поведение формы

    // Получение данных из формы
    var from = e.target.from.value;
    var to = e.target.to.value;
    var date = e.target.date.value;
    var departure = e.target.departure.value;
    var arrival = e.target.arrival.value;

    // Создание новой строки в таблице
    var table = document.getElementById('schedule-table').querySelector('tbody');
    var newRow = document.createElement('tr');

    // Создание ячеек для новой строки
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var cell5 = document.createElement('td');
    var cell6 = document.createElement('td');

    // Установка значений для каждой ячейки
    var rowCount = table.querySelectorAll('tr').length + 1; // Номер строки
    cell1.innerText = rowCount;
    cell2.innerText = from;
    cell3.innerText = to;
    cell4.innerText = date;
    cell5.innerText = departure;
    cell6.innerText = arrival;

    // Добавление ячеек в строку
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);

    // Добавление строки в таблицу
    table.appendChild(newRow);

    // Очистка формы после добавления данных
    e.target.reset();
});
