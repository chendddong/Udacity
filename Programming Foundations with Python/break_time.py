# -*- coding: utf-8 -*-
from PIL import Image
import webbrowser
import subprocess
import time
import os



total_breaks = 48;
break_count = 0;

#The notifier function
def notify(title, subtitle, message, icon):
    t = '-title {!r}'.format(title)
    s = '-subtitle {!r}'.format(subtitle)
    m = '-message {!r}'.format(message)
    i = '-icon {!r}'.format(icon)
    os.system('terminal-notifier {}'.format(' '.join([m, t, s, i])))


print("This is program started on" + time.ctime())
while (True):
    # Calling the function
    notify(title    = 'Break Alert',
           subtitle = 'from CunCun',
           message  = 'Nan Lei, It is time for a break!',
           icon = '/Users/Peter/Desktop/IMG_0085.JPG')
    print("This is the start of the break --- " + time.ctime())
    print("")
    webbrowser.get("open -a /Applications/Google\ Chrome.app %s").open("https://www.youtube.com")
    # webbrowser.open("")
    # break time
    time.sleep(10*60)
    img = Image.open('/Users/Peter/Pictures/CC.JPG')
    img.show()
    print("This is the start of the work --- " + time.ctime())
    print("")
    # work time
    time.sleep(50*60)
    #subprocess.call(["/usr/bin/open", "-W", "-n", "-a", "/Applications/ITunes.app"])
    #break_count += 1



