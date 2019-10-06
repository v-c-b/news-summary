document.addEventListener('buildOverview', testOverview, false);

function testOverview() {
  if(document.getElementById('headlines9').innerHTML !== 'Erratic Trump struggles to control message as impeachment threat grows') {
    console.log("Top Article not on site as expected");
    console.log(document.getElementById('headlines9').innerHTML)
  }
  else { console.log("Top Article on site as expected") }

  if(document.getElementById('headlines1').innerHTML !== 'Counter-terror police running secret Prevent database') {
    console.log("Bottom Article not on site as expected");
    console.log(document.getElementById('headlines1').innerHTML)
  }
  else { console.log("Bottom Article on site as expected") }
console.log('Test run - Top and Bottom Article')

};
