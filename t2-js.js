function viikonpaiva()
{
  var viikonluku = document.getElementById('viikonluku').value;
  if(viikonluku == 1)
  {
    document.getElementById('tulosta2').innerHTML = "Maanantai";
  }
  else if(viikonluku == 2)
  {
    document.getElementById('tulosta2').innerHTML = "Tiistai";
  }
  else if(viikonluku == 3)
  {
    document.getElementById('tulosta2').innerHTML = "Keskiviikko";
  }
  else if(viikonluku == 4)
  {
    document.getElementById('tulosta2').innerHTML = "Torstai";
  }
  else if(viikonluku == 5)
  {
    document.getElementById('tulosta2').innerHTML = "Perjantai";
  }
  else if(viikonluku == 6)
  {
    document.getElementById('tulosta2').innerHTML = "Lauantai";
  }
  else if(viikonluku == 7)
  {
    document.getElementById('tulosta2').innerHTML = "Sunnuntai";
  }
  else {
      document.getElementById('tulosta2').innerHTML = "Luku ei ole viikonpaiva";
  }
}
