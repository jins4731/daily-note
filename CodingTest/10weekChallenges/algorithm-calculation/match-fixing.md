# 승부조작

## Question

같은 반인 현무와 재윤이는 이번 주 청소 당번이다. 현무와 재윤이는 서로 내기를 하여 청소일을 한 명에게 몰아주기로 하였다. 간단한 게임을 통해 지는 사람이 두 명분의 청소를 하기로하고 재윤이는 아래와 같은 게임을 현무에게 제안하였다.

- 재윤이는 총 **_N_**개의 종이컵의 안 쪽에 임의의 자연수를 적어둔다.
- 모든 종이컵은 숫자가 보이지 않도록 뒤집은 채로 일렬로 나열한다.
- 종이컵의 위치는 게임 도중에 변경될 수 없다.
- 현무는 임의의 인접한 **_K_**개의 연속된 종이컵을 선택하여 숫자를 확인하고 그 숫자들의 합을 구한다.
- 해당 숫자들의 합이 짝수이면 재윤이가 청소를 하고, 홀수이면 현무가 청소를 한다.

게임을 시작하기 전 현무는 재윤이가 숫자들을 자신이 이길 수 밖에 없도록 조작한 것이 아닌지 의심을 하게되었다. 하지만 재윤이가 워낙에 많은 종이컵을 준비해두었기에 일일이 확인을 해보기는 힘들었다. 현무는 당신에게 재윤이가 적은 숫자들로 게임을 진행할 경우 자신이 이길 수 있는 경우가 존재하는지 확인해달라는 부탁을 하였다. 현무를 위해 프로그램을 만들어주자.

## Input

첫 줄에는 종이컵의 수 **_N_**과 현무가 선택할 종이컵의 수 **_K_**가 공백으로 구분되어 주어진다. ***N***과 **_K_**는 1이상 10만 이하의 자연수이다.

두 번째 줄에는 총 **_N_**개의 종이컵에 적힌 숫자들이 실제 놓여진 순서대로 주어진다. 종이컵에 적힌 숫자들은 모두 0이상 100만 이하의 정수이다.

## Output

첫 줄에 현무가 이겨서 재윤이가 청소를 하게 될 수 있는 경우의 수가 존재한다면 `YES`를 출력하고, 그렇지 않다면 `NO`를 출력한다.

## 입 출력 예시

**입력**

```
3 2
1 2 3
```

**출력**

```
NO
```

## Solve

### Sliding Window Method

- 크기가 일정한 범위들을 한 방향으로 순서대로 조회하는 방법.
- 각 윈도우를 순차적으로 방문한다는 방법에 착안하여, 교집합의 정보는 공유하고, 차이가 나는 양쪽 끝 원소만 갱신하는 방법

항상 길이가 k로 같은 범위를 순차적으로 조회하고 있다.  
$$두\,범위\,R_i \,와\, R_{i+1}\,의\,대부분의\,범위가\,중복된다.$$
중복되는 정보들을 매번 다시 계산하지 않고 재활용 할 수 있을까?

$$(R_{i+1} 영역의 합)\, =\, (R_i\,영역의\,합)\,-\,a_i\,+a_{i+k} $$

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	/**
	* 게임의 규칙에 따라 현무가 승리할 수 있는 경우의 수가 존재하는지 검사하는 함수
	*
	* @param data
	* @param n
	* @param k
	* @return true   현무가 승리할 수 있는 경우의 수가 하나 이상 존재한다면
	* @return false  else
	*/
	public static boolean isWinnable(int[] data, int n, int k) {
		int winCount = 0;
		int sum =0;
		for(int i=0; i<k; i++){//2
			sum += data[i];
		}
		for(int i=1; i<n-k+1; i++){
 			sum = sum - data[i-1] + data[i+k-1];
			if(sum % 2 == 0){
				winCount++;
				return true;
			}
		}
		return false;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int k = scanner.nextInt();
		int[] data = new int[n];
		for(int i = 0 ; i < n ; i++)
		{
			data[i] = scanner.nextInt();
		}

		boolean result = isWinnable(data, n, k);

		if(result)
		{
			System.out.println("YES");
		}else{
			System.out.println("NO");
		}
	}

}
```
