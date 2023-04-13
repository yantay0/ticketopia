from django.shortcuts import render
from django.http import JsonResponse

from event.models import Category, Event


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def event_list(request):
    events = Event.objects.all()
    events_json = [e.to_json() for e in events]
    return JsonResponse(events_json, safe=False)


