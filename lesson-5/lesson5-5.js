

let chessBord = {
    rowCount: 8,
    colCount: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',],
    /**
     * Метод генерирует HTML код ввиде строки
     * @returns {string}
     */
    generateChessBord() {
        let bord = '';
        for (let x = 0; x < chessBord.rowCount; x++) {
            bord += '<tr>';
            for (let y = 0; y < chessBord.colCount.length; y++) {
                bord += '<td></td>'
            }
            bord += '</tr>'
        }
        return `<table><tbody>${bord}</tbody></table>`;
    },
    generate() {
        let result = this.generateChessBord();
        document.body.insertAdjacentHTML("afterbegin", result);
        chessBord.addClass();
        chessBord.addNumbers();
        chessBord.addLetters()
    },
    /**
     * Метод добавляет классы к созданной доске для обозначения чергного и белого поля
     */
    addClass() {
        document.querySelector('td').classList.add('white');
        let fields = document.querySelectorAll('td');
        for (let i = 1; i < fields.length; i++){
            if (i%8 === 0){
                if (fields[i-8].classList.value === 'white'){
                    fields[i].classList.add('black')
                }else {
                    fields[i].classList.add('white')
                }
            }else if (fields[i-1].classList.value === 'white'){
                fields[i].classList.add('black')
            } else {
                fields[i].classList.add('white')
            }
        }

    },
    /**
     * Метод добавляет по одной ячейки в каждую строку таблицы и вписывает туда цифры
     */
    addNumbers(){
        let tr = document.querySelectorAll('tr');

        tr.forEach(function (tr,i) {
            let td = document.createElement('td');
            td.innerText = `${chessBord.rowCount-i}`;
            tr.insertAdjacentElement("afterbegin", td)
        })

    },
    /**
     * Метод вставляет строку в таблицу и записывает в нее элементы из массива
     */
    addLetters(){
        let tbody = document.querySelector('tbody');
        let tr = document.createElement('tr');
        let td = '<td></td>';
        for (let i = 0; i < chessBord.colCount.length; i++){
            td += `<td>${chessBord.colCount[i]}</td>`
        }
        tbody.insertAdjacentElement("beforeend", tr);
        tr.insertAdjacentHTML("afterbegin", td);
    }
};

chessBord.generate();
