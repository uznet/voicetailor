# \<option> tag
# Purpose 
## \<field>에서 옵션 지정
# Syntax
\<option\
dtmf = "integer"\
accept=”exact | approximate”\
value = "string"\
/>





# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|dtmf|간단한 DTMF grammar와 동일 한 DTMF sequence.| false    |  undefined   |
|accept|Exact-> 정확하게 일치할 때 match,   | false    |  exact    |
|      |approximate->일부분만 일치해도 match가 된다. | |
|value|사용자가이 옵션을 선택할 때 필드의 양식 항목 변수에 지정할 문자열입니다 |false|undefined|    


# Notes
None

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml2.3.1.3