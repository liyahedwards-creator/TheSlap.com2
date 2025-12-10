// use variables to make your code shorter
const img = document.getElementById("driveby");
const video = document.getElementById("drivebyVideo");
const audio = document.getElementById("drivebyaudio");

const bark = document.getElementById("barkBark");
const italy = document.getElementById("italyy");

const plank = document.getElementById("sikowitzPlay");
const siko = document.getElementById("witz");

const hot = document.getElementById("tori");
const pages = document.getElementById("cast");
const har = document.getElementById("andre");
const veg = document.getElementById("trina");
const shap = document.getElementById("robbie");
const val = document.getElementById("cat");
const oli = document.getElementById("beck");
const wes = document.getElementById("jade");

const rex = document.getElementById("sayStuff");
const make = document.getElementById("doIt");

const money = document.getElementById("rexLoves");
const love = document.getElementById("loves");

const win = document.getElementById("avi");
const avatar = document.getElementById("winner");

const arts = document.getElementById("question");
const holly = document.getElementById("wood");

const site = document.getElementById("links");
const link = document.getElementById("sites");

var wholeCast = [tori, andre, trina, robbie, cat, beck, jade];
let x = 0;

// declare your functions
function playSlap() {
  document.getElementById("slap-oh").play();

  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();

  img.classList.remove("translucent");
  italy.classList.remove("translucent");
  siko.classList.remove("translucent");
  pages.classList.remove("translucent");
  make.classList.remove("translucent");
  love.classList.remove("translucent");
  avatar.classList.remove("translucent");
  wood.classList.remove("translucent");
  link.classList.remove("translucent");
  pages.classList.remove("translucent");
}

function swapBound() {
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();

  if (img.style.display !== "none") {
    img.style.display = "none";
    video.style.display = "block";
    video.play();
    audio.play();
  } else {
    img.style.display = "block";
    video.style.display = "none";
    video.pause();
    audio.pause();
    img.classList.add("translucent");
  }
}

function barkBarking() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  bark.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  italy.classList.add("translucent");
}

function sikowitzPlank() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  plank.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  siko.classList.add("translucent");
}

function hotPages() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();

  hot.pause();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  //pause ALL cast sounds

  wholeCast[x].play();
  x = x + 1;
  console.log(x);

  if (x > 6) {
    x = 0;
    pages.classList.add("translucent");
  }
}

function makeRex() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  rex.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  make.classList.add("translucent");
}

function moneyMoneyMoney() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  win.pause();
  arts.pause();
  hot.pause();
  money.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  love.classList.add("translucent");
}

function winnerAvi() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  arts.pause();
  hot.pause();
  win.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  avatar.classList.add("translucent");
}

function hollywoodArts() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  hot.pause();
  arts.play();
  har.pause();
  veg.pause();
  shap.pause();
  val.pause();
  oli.pause();
  wes.pause();
  wood.classList.add("translucent");
}
function siteLinks() {
  img.style.display = "block";
  video.style.display = "none";
  video.pause();
  audio.pause();
  plank.pause();
  rex.pause();
  money.pause();
  win.pause();
  arts.pause();
  hot.pause();
  site.play();

  link.classList.add("translucent");
}
