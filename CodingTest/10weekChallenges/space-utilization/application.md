# 응모

## Question

어느 한 아이돌 그룹의 팬 클럽 *'아재리눅스'*의 회원들은 앨범과 기념품 구매에 돈을 아끼지 않기로 유명하다. 이 아이돌 그룹의 소속사는 이번 새 2집 리패키지 앨범을 구매한 회원들을 대상으로 팬 사인회를 진행하기로 결정하였다. 예상과 같이 새 앨범은 출시와 동시에 엄청난 수량이 판매되었으며, 팬 사인회에서 수용할 수 있는 구매자의 수를 아득히 넘어섰다.

결국 모든 회원을 팬 사인회에 초청할 수 없었기에 판매 된 앨범의 시리얼 번호를 통하여 추첨을 하기로 하였다. 하지만 앨범을 구매한 모든 사람이 팬 사인회 참가가 가능한 것은 아니므로 참가를 희망하는 팬들에게 본인이 구매한 앨범의 시리얼 넘버를 통해 응모할 수 있도록 하였다.

하지만 너무나도 아이돌을 만나고 싶어하는 몇몇 삼촌 팬이 같은 시리얼 번호로 여러 번 응모했다는 사실이 밝혀지면서, 이 아이돌의 매니저인 당신은 중복 응모한 시리얼 넘버를 추첨 대상에서 제외하기로 결정하였다. 하지만 응모한 사람이 너무 많은 나머지 도저히 눈과 손으로는 중복을 제거할 수 없었다. 하지만 현재는 매니저이지만, 왕년에 컴퓨터공학과를 졸업한 당신은 프로그램을 작성해 이 문제를 해결하고자 한다. 응모한 모든 시리얼 번호가 주어질 때, 이 시리얼 번호들 중 두 번 이상 응모한 번호를 모두 제거하여 오름차순으로 출력하는 프로그램을 작성해보자.

## Input

첫 줄에 데이터의 수 **_N_**이 1이상 10만 이하의 자연수로 공백없이 주어진다.

한 줄에 응모한 시리얼 번호들이 공백으로 구분된 1이상 10만 이하의 자연수로 주어진다.

## Output

응모한 모든 시리얼 번호 중 두 번이상 응모한 번호를 제외하고 나머지 번호들을 공백으로 구분하여 한 줄에 오름차순으로 출력한다. 최소 하나의 시리얼 번호는 응모 조건을 만족한다.

## 풀이

> 출력 방법 Tip !
> 두번 이상 응모한 번호를 제외하고 오름차순으로 출력 !!
> 이때, 결과 데이터의 수를 바로 예측하기 힘들기 때문에 **가변 길이 배열** 을 사용한다.
> `ArrayList<Integer>` 를 선언하여 저장하자!

- Solution 1.
  **빈도수를 활용한 풀이**
  **'중복이 없다'** 라는 조건은 **'빈도수가 1이다'** 라는 말과 같다.

```java
pbucli static void fillFrequencyTable(int data[], n, int table[]){
	for(int i=0; i<n; i++){
		table[data[i]] += 1;
	}
}
pubcli static ArrayList<Integer> getUniqueElements(int[] data, int n){
	int table[] = new int[MAX_SERIAL_NUMBER+1];
	ArrayList<Integer> ret = new ArrayList<>();
	fillFrequencyTable(data, n, table);
	for(int i=0; i<= MAX_SERIAL_NUMBER; i++){
		if(table[i] == 1) ret.add(i);
	}
	return ret;
}
```

- Solution 2.
  **정렬**을 사용한 풀이
  **'정렬된 배열'** 에서, 양쪽의 인접한 원소들과 다른 값을 가진다면 **유일한 원소**이다.
  물론, 이 문제에서 데이터는 정렬되어 주어지지 않는다.
  만약, 데이터가 정렬되어 있다면 더 효율적으로 풀 수 있을 것 같다면?
  => 데이터를 직접 정렬 하면 된다.
  물론, 사용하기 전에 아래와 같은 조건을 만족하는지 고려해보아야 한다. - 답을 구하는 과정에서 데이터를 정렬해도 상관이 없고 - 정렬 할 시간이 충분할 때에

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	public static final int MAX_SERIAL_NUMBER = 100000;


	/**
	 * data[0] ~ data[n-1]에서 중복이 존재하지 않는 원소들을 반환한다.
	 * 단, 각 원소들은 오름차순으로 정렬되어 있어야 한다.
	 * @param data  data[0] ~ data[n-1]에는 10만 이하의 자연수다.
	 * @param n
	 * @return
	 */
	public static ArrayList<Integer> getUniqueElements(int[] data, int n)
	{
		ArrayList<Integer> ret = new ArrayList<>();
		Arrays.sort(data);
		for(int i=0; i<n; i++){
			if(i==0){
				if(data[i] != data[i+1]){
					ret.add(data[i]);
				}
			}else if(i==n-1){
				if(data[i] != data[i-1]){
					ret.add(data[i]);
				}
			}else{
				if((data[i] != data[i-1]) && (data[i] != data[i+1])){
					ret.add(data[i]);
				}
			}
		}

    //오름차순 순서로 추가했기 때문에 ret에 대한 정렬은 불필요하다.
		return ret;
	}


	public static void main(String[] args) throws Exception {
		//이 문제는 출력할 데이터가 많기때문에 BufferedWriter를 사용하여 출력해야 한다.
		BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

		//N개의 시리얼 번호를 차례로 입력 받는다
		int n = scanner.nextInt();
		int[] data = new int[n];
		for(int i = 0 ; i < n ; i ++)
		{
			data[i] = scanner.nextInt();
		}

		//중복없는 원소들을 계산한다.
		ArrayList<Integer> answers = getUniqueElements(data, n);

		//각 원소들을 출력한다.
		for(int i = 0 ; i < answers.size() ; i++)
		{
			int element = answers.get(i);
			if( i > 0 )
			{ //첫 번째 원소가 아니라면 앞에 공백을 하나 추가한다.
				writer.write(" ");
			}
			writer.write(String.valueOf(element));
		}

		//BufferedWriter를 비우고 해제한다.
		writer.flush();
		writer.close();
	}

}

```
