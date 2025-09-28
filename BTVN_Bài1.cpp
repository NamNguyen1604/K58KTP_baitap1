#include <iostream>
#include <string>
#include <cctype>
using namespace std;

string caesar(const string &s, int k) {
    string r;
    k = ((k % 26) + 26) % 26; // d?m b?o k luôn duong trong kho?ng 0-25
    for (size_t i = 0; i < s.size(); ++i) {
        unsigned char c = s[i];
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            r += char((c - base + k) % 26 + base);
        } else {
            r += c;
        }
    }
    return r;
}

int main() {
    string text;
    int k, choice;

    cout << "Nhap chuoi: ";
    getline(cin, text);
    cout << "Nhap khoa (0-25): ";
    cin >> k;

    cout << "\nChon: \n1 - Encrypt\n2 - Decrypt\n3 - Encrypt & Show result\n";
    cout << "Lua chon: ";
    cin >> choice;

    switch (choice) {
        case 1:
            cout << "Encrypted: " << caesar(text, k) << endl;
            break;
        case 2:
            cout << "Decrypted: " << caesar(text, 26 - (k % 26)) << endl;
            break;
        case 3: {
            string enc = caesar(text, k);
            cout << "Encrypted: " << enc << endl;
            cout << "Decrypted: " << caesar(enc, 26 - (k % 26)) << endl;
            break;
        }
        default:
            cout << "Lua chon khong hop le!" << endl;
    }

    return 0;
}
