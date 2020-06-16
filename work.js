function  check() {
    var easywinners = 0
    var normalwinners = 0
    var hardwinners = 0
    let a = parseInt(document.getElementById('0').innerHTML)+parseInt(document.getElementById('1').innerHTML)+parseInt(document.getElementById('2').innerHTML)+parseInt(document.getElementById('3').innerHTML)+parseInt(document.getElementById('4').innerHTML)+parseInt(document.getElementById('5').innerHTML)+parseInt(document.getElementById('6').innerHTML)+parseInt(document.getElementById('7').innerHTML)+parseInt(document.getElementById('8').innerHTML)
    let a1= parseInt(document.getElementById('9').innerHTML)+parseInt(document.getElementById('10').innerHTML)+parseInt(document.getElementById('11').innerHTML)+parseInt(document.getElementById('12').innerHTML)+parseInt(document.getElementById('13').innerHTML)+parseInt(document.getElementById('14').innerHTML)+parseInt(document.getElementById('15').innerHTML)+parseInt(document.getElementById('16').innerHTML)+parseInt(document.getElementById('17').innerHTML)
    let  a2= parseInt(document.getElementById('18').innerHTML)+parseInt(document.getElementById('19').innerHTML)+parseInt(document.getElementById('20').innerHTML)+parseInt(document.getElementById('21').innerHTML)+parseInt(document.getElementById('22').innerHTML)+parseInt(document.getElementById('23').innerHTML)+parseInt(document.getElementById('24').innerHTML)+parseInt(document.getElementById('25').innerHTML)+parseInt(document.getElementById('26').innerHTML)
    let  a3= parseInt(document.getElementById('27').innerHTML)+parseInt(document.getElementById('28').innerHTML)+parseInt(document.getElementById('29').innerHTML)+parseInt(document.getElementById('30').innerHTML)+parseInt(document.getElementById('31').innerHTML)+parseInt(document.getElementById('32').innerHTML)+parseInt(document.getElementById('33').innerHTML)+parseInt(document.getElementById('34').innerHTML)+parseInt(document.getElementById('35').innerHTML)
    let  a4= parseInt(document.getElementById('36').innerHTML)+parseInt(document.getElementById('37').innerHTML)+parseInt(document.getElementById('38').innerHTML)+parseInt(document.getElementById('39').innerHTML)+parseInt(document.getElementById('40').innerHTML)+parseInt(document.getElementById('41').innerHTML)+parseInt(document.getElementById('42').innerHTML)+parseInt(document.getElementById('43').innerHTML)+parseInt(document.getElementById('44').innerHTML)
    let  a5= parseInt(document.getElementById('45').innerHTML)+parseInt(document.getElementById('46').innerHTML)+parseInt(document.getElementById('47').innerHTML)+parseInt(document.getElementById('48').innerHTML)+parseInt(document.getElementById('49').innerHTML)+parseInt(document.getElementById('50').innerHTML)+parseInt(document.getElementById('51').innerHTML)+parseInt(document.getElementById('52').innerHTML)+parseInt(document.getElementById('53').innerHTML)
    let  a6= parseInt(document.getElementById('54').innerHTML)+parseInt(document.getElementById('55').innerHTML)+parseInt(document.getElementById('56').innerHTML)+parseInt(document.getElementById('57').innerHTML)+parseInt(document.getElementById('58').innerHTML)+parseInt(document.getElementById('59').innerHTML)+parseInt(document.getElementById('60').innerHTML)+parseInt(document.getElementById('61').innerHTML)+parseInt(document.getElementById('62').innerHTML)
    let  a7= parseInt(document.getElementById('63').innerHTML)+parseInt(document.getElementById('64').innerHTML)+parseInt(document.getElementById('65').innerHTML)+parseInt(document.getElementById('66').innerHTML)+parseInt(document.getElementById('67').innerHTML)+parseInt(document.getElementById('68').innerHTML)+parseInt(document.getElementById('69').innerHTML)+parseInt(document.getElementById('70').innerHTML)+parseInt(document.getElementById('71').innerHTML)
    let  a8= parseInt(document.getElementById('72').innerHTML)+parseInt(document.getElementById('73').innerHTML)+parseInt(document.getElementById('74').innerHTML)+parseInt(document.getElementById('75').innerHTML)+parseInt(document.getElementById('76').innerHTML)+parseInt(document.getElementById('77').innerHTML)+parseInt(document.getElementById('78').innerHTML)+parseInt(document.getElementById('79').innerHTML)+parseInt(document.getElementById('80').innerHTML)

    let  b= parseInt(document.getElementById('0').innerHTML)+parseInt(document.getElementById('9').innerHTML)+parseInt(document.getElementById('18').innerHTML)+parseInt(document.getElementById('27').innerHTML)+parseInt(document.getElementById('36').innerHTML)+parseInt(document.getElementById('45').innerHTML)+parseInt(document.getElementById('54').innerHTML)+parseInt(document.getElementById('63').innerHTML)+parseInt(document.getElementById('72').innerHTML)
    let  b1= parseInt(document.getElementById('1').innerHTML)+parseInt(document.getElementById('10').innerHTML)+parseInt(document.getElementById('19').innerHTML)+parseInt(document.getElementById('28').innerHTML)+parseInt(document.getElementById('37').innerHTML)+parseInt(document.getElementById('46').innerHTML)+parseInt(document.getElementById('55').innerHTML)+parseInt(document.getElementById('64').innerHTML)+parseInt(document.getElementById('73').innerHTML)
    let  b2= parseInt(document.getElementById('2').innerHTML)+parseInt(document.getElementById('11').innerHTML)+parseInt(document.getElementById('20').innerHTML)+parseInt(document.getElementById('29').innerHTML)+parseInt(document.getElementById('38').innerHTML)+parseInt(document.getElementById('47').innerHTML)+parseInt(document.getElementById('56').innerHTML)+parseInt(document.getElementById('65').innerHTML)+parseInt(document.getElementById('74').innerHTML)
    let  b3= parseInt(document.getElementById('3').innerHTML)+parseInt(document.getElementById('12').innerHTML)+parseInt(document.getElementById('21').innerHTML)+parseInt(document.getElementById('30').innerHTML)+parseInt(document.getElementById('39').innerHTML)+parseInt(document.getElementById('48').innerHTML)+parseInt(document.getElementById('57').innerHTML)+parseInt(document.getElementById('66').innerHTML)+parseInt(document.getElementById('75').innerHTML)
    let  b4= parseInt(document.getElementById('4').innerHTML)+parseInt(document.getElementById('13').innerHTML)+parseInt(document.getElementById('22').innerHTML)+parseInt(document.getElementById('31').innerHTML)+parseInt(document.getElementById('40').innerHTML)+parseInt(document.getElementById('49').innerHTML)+parseInt(document.getElementById('58').innerHTML)+parseInt(document.getElementById('67').innerHTML)+parseInt(document.getElementById('76').innerHTML)
    let  b5= parseInt(document.getElementById('5').innerHTML)+parseInt(document.getElementById('14').innerHTML)+parseInt(document.getElementById('23').innerHTML)+parseInt(document.getElementById('32').innerHTML)+parseInt(document.getElementById('41').innerHTML)+parseInt(document.getElementById('50').innerHTML)+parseInt(document.getElementById('59').innerHTML)+parseInt(document.getElementById('68').innerHTML)+parseInt(document.getElementById('77').innerHTML)
    let  b6= parseInt(document.getElementById('6').innerHTML)+parseInt(document.getElementById('15').innerHTML)+parseInt(document.getElementById('24').innerHTML)+parseInt(document.getElementById('33').innerHTML)+parseInt(document.getElementById('42').innerHTML)+parseInt(document.getElementById('51').innerHTML)+parseInt(document.getElementById('60').innerHTML)+parseInt(document.getElementById('69').innerHTML)+parseInt(document.getElementById('78').innerHTML)
    let  b7= parseInt(document.getElementById('7').innerHTML)+parseInt(document.getElementById('16').innerHTML)+parseInt(document.getElementById('25').innerHTML)+parseInt(document.getElementById('34').innerHTML)+parseInt(document.getElementById('43').innerHTML)+parseInt(document.getElementById('52').innerHTML)+parseInt(document.getElementById('61').innerHTML)+parseInt(document.getElementById('70').innerHTML)+parseInt(document.getElementById('79').innerHTML)
    let  b8= parseInt(document.getElementById('8').innerHTML)+parseInt(document.getElementById('17').innerHTML)+parseInt(document.getElementById('26').innerHTML)+parseInt(document.getElementById('35').innerHTML)+parseInt(document.getElementById('44').innerHTML)+parseInt(document.getElementById('53').innerHTML)+parseInt(document.getElementById('62').innerHTML)+parseInt(document.getElementById('71').innerHTML)+parseInt(document.getElementById('80').innerHTML)
    if (a==45&&a1==45&&a2==45&&a3==45&&a4==45&&a5==45&&a6==45&&a7==45&&a8==45&&b==45&&b1==45&&b2==45&&b3==45&&b4==45&&b5==45&&b6==45&&b7==45&&b8==45&&setdificult=="easy"){
        easywinners+=1
        document.getElementById("easy winners").innerHTML="Easy levels beat:"+" "+easywinners.toString()
        console.log('ok')
        console.log(easywinners)
       Swal.fire(
        'Good job!',
        'You WIN!',
        'success'
        )}
    if (a==45&&a1==45&&a2==45&&a3==45&&a4==45&&a5==45&&a6==45&&a7==45&&a8==45&&b==45&&b1==45&&b2==45&&b3==45&&b4==45&&b5==45&&b6==45&&b7==45&&b8==45&&setdificult=="normal"){
        normalwinners+=1
        document.getElementById("normal winners").innerHTML="Normal levels beat:"+""+normalwinners.toString()
        console.log('ok')
        console.log(normalwinners)
       Swal.fire(
        'Good job!',
        'You WIN!',
        'success'
        )}
    if (a==45&&a1==45&&a2==45&&a3==45&&a4==45&&a5==45&&a6==45&&a7==45&&a8==45&&b==45&&b1==45&&b2==45&&b3==45&&b4==45&&b5==45&&b6==45&&b7==45&&b8==45&&setdificult=="hard"){
        hardwinners+=1
        document.getElementById("hard winners winners").innerHTML="Hard levels beat:"+""+hardwinners.toString()
        console.log('ok')
        console.log(hardwinners)
       Swal.fire(
        'Good job!',
        'You WIN!',
        'success'
        )}
}
