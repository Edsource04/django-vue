from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse

# Create your views here.
from .models import Client

def index(request):
    clients = Client.objects.all()
    context = {
        'clients' : clients
    }
    return render(request, "presto/index.html", context=context)

def clients(request):
    clients = serialize("json", Client.objects.all())
    return HttpResponse(clients, content_type="application/json")