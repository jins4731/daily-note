# 페인트

## Question

한 아이돌 그룹은 2집 앨범 발매 기념 콘서트를 열기로 하였다. 이 콘서트의 기획을 맞게 된 당신은 2집 앨범의 컨셉트에 맞게 콘서트장을 알록달록하게 꾸미고자 한다. 하지만 디자인 감각이 전혀 없던 당신은 어떻게하면 예쁘고 불규칙적으로 알록달록하게 색상을 배치할 수 있을지 고민을 하고있다. 당신은 콘서트장에 한 줄로 배치 된 좌석들 중 연속된 몇 칸을 골라 한 가지 색으로 색칠하고, 또 다른 연속된 몇 칸을 골라 색칠하는 과정을 반복하기로 하였다.

처음에 모든 좌석은 하얀색(0번 색상)으로 색칠되어 있으며, 당신은 연속 된 몇 칸의 좌석을 골라서 한 가지 색으로 칠할 수 있다. 당신은 0번부터 99번까지 총 100가지 색상을 사용할 수 있다. 0번은 항상 흰색이라고 가정한다. 그러므로 가장 처음에 모든 좌석은 0번 색상으로 색칠되어 있다. 색깔과 색칠할 연속 된 좌석들을 선택하면 해당 좌석들은 모두 같은 색으로 칠해진다. 의자를 칠하는 페인트들은 순식간에 마르므로 두 가지 이상의 색상이 섞이는 일은 벌어지지 않는다.

예를 들어서 좌석이 1번부터 10번까지 있다고 하자. 2번부터 5번까지의 좌석을 빨간색으로 색칠하고, 그 후 4번부터 7번까지의 좌석을 파란색으로 색칠하면 결과적으로 2~3번 좌석은 빨간색, 4~7번 좌석은 파란색이 된다. 그리고 나머지 좌석들은 흰색이 된다.

당신은 이렇게 불규칙적으로 좌석들을 색칠한 후, 가장 많은 좌석이 가진 색과 반대로 가장 적은 좌석이 가진 색의 번호를 찾고자 한다. 단, 마지막에 아무 좌석에도 칠해져 있지 않은 색상은 제외한다. 두 색의 번호를 찾을 수 있는 프로그램을 작성해보자.

## Input

첫 줄에는 좌석의 수 **_N_**과 색칠을 할 방법의 수 **_M_**이 차례로 주어진다. **_N_**과 **_M_**은 모두 1,000 이하의 자연수이다.

이후 **_M_**줄에 걸쳐서 공백으로 구분된 세 정수가 주어진다. 모든 규칙은 수행되는 순서대로 주어진다. 즉, 먼저 입력된 색칠 규칙이 먼저 적용된다.

- 첫 번째 숫자는 색칠할 가장 왼쪽(번호가 작은) 좌석의 번호이다.
- 두 번째 숫자는 색칠할 가장 오른쪽(번호가 큰) 좌석의 번호이다.
- 세 번째 숫자는 좌석에 칠할 색깔의 번호이다.

단, 좌석의 번호는 1과 **_N_**사이의 자연수이며. 색깔의 번호는 0이상 99이하의 정수이다.

## Output

첫 번째 줄에 가장 많은 좌석이 칠해진 색의 번호를 출력한다.

두 번째 줄에 가장 적은 좌석이 칠해진 색의 번호를 출력한다.

조건을 만족하는 색이 두 개 이상이라면 번호가 작은 색을 출력한다.

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);
	public static final int MAX_SEAT_NUMBER = 1000;
	public static final int MAX_COLOR_NUMBER = 100;

	/**
	 *
	 * @param n : 좌석의 수. 좌석은 0~(n-1)번의 번호를 가진다.
	 * @param m : 좌석을 칠한 횟수.
	 * @param paintings  : 좌석들을 색칠한 이벤트들의 정보
	 */
	public static void solve(int n, int m, Painting[] paintings)
	{
		int[] seats = new int[n]; //seats[i] := i번 좌석의 최종 색상
		int[] color = new int[MAX_COLOR_NUMBER];

		int minColor = -1; //가장 적게 등장한 색상
		int maxColor = -1; //가장 많이 등장한 색상

		for(Painting painting : paintings){
			for(int i=painting.left; i<=painting.right; i++){
				seats[i] = painting.color;
			}
		}

		for(int i=0; i<seats.length; i++){
			color[seats[i]]++;
		}

		for(int i=0; i<color.length; i++){
			if(color[i]==0)continue;
			if(minColor==-1 || color[i]<color[minColor]){
				minColor=i;
			}
			if(maxColor==-1 || color[i]>color[maxColor]){
				maxColor=i;
			}
		}

		System.out.println(maxColor);
		System.out.println(minColor);
	}

	public static void main(String[] args) throws Exception {
		int n = scanner.nextInt();
		int m = scanner.nextInt();

		//paintings[i] := i번째에 일어난 색칠 이벤트의 정보
		Painting[] paintings = new Painting[m];


		for(int i = 0 ; i < m ; i ++)
		{
			//좌석의 번호는 1번부터 시작하므로, 0 ~ (n-1)범위로 맞추기 위하여 1씩 빼준다
			int left = scanner.nextInt()  -1;
			int right = scanner.nextInt() -1;
			int color = scanner.nextInt();
			paintings[i] = new Painting(left, right, color);
		}

		//문제의 정답을 구한다
		solve(n, m, paintings);
	}

}

//좌석들을 한 번 색칠하는 이벤트에 대한 정보
class Painting{
	public int left;
	public int right;
	public int color;
	Painting(int left, int right, int color)
	{
		this.left = left;
		this.right = right;
		this.color = color;
	}
}
```
