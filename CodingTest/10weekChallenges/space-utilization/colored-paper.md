# 색종이

## Question

가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역 넓이를 구하는 프로그램을 작성하시오.

예를 들어 흰색 도화지 위에 세 장의 검은색 색종이를 그림과 같은 모양으로 붙였다면 검은색 영역의 넓이는 260이 된다.

## Input

첫 줄에는 테스트케이스의 수 **_T_**가 주어진다.

각 테스트케이스의 첫 줄에는 색종이의 수 **_N_**이 1이상 100이하의 자연수로 공백없이 주어진다.

이후 **_N_**줄에 걸쳐서 각 색종이의 정보가 공백으로 구분된 90보다 작거나 같은 두 자연수로 주어진다.

- 첫 번째 숫자는 색종이의 왼쪽 변과 도화지의 왼쪽 벽 사이의 거리이다
- 두 번째 숫자는 색종이의 아랫쪽 변과 도화지의 아랫쪽 변 사이의 거리이다.
- 모든 색종이는 도화지의 영역을 벗어나지 않는다.

## 입 출력 예시

**입력**

```
2
3
37
157
52
4
37
52
157
1314
```

**출력**

```
260
336
```

## Output

각 테스트케이스에 대하여 색종이가 차지하는 넓이를 한 줄에 공백없는 정수로 출력한다.

## Solve

- Idea
  색종이에 의해 덮여진 단위 정사각형의 개수가 곧 색종이들의 넓이가 된다.
  문제를 '카운팅' 문제로 바꿨다!
  그리고 카운팅 해야할 대상 '단위 정사각형' 은 유한하며 이산적이다.

```java
import java.util.*;
import java.lang.*;
import java.io.*;

class Main{
	public static final Scanner scanner = new Scanner(System.in);
	public static final BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
	public static final int SPACE_SIZE = 100;

	public static void main(String[] args) throws Exception{
		int caseIndex = scanner.nextInt();

		for(int i=0; i<caseIndex; i++){
			int space[][] = new int[SPACE_SIZE][SPACE_SIZE];
			int area = 0;
			int n = scanner.nextInt();
			for(int k=0; k<n; k++){
				int left = scanner.nextInt();
				int bottom = scanner.nextInt();
				Paper paper = new Paper(left, bottom);
				fillSpace(paper, space);
			}

			for(int k=0; k<SPACE_SIZE; k++){
				for(int j=0; j<SPACE_SIZE; j++){
					if(space[k][j] >= 1){
						area++;
					}
				}
			}
			writer.write(Integer.toString(area) + "\n");
			space = null;
		}
		writer.flush();
		writer.close();
	}

	public static void fillSpace(Paper paper, int space[][]){
		for(int i=paper.left; i<=paper.right; i++){
			for(int j=paper.bottom; j<=paper.top; j++){
				space[i][j] += 1;
			}
		}
	}
}

class Paper{
		int left;
		int right;
		int bottom;
		int top;
		public Paper(int left, int bottom){
			this.left = left;
			this.right = left + 9;
			this.bottom = bottom;
			this.top = bottom + 9;
		}
	}
```
