#include <iostream>
using namespace std;
class B {
protected:
    static int x;
    int i;
public:
    B(){ x++; i = 1; }
    ~B() { x--; }
    static int get_x() { return x; }
    int get_i() { return i; }
};
int B::x;
class D : public B {
public:
    D() { x++; }
    ~D() { x--; }
};
int f(B* q)
{ return (q->get_x()) + 1; }
int main()
{
    B* p = new B[10]; // x=10
    cout << f(p); // 11
    delete[] p; // x=0
    p = new D; // Constr B: x=1, Constr D: x=2
    cout << f(p); // 3
    delete p; // x=1, nu se apeleaza Destr D pt ca nu avem virtual ~B()
    cout << D::get_x(); // 1
    return 0;
}
