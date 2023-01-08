# 피보나치 나머지

## Question

피보나치 수열이란 0, 1부터 시작해서 이 전의 두 값을 더해 새로운 값을 만들어나가며 전개되는 수열이다.

**_0, 1, 1, 2, 3, 5, 8, 13, 21, ..._**

피보나치 수열은 규칙이 간단하고 수학적으로 다양한 특징이 있기에 자주 사용되는 수열 중 하나이다. 하지만 수열이 진행될 수록 숫자가 급격히 커지기 때문에 손으로 계산하기에는 쉽지 않은 수열이다.

피보나치 수열과 8자리 전화번호의 관련성을 연구하고 있던 지애는 손으로 하던 계산을 프로그램으로 대체하기 위하여 당신에게 도움을 요청했다. 지애를 도와주기 위하여 어떤 수 **_N_**이 주어졌을 때, **_N_**번째 피보나치 수의 마지막 8자리 숫자를 정수형태로 출력하는 프로그램을 작성해주자.

예를 들어서 실제 수열의 값이 `1,000,283,859`이라면 283859만 출력하면 된다. (가장 앞의 0은 생략하고 정수처럼 출력한다)

## Input

첫 줄에는 **테스트케이스의 수** _**T**_**가 1이상 10만 이하**의 자연수로 주어진다.

각 테스트케이스의 입력은 한 줄로 구성되며, 1이상 100만 이하의 자연수 **_N_**이 공백없이 주어진다.

## Output

각 테스트케이스별로 한 줄에 정답을 출력한다. 피보나치 수열의 **_N_**번째 숫자를 공백없이 정수형태로 출력한다. **단, 숫자 가장 앞의 0들은 생략한다.**

**단, 피보나치 수열의 0번째 숫자는 0이고, 1, 2번째 숫자는 1이다.**

## Solve

```java
import java.util.*;
import java.io.*;
import java.lang.*;

public class Main{
	public static final Scanner scanner = new Scanner(System.in);
	public static final BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void main(String args[]) throws Exception{
		int n = scanner.nextInt();
		int TABLE_PIBO[] = new int[1000000];
		TABLE_PIBO = createPibo(TABLE_PIBO);
		for(int i=0; i<n; i++){
			int number = scanner.nextInt();
			int result = getPibo(TABLE_PIBO, number);
			writer.write(String.valueOf(result) + "\n");
		}

		TABLE_PIBO = null;

		writer.flush();
		writer.close();
	}

	public static int[] createPibo(int pibo[]){
		pibo[0] = 0;
		pibo[1] = 1;
		for(int i=2; i<1000000; i++){
			pibo[i] = (pibo[i-2] + pibo[i-1])%100000000;
		}
		return pibo;
	}

	public static int getPibo(int pibo[], int number){
		return pibo[number];
	}
}
```
