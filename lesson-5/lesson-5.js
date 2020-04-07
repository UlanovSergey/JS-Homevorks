

let button = document.querySelector('button');
openWn = function() {
    let wn = document.querySelector('.dialog');
    if (wn.style.display === 'none' || wn.style.display === '') {
        wn.style.display = 'block';
        wn.classList.add('slide-in-bck-top')
    } else {
        wn.classList.remove('slide-in-bck-top');
        wn.classList.add('slide-out-bck-top')
        setTimeout(function () {
            wn.style.display = 'none';
        }, 500)
    }
};
button.addEventListener('click', openWn);
/**
 * функция принамает объект события и в зависмимости от параметра добавляет или изменяет текст и изображение
 * @param event объект события (MouseEvent)
 */
openDescription = function(event) {
    if (event.target.innerText === 'Подробнее') {     //Создаем условие в зависимости от текста на кнопке
        let card = event.target.parentNode;     //записываем в переменную родительский объект события
        let description = document.createElement('p'); //Создаем новый параграф
        description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, delectus.';// Добавляем в новый параграф текст
        card.querySelector('h2').insertAdjacentElement('afterend', description); //Находим заголовок h2 и вставляем после него созданный параграф
        card.querySelector('img').style.display = 'none'; //нахадим картинку и скрываем её
        event.target.innerText = 'Отмена' //Изменяем текст на кнопке
    }else if (event.target.innerText === 'Отмена'){  //Второй вариант условия если на кнопке написано "Отмена"
        let card = event.target.parentNode; //записываем в переменную родительский объект события
        card.querySelector('p').style.display = 'none'; //скрываем параграф
        card.querySelector('img').style.display = 'block';// вставляем изображение
        event.target.innerText = 'Подробнее'; //Изменяем текст на кнопке
    }
};
let buttons = document.querySelectorAll('.product__button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event){
        openDescription(event)
    })
});



