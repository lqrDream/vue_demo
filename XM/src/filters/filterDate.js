import filterZero from "./filterZero";

export default (time, value) => {
  let d = new Date()
  d.setTime(time)
  let yyyy = d.getFullYear();
  let mm = filterZero(d.getMonth() + 1);
  let dd = filterZero(d.getDate());
  let HH = filterZero(d.getHours());
  let MM = filterZero(d.getMinutes());
  let SS = filterZero(d.getSeconds());
  // 将整理好得数据返回出去
  // return year + '-' + month + '-' + day + '' + hours + ':' + minutes + ':' + seconds;
  if (value === 'yyyy-mm-dd') {
    return yyyy + '-' + mm + '-' + dd
  } else if(value === 'hh-mm-ss'){
    return HH + ':' + MM + ':' + SS
  }else{
    return yyyy + '-' + mm + '-' + dd + '   ' + HH + ':' + MM + ':' + SS;
  }

  // return `xxxx年xx月xx日 xx:xx:${filterZero(d.getSeconds())}`
}