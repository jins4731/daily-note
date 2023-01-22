# 피보나치 나머지

## Question

자연수를 소인수 분해한 결과를 출력하는 프로그램을 작성해보자. 입력으로 주어진 자연수를 소인수분해 한 후 해당 숫자의 소인수들을 나열하면 된다.

## Input

첫 줄에는 테스트케이스의 수 **_T_**가 주어진다. **_T_**는 1이상 100이하의 자연수이다.

각 테스트케이스는 한 줄로 구성되며 소인수 분해를 할 자연수가 주어진다. 이 자연수는 2이상 10억이하이다.

## Output

각 테스트케이스에 대한 정답을 두 줄씩 출력한다.

- 테스트케이스의 첫 줄에는 테스트케이스의 번호를 `**#%d:**` 와 같은 형식으로 출력한다.
- 두 번째 줄에는 입력으로 주어진 숫자들의 소인수들을 공백으로 구분하여 오름차순으로 출력한다. 여러 번 곱해진 소인수는 그 횟수 만큼 출력한다.

## 입 출력 예시

**입력**

```
3
24
28
21
```

**출력**

```
#1:
2 2 2 3
#2:
2 2 7
#3:
3 7
```

## Solve

```java

import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	public static void testCase(int caseIndex) {
		long N = scanner.nextLong();

		// N을 소인수 분해한다
		ArrayList<Long> factors = MathUtil.factorize(N);

		// 정답을 출력한다
		System.out.printf("#%d:\n", caseIndex);
		for(int i = 0 ; i <factors.size();i+=1)
		{
			System.out.print(factors.get(i));
			System.out.print(" ");
		}
		System.out.println();
	}

	public static void main(String[] args) throws Exception {
		int caseSize = scanner.nextInt();

		for (int caseIndex = 1; caseIndex <= caseSize; caseIndex += 1) {
			testCase(caseIndex);
		}
	}

}


class MathUtil{
	/**
	 * 자연수 N을 구성하는 모든 소인수를 반환하는 함수
	 *
	 * @param N
	 * @return
	 */

	public static ArrayList<Long> factorize(long N)
	{
		ArrayList<Long> factors = new ArrayList<>();

		for(long i=2; i*i<=N; i++){
			while(N%i == 0){
				factors.add(i);
				N /= i;
			}
		}

		if(N > 1 ){
			factors.add(N);
		}
		return factors;
	}
}
```
