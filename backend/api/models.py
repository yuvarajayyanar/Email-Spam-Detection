from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# Create your models here.
class Inbox(models.Model):
    emailAddr = models.EmailField(null=False)
    subject = models.CharField(max_length=50)
    content = models.TextField(null=True)
    recvTime = models.DateTimeField(auto_now_add=True)

class Sent(models.Model):
    emailAddr = models.EmailField(null=False)
    subject = models.CharField(max_length=50)
    content = models.TextField()
    sentTime = models.DateTimeField(auto_now_add=True)
