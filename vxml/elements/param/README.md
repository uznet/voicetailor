# \<param> tag
# Purpose 
## \<object> 또는 \<subdialog>의 매개 변수에 사용한다.
# Syntax
\<param\
expr = "ECMAScript_Expression"\
name = "string"\
value = "string"\
valuetype=”data | ref”\
type=”MIME-type”\
/>





# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name |	\<object> 또는 \<subdialog>가 호출 될 때 매개 변수 이름입니다|true|undefined|
|expr | name 에 할당할 ECMAScript 표현식|false||		
|value|	name 에 할당할 리터럴 문자열 값|false|	undefined|
|valuetype|	data 또는 ref 중 하나.|false|data|
|     | name과 관련된 값이 data 또는 URI (ref) 인 경우 \<object>에 element 에서만 사용됩니다.\<subdialog>에는 사용되지 않습니다|||
|type|	valuetype 이  ref 인 경우 URI의 MIME-type. 을 지정.\<object>에서  유효합니다.|false|	MIME-type|


# Notes
-정확히 "expr"또는 "value"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml6.4