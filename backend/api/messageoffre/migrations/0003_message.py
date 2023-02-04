# Generated by Django 3.0.8 on 2023-02-03 09:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('annonces', '0002_annonce_obtenu_webscraping'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('messageoffre', '0002_delete_message'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contenu', models.TextField()),
                ('date_envoi', models.DateField(blank=True, default=django.utils.timezone.now, null=True)),
                ('annonce_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='annonces.Annonce')),
                ('emetteur_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='emetteur_messages', to=settings.AUTH_USER_MODEL)),
                ('recepteur_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='recepteur_messages', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]