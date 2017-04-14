import webbrowser
import subprocess
import time

total_breaks = 3;
break_count = 0;

print("This is program started on" + time.ctime())
while (break_count < total_breaks):
    print("This is start of the loop")
    time.sleep(10)
    webbrowser.open("https://www.youtube.com/watch?v=q0FylXxDGII")
    subprocess.call(["/usr/bin/open", "-W", "-n", "-a", "/Applications/ITunes.app"])
    break_count += 1
