/*
Write a function that takes in an array of integers and returns the number of inversions in the array. An inversion occurs if for any valid indices i and j, i < j and array[i] > array[j].

FOr example, given array = [3, 4, 1, 2], there are 4 inversions. The following pairs of indices repretent inversions [0,2] [0,3], [1,2], [1,3].

Intuitively, the number of inversions is a measure of how unsorted the array is.


Sample input:
array = [2, 3, 3, 1, 9, 5, 6]

Sample output:
5

//The following pairs of indices represent inversions:
// [0,3], [1,3], [2,3], [4,5], [4,6]
*/

/*
Solution explained
Split array in half
Check inversions in left half of array, then right half
sort both arrays
merge those two arrays together.

*/
