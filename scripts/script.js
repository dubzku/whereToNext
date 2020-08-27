// Object with the possibilities of results! 
const destinations = [
    {
        destName: "Newfoundland",
        travelType: "adventure",
        distance: "close",
        img: "./assets/erik-mclean-HKL0F3NDclo-unsplash.jpg",
        alt: "Photo of Newfoundland Island - Photo by Erik Mclean from unsplash.com",
    },
    {
        destName: "Utah",
        travelType: "adventure",
        distance: "close",
        img: "./assets/eric-clark-4n_lIka4tWg-unsplash.jpg",
        alt: "Mountains at Zion National Park - Photo by Eric Clark from unsplash.com",
    },
    {
        destName: "Costa Rica",
        travelType: "adventure",
        distance: "middle",
        img: "./assets/isabella-juskova-6JSJK9gpRfM-unsplash.jpg",
        alt: "Suspension bridge in Monteverde, Costa Rica - Photo by Isabella Juskova from unsplash.com",
    },
    {
        destName: "Bolivia",
        travelType: "adventure",
        distance: "middle",
        img: "./assets/christopher-crouzet-Ud2Q0hhM3_I-unsplash.jpg",
        alt: "Jeep in the Salt Flats of Uyuni, Bolivia - Photo by Christopher Crouzet from unsplash.com",
    },
    {
        destName: "Nepal",
        travelType: "adventure",
        distance: "far",
        img: "./assets/sergey-pesterev-dstd4DoLQ90-unsplash.jpg",
        alt: "Prayer flags in the Himalayan Mountains of Nepal - Photo by Sergey Pesterev from unsplash.com",
    },
    {
        destName: "Chile",
        travelType: "adventure",
        distance: "far",
        img: "./assets/olga-stalska-QaWRyEdlffY-unsplash.jpg",
        alt: "View of the mountains at Torres del Paine National Park in Patagonian Chile - Photo by Olga Stalska from unsplash.com",
    },
    {
        destName: "Mexico",
        travelType: "beach",
        distance: "close",
        img: "./assets/filip-gielda-VPavA7BBxK0-unsplash.jpg",
        alt: "Chichen Itza pyramid in Mexico - Photo by Filip Gielda from unsplash.com",
    },
    {
        destName: "Miami",
        travelType: "beach",
        distance: "close",
        img: "./assets/ashley-satanosky-mWN686Fsbgs-unsplash.jpg",
        alt: "Miami Beach in Florida, USA - Photo by Ashley Satanosky from unsplash.com",
    },
    {
        destName: "Belize",
        travelType: "beach",
        distance: "middle",
        img: "./assets/michiel-ton-hICrKYTcRkQ-unsplash.jpg",
        alt: "A boat and baby palm trees in Caye Caulker, Belize - Photo by Michiel Ton from unsplash.com",
    },
    {
        destName: "Croatia",
        travelType: "beach",
        distance: "middle",
        img: "./assets/morgan-ohoBiu7_KNc-unsplash.jpg",
        alt: "Picture of King's Landing in Dubrovnik, Croatia - Photo by @madebymorgan from unsplash.com",
    },
    {
        destName: "Australia",
        travelType: "beach",
        distance: "far",
        img: "./assets/graham-holtshausen-63JKK67yGUE-unsplash.jpg",
        alt: "Photo of the Twelve Apostles along the Great Ocean Road in Australia - Photo by Graham Holtshausen from unsplash.com",
    },
    {
        destName: "Indonesia",
        travelType: "beach",
        distance: "far",
        img: "./assets/yulia-agnis-6c3OvB6H0dY-unsplash.jpg",
        alt: "Plane-view of the beaches of Denpasar, Bali, Indonesia - Photo by Yulia Agnis from unsplash.com",
    },
    {
        destName: "New York",
        travelType: "city",
        distance: "close",
        img: "./assets/colton-duke-UExx0KnnkjY-unsplash.jpg",
        alt: "Photo of the Brooklyn Bridge at sunset in New York City - Photo by Colton Duke from unsplash.com",
    },
    {
        destName: "San Francisco",
        travelType: "city",
        distance: "close",
        img: "./assets/joseph-barrientos-Ji_G7Bu1MoM-unsplash.jpg",
        alt: "Photo of the Golden Gate Bridges in San Francisco at sunset - Photo by Joseph Barrientos from unsplash.com",
    },
    {
        destName: "Vienna",
        travelType: "city",
        distance: "middle",
        img: "./assets/daniel-plan-OE7jKpsk7uU-unsplash.jpg",
        alt: "View of Vienna from Belvedere Palace - Photo by Daniel Plan from unsplash.com",
    },
    {
        destName: "Amsterdam",
        travelType: "city",
        distance: "middle",
        img: "./assets/jace-afsoon-VEXIwDcY1gw-unsplash.jpg",
        alt: "Bicycles lined up along a canal in Amsterdam - Photo by Jace Afsoon from unsplash.com",
    },
    {
        destName: "Taipei",
        travelType: "city",
        distance: "far",
        img: "./assets/thomas-tucker-au3CYbd7vCU-unsplash.jpg",
        alt: "Sunset over Taipei City - Photo by Thomas Tucker from unsplash.com",
    },
    {
        destName: "Seoul",
        travelType: "city",
        distance: "far",
        img: "./assets/bundo-kim-p_D5pbQG5TE-unsplash.jpg",
        alt: "Ancient palace amongst the metropolitan city of Seoul - Photo by Bundo Kim from unsplash.com",
    },
    {
        destName: "Nova Scotia",
        travelType: "food",
        distance: "close",
        img: "./assets/ruth-troughton-yRIQqxLCWhU-unsplash.jpg",
        alt: "Peggy's Cove Lighthouse in Nova Scotia, Canada - Photo by Ruth Troughton from unsplash.com",
    },
    {
        destName: "New Orleans",
        travelType: "food",
        distance: "close",
        img: "./assets/mana5280-tUoA7sCrRto-unsplash.jpg",
        alt: "New Orleans, Louisiana - Photo by @mana5280 from unsplash.com",
    },
    {
        destName: "Italy",
        travelType: "food",
        distance: "middle",
        img: "./assets/antonio-rossi-mjMrTf7fi3I-unsplash.jpg",
        alt: "Restaurants in Venice, Italy - Photo by Antonio Rossi from unsplash.com",
    },
    {
        destName: "Paris",
        travelType: "food",
        distance: "middle",
        img: "./assets/marloes-hilckmann-EUzxLX8p8IA-unsplash.jpg",
        alt: "Cafe-Restaurant in Montmartre, Paris, France - Photo by Marloes Hilckmann from unsplash.com",
    },
    {
        destName: "Vietnam",
        travelType: "food",
        distance: "far",
        img: "./assets/alice-young-L5mvKk4vi8A-unsplash.jpg",
        alt: "Woman carrying fresh vegetables in  Dong Ba market, Hue, Vietnam - Photo by Alice Young from unsplash.com",
    },
    {
        destName: "Singapore",
        travelType: "food",
        distance: "far",
        img: "./assets/nauris-pukis-hCzo6BRAjoA-unsplash.jpg",
        alt: "Chicken rice from a hawker food market in Singapore - Photo by Nauris Pukis from unsplash.com",
    }
]

// Namespace
const travelQuiz = {};

// Document Ready
$(document).ready(function(){
    travelQuiz.init();
})

// Init Function
travelQuiz.init = function() {
    travelQuiz.coolScrollEffects();
    travelQuiz.quizSubmit();
    travelQuiz.resetResults();
    travelQuiz.clearErrorMessage();
}

// Helper Function to give back a random item from a given array
travelQuiz.arrayRandomizer = function(arrayBucket) {
    const index = Math.floor(Math.random() * arrayBucket.length);
    return arrayBucket[index];
}

// Function for scrolling effects with error handling included if user skips a question
travelQuiz.coolScrollEffects = function() {
    $htmlBody = $("html, body");

    $(".startQuiz").on("click", function() {
        const position = $("#questionOne").offset().top;
        $htmlBody.animate({
            scrollTop: position
        }, 800);
    });

    $(".goToQuestionTwo").on("click", function(event) {
        if (!$("input[name=travelType]:checked").val()) {
            event.preventDefault();
            $("p.errorMessage1").text("You forgot to answer!");
        } else {
            const position = $("#questionTwo").offset().top;
            $htmlBody.animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToQuestionThree").on("click", function(event) {
        if (!$("input[name=companions]:checked").val()) {
            event.preventDefault();
            $("p.errorMessage2").text("You forgot to answer!");
        } else {
            const position = $("#questionThree").offset().top;
            $htmlBody.animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToQuestionFour").on("click", function(event) {
        if (!$("input[name=interests]:checked").val()) {
            event.preventDefault();
            $("p.errorMessage3").text("You forgot to answer!");
        } else {
            const position = $("#questionFour").offset().top;
            $htmlBody.animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToResult").on("click", function(event) {
        if (!$("input[name=distance]:checked").val()) {
            event.preventDefault();
            $("p.errorMessage4").text("You forgot to answer!");
        } else {
            const position = $("#results").offset().top;
            $htmlBody.animate({
                scrollTop: position
            }, 800);
        }
    });

    $("#top").on("click", function() {
        $htmlBody.animate({
            scrollTop: 0
        }, 800);
    });
}

// Function for clearing the error message when a radio input is selected
travelQuiz.clearErrorMessage = function() {
    $('main').on('click','input[name="travelType"]', function() {
        $('.errorMessage1').empty();
    })

    $('main').on('click','input[name="companions"]', function() {
        $('.errorMessage2').empty();
    })

    $('main').on('click','input[name="interests"]', function() {
        $('.errorMessage3').empty();
    })

    $('main').on('click','input[name="distance"]', function() {
        $('.errorMessage4').empty();
    })
}

// Function for when user submits their quiz answers
travelQuiz.quizSubmit = function () {
    $("form").on("submit", function(event) {
        event.preventDefault();

        // Create a cache for jQuery selectors
        $resultsContainer = $(".resultsContainer");
        $imageResultsContainer = $(".imageResultsContainer");
        $buttonSubmit = $("button[type=submit]");

        // Store user's answers in an object called userChoices
        const userChoices = {};
        userChoices.travelType = $("input[name=travelType]:checked").val();
        userChoices.distance = $("input[name=distance]:checked").val();
        userChoices.companions = $("input[name=companions]:checked").val();
        userChoices.interests = $("input[name=interests]:checked").val();

        if (!userChoices.travelType || !userChoices.distance || !userChoices.companions || !userChoices.interests ) {
            $resultsContainer.html(`<h2>You forgot to answer some questions!</h2>`);
        } else {
            // Filter through the destinations object and return results that match the condition of same travelType AND same distance
            // Store the results in a new array called possibleDestinations
            const possibleDestinations = destinations.filter( (possibleResult) => {
            return possibleResult.travelType === userChoices.travelType && possibleResult.distance === userChoices.distance;
            });

            // Use the randomizer helper function to pick a final result from the list of possible results
            const finalDestination = travelQuiz.arrayRandomizer(possibleDestinations);

            // Display the result in the DOM
            const displayDestName = $("<h2>").text(`You should go to ${finalDestination.destName}!`);
            const displayDestPhoto = $("<img>").attr("src", finalDestination.img).attr("alt", finalDestination.alt);

            $resultsContainer.html(displayDestName);
            $imageResultsContainer.html(displayDestPhoto);

            // Prevent the user from clicking submit multiple times 
            $buttonSubmit.attr("disabled", true);
        }
    })
}

// Function for resetting the results when "Take Quiz Again" is clicked
travelQuiz.resetResults = function() {
    $("button[type=reset]").on("click", function() {
        $resultsContainer.empty();
        $imageResultsContainer.empty();
        $("p.error").empty();
        // On form refresh, re-enable the form submit button that was previously disabled
        $buttonSubmit.removeAttr("disabled");
    })
}





