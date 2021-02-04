#include<iostream>
using namespace std;

int r(int n, int cnt)
{
	if(n == 1 ) return cnt;
	else
	{
		if(n%3==0) return r(n/3, cnt+1);
		if(n%2==0) return r(n/2, cnt+1);
		else return r(n-1,cnt+1);
	}
}

int main()
{
	int n;
	cin>>n;
	int cn = r(n,0);
	return 0;
}