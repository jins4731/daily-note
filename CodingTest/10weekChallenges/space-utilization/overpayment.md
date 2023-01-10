# 과유불급

## Question

인기 아이돌 코들리즈(Codelyz)의 매니저인 당신은 코들리즈의 팬 사인회를 기획하고 있다. 원래의 계획대로라면 팬들이 구매한 앨범의 시리얼 넘버를 추첨하여 팬 사인회 초대권을 증정할 계획이었지만, 얼마 전(문제3C)에 있었던 중복응모사건으로 인하여 다른 방법을 찾아야만 했다.

이 번에 당신이 준비한 방법은 다음과 같다.

- 당신은 미리 **_N_**개의 숫자카드들을 선정하여 임의의 순서대로 배치해두었다.
- 숫자카드의 순서는 바뀌지 않으며, 카드에 적힌 숫자와 별개로 1번 카드, 2번 카드, ... 로 번호를 붙였다.
- 각 카드에는 32비트 정수형 범위에 해당하는 숫자가 적혀있다. 다만 앨범을 구매하기 전 팬들에게 공개하지 않는다.
- 앨범은 한 사람 당 한 번만 구매할 수 있으며, 앨범을 구매한 사람은 **_1_**과 **_N_**사이의 두 자연수 **_L_**과 **_R_**을 고를 수 있다. **\_(단, 1**_<=_** L <= R**_<=N_**)\_**
- 앨범을 구입한 팬은 자신이 정한 **_L~R_**번 카드에 적힌 숫자들의 합 만큼 점수를 얻는다.

예를 들어서 총 5개의 카드에 차례로 **_{1, -1, 5, 2, 3 }_** 가 적혀 있었다면, **_< L=2, R=4 >_**로 두 숫자를 정한 팬은 **_{ (-1) + 5 + 2 }_** 점을 얻는 것이다.

당신은 기획한 대로 앨범을 구매한 **_M_**명의 팬들이 정한 두 숫자들을 앨범을 구매한 순서대로 파일로 정리했다. 이 중에서 높은 점수를 가진 팬 부터 차례로 선정해 팬 사인회 초대장을 보내려고 한다. 그렇다면 가장 먼저 초대장을 받게 될 사람은 몇 번째로 앨범을 구매한 팬일까?

## Input

번째 줄에 숫자카드의 수와 앨범을 구매한 팬의 수를 나타내는 자연수 **_N_**과 **_M_**이 공백으로 구분되어 주어진다. **_N_**과 **_M_**은 모두 1이상 10만 이하의 자연수이다.

두 번째 줄에는 숫자카드에 적혀진 총 **_N_**개의 32비트 정수가 공백으로 구분되어 주어진다.

그 후 총 **_M_**줄에 걸쳐서 앨범을 구매한 순서대로 팬이 선택한 두 숫자 **_L_**과 **_R_**이 공백으로 구분되어 주어진다. **_L_**과 **_R_**은 모두 1이상 **_N_** 이하의 자연수이다. **_L_**은 항상 **_R_**이하의 값을 가짐이 보장된다.

## Output

한 줄에 가장 먼저 초대장을 받게 될 사람이 앨범을 구매한 순서와 얻은 점수를 공백으로 구분하여 출력한다. 같은 점수를 얻은 사람이 존재 할 경우 먼저 구매한 사람을 기준으로 출력한다.

## 입 출력 예시

**입력**

```
5 2
1 -1 5 2 3
2 4
1 3
```

**출력**

```
1 6
```

## Solve

### 부분합/구간합

선형 공간에서 주어진 범위의 원소들에 대한 합을 계산하는 문제

### 생각해보기

쿼리(Query) 스타일의 문제는 캐싱을 떠 올리기 쉽다  
아래와 같은 배열은 '계산 가능' 한가?

- 문제에 주어진 제한사항과 같이 고려해보자.

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);


	/**
	 *
	 * @param n   카드의 수
	 * @param m   앨범을 구매한 팬의 수
	 * @param cards   각 카드에 적힌 숫자의 리스트 (cards[1] ~ card[n])
	 * @param ranges  각 팬이 선택한 범위의 리스트 (ranges[0] ~ ranges[m-1])
	 * @return        총 점수의 합이 가장 큰 범위 객체
	 */
	public static Range getBestRange(int n, int m, int[] cards, Range[] ranges) {
		Range answer = ranges[0];
		long rangeSum[] = new long[n+1];
		rangeSum[0] = 0;

		for(int i=1; i<=n; i++){
			rangeSum[i] = rangeSum[i-1] + cards[i];
		}
		for(Range range : ranges){
			range.totalPoint = rangeSum[range.right] - rangeSum[range.left-1];
			if(answer.totalPoint < range.totalPoint){
				answer = range;
			}
		}

		return answer;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int m = scanner.nextInt();
		int[] cards = new int[n+1];
		Range[] ranges = new Range[m];

		// 각 카드의 정보를 입력받는다.
		for(int i = 1 ; i <= n ; i ++)
		{
			cards[i] = scanner.nextInt();
		}

		// 팬들의 정보를 입력받는다.
		for(int i = 0 ; i < m; i ++)
		{
			int l = scanner.nextInt();
			int r = scanner.nextInt();
			ranges[i] = new Range(i + 1, l, r);
		}

		//범위의 합이 가장 큰 범위를 계산한다.
		Range answer = getBestRange(n, m, cards, ranges);

		System.out.printf("%d %d\n", answer.index, answer.totalPoint);
	}

}

class Range{
	int index;
	int left;
	int right;
	long totalPoint;
	Range(int index, int left, int right)
	{
		this.index = index;
		this.left = left;
		this.right = right;
		this.totalPoint = 0;
	}
}
```
