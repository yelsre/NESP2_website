// Div which contains the features
var featureDiv = document.getElementById('landing-feature');
// Path to background images
var bkgs = {
    'landing-feature-txt-dev': 'img-3-feature-developer.png',
    'landing-feature-txt-pla': 'img-4-feature-planner.png',
    'landing-feature-txt-cit': 'img-10-feature-citizen.png'
};

// Set the preselected background
featureDiv.style.backgroundImage = "url('static/img/img-3-feature-developer.png')";

$('.opt-title').on("mouseover", function() {
  // Find the associated feature id
  var ftId = $(this).find("a").attr("href").substring(1);
  var tabContents = document.getElementById(ftId);
  // Change the background image
  featureDiv.style.backgroundImage = "url('static/img/" + bkgs[ftId] + "')";
  // Find the previously selected tab
  var prevSelectedTab = $('.selected--opt--content')[0];
  // Select the new tab and deselect the previously selected
  if(tabContents.className != 'selected--opt--content' && prevSelectedTab){
        prevSelectedTab.className = 'opt--content';
        tabContents.className = 'selected--opt--content';
  }
  else{
       tabContents.className = 'selected--opt--content';
  }
});

$('.feature-next').on("click", function() {
  // Find the currently selected tab
  var selectedTab = $('.selected--opt--content')[0];
  var selectedId = selectedTab.id.slice(-3);
  // Infer the next tab form the current id
  var nextId = '';
  if (selectedId == 'dev'){
    nextId = 'pla';
  }
  else if (selectedId == 'pla'){
    nextId = 'cit';
  }
  else if (selectedId == 'cit'){
    nextId = 'dev';
  }
  nextId = selectedTab.id.replace(selectedId, nextId)
  var nextTab = document.getElementById(nextId);

  // Change the background image
  featureDiv.style.backgroundImage = "url('static/img/" + bkgs[nextId] + "')";

  // Select the new tab and deselect the previously selected
  selectedTab.className = 'opt--content';
  nextTab.className = 'selected--opt--content';
});


$('.feature-previous').on("click", function() {
  // Find the currently selected tab
  var selectedTab = $('.selected--opt--content')[0];
  var selectedId = selectedTab.id.slice(-3);
  // Infer the previous tab form the current id
  var prevId = '';
  if (selectedId == 'dev'){
    prevId = 'cit';
  }
  else if (selectedId == 'pla'){
    prevId = 'dev';
  }
  else if (selectedId == 'cit'){
    prevId = 'pla';
  }
  prevId = selectedTab.id.replace(selectedId, prevId)
  var prevTab = document.getElementById(prevId);

  // Change the background image
  featureDiv.style.backgroundImage = "url('static/img/" + bkgs[prevId] + "')";

  // Select the new tab and deselect the previously selected
  selectedTab.className = 'opt--content';
  prevTab.className = 'selected--opt--content';
});