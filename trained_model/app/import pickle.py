import pickle

classifier = pickle.load(open(r'E:\Django\Email_Spam\trained_model.sav','rb'))
response = classifier.predict("Hello How are you I am fine. I don't know what should I say")
print(response)