//Задание1
    const city = 'Chisinau';
    const country = 'Moldova';
    let population = 144507;
    const stadium = true;
  console.log(city, country, population, stadium);
//Задание2
    const height = 144507;
    const weight = 70;
    let area = height * weight + 'cm';
    console.log(area);
//Задание3
    const  time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
    let totalSpeed = speedOfFirst + speedOfSecond;
    let distance = totalSpeed * time + 'km';
    console.log(distance);
//Задание4
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber<20) {
        console.log('randomNumber меньше 20');
    }
    else if(randomNumber>50) {
        console.log('randomNumber больше 50');
    }
    else {
        console.log('randomNumber больше 20, и меньше 50');
    }
//Задание5
    const randomNumber2 = Math.floor(Math.random() * 100);
    switch(true) {
        case randomNumber2<20:
            console.log('randomNumber меньше 20');
            break;
        case randomNumber2>50:
            console.log('randomNumber больше 50');
            break;
        default :
            console.log('randomNumber больше 20, и меньше 50');
    }
