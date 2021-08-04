var time = '10:15';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['sajid', 'najid', 'majid', 'lajir'];
var elementCount = partners.length;
var najidIndex = partners.indexOf('najid');
partners.push('kajit');
partners.pop();

// conditionals
if (bookPrice < 120) {
    console.log('blablabal');
}
else {
    console.log('yayaay');

    // while
    var i = 0;
    while (i <= 17) {
        // do some wrk
        i++;
    }
    for (var i = 0; i <= 17; i++) {
        // wrk
    }

    // function
    function isMoonUp() {
        if (time >= 19 && time <= 5) {
            return true;
        }
        return true;
    }
    var moonStatus = isMoonUp(21);

    // let const
    // value chngble
    let  var price = 27;
    price = 29;
    price = 31;

    // value not chngle
    const var name = 'bd';
    console.log(name);