//base string before modification
var sonnetDiv = "How like a winter hath my absence been \
From thee, the pleasure of the fleeting year! \
What freezings have I felt, what dark days seen! \
What old December's bareness everywhere! \
And yet this time removed was summer's time; \
The teeming autumn, big with rich increase, \
Bearing the wanton burden of the prime, \
Like widow'd wombs after their lords' decease: \
Yet this abundant issue seemed to me \
But hope of orphans, and unfathered fruit; \
For summer and his pleasures wait on thee, \
And, thou away, the very birds are mute: \
   Or, if they sing, 'tis with so dull a cheer, \
   That leaves look pale, dreading the winter's near.";

//Finding starting position of orphans 
var orphanStart = sonnetDiv.indexOf("orphans");
console.log("Orphans starting position", orphanStart);

//log total number of characters in sonnet
console.log("sonnet length",sonnetDiv.length );

//Changing the first instance of "winter" with "yuletide"
var winterChange = sonnetDiv.replace("winter", "yuletide");

//replaces ALL instances of "the" with "a large" -- leads to some interesting lines. Can modify to be more specific
//with /the /g or a couple other variations depending on what is really being asked here.
var largeChange = winterChange.replace(/the(\b)/g, "a large");
console.log("replace 'the' with 'a large'", largeChange);

//setting content of div to match all changes made up until this point.
sonnetDiv = largeChange;
document.getElementById("sonnet").innerHTML = sonnetDiv;
