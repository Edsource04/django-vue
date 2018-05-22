from django.db import models

# Create your models here.

class Client(models.Model):
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=25)
    socialId = models.CharField(max_length=11)
    address = models.CharField(max_length=100)

    def __str__(self):
        return '{0} {1}'.format(self.firstName, self.lastName)
