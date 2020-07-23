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
}

// Helper Function to give back a random item from a given array
travelQuiz.arrayRandomizer = function(arrayBucket) {
    const index = Math.floor(Math.random() * arrayBucket.length);
    return arrayBucket[index];
}

travelQuiz.coolScrollEffects = function() {
    $('.scroll').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 800);
    });
    
    $("#goToResult").on('click', function() {
        const position = $("#results").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 800);
    });

    $("#top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });
}

travelQuiz.quizSubmit = function () {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const userChoices = {};
        userChoices.travelType = $('input[name=travelType]:checked').val();
        userChoices.distance = $('input[name=distance]:checked').val();

        const resultDestination = destinations.filter( (place) => {
            return place.travelType === userChoices.travelType && place.distance === userChoices.distance
        });
        console.log('results: ', resultDestination);
        const resultToDisplay = travelQuiz.arrayRandomizer(resultDestination);
        console.log(resultToDisplay.destName);

        $('.resultsContainer').html(`<h2>${resultToDisplay.destName}</h2>`);
    })
}