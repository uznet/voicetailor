# \<submit> tag
# Purpose 
## HTTP GET 또는 POST 요구에 의해 새로운 document server 에 값을 제출하고 새로운 document 를 취득합니다.

# Syntax
\<submit\
next = "URI"\
expr = "ECMAScript_Expression"\
namelist = "string"\
method = "string"\
enctype = "encoding_type"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/>



# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|next|요청을 제출할 URI입니다.|false||
|expr|URI type 의 ECMAScript expression|false|undefined|
|namelist|공백으로 구분 된 0 개 이상의 변수 이름 목록|false||
|method| The HTTP request method("get", "post")|false|get|
|enctype|"application/x-www-form-urlencoded" or "multipart/form-data"|false||



# Notes
-정확히 "src"또는 "srcexpr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.


# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml5.3.8
