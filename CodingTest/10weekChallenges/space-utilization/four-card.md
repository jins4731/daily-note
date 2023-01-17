# 네카드

## Question

예인이가 살고 있는 이상한 나라에서는 독특한 복권제도가 존재한다. 이상한 나라에서는 매 주 당첨 될 자연수 번호를 정해두며, 복권을 구매한 사람은 그 자리에서 수 많은 카드들 중 하나를 뽑을 수 있는 기회가 네 번 주어진다. 즉, 똑같은 카드를 네 번 뽑을 수 도 있다. 이렇게 네 번에 걸쳐 뽑은 카드들에 적혀있는 네 자연수를 더하여 당첨 번호로 지정된 자연수와 일치한다면 그 사람은 당첨되는 것이다.

복권 담당자인 미주는 이번 주에 복권에 사용 될 당첨 번호들을 정하려고 한다. 하지만 매 번 실제로 그 당첨번호가 네 카드에 적힌 숫자들의 합으로 만들어 질 수 있는지 (즉, 실제로 당첨될 수 있는 번호인지) 검사하는 과정이 너무 번거로워 고민을 하고 있다. 미주를 도와서 주어진 카드를 조합해 당첨 번호들을 만들 수 있는지 판단하는 프로그램을 작성해주자.

## Input

첫 줄에는 사용할 카드의 수 **N**과 당첨 번호의 숫자 M이 공백으로 구분되어 주어진다. **N**은 1이상 1,000이하의 자연수이며 **M**은 1이상 100이하의 자연수이다.

두 번째 줄에는 **N**개의 카드에 적힌 숫자들이 공백으로 구분되어 1이상 1억 이하의 자연수로 주어진다.

세 번째 줄에는 **M**개의 이번 주에 사용 될 당첨번호들이 공백으로 구분되어 주어진다. 당첨번호들은 모두 서로다른 1이상 4억 이하의 자연수이다.

## Output

**M**개의 당첨번호 들 중 실제로 네 카드에 적힌 숫자의 합으로 표현될 수 있는 당첨번호들을 모두 출력한다.

- 실제로 만들 수 있는 당첨번호가 여러개라면, 오름차순으로 정렬하고 각 숫자는 공백으로 구분하여 한 줄에 출력한다.
- 실제로 만들 수 있는 당첨번호가 존재하지 않는다면 **NO**를 출력한다.

## 입 출력 예시

**입력**

```
10 5
2 4 6 8 10 12 14 16 18 20
6 7 8 9 10
```

**출력**

```
8 10
```

## Solve

```java
import java.util.*;
import java.io.*;
import java.lang.*;

public class Main{
	public static final Scanner scanner = new Scanner(System.in);
	public static void main(String[] args) throws Exception{
		int n = scanner.nextInt();
		int m = scanner.nextInt();
		int cards[] = new int[n];
		int targets[] = new int[m];

		for(int i=0; i<n; i++){
			cards[i] = scanner.nextInt();
		}
		for(int i=0; i<m; i++){
			targets[i] = scanner.nextInt();
		}
		ArrayList<Integer> possibleTarget = getPossibleTarget(n, m, cards, targets);
		if(possibleTarget.size() > 0){
			for(int target : possibleTarget){
				System.out.print(target + " ");
			}
		}else{
			System.out.println("NO");
		}
	}

	public static ArrayList<Integer> getPossibleTarget(int n, int m, int cards[], int targets[]){
		ArrayList<CardPair> pairs = new ArrayList<>();
		ArrayList<Integer> possibleTarget = new ArrayList<>();
		for(int card1: cards){
			for(int card2: cards){
				CardPair cardPair = new CardPair(card1, card2);
				pairs.add(cardPair);
			}
		}
		Collections.sort(pairs);

		for(int target : targets){
			for(CardPair pair : pairs){
				int sumNum = target - pair.sumNum;
				CardPair newCardPair = new CardPair(sumNum);
				if(Collections.binarySearch(pairs, newCardPair)>=0){
					possibleTarget.add(target);
					break;
				}
			}
		}

		Collections.sort(possibleTarget);
		return possibleTarget;
	}
}

class CardPair implements Comparable<CardPair>{
	public int num1;
	public int num2;
	public int sumNum;

	CardPair(int num1, int num2){
		this.num1 = num1;
		this.num2 = num2;
		this.sumNum = num1 + num2;
	}

	CardPair(int sumNum){
		this.num1 = -1;
		this.num2 = -1;
		this.sumNum = sumNum;
	}

	@Override
	public int compareTo(CardPair cardPair){
		return this.sumNum - cardPair.sumNum;
	}
}
```
