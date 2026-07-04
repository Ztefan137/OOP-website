#include <iostream>
using namespace std;
int main(){
    int a=6;
    int b=7;
    const int* a_ptr=&a;
    int* const b_ptr=&b;
    (*a_ptr)++;
    (*b_ptr)++;
    std::cout<<a_ptr;
    return 0;
}