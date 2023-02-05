import requests
infos="welcome - algeria grade"
commune=""
for info in infos.split()[2:] :
    commune=commune+info+" "
    print(info)
print(commune)
chaine="welcome find kilo"
print(chaine.strip())
'''
img_url = 'https://www.annodz.com/medias/images/annonces/03dbffc44f8e76ecea5431842a3add96_460.jpg'
response = requests.get(img_url)
print(response.status_code)
if response.status_code:
    print("welcome")
    fp = open('image.jpg', 'wb')
    fp.write(response.content)
    fp.close()
else :
    print("incorrect link")
'''