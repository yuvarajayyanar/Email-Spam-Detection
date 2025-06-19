from django.urls import path

from . import views

urlpatterns = [
    path('',views.InboxCreateAPIView.as_view()),
    path('<int:pk>/',views.InboxDetailAPIView.as_view()),
    path('<int:pk>/delete/',views.InboxDestroyAPIView.as_view())
]