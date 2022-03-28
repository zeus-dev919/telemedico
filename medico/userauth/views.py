from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import permission_required
# from .forms import RegisterUserForm
# from .forms import RegisterDoctorUserForm
# from .forms import RegisterModeratorUserForm
from django.http import Http404, HttpResponse
from django.contrib.auth.models import Group

from django.views.decorators.csrf import csrf_exempt
from .models import CapturePost


def register(request):
    if request.method == 'POST':
        form = RegisterUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = RegisterUserForm()

    return render(request, 'userauth/register.html', {'form': form, 'user_type': 'User'})


@login_required(login_url='login')
@permission_required('appoint.add_doctor', raise_exception=True)
def register_doctor(request):
    if request.method == 'POST':
        form = RegisterDoctorUserForm(request.POST)
        if form.is_valid():
            new_doctor = form.save()
            group_doctor = Group.objects.get(name='DoctorGroup')    # May not working if group has another name
            new_doctor.groups.add(group_doctor)
            return redirect('index')
        else:
            raise Http404('Form is not valid')
    else:
        form = RegisterDoctorUserForm()

    return render(request, 'userauth/register.html', {'form': form, 'user_type': 'Doctor'})


@login_required(login_url='login')
@permission_required('appoint.add_moderator', raise_exception=True)
def register_moderator(request):
    if request.method == 'POST':
        form = RegisterModeratorUserForm(request.POST)
        if form.is_valid():
            new_moderator = form.save()
            group_doctor = Group.objects.get(name='DoctorGroup')        # May not working if group has another name
            group_moderator = Group.objects.get(name='ModeratorGroup')  # May not working if group has another name
            new_moderator.groups.add(group_doctor)
            new_moderator.groups.add(group_moderator)
            return redirect('index')
        else:
            raise Http404('Form is not valid')
    else:
        form = RegisterModeratorUserForm()

    return render(request, 'userauth/register.html', {'form': form, 'user_type': 'Moderator'})


@csrf_exempt
def get_post_data(request):
    if request.method == 'POST':
        a= CapturePost()
        a.postdata = request.body.decode('utf-8')
        a.save()
        return HttpResponse(status=200)
    else:
        return HttpResponse("not post")

def change_pass(request, change_pass_code):
    return HttpResponse('Change pass code is '+ change_pass_code)


def reactivate(request, activation_mail):
    return HttpResponse('Your account is activated' + activation_mail)
