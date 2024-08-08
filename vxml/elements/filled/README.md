# \<filled> tag
## Purpose 
### \<filled> 요소는 입력 항목의 일부 조합이 채워졌을 때 수행할 작업을 지정합니다.

## Syntax
\<filled
mode = "all | any"
namelist = "space delimited list"/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|mode |사용자의 grammar 와 일치된 입력값을 보유하는 변수 이름. 속성이 지정되지 않으면, 인터프리터 내부적으로 자동생성한다 | false    |  all    |
|namelist |The input items to trigger on|false|  |
|     |-입력항목 \<field>,\<record>,\<transfer>,\<subdialog> 안에서 \<filled> 요소는 namelist 속성 을 지정할 수 없습니다 (이 경우 이름 목록은 input item name입니다)|| |    
|     |-\<Form> 요소 안에서 namelist 의 기본값은 form input item 의 이름입니다|||

## Notes
  A \<filled> element in an input item cannot specify a mode.
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.4
