# 픽셀 수 세기

## Question

컴퓨터는 이미지 정보를 2차원 배열 형태로 저장한다. 하지만 현실의 사물들의 모양을 그대로 저장하는 것은 불가능하다. 정밀한 이미지를 저장할수록 더 많은 공간과 연산량을 필요로 하기 때문이다. 영상을 구성하는 하나의 픽셀은 정사각형 형태로 존재하며 이 픽셀들이 모여 2차원 배열의 모양을 구성하게 된다.
반지름이 5픽셀인 원을 비트맵 형태로 저장하면 위와 같다. 그림에서 알 수 있는 것 처럼 실제로 원에 포함되는 픽셀들은 아래와 같은 특징을 가진다.

- 네 점이 모두 원 안에 존재하거나
- 원과 겹치는 영역이 존재하면서 두개 이상의 변이 원의 외곽선과 교차한다.

그렇다면 반지름이 임의의 **_R_**픽셀인 원이 포함하는 픽셀의 수를 계산하는 프로그램을 작성해보자.

## Input

이 문제는 여러 개의 테스트케이스로 구성되어있다. 첫 줄에는 테스트케이스의 수를 나타내는 1이상 10이하의 자연수 **_T_** 가 주어진다.

각 테스트 케이스는 한 줄로 구성되며 계산하고자 하는 원의 반지름의 픽셀 수 **_R_** 이 주어진다. **_R_** 은 1이상 10만 이하의 자연수이다.

## Output

각 테스트케이스를 두 줄에 걸쳐서 출력한다.

- 테스트케이스의 첫 줄에는 테스트 케이스의 번호를 `#1, #2, #3, ...` 형태로 출력한다
- 테스트케이스의 두 번째 줄에는 반지름이 **_R_** 픽셀인 원이 포함하는 픽셀의 수를 출력한다.

## Solve

```java
import java.util.*;
import java.lang.*;
import java.io.*;

class Main{
	public static final Scanner scanner = new Scanner(System.in);

	public static void main(String args[]){
		int n = scanner.nextInt();
		for(int i=0; i<n; i++){
			testCase(i);
		}
	}

	public static void testCase(int num){
		long r = scanner.nextInt();
		long count = 0;
		long j = r-1;
		for(long i=0; i<r; i++){
			for(; j>=0; j--){
				if(isInside(r, i, j)){
					count += (j+1);
					break;
				}
			}
		}
		System.out.println("#" + (num+1));
		System.out.println(count * 4);
	}

	public static boolean isInside(long R, long x, long y){
		long sqd = x *x + y * y ; //거리의 제곱
		if ( sqd < R * R )  //반지름의 제곱
		{   //원점과의 거리가 반지름보다 작다면, 원 안에 있다.
			return true;
		}
		return false;
	}
}
```
