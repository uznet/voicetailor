# \<goto> tag
## Purpose 
### 동일하거나 다른 문서의  다른 dialog(\<form> 또는 \<menu>) 로 이동합니다
Transition to another form item in the current form.\
Transition to another dialog in the current document.\
Transition to another document.
## Syntax
\<goto\
next = "URI"\
expr = "ECMAScript_Expression"\
nextitem = "string"\
expritem = "ECMAScript_Expression"\
fetchaudio = "URI"\
fetchhint = "string"\
fetchtimeout = "string"\
maxage = "seconds"\
maxstale = "seconds"\
/>



## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|next |전환될 URI입니다 | false    |      |
|expr |ECMA expression for next.|false|undefined|
|nextitem |현재 \<form> 에서 방문 할 다음 현재문서내의 \<form> 항목의 이름..|false| |
|expritem |ECMA Expression for nextitem |false|undefined|
|fetchaudio ||||
|fetchhint ||||
|fetchtimeout ||||
|maxage ||||
|maxstale ||||

## Notes
None
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml5.3.7
