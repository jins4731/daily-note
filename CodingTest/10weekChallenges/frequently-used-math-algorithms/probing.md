# Probing

## Question

행사 기획자인 수정이는 이 번에 자신이 담당하게 된 행사에서 행운권 추첨을 기획하고 있다. 이번 행사에서는 최대 수천명 정도의 사람이 방문할 수 있기 때문에 어떻게 하면 공평하고 불규칙적으로 행운권 번호를 배정할 수 있을지가 큰 관건이었다. 하지만 똑똑한 수정이는 아래와 같은 아이디어를 냈다.

- 모든 행운권 번호는 **0~(N-1)**의 정수로 총 **N**개이다.
- 모든 고객은 회원번호를 가지고 있으며 회원 번호는 자연수이다.
- 입장한 고객은 자신의 회원 번호를 **N**으로 나눈 나머지를 계산해 그 번호와 같은 행운권을 지급받는다.

- 해당 행운권이 다른 사람에게 지급된 상황이라면 그것보다 +1한 번호를 지급받는다.
- 아직 아무에게도 지급되지 않은 번호를 찾을 때 까지 행운권 번호를 +1씩 증가시켜가며 찾는다.
- 만약 **(N-1)**번 행운권도 이미 지급된 상태라면 0번 행운권부터 다시 조회한다.
- 이렇게 순서대로 조회하다가 가장 먼저 발견된 아직 지급되지 않은 행운권을 지급받는다.

- 고객들은 순서대로 한 명씩 입장하며 한번 지급된 행운권 번호는 교환할 수 없다.

수정이는 행사 중간에도 바쁠 예정이기에 당신에게 이를 자동화할 수 있는 프로그램을 작성해달라고 요청했다. 수정이를 도와주자.

## Input

첫 줄에는 준비한 행운권의 수 **N**과 입장 할 회원의 수 **M**이 공백으로 구분되어 주어진다. **N**은 1이상 5,000이하의 자연수이며 **M**은 1이상 1,000이하의 자연수이다. 또한, **M**은 항상 **N**이하의 값을 가진다.

이후 총 **M**줄에 걸쳐서 입장 한 회원들의 회원번호가 순서대로 주어진다. 각 회원번호는 1이상 1억 이하의 자연수이다.

## Output

입장한 회원들의 순서대로 해당 회원이 지급받게 될 행운권 번호를 한 줄에 하나 씩 정수 형태로 출력한다.

## 입 출력 예시

**입력**

```
5000 5
2878
15092880
1
18762879
77787879
```

**출력**

```
2878
2880
1
2879
2881
```

## Solve

```java
import java.util.*;
import java.lang.*;
import java.io.*;

public class Main{
	public static final Scanner scanner = new Scanner(System.in);

	public static void main(String args[]) throws Exception{
		int n = scanner.nextInt();
		int m = scanner.nextInt();
		int[] userNum = new int[m];
		ArrayList<Integer> luckyNums = new ArrayList<>();

		Ticket ticket = new Ticket(n);

		for(int i=0; i<m; i++){
			userNum[i] = scanner.nextInt();
			int luckyNum = getLuckyNum(ticket, userNum[i]);
			luckyNums.add(luckyNum);
		}

		for(int lucky : luckyNums){
			System.out.println(lucky);
		}
	}

	public static int getLuckyNum(Ticket ticket, int userNum){
		int luckyNum = ticket.getLuckyNum(userNum);
		while(ticket.luckyNumUsed(luckyNum) == true){
			luckyNum = (luckyNum+1)%ticket.length;
		}
		ticket.setLuckyNum(luckyNum);
		return luckyNum;
	}
}

class Ticket{
	public final int length;
	public final boolean[] isUsed;

	public Ticket(int length){
		this.length = length;
		this.isUsed = new boolean[length];
	}

	//행운권 번호 사용중인지 판별
	public boolean luckyNumUsed(int luckyNum){
		return isUsed[luckyNum];
	}

	//행운권 번호 사용 등록
	public void setLuckyNum(int luckyNum){
		isUsed[luckyNum] = true;
	}

	//회원 번호로 행운권 번호 조회
	public int getLuckyNum(int userNum){
		return userNum%length;
	}
}
```
