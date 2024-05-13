let center = [63.833324008149866,33.626316999999986];

ymaps.ready(init);

function init() {
    var map = new ymaps.Map('new-map', {
        center: center,
        zoom: 6,
        controls: ['smallMapDefaultSet']
    });

    // extractCoordinates(map);

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            map.balloon.close();
        }
    });
}

// function extractCoordinates(map) {
//     const coords = new URLSearchParams(window.location.search).get('coords');
    
//     if (coords && coords.includes(',')) {
//         const [latitude, longitude] = coords.split(',');
        
//         const latitudeNumber = parseFloat(latitude);
//         const longitudeNumber = parseFloat(longitude);
        
//         console.log(`Широта: ${latitudeNumber}, Долгота: ${longitudeNumber}`);

//         map.setCenter([latitudeNumber, longitudeNumber]);
//     }
// }

function init() {
    map = new ymaps.Map('new-map', {
        center: center,
        zoom: 6,
        controls: ['smallMapDefaultSet']
    }); 
    
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            map.balloon.close();
        }
    });


    let Ruskeala = new ymaps.Placemark([61.948723246204004,30.57992447873621], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Горный парк "Рускеала"</h2></div>
            <p class="balloon-item-text">Комплексный памятник природе и истории горного дела России и Финляндии, туристский объект, расположенный в Карелии.</p>
            <img src="img/Рускеала.jpg" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Ruskeala);


    let Panaarvi = new ymaps.Placemark([66.28608318197931,30.12125602881388], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Парк Паанаярви</h2></div>
            <p class="balloon-item-text">Горы, буйные заросли ольхи в низинах, «висячие» болота — национальный парк «Паанаярви» почти тридцать лет охраняет природные красоты Карелии.</p>
            <img src="img/objects/forSimplDesc/fo.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Panaarvi);




    let Padun = new ymaps.Placemark([63.883004050025015,34.310490707333564], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Водопад Воицкий Падун</h2></div>
            <p class="balloon-item-text">Одним из ярких представителей, испытавшим на себе силу человеческого прогресса, является Воицкий падун. Это водопад в Сегежском районе возле поселка Надвоицы.</p>
            <img src="./img/Padun.jpg" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Padun);


    


    let Onegskoe = new ymaps.Placemark([61.576467421518494,35.64460048470021], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Онежское озеро</h2></div> 
            <p class="balloon-item-text">Среди лесов и скал Карелии расположилось живописное Онежское озеро – второе по величине пресноводное озеро в Европе. Размерами оно уступает лишь своей старшей сестре, Ладоге.</p>
            <img src="./img/Onegskoe.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Onegskoe);




    let Vottovara = new ymaps.Placemark([63.07416440706554,32.62313466182184], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Гора Воттоваара</h2></div> 
            <p class="balloon-item-text">Находится в центральной Карелии, недалеко от поселков Гимолы и Суккозеро. Её высота всего 417 метров, что, однако не мало, для данного региона.</p>
            <img src="./img/Vottovara.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-18, -30]
    });
    map.geoObjects.add(Vottovara);







    let Suvilahti = new ymaps.Placemark([62.07969537192808,32.358266557949754], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Парк Сувилахти</h2></div> 
            <p class="balloon-item-text">Первый в Карелии победитель Всероссийского конкурса лучших проектов создания комфортной городской среды в малых городах и исторических поселениях. Конкурс инициирован Президентом России Владимиром Путиным и входит в нацпроект «Жилье и городская среда».</p>
            <img src="./img/Suhvil.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark1.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Suvilahti);




    let Aeroport = new ymaps.Placemark([61.876760609416976,34.15471098863668], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text"><h2>Аэропорт Бесовец</h2></div> 
            <p class="balloon-item-text">Является аэродромом совместного базирования.</p>
            <img src="./img/Besovec.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Aeroport);






    let Institut = new ymaps.Placemark([61.79052342675677,34.37060505063306], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Медицинский институт им. Сергея Березина</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Institut);






    let Ryba = new ymaps.Placemark([61.796972145476914,34.371366400393086], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Карельские Рыбные Заводы</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Ryba);





    let Port = new ymaps.Placemark([62.903943164012276,34.45846830519131], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Медвежьегорский северный грузовой порт</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Port);




    let VerhSud = new ymaps.Placemark([61.79451371652831,34.36504798778393], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Верховный суд Республики Карелия</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(VerhSud);




    let Okatysh = new ymaps.Placemark([64.65149106172315,30.764645727686705], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon-text">Карельский Окатыш</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark2.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Okatysh);    





    let Petr1 = new ymaps.Placemark([61.790631407040216,34.38938101336713], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Памятник Петру Великому</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Petr1);   







    let Runopev = new ymaps.Placemark([61.70172584170464,30.68919259919084], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Памятник рунопевцу</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Runopev); 






    let Cerkov = new ymaps.Placemark([62.17563092598764,34.28633827657842], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Церковь Успения Пресвятой Богородицы</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Cerkov); 








    let CCCPHero = new ymaps.Placemark([61.788598272647924,34.35153497362803], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Галерея Героев Советского Союза – уроженцев Карелии</div>
            <img src="../img/objects/forSimplDesc/fo.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(CCCPHero); 




    let Pogranich = new ymaps.Placemark([61.80200419482846,34.34634560703563], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Памятник пограничникам Карелии</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Pogranich); 







    let Pavshim = new ymaps.Placemark([64.58814509758628,30.5910436954232], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-text">Памятник "Павшим за Родину"</div>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
    map.geoObjects.add(Pavshim); 






    let Rybaki = new ymaps.Placemark([61.79157195639184,34.38375675973578], {
        balloonContent: `
        
        <div class="balloon">
            <div class="balloon-main-text">Скульптура "Рыбаки"</div><br>
            <p class="balloon-item-text">cmkscmscmckcmsdkcmskvdsvkdvdmfv dfmv dfmvndfjvndfjvndfjvndfjvnvfjdvd nacjsn</p>
            <img src="./img/kivach.png" class="balloon-img">
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/Placemark3.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -16]
    })
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
