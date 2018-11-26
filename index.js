var date = new Date().setHours(15)

function countdown() {
  var currentDate = new Date().now()
  var distance = date - currentDate.hours
  if (distance < 0) {
    clearInterval(timer)
    document.getElementById('countdown').innerHTML = 'HAHA BIER!'
    return
  }
  var days = Math.floor(distance / _day)
  var hours = Math.floor((distance % _day) / _hour)
  var minutes = Math.floor((distance % _hour) / _minute)
  var seconds = Math.floor((distance % _minute) / _second)

  //document.getElementById('countdown').innerHTML = days + ' dagen ';
  document.getElementById('countdown').innerHTML = hours + ' uur '
  document.getElementById('countdown').innerHTML += minutes + ' min '
  document.getElementById('countdown').innerHTML += seconds + ' sec'
}

timer = setInterval(countdown, 1000)