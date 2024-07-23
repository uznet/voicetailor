# \<throw> tag
# Purpose 
## 시스템 또는 사용자 정의 이벤트를 생성합니다.
# Syntax
\<throw\
event = "event"\
eventexpr = "ECMAScript_Expression"\
message = "string"\
messageexpr = "ECMAScript_Expression"\
/>

# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|event|Throw 될 이벤트|true||
|eventexpr |ECMA Expression event name|false|undefined|		
|message |Throw되는 이벤트에 대한 추가 컨텍스트를 제공하는 메시지 문자열.|false| |   
|        |문자열은 이벤트 처리기의 범위 내에서 document._message 변수의 값으로 참조할수 있습니다.|| |   
|messageexpr|ECMA Expression for message|false||


# Notes
-정확히 "expr"또는 "value"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml5.2.1