/**
 * 2024 Day 2: Red-Nosed Reports
 * https://adventofcode.com/2024/day/1
 * 
 * PEDAC
 * Understanding the Problem
 * The unusual data consists of many "reports", one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:
 * 
 * 7 6 4 2 1
 * 1 2 7 8 9
 * 9 7 6 2 1
 * 1 3 2 4 5
 * 8 6 4 4 1
 * 1 3 6 7 9
 * 
 * This example contains six reports each containing five levels.
 * 
 * The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:
 * 
 * - The levels are either all increasing or all decreasing.
 * - Any two adjacent levels differ by at least one and at most three.
 *
 * Explicit Requirements:
 * - Input: A list containing at least five, space separated, elements (levels)
 * - Output: A number representing the total number of safe reports.
 * - A report is safe if all levels are either increasing or decreasing.
 * - Any two adjacent levels must differ by at least one and at most three.
 * - A list consists of at least five elements (levels) that are separated by spaces
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Examples and Test Cases:
 * - 7 6 4 2 1 is Safe because the levels are all decreasing by 1 or 2.
 * - 1 2 7 8 9 is Unsafe because 2 7 is an increase of 5.
 * - 9 7 6 2 1 is Unsafe because 6 2 is a decrease of 4.
 * - 1 3 2 4 5 is Unsafe because 1 3 is increasing but 3 2 is decreasing.
 * - 8 6 4 4 1 is Unsafe because 4 4 is neither increasing or decreasing.
 * - 1 3 6 7 9 is Safe because the levels are all increasing by 1, 2, or 3.
 * 
 * Data Structure
 * - list of numbers separated by spaces. Convert to array to iterate and perform operations.
 * 
 * Algorithm
 * - Parse data into an array
 * - Collect two elements from the array
 *  - 
 * - Subtract them
 * - Set conditions for "safe" and "unsafe" designations
 *  - Safe condition:
 *    - Difference is 1 <= diff <= 3 move onto the next pair
 *    - The difference is increasing or decreasing (first iteration)
 *  - Unsafe condition: 
 *    - Difference is > 3
 *    - If the difference flips from increasing or decreasing
 * - If array ever see's an unsafe condition exit loop
 * - Iteration completes with only "safe" designations, increment "safe count" variable by 1.
 * - Return safe count
 * 
 */

const rawData = `16 17 18 21 23 24 27 24
74 76 79 81 82 85 85
48 51 53 54 55 59
29 31 32 34 36 39 41 46
9 12 9 11 14 16 17 20
65 68 66 67 69 70 73 72
56 58 59 58 61 64 64
21 24 25 27 24 25 29
83 85 88 91 90 96
74 77 78 78 81 83 86 87
68 69 72 75 75 74
34 37 38 38 41 43 43
41 43 44 47 49 49 53
69 71 72 74 74 75 76 83
53 56 57 60 61 65 66
46 49 53 55 53
41 43 45 49 52 52
37 39 43 46 50
51 54 55 56 60 66
30 32 39 42 45
58 59 60 65 64
63 65 68 70 72 74 79 79
50 53 56 62 66
64 66 67 72 74 76 82
12 10 13 16 19 21 22
12 11 12 15 16 15
63 60 63 65 68 70 70
15 13 16 18 19 22 26
86 83 85 86 89 92 98
73 71 74 75 72 74
68 67 69 67 64
83 81 83 81 81
31 28 30 28 32
88 87 84 85 92
18 16 19 21 22 22 23
19 16 16 17 14
49 46 46 48 48
9 8 11 12 12 13 14 18
23 20 21 21 28
78 76 80 81 84 87
81 78 82 84 83
60 58 61 65 65
62 60 64 65 68 71 72 76
51 49 52 56 62
5 3 5 12 13 14
26 24 26 27 33 36 33
15 14 15 22 22
79 76 77 83 87
40 37 39 44 50
68 68 70 72 75 77 80 81
68 68 71 74 76 73
74 74 75 78 78
77 77 79 82 83 84 86 90
39 39 41 44 51
39 39 42 44 47 46 49 51
39 39 42 43 41 44 43
51 51 50 53 55 55
74 74 75 73 77
23 23 22 24 27 34
1 1 3 4 5 5 8
73 73 74 76 77 77 78 77
46 46 49 49 49
63 63 65 67 67 71
21 21 22 22 24 27 30 37
1 1 4 5 9 10 13
74 74 77 81 79
12 12 16 17 17
70 70 73 77 78 80 84
9 9 13 16 17 19 26
19 19 26 27 28 30
41 41 43 49 51 49
84 84 89 92 95 97 97
11 11 14 21 23 24 25 29
80 80 81 84 89 91 96
68 72 73 75 77
61 65 67 68 70 73 74 73
31 35 38 40 41 42 42
3 7 10 11 12 15 19
79 83 86 87 88 91 97
48 52 50 51 54
88 92 91 94 95 97 96
44 48 46 49 49
51 55 57 60 63 61 65
14 18 19 18 21 24 27 32
62 66 66 67 70 72 75
27 31 31 34 35 36 39 36
68 72 73 73 75 75
56 60 62 65 66 69 69 73
40 44 47 47 54
49 53 57 58 60 61
83 87 88 90 92 96 95
55 59 60 63 65 69 69
18 22 25 29 32 36
14 18 19 23 28
45 49 50 52 59 61 64 65
26 30 35 36 37 40 39
80 84 87 90 96 96
80 84 85 88 95 99
25 29 31 37 42
85 90 92 95 96 97
39 44 46 49 51 53 50
14 19 21 23 24 26 28 28
64 70 72 74 75 77 78 82
20 27 30 33 40
37 42 41 44 46 47
19 25 23 25 28 31 34 31
65 71 70 73 73
71 76 73 76 79 83
46 53 54 57 60 59 64
63 70 71 73 75 78 78 81
64 69 70 71 71 72 73 71
80 87 87 89 90 91 91
48 54 54 56 57 58 62
24 30 32 34 34 37 42
69 75 76 80 83 84 86
42 47 49 53 56 55
68 75 76 80 82 83 84 84
9 14 15 19 23
69 76 80 83 85 91
41 48 51 52 57 58
53 58 61 62 69 72 70
23 30 32 38 38
10 15 18 25 28 32
24 31 32 34 37 42 45 51
25 22 21 19 18 16 13 15
41 40 39 38 38
25 23 22 20 18 15 12 8
87 85 83 81 79 74
22 19 16 14 11 14 11
5 2 4 3 6
75 72 69 72 69 69
77 75 76 75 74 70
49 46 45 42 40 43 41 34
70 68 68 67 65
77 74 73 73 70 69 67 69
36 34 34 32 31 29 28 28
63 61 61 58 56 52
49 47 46 43 41 38 38 32
39 38 34 32 30
37 36 35 34 30 33
11 10 7 6 5 1 1
87 86 85 81 78 75 71
41 39 36 32 29 27 26 19
62 60 58 52 50 47
15 14 12 6 9
49 46 43 36 33 30 30
57 55 48 46 44 41 37
87 84 81 80 77 76 70 64
24 25 24 23 21 19 18 17
85 88 86 83 80 77 80
55 57 55 52 51 51
96 97 94 93 92 91 88 84
53 55 53 51 48 43
12 15 16 15 13 10 8
39 42 43 42 39 42
94 96 97 95 94 94
28 30 31 29 25
43 46 47 44 43 38
43 46 44 44 43 42 41
16 18 18 15 14 12 9 10
69 70 70 68 67 66 66
70 71 69 66 65 65 61
24 27 27 24 23 21 16
28 31 30 28 24 22 20 19
84 87 85 83 80 79 75 78
25 26 23 19 17 17
70 71 69 67 66 63 59 55
45 48 44 41 40 35
84 85 79 76 74
47 50 43 40 37 40
39 40 37 34 27 27
43 45 42 41 38 31 27
74 75 73 70 64 57
73 73 70 69 67
93 93 90 87 84 81 84
76 76 74 71 70 69 69
43 43 40 37 33
83 83 81 80 78 73
85 85 82 79 80 78
7 7 8 6 3 1 3
32 32 35 34 32 31 31
92 92 93 92 89 85
52 52 50 52 49 43
77 77 75 74 72 72 70 67
32 32 30 29 28 26 26 29
12 12 12 9 6 6
97 97 94 94 91 89 85
30 30 27 27 20
21 21 20 16 13
89 89 86 83 80 76 77
53 53 50 48 44 44
72 72 68 65 61
36 36 35 32 31 28 24 19
39 39 37 31 29 28 25
53 53 47 45 42 43
16 16 9 8 8
42 42 40 39 37 32 28
61 61 59 56 54 48 42
34 30 29 27 24
96 92 90 87 86 84 83 84
56 52 50 49 47 47
89 85 84 81 80 76
38 34 33 30 25
50 46 44 45 42 41 38 37
98 94 93 92 93 90 89 92
14 10 8 7 9 9
19 15 18 16 12
43 39 38 39 33
68 64 63 62 59 59 57 54
53 49 48 48 45 46
61 57 55 55 53 51 48 48
48 44 42 42 40 39 37 33
51 47 47 44 37
37 33 30 27 25 21 18
83 79 76 73 69 66 67
37 33 30 26 24 22 21 21
72 68 65 64 63 62 58 54
51 47 44 42 40 36 30
37 33 27 24 22 19 18
19 15 8 7 4 7
80 76 71 68 68
42 38 37 31 27
71 67 66 61 58 57 51
59 53 50 47 45 42 39
27 22 20 18 17 15 18
40 35 32 31 28 28
32 27 25 24 23 19
65 58 55 54 53 51 50 44
45 39 36 38 37
56 51 49 50 51
45 40 37 34 31 34 32 32
96 91 90 92 89 85
46 40 41 38 36 33 28
73 67 67 65 64 62 60
32 25 22 19 19 18 20
31 26 24 23 20 20 20
72 66 66 63 60 59 55
39 34 32 30 27 27 26 19
43 36 32 31 29 28
73 66 62 60 58 55 57
37 30 29 25 25
83 76 72 70 67 63
62 57 55 52 48 41
86 80 73 70 67
67 60 58 57 54 47 45 48
73 67 62 59 57 55 55
85 79 78 73 69
91 86 85 84 78 75 69
48 42 40 37 32 30 30
18 24 26 28 26 26
84 87 86 85 84 86 84 84
70 77 80 81 78 84
53 46 43 42 38 38
59 64 67 69 71 76 77 77
69 68 64 63 60 62
85 82 81 81 78 78
31 27 21 18 18
70 71 70 67 70
95 93 90 87 84 77
68 72 76 78 79 81 82 88
98 98 96 96 96
15 8 5 4 4
68 69 66 69 73
97 93 95 92 89 86 89
71 67 66 65 62 57 58
55 55 53 49 46 45 43 41
66 63 60 57 55 51 47
81 84 80 79 81
11 15 17 20 23 29
56 60 63 64 71 73 75 79
85 86 79 76 76
56 61 62 65 66 68
40 40 38 38 37 40
35 31 30 30 28
63 67 70 73 77 77
79 86 87 89 95 94
12 16 19 20 21 21 22 24
28 28 25 22 20 18 16 16
45 50 52 53 53
37 41 44 49 47
2 4 5 9 11
53 53 52 49 44 42 41 42
50 50 54 57 60 65
35 42 46 48 49 56
44 45 50 51 54 52
33 29 27 25 22 21 17
18 13 12 12 5
24 19 17 10 7 5 2 1
54 58 61 66 68 70 73
86 86 88 89 88 85
84 84 87 85 83
59 55 53 50 48 47 40
8 9 10 10 11 17
46 46 49 47 48 51 57
85 81 78 77 72 70 66
70 76 79 85 86
58 54 51 48 45 38 36 31
40 40 41 41 42 46
73 70 68 67 62 61 58 56
14 17 17 14 13 11 11
6 3 4 7 11 14 17 18
81 83 82 78 76 73 68
86 89 89 87 85 87
23 24 23 16 15
36 37 36 29 25
31 31 28 25 19
88 88 87 88 87 85 88
69 70 67 64 61 60 57 50
43 42 44 50 50
25 31 32 36 34
18 18 24 25 25
42 42 43 48 47
41 43 40 43 44 45 45
88 90 88 86 84 82 80
77 76 73 71 65 65
30 33 36 39 40 40 41 45
5 5 12 15 19
86 86 88 90 90
84 84 82 81 79 75 68
8 8 7 7 5
76 69 67 65 63
75 79 81 83 86 90
24 23 25 27 26 31
51 55 57 60 60 58
81 78 76 73 68 66 65 60
51 58 59 60 62 62 63 70
72 72 70 71 75
53 49 48 41 39 37
13 15 13 16 12
70 74 75 79 78
95 91 88 86 84 84 82 78
70 64 63 61 58 57 53 47
66 60 59 61 60
42 42 39 33 32 29 25
1 8 11 18 20 25
4 4 7 10 9 11 14 14
93 87 83 80 76
68 75 76 78 77
23 18 15 13 11 7
14 14 15 18 20 21 22
71 67 64 64 63 60 58 51
85 79 77 76 73 72 65
50 48 49 52 52 57
23 19 15 12 10 7 4 5
93 95 93 91 93 90 89 90
30 25 24 22 25
93 96 94 92 91 87 83
74 78 80 79 81 83 84 84
67 65 66 68 74 76 82
60 58 51 50 46
30 26 23 22 21 18 21
33 30 28 26 23 21 19 22
17 16 17 19 26 25
68 66 62 61 58 56 53 53
19 15 13 11 11 11
64 65 64 61 58 57 55 55
27 26 26 28 31 34
22 26 28 30 33 36 35 37
51 51 55 56 59
65 59 56 58 55 55
42 38 36 34 34 37
94 91 89 91 90 89 87 83
36 32 30 26 24 22 19 16
16 12 10 6 6
53 53 56 58 60 59
65 69 66 69 71 73 71
6 6 4 3 2 1
34 27 24 17 16 17
30 31 30 32 29 26
6 13 13 15 17 21
57 50 46 44 45
86 83 81 83 87
94 94 91 90 86 83 83
42 42 43 41 40 40
28 32 35 35 38 40 41 41
3 3 5 8 11 13 14 19
62 65 64 62 62 60 59
49 47 44 45 44
84 87 80 79 78 72
27 29 30 32 35 38 44
8 10 10 13 15 16 17
72 68 66 63 61 58 55 52
49 49 48 47 45 44 42 38
54 51 50 52 55 58 60 60
30 34 35 36 38
2 3 4 7 10 11 11
30 36 40 43 44
26 25 26 30 32 35 35
16 19 21 23 26 29 33
11 9 6 5 3 3
45 45 42 39 38 37 35 37
20 19 16 13 12 9 5 3
88 87 87 86 81
66 68 64 61 58 57 54
16 15 18 21 28 32
57 62 66 68 70 73 77
10 14 17 23 23
92 89 93 95 96 95
51 51 57 59 61 67
8 8 11 15 16 15
20 23 24 27 24
16 22 22 25 26 29 26
71 74 75 78 85 87 90 91
90 85 88 85 81
35 33 36 43 44 47
81 79 80 80 83 87
31 31 31 29 25
14 21 22 22 24 27 28 28
62 66 67 69 69 76
20 18 21 22 25 29
76 74 72 67 64 65
39 37 36 33 32 28
20 27 28 29 32 36 37 37
42 41 39 36 37 32
3 8 6 8 10 12 15
49 51 52 54 56 59 60 62
6 8 11 12 13 15 16 19
66 68 71 72 73
27 26 25 24 21 19 18
14 12 9 8 5
66 67 70 71 72 73 76
77 75 73 70 69
13 12 9 8 7 6 5 2
47 49 51 53 56 58 59
72 70 67 65 64 63 60
31 34 35 36 37 38 41
69 70 72 73 76 78
86 84 82 81 78 75
30 29 28 26 23 21
48 45 42 40 38 36
39 42 45 48 51 54
43 40 39 36 35 32 31 30
73 72 71 68 65
88 86 85 84 81
76 75 72 69 66 65
18 21 23 25 27 29 30
42 40 39 36 33
96 93 92 90 89 87 86
46 49 51 53 55 58 59
17 18 21 22 25 27 30 32
23 20 17 16 13
18 16 14 11 10 7 6 3
22 24 25 26 28 29
30 31 32 34 37
98 95 92 91 89 88 86
28 31 32 33 34 37 39
71 73 76 79 80 82 85
44 47 48 51 52 54 57 58
43 40 37 35 32 30 29
71 73 76 79 80 82 84
96 95 93 92 91 89 86 83
91 90 89 86 84 83 80 79
80 81 83 85 88
10 13 16 18 21
96 95 94 92 91 88
39 41 44 45 46
11 9 8 6 4 3 1
65 67 69 70 73 74
96 94 92 89 86 85 84
31 30 28 25 22 20
32 30 27 25 23 22 20 18
40 37 34 31 30 29 27 26
75 76 77 78 79 82 83
21 22 24 26 29 30 33 34
13 15 17 18 19 21 22
62 60 57 56 53 51
63 64 66 68 70 73
18 16 14 13 12 10
55 58 60 61 63 66
24 25 26 29 30 32
35 36 37 39 41 44 45 48
11 12 15 16 17 19 21 23
81 83 86 89 92
56 55 54 53 52
40 43 45 47 49
34 36 37 38 41 42 45 46
57 54 51 49 48
21 24 26 27 28
34 35 37 40 41
28 30 31 32 34 35 37 39
52 50 47 46 43 40 38
76 77 80 81 83 84 85 88
65 64 61 59 58 55 54
41 38 37 35 33
23 22 21 18 15 14 12
87 88 89 90 91 93
63 65 67 69 70
11 14 17 18 19 21
14 16 19 20 23 24 25
58 61 64 67 69 71 72
67 66 63 62 61 58
86 89 90 92 94 95
8 11 12 13 14 16 19
9 6 5 3 2 1
39 38 35 33 30 28 25 23
69 68 66 65 62 61 59
85 86 89 91 93
39 41 43 46 48 50 53 55
48 45 42 41 39 36 34 32
59 61 64 65 66 67
40 42 43 46 48
66 64 61 60 57 54 53 51
32 29 26 23 21
71 72 74 77 78
88 89 92 95 98 99
81 80 78 76 73 70
75 74 72 71 69 68 67
87 86 85 84 82 80
84 86 89 91 93 95
56 55 52 51 50 49 48 47
53 56 59 60 62 64 66 68
66 63 60 59 56 54
11 14 15 16 17 20
67 69 72 73 76 78 81 83
12 9 8 7 5 4 1
36 35 33 32 31 29 26 24
81 79 76 73 72 70 67 64
21 24 26 29 31 32
67 65 64 61 58 57
19 21 23 26 28 30 32 35
3 4 7 9 10 13 14
34 37 38 39 42 43 44 47
96 95 93 91 90 87
65 68 71 73 76 77 80
27 25 24 23 20 19
71 74 76 79 81
63 60 57 56 55
13 10 9 7 6 3 2 1
24 21 20 17 16 13 11 10
33 32 31 28 25 24 23
79 77 75 74 72 71
22 21 18 16 13
30 28 26 24 21 19 17
57 58 59 62 64 67
53 54 55 58 59
21 18 16 13 10
28 26 23 22 21 18
1 4 6 7 8 11 14
85 84 81 79 76 75
41 43 45 48 51 54 56 58
82 85 86 88 89
22 24 26 28 30 31 33 35
52 50 49 46 45 44 42 40
54 52 49 47 44 43 40
93 90 87 84 81
82 79 77 76 75 74 73 72
71 73 75 77 80 82 84 86
45 46 49 52 55 58
53 51 49 47 44
28 30 33 34 35 38 41 44
18 21 22 23 25 26 27
65 66 69 70 72 75
74 72 70 69 68 66 64 61
47 48 51 52 54
14 17 19 22 25
45 46 48 51 54 55 56 57
32 30 29 27 25
61 62 63 65 68 69
79 82 84 87 89 91
32 34 37 39 41 42 44 46
14 17 19 21 23 25 26
85 88 89 90 92 93 96
71 69 67 64 61 60
84 87 88 89 90 91 94 96
35 38 40 41 43 45 46
82 84 87 90 92 94
56 57 60 62 63
55 57 58 61 63
63 65 68 69 72
81 78 77 75 73 72 70 69
88 86 83 80 77
49 51 52 53 54
84 81 78 77 76 75 72 69
59 58 56 54 53
54 57 59 62 63 66
70 68 65 64 61 60 59 58
61 62 63 66 69
41 43 45 46 47
79 77 74 72 71
66 68 69 72 73 74
48 50 52 53 54 55
34 31 28 27 25
56 57 59 61 62
65 68 70 73 75 77
95 94 92 91 89 87 86 84
33 34 35 36 38 40 41 42
34 37 38 41 44
6 7 10 12 14 16
55 52 51 49 48 45 44 43
46 49 50 52 53 56 58 61
95 92 90 87 85 82 79
19 22 24 26 29 30 31
48 50 51 53 56
31 30 28 26 23 20 17 15
74 75 78 79 82 83
82 83 85 87 90 91
15 12 9 7 4 3 1
66 65 62 60 58 57 56
27 30 33 34 35 37 38
35 32 30 28 26 25
95 93 90 87 84 83
47 46 43 41 38 36
22 24 27 30 33 34
57 54 52 50 48 47
78 81 84 86 88 91
33 30 28 27 25 24 22 19
21 18 15 14 12 10 8 6
13 12 10 9 6 5 3 2
56 55 54 52 51
19 18 15 14 12 10 8 6
38 41 44 46 49 50 52 54
48 49 50 52 53 54 56
77 78 80 82 85
65 64 61 58 55 53
23 26 28 30 32
17 15 14 12 10
26 28 31 33 34 35 37
16 13 11 10 8 5
76 74 73 70 67
44 43 41 38 37
82 79 76 75 74 71 69 67
2 4 7 8 11 14
80 79 78 77 74 72 69
27 28 29 30 31 34 37
9 8 5 3 2
81 79 78 77 74
52 51 50 49 47 44 42
20 22 25 27 30 33 36
62 61 60 59 57
82 81 78 77 75 72 71
13 16 17 18 20 21 24
16 19 21 22 23 25 28 31
39 37 34 32 30 28 25 24
40 42 45 47 48
77 74 73 71 68 67
6 9 11 13 14 15 18 20
80 77 76 75 73 71
80 82 84 85 86 87
19 21 23 24 27
92 90 87 85 83 82
31 30 29 28 27 26
89 87 84 81 79
75 77 78 80 82
92 90 88 87 86
23 25 27 30 31 32 35
35 34 31 29 27
35 37 38 39 40 43 45 46
86 87 90 92 94
20 17 15 13 12 10 9 6
63 64 67 68 71 73
94 91 90 89 86 85 83
78 80 81 82 85 88
39 40 41 43 46 48 49 50
50 49 46 45 44 43 41
29 26 24 23 21 18
18 16 14 11 8
33 36 37 40 43 44
20 22 25 27 29 32 33 34
34 33 30 28 26
14 17 18 21 24 25 26 29
47 46 44 43 41 39 37 35
49 52 53 55 56
48 46 45 43 42 40 37 36
45 43 42 39 37
96 93 90 88 87
26 23 20 17 15 12
14 17 19 22 23 26 27
57 60 62 65 66 69 70 73
79 77 74 73 71 68 65
71 69 67 66 65 62 60
79 78 77 74 71 70 67 66
51 49 47 44 42 39 36 35
74 71 69 66 63
54 51 50 47 45 44 41
90 93 95 96 98 99
4 7 9 12 13 16
74 72 70 67 65 64
47 49 52 55 56 57 60
82 81 78 76 75
81 79 77 75 74 71 69
86 83 82 80 79 76
34 31 28 27 26
29 31 34 35 37
30 28 27 24 22 19
14 17 19 21 23 25
4 5 8 11 13 16 18 20
53 56 59 62 65 66 67 68
48 45 42 39 36 34
72 70 69 67 65 64 62
45 48 49 52 53
44 47 50 52 53 54 56 57
28 25 24 23 22 20
84 86 89 91 92
81 83 85 86 88 90
81 78 76 75 73 70 68 67
26 27 30 33 35
94 93 92 90 89 86
58 59 60 63 65 68
58 57 54 51 49 47 44 41
53 56 57 60 62
5 7 10 11 13 16
67 70 72 73 76 78
33 35 37 39 42 44
86 84 82 81 80 79
50 48 45 44 43 42
35 32 29 28 26 24 21 18
96 94 92 89 87 84
90 87 86 83 80
67 70 72 74 76 79 80 83
68 70 73 74 75 76 78
13 14 17 20 23 26 28
54 55 58 60 61
21 19 18 17 15 14
98 95 93 90 87 84
81 84 86 89 92
59 62 63 66 69 71
98 96 94 93 90
59 60 62 65 67
44 45 47 49 50 51 54 56
78 75 74 73 72
92 90 89 87 85
44 47 48 49 52 54 55 58
54 51 48 46 43 40 38 36
76 79 82 85 88
12 10 7 5 2
24 23 21 20 19 17 15 14
57 59 61 64 67 68
74 73 72 70 68 65 64
71 74 77 80 83 86
46 45 42 39 37 34 31 29
63 60 58 56 55 54
57 55 53 50 48 45 43
83 85 86 89 90 93
92 91 88 86 84 81 79 77
4 7 9 11 13
14 11 10 8 5 3 2
13 15 17 19 20
36 35 32 31 29 26 25
91 88 86 85 82
12 9 8 5 4
22 25 26 27 30 33 36 37
14 12 9 8 7 4 3 2
25 28 29 30 33
85 86 87 89 91 92 94 95
47 49 51 54 56
88 85 83 80 77
68 71 72 73 75
61 64 67 70 72
84 81 78 77 74 72 71 68
81 78 75 72 71 69
48 45 43 41 40 39
50 52 55 56 57 59 60 61
68 70 72 73 74 75 77 80
15 14 11 8 7
27 24 22 20 18 16 14 11
80 81 83 85 86 87 90 93
11 14 17 19 20 22 24 26
55 53 51 48 47 46 43 42
60 63 65 68 69 71 74 76
74 76 77 80 82
56 54 51 48 46 43 42 39
63 61 60 59 57 55 52 49
74 77 79 82 83
59 61 62 63 66
43 42 41 38 35 33 30 27
93 91 89 88 87 86 85 82
13 14 16 19 21 24 27
51 50 48 46 43 40 37
81 83 84 87 90 93 96 98
60 62 63 65 68 70 73
29 28 26 25 24 22
55 56 58 61 63 64 66 68
96 94 93 91 89 88 87
78 80 83 84 86
97 94 91 88 85
19 21 22 25 28 31
15 12 9 6 5 2
70 71 72 75 77 78 80 83
62 64 67 69 71 72
64 67 68 70 72 74 76
12 13 16 17 18
51 48 45 44 41 40 37
83 84 86 87 88 90 92
81 83 84 85 87 90
63 62 59 56 55 54 51 49
69 70 71 73 75
28 27 26 24 23 21 20 18
61 62 63 65 66 69 71 74
54 56 58 59 60 61
75 76 79 82 84
54 51 49 47 45 43 40 37
83 81 80 79 76 75 73
23 24 27 29 30 31 32
6 9 12 15 17 18 19 20
24 23 22 21 18 17
76 78 80 83 84 86 87 90
51 53 56 58 59 62 63
9 11 13 16 17 20 22 25
59 60 63 65 66 67
52 54 57 58 61 62 64 65
7 8 9 10 12 15
7 10 13 16 19 20 22 25
20 22 25 26 28
27 28 31 34 35
50 47 45 42 40 38 36
22 24 26 27 29
21 23 25 26 27 28 30 33
49 52 54 55 57 58 59
32 34 36 37 38 41 44 45
64 61 60 59 56
94 92 91 89 86
73 74 75 77 78 80
11 12 13 15 16 17 19
53 56 58 61 64 65 68
88 86 84 81 78 76
67 68 70 73 76 77
71 73 75 77 78 79 81 82
27 28 30 33 34 36 39 41
76 74 73 72 69 66 63 60
5 6 7 9 11 13 16
68 65 63 62 59 58 57
16 18 20 21 24 27
5 7 9 10 11 12
8 11 12 15 17
37 39 40 41 44 45
70 69 67 65 63 60 58
44 45 46 48 49 52
85 82 79 77 75 73 71
43 44 46 47 49 51
67 64 61 60 59
73 70 67 65 63 61
35 38 40 43 45 47 50
30 29 28 25 23 21 20
6 7 9 10 11 12 15
64 65 68 70 72 75 78 81
87 84 83 81 80
49 47 45 44 42 41 39
61 58 56 53 50 47 45
11 13 14 16 19 21 24
4 6 8 11 14 16 17 20
89 86 84 83 82 79 78 75
45 48 49 50 52 53 55
82 79 76 75 73 72
28 30 33 34 37 40
23 25 28 31 32 33 34 35
46 49 52 53 54 57
42 45 48 49 52 54
76 73 70 68 66 64 61
82 81 78 76 73 70
58 60 62 63 65 66
67 66 65 64 63 62 60
86 87 90 92 94 95 97
34 32 29 28 27 24
91 88 85 84 83 82
88 87 84 83 82 79
95 94 91 89 88 85 84 81
86 88 89 91 92 93
73 72 71 69 66 64 61
39 38 37 36 35 34 32 31
91 89 88 87 86 85 83
16 14 12 11 10
36 38 39 40 43 45
38 41 44 47 50 52 54
88 86 85 82 80 78 75
58 61 63 66 67 69 72
74 73 72 70 69 66 63 62
37 39 41 44 47 48
74 73 71 70 67 65 63 61
39 37 36 35 33 31
67 69 70 73 74 76 78
83 81 78 76 74
63 64 67 70 71 74 76
49 50 52 55 57 60
49 50 51 53 54 55 58
49 52 53 56 59 60 63 65
93 91 89 87 86 83 80 77
75 74 71 69 68 65
51 53 56 57 58 59 60
43 44 47 48 50 53 55
73 71 70 69 68 66 63 60
56 57 59 61 63 66
95 94 93 91 88 87 85
88 87 84 82 81
43 46 47 49 50 51 52
65 67 70 71 74 77 79
76 73 71 68 66 64
11 12 15 16 19 22 24 27
31 28 27 25 24 21
24 25 26 28 31
65 62 59 57 55 54
19 16 14 13 11
73 70 67 66 65 62
96 95 94 91 90 87 86 83
48 49 52 55 58 59 61
89 87 85 84 82
88 87 85 82 81 80 79 77
58 55 54 52 51 50 47
44 46 49 51 53
39 37 35 32 31 30 28 26
71 70 68 66 63 61
95 93 92 89 86 84 81
83 80 78 77 76 73
12 14 15 16 19 21
72 74 75 78 79 82
97 94 93 90 89
30 32 34 35 36 37 40
63 61 59 57 56 55 54 53
32 33 34 35 36 37 40
20 17 14 12 9 8 5 4
12 14 17 18 20
46 48 49 52 53 54 56 57
73 72 69 67 65
91 88 85 82 79 78 75 74
42 41 40 38 36 35 32
22 19 17 14 13 10 7 6
90 89 87 86 85 84
78 77 76 73 71 68
88 89 92 95 97 98
36 37 38 40 43 44
33 30 28 26 23
59 58 57 54 51
70 69 66 63 61 59 56 55
23 26 27 28 29 32 35 38
17 16 14 12 9 8 7 6
79 80 83 85 87 89 90
96 94 91 89 86 83 80
67 65 62 59 58 56 54
57 56 55 54 52
70 72 74 75 78
68 65 63 61 59
62 59 56 53 52 49 48
48 49 50 52 54
15 14 12 11 10 7
57 55 52 49 46 43 41 40
29 28 26 23 21 20
32 35 36 39 40 41
75 72 69 68 66 65 64
9 8 6 4 2
49 50 52 54 57 59
32 34 37 40 42 43 46
42 43 46 47 50 53 55 58
49 50 51 52 55 56
44 47 50 51 52 53 54
9 11 13 16 18 21 24 25
67 70 71 74 76 78 81 84
29 32 33 35 38 39 42
73 71 69 68 66 64 62
43 40 38 35 34 33 31
82 79 78 77 74 71
91 90 88 87 85 84 81
20 21 22 23 25 27 28
80 81 82 85 87 90 91 92
25 26 28 30 33 34 36 39
39 40 43 46 48 50 53
18 16 13 10 9 6
49 46 45 42 39 36 34
2 4 7 9 12 13 15
84 82 81 80 79
10 11 14 15 17 20
30 31 34 36 39 42
24 25 26 29 32
52 50 47 44 43 41 39
36 38 39 42 45 46 48 50
33 32 29 28 26 25
30 33 34 37 38
68 65 64 61 58 57
10 7 6 4 2
26 28 29 32 35 37 39
4 5 8 11 14 16 19 20
26 25 24 23 22 21 20 19
37 38 39 40 42 45 46 47
1 4 7 8 9 11
38 36 34 33 32
96 95 94 91 89 86 84 83
19 16 13 12 9 6 4 2
62 64 66 69 72
53 51 50 48 47 46
69 67 65 64 63
46 44 41 39 38 37
61 63 66 68 71 73
10 12 13 15 16 19 20 21
23 25 28 29 31
30 27 25 23 22 19 16 14
1 2 4 5 6 7 9
96 94 92 89 86
84 85 87 90 93 96 98
40 38 36 33 30 29 26
30 33 35 38 41
73 72 69 66 65 62
79 77 76 75 74 71
59 56 53 50 47 45
43 46 47 48 49
85 84 83 80 79 78 77 74
71 72 74 77 79 81 84 85
88 87 85 84 81 79 77
59 57 55 52 51 49 48
37 40 41 43 44 45
6 9 10 11 12 14 16 19
95 93 90 87 86 85 83 80
32 31 28 25 23 20 19 17`;

const testData = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9]
]

const parseData = (dataString) => {
  return dataString.trim().split('\n').map(line => line.split(' ').map(Number));
}

const data = parseData(rawData);

const isValidRange = (diff) => {
  return Math.abs(diff) >= 1 && Math.abs(diff) <= 3;
}

const getDifferences = (numbers) => {
  return numbers.slice(1).map((num, i) => num - numbers[i]);
}

const hasSameTrend = (diffs) => {
  const firstDiff = diffs[0];
  return diffs.every(d => (d > 0) === (firstDiff > 0));
}

const isSafeSequence = (numbers) => {
  const diffs = getDifferences(numbers);
  return diffs.every(isValidRange) && hasSameTrend(diffs);
}

const countSafeReports = (reports) => {
  const safeReports = reports.filter(isSafeSequence);
  safeReports.forEach(report => console.log("Safe report found:", report));
  return safeReports.length;
}

console.log(countSafeReports(data));