import os
import base64

def f(x):
    y = ""
    for i in x:
        y += chr(ord(i) + 1)
    return y

def g(y):
    z = ""
    for i in y:
        z += chr(ord(i) - 1)
    return z

def main():
    print("Welcome to super secure file locker!")
    fname = input("Enter file name: ")
    if not os.path.exists(fname):
        print("no such file")
        return
    with open(fname) as f:
        data = f.read()
    choice = input("e for encrypt, d for decrypt: ")
    if choice == "e":
        encoded = f(data)
        with open(fname + ".enc", "w") as f:
            f.write(encoded)
    elif choice == "d":
        decoded = g(data)
        with open(fname.replace(".enc", ""), "w") as f:
            f.write(decoded)
    else:
        print("invalid option")

main()
main() # should not call again
