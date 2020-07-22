const destinations = [
    {
        destName: "Halifax",
        interests: "food",
        distance: "close",
        travelType: "city",
        budget: "$"
    },
    {
        destName: "New York",
        interests: "food",
        distance: "close",
        travelType: "city",
        budget: "$$"
    },
    {
        destName: "Taipei",
        interests: "food",
        distance: "far",
        travelType: "city",
        budget: "$$"
    },
    {
        destName: "Taipei",
        interests: "food",
        distance: "far",
        travelType: "city",
        budget: "$$"
    },
    {
        destName: "Mexico",
        interests: "rest",
        distance: "close",
        travelType: "beach",
        budget: "$"
    },
    {
        destName: "Bali",
        interests: "rest",
        distance: "far",
        travelType: "beach",
        budget: "$$"
    },
    {
        destName: "New York",
        interests: "museums",
        distance: "close",
        travelType: "city",
        budget: "$"
    },
    {
        destName: "Amsterdam",
        interests: "museums",
        distance: "far",
        travelType: "city",
        budget: "$$"
    },
    {
        destName: "Newfoundland",
        interests: "nature",
        distance: "close",
        travelType: "adventure",
        budget: "$"
    },
    {
        destName: "Torres del Paine",
        interests: "nature",
        distance: "far",
        travelType: "adventure",
        budget: "$$"
    }
]

// Namespace
const travelQuiz = {};

// Init Function
travelQuiz.init = function() {
    
}

//Event Listener (form submit)
$("form").on("submit", function(e) {
    e.preventDefault();
    const userChoices = {};
    userChoices.interests = $("input[name=interests]:checked").val();
    userChoices.distance = $("input[name=distance]:checked").val();
    userChoices.travelType = $("input[name=travelType]:checked").val();
    console.log(userChoices);

    for (i = 0; i < destinations.length; i++) {
        // console.log(i);
        if (destinations[i].distance === userChoices.distance && destinations[i].interests === userChoices.interests) {
            console.log(destinations[i].destName);
            $(".results").html(`<h2>${destinations[i].destName}</h2>`);
        }
    }

})





//Document Ready
$(document).ready(function(){
    travelQuiz.init();
})