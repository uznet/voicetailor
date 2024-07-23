# \<data> tag
# Purpose 
## 새로운 VoiceXML 문서로 전환하지 않고도 응용서버(HTTP 또는 trunk) 에서 XML (or JSON) 형식의 데이터에 프로그래밍 방식으로 액세스 할 수 있습니다. *.

# Syntax
\<data\
name = "item name"\
src = "URI"\
srcexpr = "ECMAScript_Expression"\
method = "string"\
enctype = "encoding_type"\
namelist = "string"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"/>



# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name|DOM 또는 JSON 형식의  변수 이름입니다. | true    |      |
|src|검색 할 XML 또는 JSON 데이터의 위치를 지정하는 URI.|false| |
|srcexpr |src와 유사하지만 데이터를 가져와야 할 때 지정된 ECMAScript 표현식을 평가하여 URI가 동적으로 결정됩니다. |false| |    
||srcexpr 에서 error 가 발생할  경우 error.semantic 이벤트가 발생합니다|||
|method|GET or POST|false|get|
|enctype|"application/x-www-form-urlencoded" or "multipart/form-data"|false|"application/x-www-form-urlencoded"|
|namelist|전송할 변수 목록|false||

# Notes
-정확히 "src"또는 "srcexpr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.
# Additional Reference Site
## https://www.w3.org/TR/voicexml21/#sec-data