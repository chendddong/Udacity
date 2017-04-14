# -*- coding: utf-8 -*-

#from twilio.rest import TwilioRestClient
from twilio import rest

# Your Account SID from twilio.com/console
account_sid = "AC480acfc29f09d5a312ce539117e0b9f3"
# Your Auth Token from twilio.com/console
auth_token  = "28d4339fe4dc8fa95153cb13116126ce"

#client = TwilioRestClient(account_sid, auth_token)
client = rest.TwilioRestClient(account_sid, auth_token)


message = client.messages.create(
    to="+19088017841", 
    from_="+16506668869",
    body="你是犄角! 回复：1. 好吧。 2. 你是犄角！")

print(message.sid)