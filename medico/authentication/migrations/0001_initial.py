# Generated by Django 3.1.3 on 2021-12-06 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=20)),
                ('last_name', models.CharField(blank=True, max_length=20)),
                ('gender', models.CharField(default='female', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=20)),
                ('last_name', models.CharField(blank=True, max_length=20)),
                ('gender', models.CharField(default='female', max_length=10)),
                ('specialization', models.CharField(max_length=50, verbose_name='Specialization')),
                ('info', models.TextField(blank=True, max_length=1250, verbose_name='Information')),
                ('address', models.CharField(blank=True, max_length=15, null=True)),
                ('npi_number', models.CharField(max_length=12, null=True)),
                ('state_license_number', models.CharField(max_length=12, null=True)),
                ('bio', models.IntegerField(default='0000$')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField(verbose_name='Start time')),
                ('end_time', models.TimeField(verbose_name='End time')),
                ('date', models.DateField(verbose_name='Date')),
                ('customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='authentication.customer')),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.doctor')),
            ],
        ),
    ]
