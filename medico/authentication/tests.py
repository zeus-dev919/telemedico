import datetime
from django.test import TestCase
from .models import Doctor, Appointment


class AppointmentModelTests(TestCase):

    def test_is_outdated_with_next_year_appointment(self):
        """
            is_outdated() should return False for appointment which in the next year
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() + datetime.timedelta(days=365)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_week_appointment(self):
        """
            is_outdated() should return False for appointment which in the next week
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() + datetime.timedelta(weeks=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_day_now_time_appointment(self):
        """
            is_outdated() should return False for appointment which in the next day
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() + datetime.timedelta(days=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_day_appointment(self):
        """
            is_outdated() should return False for appointment which in the next day at 12:00
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.time(hour=12, minute=0)
        en_t = datetime.time(hour=12, minute=30)
        da = datetime.datetime.today().date() + datetime.timedelta(days=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_hour_appointment(self):
        """
            is_outdated() should return False for appointment which in the next hour
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() + datetime.timedelta(hours=1)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(hours=1, minutes=30)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_half_hour_appointment(self):
        """
            is_outdated() should return False for appointment which in the next half hour
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() + datetime.timedelta(minutes=30)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(hours=1)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_minute_appointment(self):
        """
            is_outdated() should return False for appointment which in the next minute
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() + datetime.timedelta(minutes=1)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(minutes=31)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_next_second_appointment(self):
        """
            is_outdated() should return False for appointment which in the next second
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() + datetime.timedelta(seconds=1)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(minutes=30, seconds=1)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), False)

    def test_is_outdated_with_past_year_appointment(self):
        """
            is_outdated() should return True for appointment which in the past year
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() - datetime.timedelta(days=365)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_week_appointment(self):
        """
            is_outdated() should return True for appointment which in the past week
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() - datetime.timedelta(weeks=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_day_now_time_appointment(self):
        """
            is_outdated() should return True for appointment which in the past day
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.datetime.today().time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date() - datetime.timedelta(days=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_day_appointment(self):
        """
            is_outdated() should return True for appointment which in the past day at 12:00
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = datetime.time(hour=12, minute=0)
        en_t = datetime.time(hour=12, minute=30)
        da = datetime.datetime.today().date() - datetime.timedelta(days=1)
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_hour_appointment(self):
        """
            is_outdated() should return True for appointment which in the past hour
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() - datetime.timedelta(hours=1)).time()
        en_t = (datetime.datetime.today() - datetime.timedelta(minutes=30)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_half_hour_appointment(self):
        """
            is_outdated() should return True for appointment which in the past half hour
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() - datetime.timedelta(minutes=30)).time()
        en_t = datetime.datetime.today().time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_minute_appointment(self):
        """
            is_outdated() should return True for appointment which in the past minute
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() - datetime.timedelta(minutes=1)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(minutes=29)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        self.assertIs(app.is_outdated(), True)

    def test_is_outdated_with_past_second_appointment(self):
        """
            is_outdated() should return True for appointment which in the past second
        """
        doc = Doctor(first_name='FN', last_name='LN', specialization='SPEC')
        st_t = (datetime.datetime.today() - datetime.timedelta(seconds=1)).time()
        en_t = (datetime.datetime.today() + datetime.timedelta(minutes=29, seconds=59)).time()
        da = datetime.datetime.today().date()
        app = Appointment(start_time=st_t, end_time=en_t, date=da, doctor=doc)
        #self.assertIs(app.is_outdated(), True)from django.test import TestCase -????
        self.assertIs(app.is_outdated(), True)

# Create your tests here.
