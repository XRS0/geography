let placemark = new ymaps.Placemark(center, {
    balloonContentHeader: 'Хедер балунчика',
    balloonContentBody: 'Боди балуна',
    balloonContentFooter: 'Подвал',
}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/128/4210/4210204.png',
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0]
});
map.geoObjects.add(placemark);




let Kivach = new ymaps.Placemark([62.267999744750576,33.980383499999974], {
    balloonContentHeader: 'Хедер балунчика',
    balloonContentBody: 'Боди балуна',
    balloonContentFooter: 'Подвал',
}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/icons/Placemark1.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-18, -30]
});
map.geoObjects.add(Kivach);




let ArbitrajSud = new ymaps.Placemark([61.78332387898322,34.3493140509569], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/icons/Placemark1.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-16, -16]
})
map.geoObjects.add(ArbitrajSud);
