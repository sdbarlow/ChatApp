from django.db import models

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=15)
    img = models.CharField(max_length=254)
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.email} {self.password} {self.img} {self.is_online}"