# 골드바흐의 추측

## Question

1742년에 독일의 수학자 골드바흐는 자신의 추측한 바를 정리하여 오일러에게 편지로 전했다. 골드 바흐의 추측은 아래와 같다.

_"4보다 큰 모든 짝수 자연수는 홀수인 두 소수의 합으로 표현될 수 있다."_

아래와 같은 예시들에서 골드바흐의 추측이 성립한다.

- 8 = 3 + 5
- 20 = 3 + 17
- 42 = 5 + 37

당신은 실제로 골드바흐의 추측이 성립하는지 프로그램을 작성해 확인해보고자 한다. 여러 숫자가 주어질 때 그 숫자들에 골드바흐의 추측이 성립하는지 확인하는 프로그램을 작성하시오.

## Input

첫 줄에는 테스트케이스의 수 **_T_**가 주어진다. **_T_**는 100이하의 자연수이다.

테스트케이스의 각 줄에는 골드바흐의 추측이 성립하는지 확인해보고자 하는 6이상 백만이하의 자연수가 하나 주어진다.

## Output

각 테스트케이스마다 정답을 두 줄로 출력한다.

- 테스트케이스의 첫 줄에는 테스트케이스의 번호를 `**Case #%d:**` 형식으로 출력한다.
- 두 번째 줄에는 검증 결과를 출력한다.

- 주어진 숫자에 대해 골드바흐의 추측이 성립했다면 해당 숫자와 두 홀수 소수를 `**x = a + b**` 형식으로 출력한다.
- 성립하는 조합이 여러가지하면 **_a_**가 가장 작은 정답을 출력한다.
- 성립하는 조합이 존재하지 않는다면 `-1`을 출력한다.

## 입 출력 예시

**입력**

```
3
8
20
42
```

**출력**

```
Case #1:
8 = 3 + 5
Case #2:
20 = 3 + 17
Case #3:
42 = 5 + 37
```

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);
	public static final int MAX_VALUE = 1000000;
	public static final Sieve sieve = new Sieve(MAX_VALUE);

	public static final BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void testCase(int caseIndex) {
		int x = scanner.nextInt();

		int a = -1;
		int b = -1;

		for(int p = 1; p <=x/2; p++){
			int q = x-p;

			if(sieve.isPrime[q] == true && sieve.isPrime[p] == true){
				a = p;
				b = q;
				break;
			}
		}
		// 정답을 출력한다
		System.out.printf("Case #%d:\n", caseIndex);
		if(a > 0 && b > 0)
		{
			System.out.printf("%d = %d + %d\n", x, a, b);
		}else{
			System.out.println(-1);
		}
	}

	public static void main(String[] args) throws Exception {
		int caseSize = scanner.nextInt();

		for (int caseIndex = 1; caseIndex <= caseSize; caseIndex += 1) {
			testCase(caseIndex);
		}
	}
}

//소인수 분해 해서
class Sieve{
	public boolean[] isPrime;
	public int maxValue;

	Sieve(int maxValue){
		this.maxValue = maxValue;
		this.isPrime = new boolean[maxValue+1];
		fillSieve();
	}

	public void fillSieve(){
		Arrays.fill(isPrime, true);
		isPrime[0] = isPrime[1] = false;
		for(long i=2; i<=maxValue; i++){
			if(isPrime[(int)i] == false){
				continue;
			}
			for(long num = i*i; num<=maxValue; num+=i){
				isPrime[(int)num] = false;
			}
		}
	}
}
```
