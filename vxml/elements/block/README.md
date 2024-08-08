# \<block> tag
## Purpose 
### non-interactive 요소로서  문서 소스 순서로 실행되는 지시문 블록을 지정합니다.

## Syntax
\<block name = "string"\
        cond = "ECMAScript_Expression"\
        expr = "ECMAScript_Expression"/>

## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name |이 블록 요소와 관련된 form item variable 의 이름입니다.| false|  Inner hidden value   |
||name attribute가 주어지지 않을 때는 내부적으로 임시 name 값을 생성||
|expr |이 요소와 연결된 form item variable의 초기 값을 제공하는 ECMAScript 식입니다.|false| undefined|
||이에 따른 효과는 block내부의 내용을 수행하지 않고 곧바로 form item variable에 값이 초기화되어 넘어가기 때문에 block내부를 수행하기 위해서는 clear element를 통하여 값을 제거하기 전까지는 block내부를 수행할 수 없게 된다.|||
|cond|cond attribute에 주어진 조건에 따라 참일 경우는 block을 실행하고 거짓일 경우는 실행하지 않는다. |false| true|    

## Notes
None
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.3.2
