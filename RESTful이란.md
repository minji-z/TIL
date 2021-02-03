# RESTful이란

http의 url과 http method(GET, POST, PUT, DELETE)를 사용해서 API 가독성을 높인 구조화된 시스템 아키텍처(framework). 하나의 url로 최소 4가지의 http method를 전송할 수 있다.



스마트폰 등장 전에는 웹 페이지를 구현하는 웹 서버에서 DB서버의 데이터를 읽어오고, 저장하고 등의 기능을 모두 담당했지만 스마트폰과 어플리케이션이 등장하면서 웹으로만 서비스를 제공하는 것에는 한계가 생긴다.



따라서 HTML로 렌더링하는 웹서버가 아닌 JSON혹은 XML과 같은 형식을 통해서 데이터를 다루는 별도의 API 서버가 필요했다. 스마트폰 어플과 웹에서 동일한 기능을 제공할 시 기존의 웹서버를 계속 사용하면 매번 HTML을 읽어서 해당 태그에 있는 정보를 찾아내야하기 때문이다.



따라서 RESTFUL 아키텍처를 HTTP METHOD와 함께 사용해 웹, 데스크탑 앱, 스마트폰 어플들까지 하나의 API 서버를 생성할 수 있다.



DJANGO 또한 VIEW 클래스 자체가 RESTFUL한 서버를 만들기에 최적인 프레임워크이다.



# DRF(Django Rest Framework)

DFR란 DJANGO 안에서 RESTFUL API 서버를 쉽게 구축할 수 있도록 도와주는 오픈소스 라이브러리이다.



REST FRAMEWORK를 사용하는 이유는 아래와 같다.

- 웹 브라우저 API는 범용성이 크다. 개발을 쉽게 만들어준다.
- 인증 정책에 OAUTH1, OAUTH2를 위한 추가적인 패키지가 추가도어 있는 경우 시리얼라이즈 기능을 제공해준다. (DB DATA -> JSON)
- 문서화 및 커뮤니티 지원이 잘 되어있다.



### Serializer 란

Serializer란 직렬화 하는 클래스로서, 사용자의 DB안에 사용자 프로필 사진, 이메일, 이름, 성별이 있다고 가정하면 사용자 모델 인스턴스를 JSON 형태 혹은 Dictionary 형태로 직렬화 할 수 있다.

예를 들어,

```python
user = User(email="user@user.user", name="user", sex="Female", profile_image="user.png")
UserSerializer(user).data{
	"email" : "user@user.user",
    "name" : "user",
    "sex" : "female",
    "profile_image" : "user.png"
}
```

위와 같은 사용자가 있다면 DRF의 serializer를 통해 모델 인스턴스를 직렬화 할 수 있다.



실 사용 시 만약 사용자 정보를 열람하는 URL이 /serializer/user/<user id>/가 있고 해당 View에는 user_id의 해당하는 모델 인스턴스의 정보를 리턴한다고 가정하자. 

그렇다면 /serializer/user/1/ 이라는 URL로 요청했을 시 user_id가 1인 사용자의 정보를 JSON 형태로 응답받을 수 있다.

결국 사용자 프로필 페이지에 접근했을 때 사용하는 View라고 하면 사용자 페이지에 들어갈 때마다 해당하는 사용자의 user_id만 URL에 입력해주게 되면 각 사용자 정보를 JSON 형태로 응답 받을 수 있다.

위와 같은 기능을 하는 Serializer를 ModelSerializer라고 부른다.



