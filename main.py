import webbrowser

print("Do you want to open the app?")
choice = input("[y/n] ")

if choice == 'y':
    webbrowser.open('http://localhost:3000/')