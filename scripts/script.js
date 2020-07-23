const destinations = [
    {
        destName: "Newfoundland",
        travelType: "adventure",
        distance: "close"
    },
    {
        destName: "Costa Rica",
        travelType: "adventure",
        distance: "middle"
    },
    {
        destName: "Nepal",
        travelType: "adventure",
        distance: "far"
    },
    {
        destName: "Mexico",
        travelType: "beach",
        distance: "close"
    },
    {
        destName: "Belize",
        travelType: "beach",
        distance: "middle"
    },
    {
        destName: "Australia",
        travelType: "beach",
        distance: "far"
    },
    {
        destName: "New York",
        travelType: "city",
        distance: "close"
    },
    {
        destName: "Vienna",
        travelType: "city",
        distance: "middle"
    },
    {
        destName: "Taipei",
        travelType: "city",
        distance: "far"
    },
    {
        destName: "Nova Scotia",
        travelType: "food",
        distance: "close"
    },
    {
        destName: "Italy",
        travelType: "food",
        distance: "middle"
    },
    {
        destName: "Vietnam",
        travelType: "food",
        distance: "far"
    }
]

// Namespace
const travelQuiz = {};

// Init Function
travelQuiz.init = function() {
    travelQuiz.formSubmit();
    travelQuiz.scrollEffects();
}

travelQuiz.scrollEffects = function() {
    $("#startQuiz").on('click', function() {
        const position = $("#questionOne").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#goToQuestionTwo").on('click', function() {
        const position = $("#questionTwo").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#goToQuestionThree").on('click', function() {
        const position = $("#questionThree").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#goToQuestionFour").on('click', function() {
        const position = $("#questionFour").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#goToQuestionFive").on('click', function() {
        const position = $("#questionFive").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#goToResult").on('click', function() {
        const position = $("#results").offset().top;
        $("html, body").animate({
            scrollTop: position
        }, 1000);
    });

    $("#top").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
}

travelQuiz.formSubmit = function () {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const userChoices = {};
        userChoices.travelType = $('input[name=travelType]:checked').val();
        userChoices.distance = $('input[name=distance]:checked').val();

        const resultDestination = destinations.filter( (place) => {
            return place.travelType === userChoices.travelType && place.distance === userChoices.distance
        });

        $('.results').html(`<h2>${resultDestination[0].destName}</h2>`);
    })
}


//Document Ready
$(document).ready(function(){
    travelQuiz.init();
})