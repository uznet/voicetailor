# \<link> tag
## Purpose 
### 링크의 범위에있는 \<grammar> 와 일치할 때 새 문서 로 전환하거나 <throw>와 같은 이벤트를 발생시킵니다

## Syntax
\<link\
dtmf = "string"\
next = "URI"\
expr = "ECMAScript_Expression"\
event = "event"\
eventexpr = "ECMAScript_Expression"\
message = "string"\
messageexpr = "ECMAScript_Expression"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|dtmf|간단한 DTMF <grammar>과 동일 한 DTMF sequence | false    |      |
|next|전환 할 URI입니다.|false| |
|expr |ECMA expression for next.|false| undefined|    
|event|Next 를  지정하는 대신에 throw 될  이벤트 이름|false||
|eventexpr|ECMA expression for event.|false||
|message|Throw되는 이벤트에 대한 추가 컨텍스트를 제공하는 메시지 문자열|false||
||문자열은 이벤트 처리기의 범위 내에서 document._message 변수의 값으로 참조할수 있습니다|||
|messageexpr|ECMA expression for event|false|||

## Notes
-정확히 "next", "expr", "event"또는 "eventexpr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다. \
-"message"또는 "messageexpr"중 하나만 지정할 수 있습니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.5
