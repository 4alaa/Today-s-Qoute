// Dom
var write=document.getElementById("write")
var author=document.getElementById("author")
var authorImg=document.getElementById("authorImg")






let myQuotes = [
  // 0
  {
    writtenArticle: "Be yourself; everyone else is already taken. ",
    author: "― Oscar Wilde",
    authorImg: "./images/writtenBy/1.jpg",
  },
  // 1
  {
    writtenArticle: "So many books, so little time. ",
    author: "― Frank Zappa ",
    authorImg: "./images/writtenBy/2.jpg",
  },
   // 2
  {
    writtenArticle: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
    author: "― Martin Luther ",
    authorImg: "./images/writtenBy/Martin.jpg",
  },
  // 3
  {
    writtenArticle: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    author: "―  Albert Einstein ",
    authorImg: "./images/writtenBy/3.jpg",
  },
  // 4
  {
    writtenArticle: `A room without books is like a body without a soul.`,
    author: "― Marcus Tullius Cicero ",
    authorImg: "./images/writtenBy/4.jpg",
  },
  // 5
  {
    writtenArticle: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    author: "―  Bernard M. Baruch  ",
    authorImg: "./images/writtenBy/5.jpg",
  },
  // 6
  {
    writtenArticle: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
    author: "― William W. Purkey ",
    authorImg: "./images/writtenBy/6.jpg",
  },
    // 7
  {
    writtenArticle: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    author: "― Dr. Seuss  ",
    authorImg: "./images/writtenBy/7.jpg",
  },
    // 8
  {
    writtenArticle: `You only live once, but if you do it right, once is enough.`,
    author: "―  Mae West ",
    authorImg: "./images/writtenBy/8.jpg",
  },
    // 9
  {
    writtenArticle: `Be the change that you wish to see in the world.`,
    author: "―  Mahatma Gandhi  ",
    authorImg: "./images/writtenBy/9.jpg",
  },
    // 10
  {
    writtenArticle: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: "― Robert Frost  ",
    authorImg: "./images/writtenBy/10.jpg",
  },
    // 11
  {
    writtenArticle: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
    author: "―  J.K. Rowling  ",
    authorImg: "./images/writtenBy/11.jpg",
  },
    // 12
  {
    writtenArticle: `Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend`,
    author: "― Albert Camus  ",
    authorImg: "./images/writtenBy/12.jpg",
  },
    // 13
  {
    writtenArticle: `If you tell the truth, you don't have to remember anything.`,
    author: "― Mark Twain  ",
    authorImg: "./images/writtenBy/13.jpg",
  },
    // 14
  {
    writtenArticle: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .`,
    author: "―  C.S. Lewis, The Four Loves ",
    authorImg: "./images/writtenBy/14.jpg",
  },
    // 15
  {
    writtenArticle: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel..`,
    author: "― Maya Angelou  ",
    authorImg: "./images/writtenBy/15.jpg",
  },
    // 16
  {
    writtenArticle: `A friend is someone who knows all about you and still loves you.`,
    author: "― Elbert Hubbard  ",
    authorImg: "./images/writtenBy/16.jpg",
  },
    // 17
  {
    writtenArticle: `To live is the rarest thing in the world. Most people exist, that is all.`,
    author: "― Oscar Wilde  ",
    authorImg: "./images/writtenBy/1.jpg",
  },
    // 18
  {
    writtenArticle: `Always forgive your enemies; nothing annoys them so much.`,
    author: "― Oscar Wilde   ",
    authorImg: "./images/writtenBy/1.jpg",
  },
    // 19
  {
    writtenArticle: `Without music, life would be a mistake`,
    author: "―  Friedrich Nietzsche, Twilight of the Idols  ",
    authorImg: "./images/writtenBy/36.jpg",
  },  // 20
  {
    writtenArticle: `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`,
    author: "― Ralph Waldo Emerson ",
    authorImg: "./images/writtenBy/20.jpg",
  },  // 21
  {
    writtenArticle: `It is better to be hated for what you are than to be loved for what you are not`,
    author: "―   Andre Gide, Autumn Leaves  ",
    authorImg: "./images/writtenBy/21.jpg",
  },  // 22
  {
    writtenArticle: `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.`,
    author: "―   H. Jackson Brown Jr., P.S. I Love You  ",
    authorImg: "./images/writtenBy/22.jpg",
  },  // 23
  {
    writtenArticle: `The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.`,
    author: "―   Jane Austen, Northanger Abbey  ",
    authorImg: "./images/writtenBy/23.jpg",
  },  // 24
  {
    writtenArticle: `It is our choices, Harry, that show what we truly are, far more than our abilities.`,
    author: "―  J.K. Rowling, ",
    authorImg: "./images/writtenBy/11.jpg",
  },  // 25
  {
    writtenArticle: `Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.`,
    author: "―   Marilyn Monroe  ",
    authorImg: "./images/writtenBy/25.jpg",
  },  // 26
  {
    writtenArticle: `It does not do to dwell on dreams and forget to live.`,
    author: "―   J.K. Rowling, ",
    authorImg: "./images/writtenBy/11.jpg",
  },  // 27
  {
    writtenArticle: `Good friends, good books, and a sleepy conscience: this is the ideal life.`,
    author: "―  Mark Twain  ",
    authorImg: "./images/writtenBy/13.jpg",
  },  // 28
  {
    writtenArticle: `As he read, I fell in love the way you fall asleep: slowly, and then all at once.`,
    author: "―   John Green, ",
    authorImg: "./images/writtenBy/28.jpg",
  },  // 29
  {
    writtenArticle: `Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.`,
    author: "―   Neil Gaiman, Coraline  ",
    authorImg: "./images/writtenBy/29.jpg",
  },  // 30
  {
    writtenArticle: `The fool doth think he is wise, but the wise man knows himself to be a fool.`,
    author: "―   William Shakespeare ",
    authorImg: "./images/writtenBy/30.jpg",
  },  // 31
  {
    writtenArticle: `It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.`,
    author: "―  Maurice Switzer ",
    authorImg: "./images/writtenBy/31.jpg",
  },  // 32
  {
    writtenArticle: `Life is what happens to us while we are making other plans.`,
    author: "―   Allen Saunders  ",
    authorImg: "./images/writtenBy/32.jpg",
  },  // 33
  {
    writtenArticle: `Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.`,
    author: "―  Bill Keane  ",
    authorImg: "./images/writtenBy/33.jpg",
  },  // 34
  {
    writtenArticle: `I have not failed. I've just found 10,000 ways that won't work.`,
    author: "―  Thomas A. Edison  ",
    authorImg: "./images/writtenBy/34.jpg",
  },  // 35
  {
    writtenArticle: `It is not a lack of love, but a lack of friendship that makes unhappy marriages.`,
    author: "―   Friedrich Nietzsche   ",
    authorImg: "./images/writtenBy/36.jpg",
  },  // 36
  {
    writtenArticle: `The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.`,
    author: "―   Elie Wiesel  ",
    authorImg: "./images/writtenBy/37.jpg",
  },
    // 37
  {
    writtenArticle: `A woman is like a tea bag; you never know how strong it is until it's in hot water.`,
    author: "―  Eleanor Roosevelt  ",
    authorImg: "./images/writtenBy/38.jpg",
  },  // 38
  {
    writtenArticle: `I may not have gone where I intended to go, but I think I have ended up where I needed to be.`,
    author: "―  douglas adams ",
    authorImg: "./images/writtenBy/39.jpg",
  },

];




var cartoona='';

// for loop to insert all quotes in slider
for (let i = 0; i < myQuotes.length; i++) {

  if(i==2)
  {
    continue
  }
  
  cartoona+=
  `
  <div class="carousel-item" data-bs-interval="2000">


  <img src="${myQuotes[i].authorImg}" class="rounded-circle  d-block mx-auto" alt="" >

  <p class="text-center my-3">
  ${myQuotes[i].writtenArticle}
  </p>
  <h6 class="text-center">${myQuotes[i].author}</h6>

  </div>
  
  `
  
}
document.getElementById("carousel-inner").innerHTML+=cartoona













var text;
function randomQoute() {
  //return number
  articleNumber = Math.round(Math.random() * 38);

  // return writtenArticle
  text=write.innerHTML = myQuotes[articleNumber].writtenArticle;
  


  // return writtenArticle
  author.innerHTML = myQuotes[articleNumber].author;


  // return writtenArticle
  authorImg.src = myQuotes[articleNumber].authorImg;


  // return fancy img
  authorImg.setAttribute("data-src",`${myQuotes[articleNumber].authorImg}`)


}






// copy  Quote
const textElement = document.getElementById("allAbout");


// btn of copy
const copyButton = document.getElementById("copy");

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");


  // for toast that qoute copied successfully
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


};


// call of copy
copyButton.addEventListener("click", (e) => copyText(e));





// text to speech
// onload = function() {
// 	if ('speechSynthesis' in window) with(speechSynthesis) {

// 		var playEle = document.querySelector('#plays');

// 		var flag = false;



// 		function onClickPlay() {
// 			if (!flag) {
// 				flag = true;
// 				utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
// 				utterance.voice = getVoices()[0];
// 				utterance.onend = function() {
// 					flag = false;
// 				};
// 				playEle.className = 'played';
// 				speak(utterance);
// 			}
// 			if (paused) { /* unpause/resume narration */
// 				playEle.className = 'played';
// 				resume();
// 			}
// 		}



// 	}

// 	else { /* speech synthesis not supported */
// 		msg = document.createElement('h5');
// 		msg.textContent = "Detected no support for Speech Synthesis";
// 		msg.style.textAlign = 'center';
// 		msg.style.backgroundColor = 'red';
// 		msg.style.color = 'white';
// 		msg.style.marginTop = msg.style.marginBottom = 0;
// 		document.body.insertBefore(msg, document.querySelector('div'));
// 	}

// }



// grab the UI elements to work with
const textEl = document.getElementById('allAbout');
const speakEl = document.getElementById('plays');




// click handler
speakEl.addEventListener('click', speakText);

function speakText() {
  // stop any speaking in progress
  window.speechSynthesis.cancel();

  // speak text
  const text = textEl.innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}


























// share in whatsapp
const sendViaWhatsapp = () => {
  const a = document.querySelectorAll(".shareWhatsapp");
    a.forEach(el => {
           text =write.innerHTML;
           qouteAuthor = author.innerHTML;
          el.setAttribute("href", `https://web.whatsapp.com/send?text=${text}: ${qouteAuthor}`);
    })
  }
  
  

  
  





// add class and remove it
(function ( $ ) {
  $.fn.addClassAndRemove = function(classAdd, timeAdd, timeRemove) {
    let element = this;
    let addIt = function(){
         element.addClass(classAdd);
      };
    let removeIt = function(){
         element.removeClass(classAdd);
      };
    setTimeout(function() { addIt(); setTimeout(removeIt, timeRemove); }, timeAdd);
    return this;
  };
}( jQuery ));

// Just to call the function and see how it works
$('#Randoms').off().click(function(e) {
$('#Randoms i').addClassAndRemove('transform-active', 0, 1200); // function called with parameters
});




Fancybox.bind('[data-fancybox="Authors"]', {
  //
});    