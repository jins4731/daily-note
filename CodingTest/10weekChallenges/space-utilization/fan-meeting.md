# 팬미팅

## Question
인기 아이돌 그룹 코들리즈(Codelyz)의 매니저인 당신은 우여곡절끝에 팬 사인회를 성공적으로 성공시켰다. 팬 카페에서도 이번 팬 사인회 선발 기준에 대한 긍정적인 반응들이 많았고, 회사에서도 당신의 문제해결능력을 칭찬하였다. 하지만 능력있는 사람은 항상 바쁜 법, 후배 매니저가 기획한 팬 사인회 내부 이벤트에 해결해야 할 문제가 있어 이를 도와주어야 한다. 후배 매니저가 기획한 이벤트는 아래와 같다.

-   팬 사인회에서 기본적으로 모든 팬들은 정해진 좌석에 앉아서 대기한다.
-   모든 좌석은 1부터  **N**번 사이의 자연수로 번호가 매겨져 있으며, 팬들은 좌석을 옮길 수 없다.
-   당신은 이 중 연속한 좌석  **K**개를 선택해 해당 좌석에 앉은 팬들을 대상으로 이벤트를 진행해야 한다.
-   이 이벤트는 생년월일 6자리를 사용한 추첨을 진행할 것이기 때문에, 이  **K**명끼리 서로 모두 주민등록번호 앞자리가 달라야만 한다.

각 팬들의 주민등록번호 앞자리가 숫자로 주어질 때, 당신은 이 이벤트를 진행할 수 있도록 연속한  **K**명을 선발할 수 있는 방법이 몇 가지인지 확인하고자 한다.

예를 들어  **N=5, K=2**일 때 아래와 같이 팬들의 생년월일이 있다면, 총 3가지 경우의 수가 존재한다.
```
930503 930503 890412 670610 680525
```
## Input
첫 줄에는 팬의 수  **N**과 선발해야 할 사람의 수  **K**가 1이상 20만 이하의 자연수로 주어진다.

두 번째 줄에는 공백으로 구분 된 생년월일 6자리가 공백으로 구분되어 주어진다. 생년월일은 6자리 숫자로만 주어진다.

## Output
생년월일이 서로 다른 연속된 **K**명을 선발할 수 있는 경우의 수를 한 줄에 공백없이 출력한다.

## 입 출력 예시
**입력**
```
5 2 
930503 930503 890412 670610 680525
```
**출력**
```
3
```
## Solve
- Sliding Window Method 로 해결
> 연속된 배열
```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	public static int getUniqueRangeNumber(int[] birthDate, int n, int k)
	{
		int answer = 0; //모든 원소가 서로 다른 범위의 수
		FrequencyTable table = new FrequencyTable();
		for(int i=0; i<k; i++){
			table.addBirthDate(birthDate[i]);
		}
		if(table.uniqueElements == k){
			answer += 1;
		}
		
		for(int i=1; i<n-k+1; i++){  
			table.addBirthDate(birthDate[i+k-1]);  //1 +3-1  3   
			table.removeBirthDate(birthDate[i-1]);
			if(table.uniqueElements==k) answer+=1;
		}
		return answer;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int k = scanner.nextInt();
		int[] birthDate = new int[n];
		for(int i = 0 ; i < n ; i ++)
		{
			birthDate[i] = scanner.nextInt();
		}

		int answer = getUniqueRangeNumber(birthDate, n, k);

		System.out.println(answer);
	}

}

class FrequencyTable
{
	public static final int MAX_SIZE = 1000000;

	int uniqueElements; //현재 중복이 존재하지 않는 unique한 생일의 수
	int[] frequency;    //frequency[b] := 생일이 b인 정보의 수

	FrequencyTable(){
		this.uniqueElements = 0;
		this.frequency = new int[MAX_SIZE];
	}

	/**
	 * 새로운 생일을 등록하고 빈도수를 갱신한다.
	 * @param birthDate
	 */
	void addBirthDate(int birthDate)
	{
		if(frequency[birthDate] == 0){
			this.uniqueElements += 1;
		}else{
			this.uniqueElements -= 1;
		}
		this.frequency[birthDate] += 1;
	}

	/**
	 * 기존의 생일을 제거하고 빈도수를 갱신한다.
	 * @param birthDate
	 */
	void removeBirthDate(int birthDate)
	{
		if(frequency[birthDate] == 2){
			this.uniqueElements += 1;
		}else{
			this.uniqueElements -= 1;
		}
		this.frequency[birthDate] -= 1;
	}

}
```