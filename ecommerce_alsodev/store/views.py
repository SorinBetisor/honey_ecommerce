from django.shortcuts import render
from .models import *
from django.http import JsonResponse

from django.shortcuts import redirect

# def redirect_view(request):
#     response = redirect('/redirect-success/')
#     return response

# Create your views here.
def store(request):
    context= {}
    return render(request, 'store/store.html', context)

def desprenoi(request):
    context={}
    return render(request, 'store/desprenoi.html', context)

def magazin(request):
    products= Product.objects.all()
    context= {'products':products}
    return render(request, 'store/magazin.html', context)

def checkout(request): #AICI
    if request.method=="POST":
        cout_name = request.POST["cout-nume"]
        cout_email = request.POST["cout-email"]
        cout_adresa1 = request.POST["cout-adresa1"]
        cout_adresa2 = request.POST["cout-adresa2"]
        cout_oras = request.POST["cout-oras"]
        cout_codpostal = request.POST["cout-codpostal"]
        cout_numar = request.POST["cout-numar"]
        cout_total=request.POST.get("cout-total")
        
        comanda=ShippingAddress()
        comanda.name= cout_name
        comanda.city= cout_oras
        comanda.number= cout_numar
        comanda.email= cout_email
        comanda.zipcode= cout_codpostal
        comanda.address1= cout_adresa1
        comanda.address2= cout_adresa2
        comanda.total= cout_total
        if comanda.name!="" and comanda.city!="" and comanda.number!="" and comanda.zipcode!="" and comanda.email!="" and comanda.address1!="":

            comanda.save()
        return redirect("multumim")
    else:
        return render(request, 'store/checkout.html')

def cos(request):
    context= {}
    return render(request, 'store/cos.html', context)

def noutati(request):
    context= {}
    return render(request, 'store/noutati.html', context)

def multumim(request):
    context= {}
    return render(request, 'store/multumim.html', context)

def contact(request):
    if request.method=="POST":
        message_name = request.POST['message-name']
        message_email = request.POST['message-email']
        message = request.POST['message']
        obj=Customer()
        obj.name=message_name
        obj.email=message_email
        obj.message=message
        if obj.name!="" and obj.email!="" and obj.message!="":
            obj.save()
        return redirect("store")
    else:
        return redirect("store")

def checkInt(str):
    try:
        int(str)
        return True
    except ValueError:
        return False

def searchresults(request):
    if request.method=="POST":
        searched= request.POST.get('searched')
        if searched:
            if (searched[0]=="#") or (checkInt(searched)):
                results= Product.objects.filter(articol__contains=searched)
            else:
                results= Product.objects.filter(name__contains=searched)
        if not searched:
            results=""
        return render(request, 'store/searchresults.html', {'searched': searched,"results":results})
    else:
        context= {}
        return render(request, 'store/searchresults.html', context)


def updateItem(request):
    return JsonResponse('Item was added', safe=False)

def redirect_view(request):
    response = redirect('store/store.html')
    return response