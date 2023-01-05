# 소수의 판별
## 수학적 사실을 활용한 가지치기
자연수 N 의 약수 a 가 있다면, 다음 식을 만족한다.
$$ N = ab (단, a<=b) $$
즉, 한 자연수 N 에 대해 서로 곱하여 N 이 되는 약수 쌍 a, b 가 **항상** 존재한다.

N 에 대한 a 의 최대 값은 다음을 만족한다. $$ a <= \sqrt{N} $$   
그러므로, a 와 b 는 다음과 같은 영역에 존재한다.$$ 1<=a<=\sqrt{N}, $$  $$\sqrt{N} <= b <= N$$ 

그리고, N 이 소수가 아니라면 해당 범위에 약수 a 가 반드시 존재한다. $$ 2<= a <= \sqrt{N} $$  
> 대우명제 : 해당 범위에 약수가 없다면 N 은 소수다.$$2<=a<\sqrt{N}$$ 

따라서, $$ [2, \sqrt{N}] $$ 
 
 해당 범위에 대해서만 약수의 존재 여부를 검사하면 소수/합성수를 구분할 수 있다.

## Question
어릴적 주산을 배운 예인이는 항상 주변 사람들에게 자신이 암산을 잘한다고 주장하고 다닌다. 하지만 이런 예인이의 말을 믿지못한 수정이는 예인이에게 암기 퀴즈를 내주기로 하였다. 똑똑한 수정이는 예인이에게 다음과 같은 퀴즈를 제안했다.

-   수정이는 1이상 10억 이하의 자연수를 하나 마음속으로 정한다.
-   수정이는 스탑워치를 사용해 시작버튼을 누름과 동시에 예인이에게 정한 숫자를 말해준다.
-   예인이는 숫자를 듣고 2초안에 그 숫자가 소수인지 아닌지를 대답하여야 한다.

하지만 자신의 암산 실력에 자신이 없어진 예인이는 몰래 당신에게 수정이가 말한 숫자가 소수인지 빠르게 판별할 수 있는 프로그램을 작성해달라고 부탁하였다. 예인이를 도와주기 위해 프로그램을 작성하시오.

이 문제는 여러 개의 테스트 케이스로 구성되어있다. 예제 입/출력 데이터를 확인하여 유의하자.

## Input
입력 데이터의 첫 줄에는 테스트 케이스의 숫자  **_T_**가 주어진다.  **_T_**는 1이상 10이하의 자연수이다.

각 테스트 케이스별로 한 줄에 자연수 하나가 주어진다. 각 자연수는 1이상 10억 이하의 자연수이다.

## Output
각 테스트 케이스별로 아래와 같은 형식으로 결과를 출력한다.

-   테스트 케이스의 첫 줄에는 테스트 케이스의 번호를 1과  **_T_**사이의 자연수로 출력한다. 아래와 같은 형식을 따른다

-   `Case #1, Case #2, ...`

-   테스트 케이스의 두 번째 줄에는 소수이면  **`YES`**를 출력하고, 그렇지 않으면  **`NO`**를 출력한다.


## Solve
```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	/**
    * 주어진 숫자가 소수인지 판별하는 함수 
    *
    * @param N 
    * @return true   소수라면 
    * @return false  소수가 아니라면
    */
	public static boolean isPrime(int N)
	{
		if(N == 1) return false;
		
		for(int i=2; i<=Math.sqrt(N); i++)
			if(N%i == 0) return false;
		
		return true;
	}

	public static void testCase(int caseIndex)
	{
		int n = scanner.nextInt();
		boolean result = isPrime(n);

		System.out.printf("Case #%d\n", caseIndex);
		if(result)
		{
			System.out.println("YES");
		}else{
			System.out.println("NO");
		}
	}

	public static void main(String[] args) throws Exception {
		int caseSize = scanner.nextInt();

		for (int caseIndex = 1; caseIndex <= caseSize; caseIndex += 1) {
			testCase(caseIndex);
		}
	}

}

```