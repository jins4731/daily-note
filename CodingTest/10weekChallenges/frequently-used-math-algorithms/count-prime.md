# 소수 세기

## Question

주어진 범위에 존재하는 소수의 수를 출력하는 프로그램을 작성해보자.

## Input

첫 줄에는 테스트케이스의 수 **T**가 주어진다. **T**는 1이상 10이하의 자연수이다.

각 테스트케이스의 입력으로는 한 줄에 1이상 100만이하의 두 자연수 **L**과 **R**이 공백으로 구분되어 주어진다.

- **L** **R** 순서로 주어지며 **L**은 항상 **R**이하의 값이다.

## Output

각 테스트케이스에 대하여 두 줄씩 정답을 출력한다.

- 테스트케이스의 첫 줄에는 테스트케이스의 번호를 `**Case #%d:**` 형식으로 출력한다.
- 두 번째 줄에는 **L**이상 **R**이하의 소수의 갯수를 공백없이 출력한다.

## 입 출력 예시

**입력**

```
3
2 10
50 100
100 1000
```

**출력**

```
Case #1:
4
Case #2:
10
Case #3:
143
```

## Solve

```java
import java.util.*;
import java.lang.*;
import java.io.*;

class Main{
	public static Scanner scanner = new Scanner(System.in);
	public static final long MAX_NUM = 1000000;

	public static void main(String[] args)throws Exception{
		int n = scanner.nextInt();

		MathUtils math = new MathUtils(MAX_NUM);

		for(int i=0; i<n; i++){
			int left = scanner.nextInt();
			int right = scanner.nextInt();

			System.out.println("Case #" + ((int)i+1) + ":");
			System.out.println(math.getNumprime(left, right));
		}
	}
}

class MathUtils{
	boolean prime[];
	long left;
	long right;

	MathUtils(long num){
		prime = new boolean[(int)num+1];
		setPrime();
	}

	public int getNumprime(int a, int b){
		int cnt = 0;
		for(int i=a; i<=b; i++){
			if(prime[i]) cnt+=1;
		}
		return cnt;
	}

	public void setPrime(){
		Arrays.fill(prime, true);

		prime[0] = prime[1] = false;

		for(long i=2; i<=prime.length-1; i++){
			if(prime[(int)i]==false) continue;
			for(long k=i*i; k<prime.length; k+=i){
				prime[(int)k] = false;
			}
		}
	}
}
```
