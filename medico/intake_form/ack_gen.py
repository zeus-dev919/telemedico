import sys
import os
import time
from random import randint
import uuid
import json


from agora_token_builder import RtcTokenBuilder


Role_Attendee = 0 # depreated, same as publisher
Role_Publisher = 1 # for live broadcaster
Role_Subscriber = 2 # default, for live audience
Role_Admin = 101 # deprecated, same as publisher

channels = str(uuid.uuid4())
appID = "c7ee73a5d0d4443288bc52b2bf7eadb1"
appCertificate = "5CFd2fd1755d40ecb72977518be15d3b"
channelName = channels
# uid = 2882341273
userAccount = "KunalKaushik"
expireTimeInSeconds = 2592000
currentTimestamp = int(time.time())
privilegeExpiredTs = currentTimestamp + expireTimeInSeconds


def main():
    # token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, Role_Attendee, privilegeExpiredTs)
    # print("Token with int uid: {}".format(token))
    token = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, userAccount, Role_Attendee, privilegeExpiredTs)
    #print("Token with user account: {}".format(token))
    return [token, channelName]


if __name__ == "__main__":
    main()
