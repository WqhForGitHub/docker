import os
from django.http import JsonResponse
from django.urls import path
from django.conf import settings

# 最小 Django 配置（无需完整项目结构）
settings.configure(
    DEBUG=True,
    ALLOWED_HOSTS=["*"],
    ROOT_URLCONF=__name__,
    SECRET_KEY="demo-secret-key",
)


def index(request):
    return JsonResponse({"app": "Django Demo", "status": "running"})


def health(request):
    return JsonResponse({"status": "healthy"})


urlpatterns = [
    path("", index),
    path("health/", health),
]

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(["manage.py", "runserver", "0.0.0.0:8000"])
