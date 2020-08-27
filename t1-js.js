function tarkastaEtumerkki()
{
  var tarkastettava = document.getElementById('aluku').value;
  if(tarkastettava >= 0)
  {
    document.getElementById('tulosta').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulosta').innerHTML = "Luku on negatiivinen";
  }
}
 
