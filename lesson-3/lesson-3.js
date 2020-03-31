
'use strict';

for (let i = 0; i <= 10; i++) {
    let even = 'Четное число';
    if (i === 0) {
        even = 'это нуль'
        console.log(i + ' - ' + even);
        continue;
    }
    if (i % 2 === 0) {
    console.log(i + ' - ' + even);
    } else {
        even = 'Нечетное число';
        console.log(i + ' - ' + even);
    }
}

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        { userId: 10,
          userName: "Alex",
          text: "lorem ipsum",
          rating: {
            likes: 10,
            dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
function getNewPrice(oldPrice) {
    oldPrice.price = oldPrice.price - oldPrice.price * 0.15;
    console.log(oldPrice);
    return oldPrice;
}
products.forEach(getNewPrice);

