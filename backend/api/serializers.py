from rest_framework import serializers 
class UserPublicSerializer(serializers.Serializer):
    email=serializers.CharField(read_only=True)
    id=serializers.IntegerField(read_only=True)