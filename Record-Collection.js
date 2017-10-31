// Collection
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Backup for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
// Update records function
function updateRecords(id, prop, value) {
  // If value is empty,
  if (value === "") {
    // ...delete the property
    delete collection[id][prop];
  } else {
    // If the property is tracks
    if (prop === "tracks") {
      // ...and there is no track property,
      if (!collection[id].tracks) {
        // ...create an array for the property
        collection[id].tracks = [];
      }
      // ...add the track to the end of the property's array
      collection[id][prop].push(value);
      // If the property is not tracks
    } else {
      // ... add the value to the property
      collection[id][prop] = value;
    }
  }
  return collection;
}
// Examples
updateRecords(5439, "artist", "ABBA"); // artist should be "ABBA"
updateRecords(5439, "tracks", "Take a Chance on Me"); // tracks should have "Take a Chance on Me" as the last element.
updateRecords(2548, "artist", ""); // artist should not be set
updateRecords(1245, "tracks", "Addicted to Love"); // tracks should have "Addicted to Love" as the last element.
updateRecords(2468, "tracks", "Free"); // tracks should have "1999" as the first element.
updateRecords(2548, "tracks", ""); // tracks should not be set