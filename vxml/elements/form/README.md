# \<form> tag
# Purpose 
## 사용자와의 상호 작용을 통해 채워지는 일련의 필드 항목들을 포함하고있는 요소입니다

# Syntax
\<form\
id = "string"\
scope = "document | dialog"/>


# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|id |form 이름 | false    |      |
|   |지정된 경우 form은 문서 내에서 또는 다른 문서에서 참조 될 수 있습니다.|||
|scope |form 요소의 grammar의 기본 범위입니다.|false| dialog |
|     |-dialog -> grammar 는 현재 \<form>내의 grammar 만 유효 |||
|     |-document-> form 문법은 동일한 문서의 모든  dialog 에서 활성화됩니다 |||
# Notes
None
# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml2.1