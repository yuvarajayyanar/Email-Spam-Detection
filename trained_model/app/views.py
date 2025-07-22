from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .train_model import classifier
from django.contrib import messages
import pickle

classifier = pickle.load(open(r'E:\Django\Email_Spam\trained_model.sav','rb'))

def predict(text):
    prediction = classifier.predict(text)
    return prediction[0]

def home(request):
    if request.method == 'POST':
        email = request.POST['email']
        text = request.POST['content']
        prediction = predict(text)  # Assuming predict(text) returns an integer, e.g., 0 or 1
        print("Predicted:", prediction)
        return render(request, 'email_page2.html', {'prediction': prediction})
    return render(request, 'email_page2.html')