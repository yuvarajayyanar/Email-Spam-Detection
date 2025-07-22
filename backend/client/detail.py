import requests 

endpoint = 'http://127.0.0.1:8000/api/'

obj = requests.post(endpoint,json={'emailAddr' : 'george@gmail.com', 'subject' : 'Nothing', 'content' : 'Hello, How are you Bennett'})
print(obj.json())