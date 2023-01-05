# 전화번호

## Question

용돈이 필요해진 지수는 한 설문조사 기관에서 아르바이트를 하게 되었다. 지수는 수 많은 사람들에게 전화를 통해 설문조사를 하는 일을 맡게 되었는데, 어느 날 휴식시간에 문득 사람들이 전화번호 뒷자리로 가장 많이 사용하는 번호는 무엇인지 궁금해졌다. 하지만 지수는 보유한 전화번호가 너무 많고, 전화번호의 뒷자리는 0000~9999의 총 1만가지의 종류가 있기에 눈으로 세는 것은 도저히 불가능할 것이라는 판단을 내렸다. 지수를 위하여 사람들의 전화번호 뒷자리 중 가장 많이 사용되는 번호를 찾아주자.

## Input

가장 첫 줄에 전화번호의 수 **_N_**이 1이상 10만 이하의 자연수로 주어진다.

그 후 총 **_N_**줄에 걸쳐서 공백없이 4개의 자연수로 구성 된 전화번호 뒷자리가 한 줄에 하나씩 주어진다. 전화번호 뒷자리는 0000~9999사이 중 하나이다.

## Output

주어진 전화번호 뒷자리들 중 가장 많이 등장한 번호를 출력한다. 0을 포함하여 공백없는 네 자리 숫자로 출력해야한다.

단, 등장한 횟수가 같은 번호가 두 개 이상인 경우 가장 사전순으로 빠른 숫자를 출력한다.

## 풀이

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);
	public static final int MAX_TABLE_LENGTH = 10000;

	/**
	 * data[0] ~ data[n-1]에 등장한 번호들에 대한 빈도수 테이블을 채우는 함수
	 * @param data
	 * @param n
	 * @param table  table[x] := data배열에서 x가 등장한 횟수
	 */
	public static void fillFrequencyTable(int[] data, int n, int[] table) {
		for(int i=0; i<n; i++){
			table[data[i]]++;
		}
	}


	/**
	 * data[0] ~ data[n-1]사이에서 가장 많이 등장한 번호를 반환하는 함수
	 * @param data
	 * @param n
	 * @return  가장 많이 등장한 번호. 여러개인 경우 사전순으로 가장 빠른 번호.
	 */
	public static int getFrequentNumber(int[] data, int n) {
		int frequent_number = 0;  //0000~9999중  가장 많이 등장한 번호
		int count = 0;
		int table[] = new int[MAX_TABLE_LENGTH];
		fillFrequencyTable(data, n, table);

		for(int i=0; i<MAX_TABLE_LENGTH; i++){
			if(table[i]>count){
				count = table[i];
				frequent_number = i;
			}
		}
		return frequent_number;
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int[] data = new int[n];
		for (int i = 0; i < n; i++) {
			data[i] = scanner.nextInt();
		}

		int answer = getFrequentNumber(data, n);
		System.out.printf("%04d", answer);
	}
}


```
