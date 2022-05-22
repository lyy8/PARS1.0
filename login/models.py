# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class User(models.Model):
    objects = models.Manager()
    uid = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    avater = models.CharField(max_length=255, blank=True, null=True)
    cover = models.CharField(max_length=255, blank=True, null=True)
    las_login_ip = models.CharField(max_length=255, blank=True, null=True)
    follower_count = models.IntegerField(blank=True, null=True)
    followee_count = models.IntegerField(blank=True, null=True)
    following_articles = models.IntegerField(blank=True, null=True)
    following_tags = models.IntegerField(blank=True, null=True)
    article_count = models.IntegerField(blank=True, null=True)
    comment_count = models.CharField(max_length=255, blank=True, null=True)
    message_count = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'user'


class Tag(models.Model):
    objects = models.Manager()
    tag_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    article_count = models.IntegerField(blank=True, null=True)
    follower_count = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'tag'


class Message(models.Model):
    objects = models.Manager()
    message_id = models.BigAutoField(primary_key=True)
    uid = models.IntegerField(blank=True, null=True)
    is_readed = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'message'


class Likepeople(models.Model):
    objects = models.Manager()
    uid = models.IntegerField(primary_key=True)
    followable_id = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'likepeople'


class Hypertext(models.Model):
    objects = models.Manager()
    id = models.BigAutoField(primary_key=True)
    ani_id = models.IntegerField(blank=True, null=True)
    platform = models.CharField(max_length=255, blank=True, null=True)
    link = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'hypertext'


class Comment(models.Model):
    objects = models.Manager()
    comment_id = models.BigAutoField(primary_key=True)
    commentable_id = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField(blank=True, null=True)
    content = models.CharField(max_length=255, blank=True, null=True)
    like_count = models.IntegerField(blank=True, null=True)
    dislike_count = models.IntegerField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    reply_count = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'comment'


class Article(models.Model):
    objects = models.Manager()
    article_id = models.BigAutoField(primary_key=True)
    uid = models.IntegerField(blank=True, null=True)
    content = models.CharField(max_length=255, blank=True, null=True)
    comment_count = models.IntegerField(blank=True, null=True)
    like_count = models.IntegerField(blank=True, null=True)
    dislike_count = models.IntegerField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    update_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'article'


class Appraise(models.Model):
    objects = models.Manager()
    id = models.BigAutoField(primary_key=True)
    uid = models.IntegerField(blank=True, null=True)
    ani_id = models.IntegerField(blank=True, null=True)
    comment = models.CharField(max_length=255, blank=True, null=True)
    publish_date = models.DateTimeField(blank=True, null=True)
    score = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'appraise'


class Animation(models.Model):
    objects = models.Manager()
    id = models.BigAutoField(primary_key=True)
    ani_name = models.CharField(max_length=255)
    ani_cover = models.CharField(max_length=255)
    synopsis = models.CharField(max_length=255, blank=True, null=True)
    aver_score = models.CharField(max_length=255, blank=True, null=True)
    aera = models.CharField(max_length=255, blank=True, null=True)
    #release_time = models.DateField(blank=True, null=True)
    tag = models.CharField(max_length=255, blank=True, null=True)
    type = models.IntegerField(blank=True, null=True)
    state = models.IntegerField(blank=True, null=True)
    ani_cv = models.CharField(max_length=255, blank=True, null=True)
    ani_director = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'animation'


class AnimationTemp(models.Model):
    objects = models.Manager()
    field_id = models.AutoField(db_column=' id', primary_key=True)  # Field renamed to remove unsuitable characters. Field renamed because it started with '_'.
    ani_name = models.CharField(max_length=255, blank=True, null=True)
    ani_cover = models.CharField(max_length=255, blank=True, null=True)
    ani_cv = models.CharField(max_length=255, blank=True, null=True)
    ani_area = models.CharField(max_length=255, blank=True, null=True)
    ani_director = models.CharField(max_length=255, blank=True, null=True)
    ani_language = models.CharField(max_length=255, blank=True, null=True)
    ani_years = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        db_table = 'animation_temp'
