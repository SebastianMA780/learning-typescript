/* A tuple is a sort array that knows exactly how many elements it contains
and the types of those elements in the specific position. */

/* Like this you cant asigne more values to this array
Besides position of the array are typed. */
export let user: [string, number] = ['user1', 15];
// user = []; // it throws error because it should have 2 elements
// user = [true, false] // it throws error because of wrong type elements.