# About

In this repository you can find algorithms & data structures in the pure JavaScript language.

The goal is to systematize and consolidate knowledge of algorithms.

## Table of contents:

#### [Well-known algorithms](https://github.com/pavlokolodka/algorithms#well-known-algorithms)

1. [Sorting algorithms](https://github.com/pavlokolodka/algorithms#sorting-algorithms)
2. [Search algorithms](https://github.com/pavlokolodka/algorithms#search-algorithms)
3. [Graph algorithms](https://github.com/pavlokolodka/algorithms#graph-algorithms)
4. [Permutation algorithms](https://github.com/pavlokolodka/algorithms#permutation-algorithms)
5. [Various algorithms](https://github.com/pavlokolodka/algorithms#various-algorithms)

<br/>

#### [Computational complexity](https://github.com/pavlokolodka/algorithms#computational-complexity)

1. [Description of the kinds of bounds on asymptotic growth rates](https://github.com/pavlokolodka/algorithms#description-of-the-kinds-of-bounds-on-asymptotic-growth-rates)
2. [Common orders of growth](https://github.com/pavlokolodka/algorithms#common-orders-of-growth)
3. [Computational complexity of algorithms](https://github.com/pavlokolodka/algorithms#computational-complexity-of-algorithms)

<br/>

#### [Leetcode]()

<br/>

#### [Codewars]()



## Well-known algorithms 

### Sorting algorithms:

1. Bubble sort

    [#adaptive sort](https://en.wikipedia.org/wiki/Adaptive_sort)

    [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)

* [Simple bubble sort](https://github.com/pavlokolodka/algorithms/blob/6049bde1278de07c39310e66ff751a9f268419e2/sorting/bubblesort.js)
* [Optimized bubble sort](https://github.com/pavlokolodka/algorithms/blob/856a3379e7138605040f304288541c32805a3b0f/sorting/bubblesort2.js)    

2. Quicksort

    [#in-place](https://en.wikipedia.org/wiki/In-place_algorithm)

    [#unstable sorting](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)
    
    [#divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

    [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)
    
* [Quick sorting with built-in methods](https://github.com/pavlokolodka/algorithms/blob/f894d71fb42f17ca30ba8d42e04ffb9a2103e4ed/sorting/quicksort.js)
* [Pure quick sorting](https://github.com/pavlokolodka/algorithms/blob/f894d71fb42f17ca30ba8d42e04ffb9a2103e4ed/sorting/quicksort2.js)
3. Merge sort

    [#divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

    [#stable sorting](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)

    [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)

* [Merge sort](https://github.com/pavlokolodka/algorithms/blob/debf9a1ce052411377e5af28b6124bb5b23ceb78/sorting/mergesort.js)


4. Selection sort

   [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)

5. Heapsort

    [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)

6. Shellsort

   [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)

7. Insertion sort  

    [#comparison-based](https://en.wikipedia.org/wiki/Comparison_sort)
### Search algorithms:

1. Binary search

* [Iterative binary search](https://github.com/pavlokolodka/algorithms/blob/10357bd558bb300a9f998ba6f3c463db5d920bea/search/binarysearch.js)
* [Recursive binary search](https://github.com/pavlokolodka/algorithms/blob/fff8d4558d94f8a156402e9f77f8f3d0b7b39afe/search/binarysearch2.js)
2. Largest & smallest element in an array
* [Find largest element in an array](https://github.com/pavlokolodka/algorithms/blob/155c845932d061e0bb8e95604b702399a1241903/search/largest-element.js)
* [Find smallest element in an array](https://github.com/pavlokolodka/algorithms/blob/37642a07285e8034a8a6e9a40ac5c3dca52e058b/search/smallest-element.js)
3. Second largest & smallest element in an array
* [Find second largest element in an array](https://github.com/pavlokolodka/algorithms/blob/b1bb0311eefd957834b448c44155ca0bd629ad0f/search/s-largest-element.js)
* [Find second smallest element in an array](https://github.com/pavlokolodka/algorithms/blob/37642a07285e8034a8a6e9a40ac5c3dca52e058b/search/s-smallest-element.js)


### Graph algorithms:

1. Breadth First Search (BFS)
2. Depth First Search (DFS)
3. Dijkstra
4. Bellman Ford's algorithm

### Permutation algorithms:

1. Fisher–Yates shuffle (Knuth)

### Various algorithms

1. [Fizz Buzz](https://github.com/pavlokolodka/algorithms/blob/3c6ea38001171683e3ce4fa70b9e227a25177e47/miscellaneous/fizzbuzz.js)

## Computational complexity

<br/>

[Computational complexity](https://en.wikipedia.org/wiki/Computational_complexity) is a complexity that expresses the dependence of the algorithm's workload on the input data. The amount of work includes time and space (the amount of memory) computational complexity. This area attempts to answer the central question of algorithm design: "how will the execution time and the amount of memory occupied change depending on the size of the input?"
The main classes of complexity are:

[Class P](https://en.wikipedia.org/wiki/P_(complexity)) - problems for which there are fast solutions - sorting, array searching, matrix multiplication, and others. Algorithms of class P are called polynomial - the running time of which does not depend too much on the size of the input data (that is, the time does not exceed the polynomial of the data size).
 
[Class NP](https://en.wikipedia.org/wiki/NP_(complexity)) - In the theory of algorithms class NP (from non-deterministic polynomial) is a set of decidability problems (where you can answer is solvable or not), whose solution can be checked on the Turing machine in time, not exceeding the value of a polynomial of the size of the input data, in the presence of some additional information (the so-called solution certificate). Any problem of class NP can be solved by brute force (kind of like bruteforcing, exponential complexity). 
Roughly speaking, these are complex problems that take a very long time to solve(factorial, exponential) and for which there is no optimally fast algorithm.
Examples:
Hamiltonian path problem, the traveling salesman problem.

[Time complexity](https://en.wikipedia.org/wiki/Time_complexity) - complexity that is determined from the input data determining the number of operations and equal to the algorithm's running time with the given input data. The time complexity of an algorithm is usually expressed using asymptotic analysis. 

[Asymptotic analysis](https://en.wikipedia.org/wiki/Asymptotic_analysis) is a complexity analysis for input data that tends to infinity. It is expressed in notations (O(big O), Ω(omega), Θ(theta)). 
In most cases, [big O notation](https://en.wikipedia.org/wiki/Big_O_notation) is used, which defines the worst case (upper limit from function growth) and does not take into account constants.

---
### Description of the kinds of bounds on asymptotic growth rates

<br/>

Let f and g be functions from positive integers to positive integers. Then:

| Designation   | Bound                                                         | Efficiency compared to the real complexity of the algorithm   |
| ------------- |-------------                                                  | -------------|
| Θ; f(n) = Θ(g(n)), if there exists a positive integer n0 and a positive constants c1 > 0 and c2 > 0, such that c1 * g(n) ≤ f(n) ≤ c2 * g(n) ∀ n>n0               | Lower and upper bounds, accurate estimate                     | Equal |
| О; f(n) = О(g(n)), if there exists a positive integer n0 and a positive constant c > 0, such that f(n)≤cg(n) ∀ n≥n0           | Upper bound, but this bound might or might not be a supremum  |  Less or equal |
| o; f(n) = o(g(n)), if there exists a positive constant c > 0, such that f(n)≤cg(n) ∀ but perhaps finitely many n             | Upper bound, not an accurate estimate                         |    Less |
| Ω; f(n) = Ω(g(n)), if there exists a positive integer n0 and a positive constant c > 0, such that cg(n)≤f(n) ∀ n>n0               | Lower bound, but this bound might or might not be a infimum   |   Greater or equal |
| ω, f(n) = ω(g(n)), if there exists a positive constant c > 0, such that cg(n)≤f(n) ∀ but perhaps finitely many n             | Lower bound, not an accurate estimate                         |    Greater |

<br/>

> "Ο(f(n))" implies that as the amount of input data n increases, the running time of the algorithm will increase no faster than some constant multiplied by f(n).

<br/>

![](https://res.cloudinary.com/practicaldev/image/fetch/s--NZrROxqO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4c3l6pys5u3v1a6s9g8.png "Big-O Complexity Chart")

Reference - [Big-O Cheat Sheet](https://www.bigocheatsheet.com)

---
### Common orders of growth

<br/>

The order of growth of an algorithm is a rough estimate of the time/memory required to execute a computer program as the size of the input data changes. <br/>
Growth order ignores the constant factor needed for fixed operations and focuses on operations that increase in proportion to the size of the input data. 

|   Function|    Type of Growth |  Example   |
|---        |----               |-----|
|   1       |    constant  |Finding the median value in a sorted array of number         |
|   n       |      linear  |Finding the smallest or largest item in an unsorted array|
|   log n   |  logarithmic |Binary search         |
|   n log n | linearithmic |Fast Fourier transform|
|   n^2     |     quadratic|Bubble sort|
|   n^3     |    cubic     |Naive multiplication of two n * n matrices|
|   2^poly(n)| exponential |Solving matrix chain multiplication via brute-force search|
|   n!      |    factorial |Solving the traveling salesman problem via brute-force search|

---

### Computational complexity of algorithms

#### Sorting algorithms 

<table>
  <tr>
    <td colspan="1">
      Algorithm
    </td>
    <td colspan="3">
      Time complexity
    </td>
    <td colspan="1">
      Space complexity
    </td>
  </tr>
  <tr>
    <td>
      *
    </td>
    <td>
      Best
    </td>
    <td>
      Average
    </td>
    <td>
      Worst
    </td>
    <td>
      Worst
    </td>
  </tr>
  <tr>
    <td>
      Quicksort
    </td>
    <td>
      Ω(n log(n))
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(log(n))
    </td>
     <tr>
    <td>
      Mergesort
    </td>
    <td>
      Ω(n log(n))
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n log(n))
    </td>
    <td>
      O(n)
    </td>
   <tr>
    <td>
      Timsort
    </td>
    <td>
      Ω(n)
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n log(n))
    </td>
    <td>
      O(n)
    </td>
    <tr>
    <td>
      Heapsort
    </td>
    <td>
      Ω(n)
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n log(n))
    </td>
    <td>
      O(n)
    </td>
    <tr>
    <td>
      Bubble Sort
    </td>
    <td>
      Ω(n)
    </td>
    <td>
      Θ(n^2)
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(1)
    </td>
   <tr>
    <td>
      Insertion Sort
    </td>
    <td>
      Ω(n)
    </td>
    <td>
      Θ(n^2)
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(1)
    </td>
     <tr>
    <td>
      Selection Sort	
    </td>
    <td>
      Ω(n^2)
    </td>
    <td>
      Θ(n^2)
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(1)
    </td>
    <tr>
    <td>
      Tree Sort	
    </td>
    <td>
      Ω(n log(n))
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(n)
    </td>
    <tr>
    <td>
      Shell Sort
    </td>
    <td>
      Ω(n log(n))
    </td>
    <td>
      depends on gap sequence/Θ(n(log(n))^2)
    </td>
    <td>
      depends on gap sequence: O(n(log(n))^2) or O(n^2)
    </td>
    <td>
      O(n)
    </td>
      <tr>
    <td>
      Bucket Sort
    </td>
    <td>
      Ω(n+k)
    </td>
    <td>
      Θ(n+k)
    </td>
    <td>
      O(n^2)
    </td>
    <td>
      O(n)
    </td>
       <tr>
    <td>
      Radix Sort
    </td>
    <td>
      Ω(nk)
    </td>
    <td>
      Θ(nk)
    </td>
    <td>
      O(nk)
    </td>
    <td>
      O(n+k)
    </td>
     <tr>
    <td>
      Counting Sort
    </td>
    <td>
      Ω(n+k)
    </td>
    <td>
      Θ(n+k)
    </td>
    <td>
      O(n+k)
    </td>
    <td>
      O(k)
    </td>
         <tr>
    <td>
      Counting Sort
    </td>
    <td>
      Ω(n)
    </td>
    <td>
      Θ(n log(n))
    </td>
    <td>
      O(n log(n))
    </td>
    <td>
      O(n)
    </td>
    
</table>