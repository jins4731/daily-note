# 도토리 키재기

## Question

도토리 나라의 도토리들이 다니는 도토리 고등학교에서는 매 달 재미있는 이벤트를 한다. 도토리 나라에서는 다른 도토리들 보다 큰 키를 가지는 것이 큰 경쟁력 중 하나였기에, 도토리 고등학교에서는 매 달마다 그 달에 생일이 있는 도토리들 중 가장 큰 키를 가진 도토리에게 상장을 수여한다.

**N**개의 도토리에 대한 키와 생일 정보가 주어진다. 이 때 이번 달에 생일이 있는 도토리들 중 가장 키가 큰 도토리의 키를 출력하는 프로그램을 작성하자.

## Input

- 첫 줄에는 도토리의 수를 나타내는 **_N_**이 1이상 10만 이하의 자연수로 주어진다.
- 두 번째 줄에는 **_N_**개의 도토리의 키가 공백으로 구분된 1이상 10억 이하의 자연수로 주어진다.

- 도토리들은 현재 키에 대해 오름차순으로 서 있다고 가정한다.
- 모든 도토리의 키는 서로 다르다. 나노 미터 단위로 측정하였기 때문에 그럴 수 있다.
- **_i_**번째에 나오는 숫자가 **_i_**번째 도토리의 키이다.

- 세 번째 줄에는 **_N_**개의 도토리들의 생일이 속한 달을 나타내는 1이상 12이하의 자연수가 공백으로 구분되어 주어진다.

- **_i_**번째에 나오는 숫자가 **_i_**번째 도토리의 생일이 속한 달이다.

- 네 번째 줄에는 현재 달을 나타내는 1이상 12이하의 자연수 **_M_**이 주어진다

## Output

문제의 답을 공백없이 정수로 출력한다. 생일에 해당 달에 속한 도토리가 없는 경우 `-1`을 출력한다.

## Solution

```java
import java.io.*;
import java.lang.*;
import java.util.*;

public class Main {
	public static final Scanner scanner = new Scanner(System.in);
	/**
     * 생일이 m월인 가장 큰 키의 도토리를 찾는 함수
     * @param height  각 도토리의 키
     * @param month   각 도토리의 출생 월
     * @param n   도토리의 수
     * @param m   찾고자 하는 달
     * @return    month[k] == m인 가장 큰 height[k]
     */
	public static int getMaximumHeight(int[] height, int[] month, int n, int m)
	{
		int maxHeight = 0;
		for(int i=0; i<n; i++){
			if(month[i] == m){
				maxHeight = height[i];
			}
		}
		return maxHeight==0?-1:maxHeight;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int[] height = new int[n];
		int[] month = new int[n];

		for(int i = 0 ; i < n ; i ++)
		{
			height[i] = scanner.nextInt();
		}
		for (int i = 0; i < n; i++) {
			month[i] = scanner.nextInt();
		}

		int m = scanner.nextInt();

		int answer = getMaximumHeight(height, month, n, m);

		System.out.println(answer);
	}

}
```
