from rest_framework import serializers

from . models import Inbox

class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = [
            'id',
            'emailAddr',
            'subject',
            'content',
            'recvTime',
        ]