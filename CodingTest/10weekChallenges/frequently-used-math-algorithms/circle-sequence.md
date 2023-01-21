# 수열의 순환

## Question

1부터 시작해서 1씩 증가하다가 특정 숫자에 도달하면 다시 1로 돌아오는 수열을 순환 수열이라고 하자. 예를 들어서 5에 도달하면 다시 1로 돌아오는 순환 수열은 아래와 같다.

$$1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...$$

이때 순환 주기가 서로 다른 수열들도 언젠가는 다시 모두가 1이 되는 시점이 존재한다. 예를 들어서 순환 주기가 2와 3인 아래의 두 수열을 보자.

$$1, 2, 3, 1, 2, 3,  1, 2, 3, ...$$

$$1, 2, 1, 2, 1, 2,  1, 2, 1, ...$$

위의 두 수열은 서로 다른 순환 주기를 가지고 있지만 7번째 숫자에서 다시 동시에 시작하는 부분이 등장하게 된다. 그렇다면 총 **N**개의 순환 수열이 존재한다고 할 때, 모든 수열이 다시 1부터 시작되는 위치는 몇 번째 원소일까?

## Input

첫 줄에는 순환 수열의 수를 나타내는 1이상 10이하의 **N**이 주어진다.

두 번째 줄에는 각 수열의 순환 주기를 나타내는 자연수 **N**개가 공백으로 구분되어 주어진다. 순환주기는 1이상 100이하의 자연수이다.

## Output

첫 번째 원소를 제외하고 그 이후 최초로 모든 수열이 1이 되는 원소의 번호를 자연수로 출력한다.

## 입 출력 예시

**입력**

```
2 2
3
```

**출력**

```
7
```

## Solve

```java
import java.util.*;
import java.lang.*;
import java.io.*;

public class Main{

	public static void main(String args[]) throws Exception{
		public static final Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		long cycle[] = new long[n];

		for(int i=0; i<n; i++){
			cycle[i] = scanner.nextInt();
		}

		long lcm = cycle[0];
		for(int i=1; i<n; i++){
			lcm = MathUtils.getLCM(lcm, cycle[i]);
		}

		System.out.println(lcm+1);
	}
}

class MathUtils{
	public static long getGCD(long a, long  b){
		if(a%b==0){
			return b;
		}else{
			return getGCD(b, a%b);
		}
	}

	public static long getLCM(long a, long b){
		return (a*b)/getGCD(a, b);
	}
}
```
