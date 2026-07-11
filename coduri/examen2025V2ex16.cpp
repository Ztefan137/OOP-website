#include <iostream>
using namespace std;
class B {
public:
    virtual B* fv() { return this;}
    int adun(int p) { return p+1; }
};
class D: public B {
public:
    virtual D* fv() { return this; }
    int adun(int p) { return p+2; }
};
int main() {
    B* p=new D;
    int x=p->fv()->adun(5);
    cout<<x;
    return 0;
}