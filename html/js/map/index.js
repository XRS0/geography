let center = [63.833324008149866, 33.626316999999986];

ymaps.ready(init);

function init() {
    var map = new ymaps.Map('new-map', {
        center: center,
        zoom: 6,
        controls: ['smallMapDefaultSet']
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            map.balloon.close();
        }
    });

    let Ruskeala = new ymaps.Placemark([61.948723246204004, 30.57992447873621], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Горный парк "Рускеала"</h2></div>
            <p class="balloon-item-text">Комплексный памятник природе и истории горного дела России и Финляндии, туристский объект, расположенный в Карелии.</p>
            <img src="img/objects/ForDetailedDesc/obj1.jpg" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o1.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Ruskeala);

    let Panaarvi = new ymaps.Placemark([66.28608318197931, 30.12125602881388], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Парк Паанаярви</h2></div>
            <p class="balloon-item-text">Горы, буйные заросли ольхи в низинах, «висячие» болота — национальный парк «Паанаярви» почти тридцать лет охраняет природные красоты Карелии.</p>
            <img src="img/objects/forSimplDesc/fo1.jpg" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o2.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Panaarvi);

    let Padun = new ymaps.Placemark([63.883004050025015, 34.310490707333564], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Водопад Воицкий Падун</h2></div>
            <p class="balloon-item-text">Одним из ярких представителей, испытавшим на себе силу человеческого прогресса, является Воицкий падун. Это водопад в Сегежском районе возле поселка Надвоицы.</p>
            <img src="./img/objects/forSimplDesc/fo5.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o5.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Padun);

    let Onegskoe = new ymaps.Placemark([61.576467421518494, 35.64460048470021], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Онежское озеро</h2></div>
            <p class="balloon-item-text">Среди лесов и скал Карелии расположилось живописное Онежское озеро – второе по величине пресноводное озеро в Европе. Размерами оно уступает лишь своей старшей сестре, Ладоге.</p>
            <img src="./img/objects/forSimplDesc/fo3.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o3.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Onegskoe);

    let Vottovara = new ymaps.Placemark([63.07416440706554, 32.62313466182184], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Гора Воттоваара</h2></div>
            <p class="balloon-item-text">Находится в центральной Карелии, недалеко от поселков Гимолы и Суккозеро. Её высота всего 417 метров, что, однако не мало, для данного региона.</p>
            <img src="./img/objects/forSimplDesc/fo4.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o4.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Vottovara);

    let Aeroport = new ymaps.Placemark([61.876760609416976, 34.15471098863668], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Аэропорт Бесовец</h2></div>
            <p class="balloon-item-text">Является аэродромом совместного базирования.</p>
            <img src="./img/objects/forDetailedDesc/Besovec.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o7.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Aeroport);

    let Institut = new ymaps.Placemark([61.79052342675677, 34.37060505063306], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Медицинский институт им. Сергея Березина</h2></div>
            <p class="balloon-item-text">Основным направлением деятельности Центра является оказание высокотехнологичной и доступной диагностической и лечебной помощи.</p>
            <img src="./img/objects/forSimplDesc/fo8.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o8.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Institut);

    let Ryba = new ymaps.Placemark([61.796972145476914, 34.371366400393086], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Карельский Рыбный Завод</h2></div>
            <p class="balloon-item-text">Это целый комплекс предприятий по выращиванию форели в экологически чистых заливах Онежского озера и водоемах Карелии, производству красной икры, готовой продукции из форели и завод рыбных кормов.</p>
            <img src="./img/objects/forSimplDesc/fo10.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o10.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Ryba);

    let Port = new ymaps.Placemark([62.903943164012276, 34.45846830519131], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Медвежьегорский северный грузовой порт</h2></div>
            <p class="balloon-item-text">Это ключевая логистическая точка на севере Карелии, обеспечивающая транспортировку грузов по водным путям.</p>
            <img src="./img/objects/forSimplDesc/fo11.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o11.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Port);

    let VerhSud = new ymaps.Placemark([61.79451371652831, 34.36504798778393], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Верховный суд Республики Карелия</h2></div>
            <p class="balloon-item-text">Высший федеральный орган судебной власти в системе судов общей юрисдикции на территории Республики Карелия Российской Федерации, состоящей из 18 федеральных городских, районных судов, 34 судебных участков мировых судей.</p>
            <img src="./img/objects/forSimplDesc/fo9.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o9.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(VerhSud);

    let Okatysh = new ymaps.Placemark([64.65149106172315, 30.764645727686705], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>АО «Карельский окатыш»</h2></div>
            <p class="balloon-item-text">ведущий комбинат по добыче и переработке железной руды в России.</p>
            <img src="./img/objects/forSimplDesc/fo12.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o12.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Okatysh);

    let Petr1 = new ymaps.Placemark([61.790631407040216, 34.38938101336713], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Памятник Петру I</h2></div>
            <p class="balloon-item-text">Первый император России много сделал для развития края. По его повелению была построена судостроительная верфь в Олонецком уезде, основан Александровский завод, вокруг которого впоследствии выросла столица республики Петрозаводск, открыт первый российский курорт «Марциальные воды», куда сам император неоднократно приезжал лечиться.</p>
            <img src="./img/objects/forSimplDesc/fo13.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o13.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Petr1);

    let Runopev = new ymaps.Placemark([61.70172584170464, 30.68919259919084], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Памятник рунопевцу</h2></div>
            <p class="balloon-item-text">Находится в Сортавала на площади Вяйнямёйнена, в историческом центре города.</p>
            <img src="./img/objects/forSimplDesc/fo14.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o14.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Runopev);

    let Cerkov = new ymaps.Placemark([62.17563092598764, 34.28633827657842], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Успенская церковь</h2></div>
            <p class="balloon-item-text">Утраченный православный храм в городе Кондопога в Карелии памятник Прионежской школы русского деревянного зодчества, объект культурного наследия федерального значения.</p>
            <img src="./img/objects/forSimplDesc/fo15.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o15.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Cerkov);

    let CCCPHero = new ymaps.Placemark([61.788598272647924, 34.35153497362803], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Галерея Героев Советского</h2></div>
            <p class="balloon-item-text">Мемориальный комплекс в Петрозаводске, посвящённый 28 Героям Советского Союза — уроженцам Карелии.</p>
            <img src="./img/objects/forSimplDesc/fo16.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o16.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(CCCPHero);

    let Pogranich = new ymaps.Placemark([61.80200419482846, 34.34634560703563], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Памятник пограничникам Карелии</h2></div>
            <p class="balloon-item-text">Памятник выполнен в виде серой гранитной площадки, на которой стоят пограничный столб и две гранитные черные плиты.</p>
            <img src="./img/objects/forSimplDesc/fo17.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o17.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Pogranich);

    let Pavshim = new ymaps.Placemark([64.58814509758628, 30.5910436954232], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Памятник "Павшим за Родину"</h2></div>
            <p class="balloon-item-text">Большая каменная композиция представляет собой две высокие стелы. Верхушка одной из них выполнена в виде засохшего дерева, в сторону которого изгибается вторая стела.</p>
            <img src="./img/objects/forSimplDesc/fo18.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o18.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Pavshim);

    let Rybaki = new ymaps.Placemark([61.79157195639184, 34.38375675973578], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text"><h2>Скульптура “Рыбаки</h2></div>
            <p class="balloon-item-text">Скульптура из города-побратима Дулута (Миннесота, США), которая положила начало всей галерее скульптур.</p>
            <img src="./img/objects/forSimplDesc/fo19.png" class="balloon-img">
            <button class="balloon-button" onclick="location.href='objects/o19.html'">Подробнее...</button>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    });
    map.geoObjects.add(Rybaki);

    const KarelyStroke = new ymaps.Polygon([
        poligons
    ], {}, {
        fillOpacity: 0,
        strokeWidth: 3,
        strokeColor: "#e31740",
        strokeOpacity: 0.8
    });
    map.geoObjects.add(KarelyStroke);
}

function removeControls(map) {
    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl');
}

window.onload = () => {
    setTimeout(() => {
        document.documentElement.classList.add("ready");
    }, 3500);
}
