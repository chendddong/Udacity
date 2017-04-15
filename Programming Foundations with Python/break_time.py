# -*- coding: utf-8 -*-
from PIL import Image
import webbrowser
import subprocess
import time
import os



total_breaks = 24;
break_count = 0;

#The notifier function
def notify(title, subtitle, message, icon):
    t = '-title {!r}'.format(title)
    s = '-subtitle {!r}'.format(subtitle)
    m = '-message {!r}'.format(message)
    i = '-icon {!r}'.format(icon)
    os.system('terminal-notifier {}'.format(' '.join([m, t, s, i])))


print("This is program started on" + time.ctime())
while (break_count < total_breaks):
    # Calling the function
    notify(title    = 'Break Alert',
           subtitle = 'from QuanQuan',
           message  = 'Chen Dang, It is time for a break!',
           icon = '/Users/Peter/Desktop/bob.png')  
    print("This is the start of the break --- " + time.ctime())
    print("")
    webbrowser.open("https://www.youtube.com/watch?v=q0FylXxDGII")
    time.sleep(10 * 60)
    img = Image.open('/Users/Peter/Desktop/bob.jpg')
    img.show()
    print("This is the start of the work --- " + time.ctime())
    print("")
    time.sleep(60 * 60)
    #subprocess.call(["/usr/bin/open", "-W", "-n", "-a", "/Applications/ITunes.app"])
    break_count += 1



