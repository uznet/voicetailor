# \<field> tag
# Purpose 
## 사용자와 시스템간에 대화식 입력 필드를 구성합니다

# Syntax
\<field\
name = "variable"\
cond = "ECMAScript_Expression"\
expr = "ECMAScript_Expression"\
modal = "boolean"\
slot = "slot_name"\
type = "string"/>



# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name |사용자의 grammar 와 일치된 입력값을 보유하는 변수 이름. 속성이 지정되지 않으면, 인터프리터 내부적으로 자동생성한다 | false    |      |
|cond |현재의 <field>를 수행할 것인지 아닌지에 대한 조건이다|false| true |
|     |주어진 조건이 true 일 경우는 <field> 요소를 실행함 || |    
|expr |Form item variable 의 초기값|false|undefined|
|modal|Grammar scope 지정 |false|false|
|     |True:  field 영역|||
|     |False: 전체 영역|||
|slot|변수를 채우는 데 사용되는 문법 슬롯의 이름입니다 | false|Form item variable|
|type|builtin grammar type 이름|false||

# Shadow Vriable
|Name |Description |
|-----|------------|
|name$.confidence |인식기가 반환 한 인식 일치의 신뢰 수준 (0.0-1.0)입니다|
|                 | 0.0은 낮은 신뢰도이고 1.0은 높은 신뢰도입니다|
|name$.utterance |사용자 발화내용 (인식된 문자열.,Speech To Text)|
|name$.interpretation |사용자 입력의 해석을 포함하는 ECMAScript 변수입니다.|
|name$.inputmode|사용자 입력 모드입니다.|
|               |dtmf or speech|
# Notes
None
# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml2.3.1