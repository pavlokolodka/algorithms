# About

In this repository you can find algorithms in the pure JavaScript language.

The goal is to systematize and consolidate knowledge of algorithms.

---
## Table of contents:

[Well-known algorithms](https://github.com/pavlokolodka/algorithms#well-known-algorithms)

<br/>

[Computational complexity]()

<br/>

[Leetcode]()

<br/>

[Codewars]()

---

## Well-known algorithms 
<br/>

### Sorting algorithms:

1. Bubble sort

2. Quicksort

    #[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)

    #[unstable sorting](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)
    
* [Quick sorting with built-in methods](https://github.com/pavlokolodka/algorithms/blob/f894d71fb42f17ca30ba8d42e04ffb9a2103e4ed/sorting/quicksort.js)
* [Pure quick sorting](https://github.com/pavlokolodka/algorithms/blob/f894d71fb42f17ca30ba8d42e04ffb9a2103e4ed/sorting/quicksort2.js)
3. Merge sort

4. Selection sort

5. Heapsort

6. Shellsort

### Graph algorithms:

1. Breadth First Search (BFS)
2. Depth First Search (DFS)
3. Dijkstra
4. Bellman Ford's algorithm

### Permutations:

1. Fisher–Yates shuffle (Knuth)
---
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

### Description of the kinds of asymptotic growth rates.

<br/>

| Denomination  | Bound                                                         | Growth   |
| ------------- |-------------                                                  | -------------|
| Θ             | Lower and upper bounds, accurate estimate                     | Equal |
| О             | Upper bound, but this bound might or might not be a supremum  |  Less or equal |
| o             | Upper bound, not an accurate estimate                         |    Less |
| Ω             | Lower bound, but this bound might or might not be a infimum   |   Greater or equal |
| ω             | Lower bound, not an accurate estimate                         |    Greater |

<br/>

"Ο(f(n))" implies that as the amount of input data n increases, the running time of the algorithm will increase no faster than some constant multiplied by f(n).

<br/>

![](https://res.cloudinary.com/practicaldev/image/fetch/s--NZrROxqO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4c3l6pys5u3v1a6s9g8.png "Big-O Complexity Chart")

Reference - [Big-O Cheat Sheet](https://www.bigocheatsheet.com)