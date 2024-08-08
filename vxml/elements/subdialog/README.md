# \<send> tag
## Purpose 
###  subdialog 는 common dialog 를 재사용하고 재사용 가능한 application library 를 구축하기 위한 메커니즘입니다.

## Syntax
\<subdialog\
name = "string"\
expr = "ECMAScript_Expression"\
cond = "ECMAScript_Expression"\
method = "sGTE | POST"\
enctype = "encoding_type"\
namelist = "string"\
src = "URI"\
srcexpr = "ECMAScript_Expression"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/> 



## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name|subdialog 로부터 리턴 된 결과값을 저장할 form item variable name|false|hidden|
|expr|Form item variable(name) 의 초기값|false|undefined|
|cond|조건이 참일 경우 subdialog를 수행한다|false|true|
|method| The HTTP request method("get", "post")|false|get|
|enctype|"application/x-www-form-urlencoded" or "multipart/form-data"|false||
|namelist|HTTP를 통해 지정된 문서로 제출할 변수의 공백으로 구분 된 목록입니다|false||
|src|서브 다이얼로그가 포함 된 문서의 URI (현재 문서 안의 ancor)|false||
|srcexpr|ECMA Expression for src|false|undefined|


## Notes
-정확히 "src"또는 "srcexpr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.


## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.3.4
