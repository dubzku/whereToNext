// Object with the possibilities of results! 
const destinations = [
    {
        destName: "Newfoundland",
        travelType: "adventure",
        distance: "close",
    },
    {
        destName: "Utah",
        travelType: "adventure",
        distance: "close",
    },
    {
        destName: "Costa Rica",
        travelType: "adventure",
        distance: "middle",
    },
    {
        destName: "Bolivia",
        travelType: "adventure",
        distance: "middle",
    },
    {
        destName: "Nepal",
        travelType: "adventure",
        distance: "far",
    },
    {
        destName: "Chile",
        travelType: "adventure",
        distance: "far",
    },
    {
        destName: "Mexico",
        travelType: "beach",
        distance: "close",
    },
    {
        destName: "Miami",
        travelType: "beach",
        distance: "close",
    },
    {
        destName: "Belize",
        travelType: "beach",
        distance: "middle",
    },
    {
        destName: "Croatia",
        travelType: "beach",
        distance: "middle",
    },
    {
        destName: "Australia",
        travelType: "beach",
        distance: "far",
    },
    {
        destName: "Indonesia",
        travelType: "beach",
        distance: "far",
    },
    {
        destName: "New York",
        travelType: "city",
        distance: "close",
    },
    {
        destName: "San Francisco",
        travelType: "city",
        distance: "close",
    },
    {
        destName: "Vienna",
        travelType: "city",
        distance: "middle",
    },
    {
        destName: "Amsterdam",
        travelType: "city",
        distance: "middle",
    },
    {
        destName: "Taipei",
        travelType: "city",
        distance: "far",
    },
    {
        destName: "Seoul",
        travelType: "city",
        distance: "far",
    },
    {
        destName: "Nova Scotia",
        travelType: "food",
        distance: "close",
    },
    {
        destName: "New Orleans",
        travelType: "food",
        distance: "close",
    },
    {
        destName: "Italy",
        travelType: "food",
        distance: "middle",
    },
    {
        destName: "Paris",
        travelType: "food",
        distance: "middle",
    },
    {
        destName: "Vietnam",
        travelType: "food",
        distance: "far",
    },
    {
        destName: "Singapore",
        travelType: "food",
        distance: "far",
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
}

// Helper Function to give back a random item from a given array
travelQuiz.arrayRandomizer = function(arrayBucket) {
    const index = Math.floor(Math.random() * arrayBucket.length);
    return arrayBucket[index];
}

// Function for the scrolling effects with error handling included
travelQuiz.coolScrollEffects = function() {
    $(".startQuiz").on('click', function() {
        const position = $("#questionOne").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 800);
    });

    $(".goToQuestionTwo").on('click', function(event) {
        if (!$('input[name=travelType]:checked').val()) {
            event.preventDefault();
            $('p.errorMessage1').text(`You forgot to answer!`);
        } else {
            const position = $("#questionTwo").offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToQuestionThree").on('click', function(event) {
        if (!$('input[name=companions]:checked').val()) {
            event.preventDefault();
            $('p.errorMessage2').text(`You forgot to answer!`);
        } else {
            const position = $("#questionThree").offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToQuestionFour").on('click', function(event) {
        if (!$('input[name=interests]:checked').val()) {
            event.preventDefault();
            $('p.errorMessage3').text(`You forgot to answer!`);
        } else {
            const position = $("#questionFour").offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 800);
        }
    });

    $(".goToQuestionFive").on('click', function(event) {
        if (!$('input[name=distance]:checked').val()) {
            event.preventDefault();
            $('p.errorMessage4').text(`You forgot to answer!`);
        } else {
            const position = $("#questionFive").offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 800);
        }
    });
    
    $(".goToResult").on('click', function(event) {
        if (!$('input[name=tripLength]:checked').val()) {
            event.preventDefault();
            $('p.errorMessage5').text(`You forgot to answer!`);
        } else {
            const position = $("#results").offset().top;
            $("html, body").animate({
                scrollTop: position
            }, 800);
        }
    });

    $("#top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });
}

// Function for when user submits their quiz answers
travelQuiz.quizSubmit = function () {
    $('form').on('submit', function(event) {
        event.preventDefault();

        // Store user's answers in an object called userChoices
        const userChoices = {};
        userChoices.travelType = $('input[name=travelType]:checked').val();
        userChoices.distance = $('input[name=distance]:checked').val();
        userChoices.companions = $('input[name=companions]:checked').val();
        userChoices.interests = $('input[name=interests]:checked').val();
        userChoices.tripLength = $('input[name=tripLength]:checked').val();

        if (!userChoices.travelType || !userChoices.distance || !userChoices.companions || !userChoices.interests || !userChoices.tripLength ) {
            $('.resultsContainer').html(`<h2>You forgot to fill in some fields!</h2>`);
        } else {
            // Filter through the destinations object and return results that match the condition of same travelType AND same distance

            // Store the results in a new array called possibleDestinations
            const possibleDestinations = destinations.filter( (possibleResult) => {
            return possibleResult.travelType === userChoices.travelType && possibleResult.distance === userChoices.distance;
            });

            // Use the randomizer helper function to pick a final result from the list of possible results
            const finalDestination = travelQuiz.arrayRandomizer(possibleDestinations);

            // Show the results in the DOM! 
            $('.resultsContainer').html(`<h2>${finalDestination.destName}</h2>`);
        }

    })
}

// Function for resetting the results when "Take Quiz Again" is clicked
travelQuiz.resetResults = function() {
    $('button[type=reset]').on('click', function() {
        $('.resultsContainer').empty();
        $('p.error').empty();
    })
}
