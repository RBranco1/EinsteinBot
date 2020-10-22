function newTime(){
  time = {
    seconds: date.getSeconds(),
     dia : date.getDay(),
     horas : date.getHours(),
     minutos : date.getMinutes(),
     atest: date.toLocaleString(),
  };

  console.log(time.atest)
  return time

}

exports.time = newTime;