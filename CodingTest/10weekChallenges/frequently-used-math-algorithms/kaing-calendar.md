# 카잉 달력

## Question

최근에 ICPC 탐사대는 남아메리카의 잉카 제국이 놀라운 문명을 지닌 카잉 제국을 토대로 하여 세워졌다는 사실을 발견했다. 카잉 제국의 백성들은 특이한 달력을 사용한 것으로 알려져 있다. 그들은 **_M_** 과 **_N_** 보다 작거나 같은 두 개의 자연수 **x, y**를 가지고 각 년도를 **<x:y>**와 같은 형식으로 표현하였다. 그들은 이 세상의 시초에 해당하는 첫 번째 해를 **<1:1>**로 표현하고, 두 번째 해를 **<2:2>**로 표현하였다. **<x:y>**의 다음 해를 표현한 것을 **<x':y'>**이라고 하자. 만일 **X < M** 이면 **x' = x + 1**이고, 그렇지 않으면 **x' = 1**이다. 같은 방식으로 만일 **y < N**이면 **y' = y + 1**이고, 그렇지 않으면 **y' = 1**이다. **<M:N>**은 그들 달력의 마지막 해로서, 이 해에 세상의 종말이 도래한다는 예언이 전해 온다.

예를 들어, **M = 10** 이고 **N = 12**라고 하자. 첫 번째 해는 **<1:1>**로 표현되고, 11 번째 해는 **<1:11>**로 표현된다. **<3:1>**은 13 번째 해를 나타내고, **<10:12>**는 마지막인 60 번째 해를 나타낸다.

네 개의 정수 **M, N, x** 와 **y**가 주어질 때, **<M:N>**이 카잉 달력의 마지막 해라고 하면 **<x:y>**는 몇 번째 해를 나타내는 지를 구하는 프로그램을 작성하라.

## Input

입력 데이터는 표준 입력을 사용한다. 입력은 **T**개의 테스트 데이터로 구성된다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 **T**가 주어진다. 각 테스트 데이터는 한 줄로 구성된다. 각 줄에는 네 개의 정수 **M, N, x**와 **y**가 주어진다. **(1 ≤ M, N ≤ 40,000, 1 ≤ x ≤ M, 1 ≤ y ≤ N)\_** 여기서 **<M:N>** 은 카잉 달력의 마지막 해를 나타낸다.

## Output

출력은 표준 출력을 사용한다. 각 테스트 데이터에 대해, 정수 **k**를 한 줄에 출력한다. 여기서 **k**는 **<x:y>** 가 **k** 번째 해를 나타내는 것을 의미한다. 만일 **<x:y>** 에 의해 표현되는 해가 없다면, 즉, **<x:y>** 가 유효하지 않은 표현이면, -1을 출력한다.

## 입 출력 예시

**입력**

```
3
10 12 3 9
10 12 7 2
13 11 5 6
```

**출력**

```
33
-1
83
```

## Solve

```java

import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	public static void testCase(int caseIndex) {
		int M = scanner.nextInt();
		int N = scanner.nextInt();
		int x = scanner.nextInt();
		int y = scanner.nextInt();

		// <1,1> ~ <M, N> 연도를 표현하는 카잉 달력을 생성한다
		KaingCalendar calendar = new KaingCalendar(M, N);

		// 이 달력에서 <x, y>가 몇 번째 연도인지 계산한다
		int answer = calendar.getIndex(x, y);

		// 정답을 출력한다
		System.out.println(answer);
	}

	public static void main(String[] args) throws Exception {
		int caseSize = scanner.nextInt();

		for (int caseIndex = 1; caseIndex <= caseSize; caseIndex += 1) {
			testCase(caseIndex);
		}
	}

}

class KaingCalendar
{
	final int M;    // 왼쪽 번호의 최대 값
	final int N;    // 오른쪽 번호의 최대 값

	KaingCalendar(int M, int N)
	{
		this.M   = M;
		this.N   = N;
	}

	/**
	 * 'index'번째 날짜의 X(왼쪽 번호)를 반환하는 함수
	 *
	 * @param index
	 * @return
	 */
	public int getXbyIndex(int index)
	{
		//1: 1,
		//2: 2,
		//3: 3,
		//M: M
		//M+1: 1
		int result = index%M;
		if(result == 0) return M;
		else return result;
	}

	/**
	 * 'index'번째 날짜의 Y(오른쪽 번호)를 반환하는 함수
	 *
	 * @param index
	 * @return
	 */
	public int getYByIndex(int index)
	{
		int result = index%N;
		if(result == 0) return N;
		else return result;
	}

	/**
	 *
	 *
	 * @param x
	 * @param y
	 * @return  이 달력에서 <x, y>라는 연도가 최초로 등장하는 순번
	 *          등장하지 않는 연도라면 -1을 반환한다
	 */
	public int getIndex(int x, int y)
	{
		for(int i=x; i<=M*N; i+=M){
			if(getYByIndex(i) == y){
				return i;
			}
		}
		return -1;
	}
}
```
