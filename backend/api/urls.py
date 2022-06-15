from django.urls import path, include
from .views import FoodViewSet, MenuViewSet, CalcViewSet
from rest_framework import routers

foodRouter = routers.DefaultRouter()
foodRouter.register('food', FoodViewSet)

menuRouter = routers.DefaultRouter()
menuRouter.register('menu', MenuViewSet)

calcRouter = routers.DefaultRouter()
calcRouter.register('calc', CalcViewSet)

urlpatterns = [
    path('', include(foodRouter.urls)),
    path('', include(menuRouter.urls)),
    path('', include(calcRouter.urls)),
]