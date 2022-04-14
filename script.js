fetch("https://api.quotable.io/random")
  .then((data) => data.json())
  .then((quoteData) => {
    const quoteText = quoteData.content;
    const authorText = quoteData.author;

    const quoteElement = document.getElementById("quoteElement");
    quoteElement.innerHTML = quoteText;

    const authorElement = document.getElementById("authorElement");
    authorElement.innerHTML = authorText;
  });

// $('#adjust-text').on('keypress', function(e) {
//     var that = $(this),
//     textLength = that.val().length();

//     if(textLength > 40) {
//         that.css('font-size', '5px');
//     } if(textLength > 30) {
//         that.css('font-size', '10px');
//     } if(textLength > 20) {
//         that.css('font-size', '15px');
//     }
// });
