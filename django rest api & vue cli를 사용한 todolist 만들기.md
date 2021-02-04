django rest api & vue cli를 사용한 todolist 만들기

큰 흐름

1. 가상환경 만들기
2. django 설치
3. axios 설치
4. django project/app 만들기
5. django settings.py 입력
6. django rest api 구현
7. postman 통해 확인
8. vue cli 설치
9. vue app 구현
10. axios로 django rest api & vue cli 통신





1. 가상환경 만들기

   - python 3.7.1 버전 설치, git bash 설치.
   - 원하는 경로에 파일 만들고 git bash 열기
     - 오른쪽 마우스 --> git bash --> TIL폴더의 2021.01.22 가상환경 파일 참조

2.  django 설치

   - pip install django
   - pip install djangorestframework

3. axios 설치 안되어 있으면 하기(cmd)

   - npm install --save axios

4. django project/app 만들기

   - django-admin startproject 프로젝트이름
   - cd 프로젝트이름
   - python manage.py startapp 앱이름
   - 실행문 : python manage.py runserver

5. django settings.py 입력

   - project의 setting.py 에 

     - INSTALLED_APPS = [

         'rest_framework',

         '프로젝트이름',

         'corsheaders',

       ]

     - MIDDLEWARE = [

          'corsheaders.middleware.CorsMiddleware',

       ]

     - CORS_ORIGIN_ALLOW_ALL = True

6. django rest api 구현

   - 

7. vue cli 설치

8. vue app 구현

9. axios로 django rest api & vue cli 통신