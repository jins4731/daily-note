# 정주행

## Question

시간이 흘러 지구는 2100년이 되었고, 웹툰 마음의 소리는 10만회 이상을 연재하며 세계 기록을 매 번 갱신하고 있다. 대부분의 사람들에게 마음의 소리는 삶의 일부가 되었으며, 어린 학생들이 마음의 소리를 회차 순서에 맞게 쭉 정주행을 하는 모습을 쉽게 찾아 볼 수 있다.

하지만 조금 특이한 성격을 가진 승철이는 여태까지 마음의 소리를 순서에 구애받지 않고 읽어왔다. 그러던 어느날 승철이는 여태까지 자신이 본 에피소드의 번호들을 정렬하면 연속적인 수열로 표현될 수 있는지 궁금해졌다. 승철이는 마음의 소리를 다음과 같은 규칙을 지키며 읽었음이 보장된다.

- 승철이는 총 **_N_**화의 에피소드를 보았다.
- 승철이는 기억력이 좋기 때문에 똑같은 에피소드를 두번 보지는 않았다.

승철이가 여태까지 읽은 에피소드들의 번호가 차례로 주어질 때, 승철이가 본 에피소드들의 번호를 정렬하면 연속된 수열로 표현될 수 있는지 판별하는 프로그램을 작성하시오.

- 연속적인 수열이란 항상 **_i_**번째 숫자의 값이 **_(i+1)_**번째 숫자보다 1이 작은 정수로 이루어진 수열을 의미한다.
-

## Input

첫 줄에는 여태까지 승철이가 본 에피소드의 수 **_N_**이 주어진다. **_N_**은 1이상 10만 이하의 자연수이다.

두 번째 줄에는 승철이가 본 에피소드의 번호들이 공백으로 구분되어 주어진다. 에피소드의 번호는 모두 서로 다르며 1이상 100만 이하의 자연수이다.

## Output

승철이가 본 에피소드의 번호들이 연속적인 수열로 표현될 수 있다면 **`YES`**를 출력하고, 그렇지 않다면 **`NO`**를 출력한다.

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	/**
	 * 배열의 N개의 원소가 연속적인 정수 수열로 표현될 수 있는지 판단하는 함수
	 * @param data
	 * @param n
	 * @return
	 */
	public static boolean isConsecutive(int[] data, int n)
	{
		int g, l;
		g = l = data[0];
		int m = 0;
		for(int i=0; i<n; i++){
			if(data[i] > g) g = data[i];
			if(data[i] < l) l = data[i];
		}
		m = g-l+1;

		return n == m ? true : false;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int[] data = new int[n];
		for(int i = 0 ; i < n ; i ++)
		{
			data[i] = scanner.nextInt();
		}

		boolean result = isConsecutive(data, n);

		if(result)
		{
			System.out.println("YES");
		}else{
			System.out.println("NO");
		}
	}
}

```
