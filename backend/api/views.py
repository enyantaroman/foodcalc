from rest_framework import viewsets
from .models import Food, Menu, Calc
from .serializers import FoodSerializer, MenuSerializer, CalcSerializer

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class CalcViewSet(viewsets.ModelViewSet):
    queryset = Calc.objects.all()
    serializer_class = CalcSerializer