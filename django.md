

**Django** = model, view, template, URL Mapping을 가지고 있음

Django 의 프로젝트는 하나이상의 app으로 구성하며 규모가 클수록 여러개의 app으로 구성

때문에 개발및 유지 보수가 효율적이며, 모듈화가 잘된 App은 여러 웹프로젝트에 재사용이 가능 



MVC 패턴

view.py가 Controller 역할.

http로 보낼 거면 from django.http import httpResponse 해주고

```python
from django.http import httpResponse 
def index(request):
    return HttpResponse('hello')
```

이게 기본 view. 

index라는 함수가 request를 매개변수로 받음 - > httpResponse로 hello라는 응답을 return함.



그 다음에 이 view를 사용하기 위해서는 urls.py의 정의가 필요.

```python
from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path('todo1/', include('todo1.urls')),
    path('admin/', admin.site.urls),
]
```

? 정규식이라는 것과 표현식이 다른 것 같다. --> 정규식은 옛날, 표현식을 자주 씀.

? django tutorial 사이트 등은 path를 사용하고 어떤 곳은 url (정규식)



--> 찾아보던 중 발견한 사이트 https://wikidocs.net/9714 

2017년도 사이트이니 참고만 하기.



하다보니 이상하다고 느낀 것. templates를 쓰는데 이게 jsp 문법 + vue 문법 이런 느낌이다 --> 이 문법이 어떤 건지 알아봐야 좋을 것 같다.



project/settings.py 파일 : 설정 파일. 

아무튼 기본적으로 django는 SQLite를 사용하도록 구성되어있음. 가장 간단함. 별도 설치 필요 없음.

실제 프로젝트일 시에는 SQLite는 적합하지 않음.

다른 DB를 사용해보고 싶다면 데이터베이스 바인딩을 설치하고, (https://docs.djangoproject.com/ko/3.1/topics/install/#database-installation), DB연결 설정과 맞게끔 DATABASES 'default' 항목의 값을 다음의 키 값으로 바꿔주세요.

- [`ENGINE`](https://docs.djangoproject.com/ko/3.1/ref/settings/#std:setting-DATABASE-ENGINE) – `'django.db.backends.sqlite3'`, `'django.db.backends.postgresql'`, `'django.db.backends.mysql'`, 또는 `'django.db.backends.oracle'`. 그외에 [서드파티 백엔드](https://docs.djangoproject.com/ko/3.1/ref/databases/#third-party-notes) 참조.
- [`NAME`](https://docs.djangoproject.com/ko/3.1/ref/settings/#std:setting-NAME) – The name of your database. If you’re using SQLite, the database will be a file on your computer; in that case, [`NAME`](https://docs.djangoproject.com/ko/3.1/ref/settings/#std:setting-NAME) should be the full absolute path, including filename, of that file. The default value, `BASE_DIR / 'db.sqlite3'`, will store the file in your project directory.

--> 이 부분은 나중에 DB를 연결해보면서 보는 게 좋을 것 같음.



현재 내가 사용할 것은 SQLite.

SQLite를 사용한다면 아무것도 미리 생성할 필요가 없음. 데이터베이스 파일은 필요할 때마다 자동 생성됨.



mysite/settings.py를 편집할 때, 당신의 시간대에 맞춰 TIME_ZONE 값을 설정하세요.

또한, 이 파일의 윗쪽에 있는 [`INSTALLED_APPS`](https://docs.djangoproject.com/ko/3.1/ref/settings/#std:setting-INSTALLED_APPS) 에 대해 언급하자면, 이 파일은 현재 Django 인스턴스에서 활성화된 모든 Django 어플리케이션들의 이름이 담겨 있습니다. 앱들은 다수의 프로젝트에서 사용될 수 있고, 다른 프로젝트에서 쉽게 사용될 수 있도록 패키징하여 배포할 수 있습니다.

기본적으로는, [`INSTALLED_APPS`](https://docs.djangoproject.com/ko/3.1/ref/settings/#std:setting-INSTALLED_APPS)는 Django와 함께 딸려오는 다음의 앱들을 포함합니다.

- [`django.contrib.admin`](https://docs.djangoproject.com/ko/3.1/ref/contrib/admin/#module-django.contrib.admin) – 관리용 사이트. 곧 사용하게 될 겁니다.
- [`django.contrib.auth`](https://docs.djangoproject.com/ko/3.1/topics/auth/#module-django.contrib.auth) – 인증 시스템.
- [`django.contrib.contenttypes`](https://docs.djangoproject.com/ko/3.1/ref/contrib/contenttypes/#module-django.contrib.contenttypes) – 컨텐츠 타입을 위한 프레임워크.
- [`django.contrib.sessions`](https://docs.djangoproject.com/ko/3.1/topics/http/sessions/#module-django.contrib.sessions) – 세션 프레임워크.
- [`django.contrib.messages`](https://docs.djangoproject.com/ko/3.1/ref/contrib/messages/#module-django.contrib.messages) – 메세징 프레임워크.
- [`django.contrib.staticfiles`](https://docs.djangoproject.com/ko/3.1/ref/contrib/staticfiles/#module-django.contrib.staticfiles) – 정적 파일을 관리하는 프레임워크.

이 어플리케이션들은 일반적인 경우에 사용하기 편리하도록 기본으로 제공됩니다.

##### Model 만들기

### 반복하지 말 것(DRY)[¶](https://docs.djangoproject.com/ko/3.1/misc/design-philosophies/#don-t-repeat-yourself-dry)

고유한 개념 및 데이터는 단 한 번, 단 한 곳에 존재하는 것으로 족합니다. 중복성은 나쁜 것이고, 정규화는 좋은 것입니다.

그러한 이유로, 본 프레임워크는 최소한의 것들을 가지고 최대한의 것을 만들어내도록 합니다.

django는 DRY 원칙을 지킨다.



```
 python manage.py migrate
```

```
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```

는 생성한다.  아래가 결과

```
CREATE TABLE myapp_person (
    "id" serial NOT NULL PRIMARY KEY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);
```



모델 사용하기 project/settings.py

```
INSTALLED_APPS = [
    #...
    'myapp',
    #...
]
```

```
 python manage.py makemigrations 앱이름
```



 [`sqlmigrate`](https://docs.djangoproject.com/ko/3.1/ref/django-admin/#django-admin-sqlmigrate) 명령은 migration 이름을 인수로 받아, 실행하는 SQL 문장을 보여줍니다.

```
 python manage.py sqlmigrate polls 0001
```

? 0001은 어디서 나왔을까



마무리

```
$ python manage.py migrate
```



DB 진입

```
$ python manage.py shell
```

```
>>> from polls.models import Choice, Question  # Import the model classes we just wrote.

# No questions are in the system yet.
>>> Question.objects.all()
<QuerySet []>

# Create a new Question.
# Support for time zones is enabled in the default settings file, so
# Django expects a datetime with tzinfo for pub_date. Use timezone.now()
# instead of datetime.datetime.now() and it will do the right thing.
>>> from django.utils import timezone
>>> q = Question(question_text="What's new?", pub_date=timezone.now())

# Save the object into the database. You have to call save() explicitly.
>>> q.save()

# Now it has an ID.
>>> q.id
1

# Access model field values via Python attributes.
>>> q.question_text
"What's new?"
>>> q.pub_date
datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)

# Change values by changing the attributes, then calling save().
>>> q.question_text = "What's up?"
>>> q.save()

# objects.all() displays all the questions in the database.
>>> Question.objects.all()
<QuerySet [<Question: Question object (1)>]>
```

























django tutorial 5 까지 따라해봤지만 정확한 이해가 부족한 것 같으니 다시 한 번 스스로 다른 형식으로 만들어보기!

이해한 부분

1. Django의 Model = Model

2. Django의 Templates = View

3. Django의 View = Controller

   

1. view가 controller 인데 현재는 그냥 바로 return으로 model, view없이 urls에 연결되어 view에 써진 글자가 페이지에 보여지고 있다.
2. urls의 path()의 인수는 route와 view가 필수, 선택은 kwargs, name.
   - route : url 패턴을 가진 문자열. 요청이 처리될 때, Django는 urlpatterns의 첫 번째 패턴부터 시작하여 일치하는 패턴을 찾을 때까지 요청된 url을 각 패턴과 리스트의 순서대로 비교한다. 
   - view : django에서 일치하는 패턴을 찾으면 , HttpRequest 객체를 첫번째 인수로 하고, 경로로부터 캡처된 값을 키워드 인수로하여 특정한 view 함수를 호출한다.
   - kwargs : 임의의 키워드 인수들은 목표한 view에 사전형으로 전달됩니다.
   - name : url에 이름 지으면, 템플릿을 포함한 django 어디에서나 명확하게 참조할 수 있습니다.  단 하나의 파일만 수정해도 project 내의 모든 url 패턴을 바꿀 수 있도록 도와줍니다.
   - 즉,  path('', views.index, name='index') 에서  route= '' 비어있음, 즉 뒤에 아무것도 붙이지 않은 url로 접속하면 뜸, 뭐가 뜨냐면 views.py 에서 index 함수가 뜸. 이 url의 이름은 index.



