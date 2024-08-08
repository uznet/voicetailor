# \<return> tag
## Purpose 
### return 은 subdialog 실행을 끝내고 subdialog 를 호출한 다이얼로그로 실행제어권을 반환한다 
## Syntax
\<return\
event = "string"\
eventexpr = "ECMAScript_Expression"\
message = "string"\
messageexpr = "ECMAScript_Expression"\
namelist = "string"\
/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|event|Throw 될 이벤트|false||
|eventexpr|ECMA Expression event name|false|undefined|
|message|이벤트에 대한 추가 문자열 정보.|false|undefined|
|       |이벤트 처리기의 범위 내에서 _message 변수의 값으로 사용할 수 있습니다|||
|messageexpr|ECMA Expression message|false|undefined|
|namelist|호출 dialog 에 반환되는 변수 목록입니다|false|undefined|



## Notes
-정확히 "event", "eventexpr"또는 "namelist"중 하나가 지정 될 수 있습니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.
- "message"또는 "messageexpr"중 하나만 지정할 수 있습니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.


## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml5.3.10
