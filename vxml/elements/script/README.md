# \<script> tag
# Purpose 
## \<script> 요소를 사용하면 클라이언트 측 스크립팅 언어 코드 블록을 지정할 수 있으며, HTML \<SCRIPT> 요소와 유사합니다.

# Syntax
\<script\
charset ="string"\
src = "URI"\
srcexpr = "ECMAScript_Expression"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/>


# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|charset|character encoding|false|UTF-8|
|src|외부 스크립트  URI|false||
|srcexpr|URI ECMAScript Expression|false|undefined|


# Notes
-정확히 "src", "srcexpr"또는 인라인 스크립트 중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml5.3.12
## https://www.w3.org/TR/voicexml21/#sec-script_expr
