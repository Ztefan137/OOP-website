#include <iostream>
using namespace std;

class Student {
public:
    string nume;
    int varsta;
};

int main() {
    Student s1;
    s1.nume = "Andrei";
    s1.varsta = 20;
    return 0;
}