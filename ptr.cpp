#include<iostream>
using namespace std;
int main(){
    int a=103;
    int *p=&a;
    cout<<"Address of pointer p : "<<&p<<endl;
    cout<<p<<endl;
    cout<<"Address of a : "<<&a<<endl;
    cout<<"Value pointed by p : "<<*p<<endl;
    int **p1=&p;
    cout<<"*p1 : "<<*p1<<endl;
    cout<<"**p1 : "<<**p1<<endl;

    return 0;
}