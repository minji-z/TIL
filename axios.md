# axios

```vue
methods: {
    checklist() {
      axios
      .get("http://127.0.0.1:8000/users/")
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {
        console.log(err);
      }); 
    },
    addUserTest(){
      if(this.inpId ==''|| this.inp=='' || this.inpAdd==''){
        console.log(this.inpId);
        console.log(this.inpPw);
        console.log(this.inpAdd);
        
        alert('모든 정보를 입력하세요.');
      }else{
        this.addUser();
      };
      
    },
    addUser(){
      axios.post('http://127.0.0.1:8000/users/',{
        
          user_id : this.inpId,
          password : this.inpPw,
          address : this.inpAdd

      }).then(res => {
        
        alert('회원가입 완료')
        this.inpId = '',
        this.inpPw = '',
        this.inpAdd = '',
        this.users.push(res.data),
        console.log(res);
        
      }).catch(err => {
          alert('에러 발생, 고객센터에 문의하세요.')
          console.log('빈칸');
        });

    },
}
```

더 좋은 문법이 있을까? 찾아보기.