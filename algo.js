function myFunction() {
    var x = document.getElementById("input").value;
    var day = x.substring(0, 2);
    var month = x.substring(2, 4);
    var year = x.substring(4, 6);
    var d = Number(day);
    var m = Number(month);
    var y = Number(year);
    console.log(d);
    console.log(m);
    console.log(y);
    switch (m) {
        case 1:
            z = 'January'
            break;
        case 2:
            z = 'February'
            break;
        case 3:
            z = 'March'
            break;
        case 4:
            z = 'April'
            break;
        case 5:
            z = 'Mai'
            break;
        case 6:
            z = 'June'
            break;
        case 7:
            z = 'July'
            break;
        case 8:
            z = 'August'
            break;
        case 9:
            z = 'September'
            break;
        case 10:
            z = 'October'
            break;
        case 11:
            z = 'November'
            break;
        case 12:
            z = 'December'
            break;
    }
    if (x == 0) {
        alert('Entrer une date')
        document.getElementById("span").innerHTML = ''
    }
    if (((d === 29) && (m === 2) && ((y % 4) !== 0)) || (((m === 4) || (m === 6) || (m === 9) || (m === 11)) && (d === 31)) || ((d > 29) && (m === 2)) || (x.length !== 6) || (31 < d) || (d < 1)) {
        document.getElementById("span").innerHTML = 'Date Invalide';
    } else {
        document.getElementById("span").innerHTML = 'the day is ' + d + ' ' + z + ' 20' + year
    }
}