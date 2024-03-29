# Generated by Django 3.0.8 on 2023-02-02 19:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Commune',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=40)),
                ('nom_arab', models.CharField(blank=True, max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Wilaya',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=40)),
                ('nom_arab', models.CharField(blank=True, max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Localisation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adresse_bien_immobilier', models.CharField(max_length=200)),
                ('commune', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='localisation.Commune')),
                ('wilaya', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='localisation.Wilaya')),
            ],
        ),
        migrations.AddField(
            model_name='commune',
            name='wilaya',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='localisation.Wilaya'),
        ),
    ]
