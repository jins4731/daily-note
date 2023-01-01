# 데스티니

## Question

감수성이 풍부한 명은이는 매일 밤 하늘을 바라 본다. 어느 날 명은이는 태양을 중심으로 공전하는 지구와 또 그 지구를 중심으로 공전하는 달의 관계를 보며 깊은 고뇌에 빠졌다. 그 천체들은 계속 주위를 멤돌면서도 결국 일정거리 이상으로 가까워 질 수 없는 운명이기 때문이다. 명은이는 다음과 같은 생각을 하게 되었다.

_"지금 하늘에 떠 있는 천체들 중 서로 가장 가까이 있는 쌍은 무엇일까?"_

감수성이라곤 찾아볼 수 없는, 뼛속까지 이과인 당신은 실제로 천체들간의 거리를 측정하여 가장 가까이 있는 두 천체를 명은이에게 알려주려고 한다. 가장 가까이 위치한 두 천체를 찾아보자.

## Input

첫 줄에는 하늘에 떠 있는 천체의 수 **_N_**이 주어진다. **_N_**은 2이상 1,000이하의 자연수이다.

그 후 총 **_N_**줄에 걸쳐서 각 줄에는 한 천체의 위치를 좌표로 나타내는 두 정수가 주어진다.

천체의 정보를 포함하는 **_N_**개의 각 줄에는 천체의 ***x***좌표와 **_y_**좌표를 나타내는 두 정수가 공백으로 구분되어 주어진다. 모든 좌표는 절대값이 1만 이하인 정수이다. 모든 천체의 좌표는 서로 다르다.

## Output

첫 줄에는 가장 가까운 두 천체의 거리를 소수점 두 번째 자리에서 반올림하여 첫 번째 자리까지 출력한다.

두 번째 줄에는 그 거리만큼 떨어진 천체 쌍의 수를 출력한다.

## 풀이

```java
import java.util.*;
import java.lang.*;
import java.io.*;

public class Main{
	public static final Scanner scanner = new Scanner(System.in);
	public static void main(String args[]){
		int n = scanner.nextInt();
		Point2D[] point2DArray = new Point2D[n];
		double min = 99999;
		int count = 0;

		for(int i=0; i<n; i++){
			int x = scanner.nextInt();
			int y = scanner.nextInt();

			Point2D point = new Point2D(x, y);
			point2DArray[i] = point;
		}

		for(int i=0; i<n; i++){
			Point2D point = point2DArray[i];
			for(int j=0; j<i; j++){
				Point2D target = point2DArray[j];
				double distance = point.getDistance(target);
				if(distance<min){
					count = 1;
					min = distance;
				}else if(distance == min){
					count++;
				}
			}
		}


		System.out.printf("%.1f", min);
		System.out.println();
		System.out.println(count);
	}

}

class Point2D{
	int x = 0;
	int y = 0;
	public Point2D(int x, int y){
		this.x = x;
		this.y = y;
	}
	public double getSquaredNum(Point2D target){
		double distanceX = Math.abs(this.x-target.x);
		double distanceY = Math.abs(this.y-target.y);

		return distanceX * distanceX + distanceY * distanceY;
	}
	public double getDistance(Point2D target){
		double result = getSquaredNum(target);
		return Math.sqrt(result);
	}
}

```
