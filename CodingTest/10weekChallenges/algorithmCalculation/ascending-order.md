# 오름차순

## Question

그룹을 관리하는 리더라는 직위는 절대 쉬운 것이 아니다. 외국의 한 유명한 여자 대학교인 질레보르(Zylevol)대학교에는 한국인 유학생 수정이와 예인이가 다니고있다. 수정이는 학생회장으로서 학교 행사마다 학생들을 통솔하는 역할을 맡고 있다. 이번 학교 행사에서도 학생회장 수정이는 학생들을 통솔하는 역할을 맡게 되었다. 이번 행사에서는 안무 준비를 위하여 각 학생들은 키가 작은 학생부터 큰 순서대로 일렬로 서야 한다. 하지만 전 날에 먹은 우유의 탓으로 수정이가 몸져 눕게되자, 평소 자신도 학생 회장을 잘 할 수 있다는 자신감에 가득 차 있던 예인이가 대행을 자원했다.

예인이는 이리저리 뛰어다니며 학생들을 일렬로 세웠으나, 이 많은 학생들이 정말로 키 순으로 서 있는지 확신이 서지 않았다. 당신은 예인이를 도울 수 있도록 학생들이 실제로 키에 대하여 오름차순으로 서 있는지 판별해주는 프로그램을 작성해주려고 한다.

## Input

첫 줄에는 학생의 수 **_N_**이 주어진다. **_N_**은 1이상 10만 이하의 자연수이다.

두 번째 줄에는 공백으로 구분된 학생들의 키가 총 **_N_**개 주어진다. 각 학생의 키는 마이크로미터 단위로 측정하여 1이상 2,000,000 이하의 자연수이다.

## Output

첫 줄에 학생들의 키가 오름차순으로 정렬되어 있는지 여부를 **`YES`** 혹은 **`NO`**로 출력한다.

- **`YES`** - 각 학생들의 키가 오름차순으로 정렬되어있다.
- **`NO`** - 그렇지 않다

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	/**
	 * 주어진 배열이 오름차순인지 검사하는 함수
	 * @param data
	 * @param n     데이터의 수
	 * @return      data[0] ~ data[n-1]이 오름차순이라면 true, else false
	 */
	public static boolean isOrdered(int[] data, int n)
	{
		boolean check = true;
		for(int i=0; i<n-1; i++){
			if(data[i] > data[i+1]){
				check = false;
				break;
			}
		}
		return check;
	}


	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int[] data = new int[n];

		for(int i = 0 ; i < n ; i++)
		{
			data[i] = scanner.nextInt();
		}

		boolean result = isOrdered(data, n);

		if(result)
		{
			System.out.println("YES");
		}else{
			System.out.println("NO");
		}

	}

}
```
