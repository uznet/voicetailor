# \<catch> tag
## Purpose 
### VoiceXML 애플리케이션이나 인터프리터에 의해 발생 된 이벤트를 처리합니다.

## Syntax
\<catch
cond = "ECMAScript_Expression"\
count = "integer"\
event = "event1 event2 ..."/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|event|처리 할 하나 이상의 공백으로 구분된 이벤트이름   | false    |      |
|count|동일한 이벤트발생시 이 count 값에따라 다르게 처리 할 수 있습니다.|false|1 |
|cond |이 조건이 true 일경우 event handler 가 실행됨 |false|true |       

## Notes
\<error>, \<help>, \<noinput>, \<nomatch> 요소는 <catch> 요소 유형을 나타내는 약어입니다.
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml5.2.2
