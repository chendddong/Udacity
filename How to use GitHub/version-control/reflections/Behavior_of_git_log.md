# Behavior of git log

git log lists the most recent commit first, as you can verify by checking the commit dates. The middle commit probably contains the code for the mute button, since the commit message indicates that the mute button was added in that commit. The top commit also probably contain the mute button, since that commit is more recent and nothing suggests the mute button has been removed. The bottom commit probably does not contain the mute button, since that commit was created before the commit that added the mute button.

To summarize:

* commit 7be5a12f1567866b0d77ccdf2055d1a33831da78 (the top commit listed)

Yes, probably contains the mute button.
* commit 06d72e1f95f046002ec46f41cf71957227111141 (the middle commit listed)

Yes, probably contains the mute button.
* commit 3d4d45b246aad6a1cd0afaf7cfae26966110727e (the bottom commit listed)

No, probably does not contain the mute button.
git log output
For reference, here is the git log output again:

commit 7be5a12f1567866b0d77ccdf2055d1a33831da78
Author: Ellison Leão <el@gmail.com>
Date:   Fri Jul 11 12:56:26 2014 -0300

    Add sound for the wing.

commit 06d72e1f95f046002ec46f41cf71957227111141
Author: Ellison Leão <el@gmail.com>
Date:   Wed Jul 9 23:42:55 2014 -0300

    Add mute button.

commit 3d4d45b246aad6a1cd0afaf7cfae26966110727e
Author: Ellison Leão <el@gmail.com>
Date:   Mon Jul 7 17:35:47 2014 -0300

    Fix leaderboard button