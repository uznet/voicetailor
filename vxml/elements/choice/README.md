# \<choice> tag
## Purpose 
### 메뉴 항목을 정의합니다.

## Syntax
\<choice
accept = “approximate | exact"\
dtmf = “dtmf sequence"\
next = "URI"\
expr = "URI ECMAScript_Expression"\
event = "string"\
eventexpr = "event ECMAScript_Expression"\
message = "string"\
messageexpr = "ECMAScript_Expression"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"
/>



## Attributes
|Name  |Description |Required |Default|
|------|------------|---------|-------|
|accept|Exact-> 정확하게 일치할 때 match,   | false    |  exact    |
|      |approximate->일부분만 일치해도 match가 된다. | |
|      |\<menu>에서 선언한 것보다 우선한다 | |
|dtmf  |간단한 DTMF grammar와 동일 한 DTMF sequence.|| |
|next  |다음 dialog 또는 document 의 URI. |false| |       
|expr  |URI expression. |false| |       
|event |Next URI 를  지정하는 대신에 throw 될  이벤트 이름  |false| |       
|eventexpr |Event expression. |false| |   
|message |Throw되는 이벤트에 대한 추가 컨텍스트를 제공하는 메시지 문자열.|false| |   
|        |문자열은 이벤트 처리기의 범위 내에서 _message 변수의 값으로 참조할수 있습니다.|| |   
|messageexpr|ECMA Expression for message|false||

## Notes
-정확히 "next", "expr", "event"또는 "eventexpr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.\
-"message"또는 "messageexpr"중 하나만 지정할 수 있습니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.2.2
