from rest_framework import serializers
from .models import Food, Menu, Calc

class FoodSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = Food
        fields = ('id', 'name', 'content', 'cost', 'created_at', 'updated_at')

class MenuSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = Menu
        fields = (
            'id', 'name', 'content',
            'food_id1', 'food_number1', 
            'food_id2', 'food_number2', 
            'food_id3', 'food_number3', 
            'food_id4', 'food_number4', 
            'food_id5', 'food_number5', 
            'created_at', 'updated_at'
            )

class CalcSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M", read_only=True)

    class Meta:
        model = Calc
        fields = (
            'id', 'title', 'cost',
            'menu_id1', 'menu_id2', 'menu_id3', 'menu_id4', 'menu_id5', 
            'food_id1', 'food_number1', 
            'food_id2', 'food_number2', 
            'food_id3', 'food_number3', 
            'food_id4', 'food_number4', 
            'food_id5', 'food_number5', 
            'food_id6', 'food_number6', 
            'food_id7', 'food_number7', 
            'food_id8', 'food_number8', 
            'food_id9', 'food_number9', 
            'food_id10', 'food_number10', 
            'food_id11', 'food_number11', 
            'food_id12', 'food_number12', 
            'food_id13', 'food_number13', 
            'food_id14', 'food_number14', 
            'food_id15', 'food_number15', 
            'food_id16', 'food_number16', 
            'food_id17', 'food_number17', 
            'food_id18', 'food_number18', 
            'food_id19', 'food_number19', 
            'food_id20', 'food_number20', 
            'food_id21', 'food_number21', 
            'food_id22', 'food_number22', 
            'food_id23', 'food_number23', 
            'food_id24', 'food_number24', 
            'food_id25', 'food_number25',
            'created_at', 'updated_at'
            )