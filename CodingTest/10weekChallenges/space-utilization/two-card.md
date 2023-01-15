# 두카드

## Question

지애가 살고 있는 이상한 나라에서는 독특한 복권제도가 존재한다. 이상한 나라에서는 매 주 당첨 될 자연수 번호를 정해두며, 복권을 구매한 사람은 그 자리에서 수 많은 카드들 중 하나를 뽑을 수 있는 기회가 두 번 주어진다. 즉, 똑같은 카드를 두 번 뽑을 수 도 있다. 이렇게 두 번에 걸쳐 뽑은 카드들에 적혀있는 두 자연수를 더하여 당첨 번호로 지정된 자연수와 일치한다면 그 사람은 당첨되는 것이다.

복권 담당자인 미주는 이번 주에 복권에 사용 될 당첨 번호들을 정하려고 한다. 하지만 매 번 실제로 그 당첨번호가 두 카드에 적힌 숫자들의 합으로 만들어 질 수 있는지 (즉, 실제로 당첨될 수 있는 번호인지) 검사하는 과정이 너무 번거로워 고민을 하고 있다. 미주를 도와서 주어진 카드를 조합해 당첨 번호들을 만들 수 있는지 판단하는 프로그램을 작성해주자.

## Input

첫 줄에는 사용할 카드의 수 **N**과 당첨 번호의 수 M이 공백으로 구분되어 주어진다. **N**은 1이상 10만이하의 자연수이며 **M**은 1이상 100이하의 자연수이다.

두 번째 줄에는 **N**개의 카드에 적힌 숫자들이 공백으로 구분되어 1이상 1억 이하의 자연수로 주어진다.

세 번째 줄에는 **M**개의 이번 주에 사용 될 당첨번호들이 공백으로 구분되어 주어진다. 당첨번호들은 모두 서로다른 1이상 2억 이하의 자연수이다.

## Output

**_M_**개의 당첨번호 들 중 실제로 두 카드에 적힌 숫자의 합으로 표현될 수 있는 당첨번호의 개수를 정수로 출력한다.

## 입 출력 예시

**입력**

```
5 3
1 9 2 7 3
6 7 8
```

**출력**

```
2
```

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	/**
	 * 중복을 포함해 두 카드의 합으로 만들 수 있는 당첨번호의 수를 계산하는 함수
	 * @param n     카드의 수
	 * @param m     검사하려는 당첨번호의 수
	 * @param cards   각 카드에 적힌 숫자들
	 * @param target  검사하려는 각 당첨번호 리스트
	 * @return
	 */
	public static int getPossibleTargetNumber(int n, int m, int[] cards, int[] target)
	{
		int answer = 0; //만들 수 있는 당첨번호의 수

		Arrays.sort(cards);
		for(int i : target){
			for(int card : cards){
				int num = i - card;
				if(Arrays.binarySearch(cards, num)>=0){
					answer += 1;
					break;
				}
			}
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();  // 카드의 수
		int m = scanner.nextInt();  // 검사 할 후보 당첨번호의 수

		int[] cards = new int[n];
		int[] targets = new int[m];

		// 각 카드 정보를 입력받는다
		for(int i = 0 ; i < n ; i ++)
		{
			cards[i] = scanner.nextInt();
		}

		// 각 당첨번호를 입력받는다
		for(int i = 0 ; i < m ; i ++)
		{
			targets[i] = scanner.nextInt();
		}

		int answer = getPossibleTargetNumber(n, m, cards, targets);

		System.out.println(answer);
	}

}

```
