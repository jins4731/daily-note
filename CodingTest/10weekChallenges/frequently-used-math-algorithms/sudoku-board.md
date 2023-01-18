# 스도쿠 보드

## Question

스도쿠란 9행 9열의 보드에 1~9사이의 숫자들을 규칙에 맞게 채워넣는 게임을 말한다. 9행 9열의 보드에는 총 81개의 칸이 있는데 지수는 보통 각 칸을 1~81로 번호를 붙여서 구별한다. 가장 왼쪽 위의 (1행 1열의)칸이 1번 칸이 되고 그 이후 오른쪽으로 가면서 번호를 하나 증가시킨다. 그리고 해당 행이 다 차면 다음줄로 넘어가 이를 반복한다.

스도쿠는 게임의 특징상 각 행과 각 열 그리고 3x3모양의 9칸으로 구성된 그룹에 1~9의 숫자가 하나씩만 들어가야 한다는 규칙이 있다. 그래서 각 칸에 숫자를 배치할 때 그 칸이 속한 그룹을 파악하고 규칙에 맞는지 확인하는 작업이 필요하다. 하지만 지수와 같이 스도쿠 게임을 하고 있는 예인이는 지수가 말하는 칸의 번호로 그 칸이 몇행 몇열에 위치한 칸이고 또 몇 번 그룹에 속한 칸인지 매번 계산하기가 힘이 들었다. 하지만 소심한 예인이는 자신보다 언니인 지수에게 이를 말하지 못하고 당신에게 도움을 요청했다. 지수가 말한 칸의 번호가 주어질 때, 그 칸이 속한 행, 열, 그룹의 번호를 계산해주는 프로그램을 작성해보자.

## Input

이 문제는 여러개의 테스트케이스로 구성되어 있다.

첫 줄에는 테스트케이스의 수 **T**가 주어진다. **T**는 1이상 100이하의 자연수 중 하나이다.

각 테스트케이스에는 지수가 말한 칸의 번호가 1부터 81까지의 자연수로 공백없이 한 줄에 주어진다.

## Output

모든 테스트케이스 별로 각 테스트케이스를 두 줄로 출력한다.

- 테스트케이스의 첫 줄에는 `Case #%d:` 형식으로 테스트케이스의 번호를 출력한다. 대소문자와 공백에 주의한다.
- 테스트케이스의 두 번째 줄에는 지수가 말한 칸의 행, 열, 그룹 번호를 공백으로 구분된 세 개의 자연수로 출력한다. `r c g`

## 입 출력 예시

**입력**

```
5
1
2
3
4
5
```

**출력**

```
Case #1:
1 1 1
Case #2:
1 2 1
Case #3:
1 3 1
Case #4:
1 4 2
Case #5:
1 5 2
```

## Solve

```java
import java.io.*;
import java.lang.*;
import java.util.*;


public class Main {
	public static final Scanner scanner = new Scanner(System.in);

	public static void testCase(int caseIndex) {

		SudokuBoard board = new SudokuBoard();
		int index = scanner.nextInt();

		// 칸의 번호로 행, 열, 그룹 번호를 계산한다
		int row =   board.getRowByIndex(index);
		int col =   board.getColByIndex(index);
		int group=  board.getGroupByIndex(index);

		// 정답을 출력한다
		System.out.printf("Case #%d:\n", caseIndex);
		System.out.printf("%d %d %d\n", row, col, group);
	}

	public static void main(String[] args) throws Exception {
		int caseSize = scanner.nextInt();

		for (int caseIndex = 1; caseIndex <= caseSize; caseIndex += 1) {
			testCase(caseIndex);
		}
	}

}

class SudokuBoard{
	static final int MAX_ROW = 9;
	static final int MAX_COL = 9;

	// 칸의 번호로 행의 번호를 계산하는 메소드
	public int getRowByIndex(int index)
	{
		return (index-1)/9 + 1;
	}

	// 칸의 번호로 열의 번호를 계산하는 메소드
	public int getColByIndex(int index)
	{
		return (index-1)%9 + 1;
	}

	// 칸의 번호로 그룹 번호를 계산하는 메소드
	public int getGroupByIndex(int index)
	{
		int r = getRowByIndex(index);
		int c = getColByIndex(index);
		return getGroupByPosition(r, c);
	}

	// 칸의 위치 (행, 열)로 그룹 번호를 계산하는 메소드
	public int getGroupByPosition(int row, int column)
	{
		int left = (row-1)/3 * 3 + 1;
 		int offset = (column-1)/3;
		return left + offset;
	}

	// 칸의 위치 (행, 열)로 칸의 번호를 계산하는 메소드
	public int getIndexByPosition(int row, int column)
	{
		return (row-1)*9;
	}
}

```
