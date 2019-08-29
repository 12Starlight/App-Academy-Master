	| ---- |.      |-------|
| -- | 						  | ------- |

when it comes to implementing the validation

the validaiton that we are trying to implement is that there are no over overlapping requests

when we are doing that we need to check a couple of diff things
	if we have A, check if the other request is not the exact same request
	compare for the same cat!!
	to check if it is not overlapping, check if A and B are not touching each other with the graph


===EXAMPLE 1
o o o o
  	o o

1,4
3,4

mix matching (start dates - end dates) * (end dates - start dates)
  -x * -y = positive or 0 <--- overlapping / not overlapping
  -x * y = negative  <---- over lapping / not overlapping
1-4 * 3-4 = -3 * -1 = 3
3-4 * 1-4 = -7 * -3 = 21
3-1 * 4-4 = 2 * 0 = 0

=== EXAMPLE 2
o o o o
	    	o o

1,4
5,6

1-6 * 5-4 = -5 * 1 = -5 NEGATIVE
5-4 * 1-6 = 1 * -5 = -5 NEGATIVE
5-1 * 6-4 = 4 * 2 = 8 POSITIVE

s1_start between(s2_start, s2_end) OR s2_start between(s1_start, s2_end) OR s(1,2) including s(1,2) OR s1==s2 OR s1end = S2start