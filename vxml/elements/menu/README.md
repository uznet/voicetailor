# \<menu> tag
# Purpose 
## 사용자에게 선택 목록을 표시하고 선택한 정보로 전환합니다

# Syntax
\<menu\
accept = "exact | approximate"\
dtmf = "boolean"\
id = "string"\
scope = "document|dialog"\
/>



# Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|id|menu 이름 | false    |   hidden   |
||지정된 경우 menu 는 문서 내에서 또는 다른 문서에서 참조 될 수 있습니다|||
|scope |menu 요소의 grammar의 기본 범위입니다.|false| dialog|    
||dialog-> grammar 는 현재 \<menu>내의 grammar 만 유효 |||
||document->menu 문법은 동일한 문서의 모든  dialog 에서 활성화됩니다|||
|accept ||false|exact|    
||Exact->정확하게 일치할 때 match |||    
||approximate-> 일부분만 일치해도 match가 된다 |||    
|dtmf |\<menu> element 에서 사용되는 \<choice> element에 지정되는 dtmf 사용을 활성화 할지 안할지를 지정한다.|false| true|    


# Notes
None

# Additional Reference Site
## https://www.w3.org/TR/voicexml20/#dml2.2.1