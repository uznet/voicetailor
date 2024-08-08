# \<transfer> tag
## Purpose 
### \<transfer> 엘리먼트는 호출자를 다른 entity (전화선 또는 다른 voice 응용 프로그램)에 연결하도록 인터프리터에게 지시합니다. \<transfer> 작업 중에 현재 인터프리터 세션이 일시 중단됩니다.

## Syntax
\<transfer
name = "string"
expr = "ECMAScript_Expression"
cond = "string"
dest = "string"
destexpr = "ECMAScript_Expression"
bridge = "Boolean
type = "string"
connecttimeout = "integer"
maxtime = "integer"
aai = "string"
aaiexpr = "ECMAScript_Expression"
transferaudio = "URI"
/>



## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name|Bridge transfer 결과를 저장합니다.|false||
|     |blind transfer  경우 이변수는 undefined 입니다.|||
|expr|조건이 참일 경우 transfer 를 수행한다|false|true|
|cond|공백으로 구분 된 0 개 이상의 변수 이름 목록|false||
|dest|URI (telephone, IP telephony address,HTTP address)입니다.|false||
|destexpr|ECMAScript Expression  dest URI.|false||
|bridge|Brgide transfer 여부를 지정.|false|false|
||true->bridge|||
||false->blind|||
|type|Transfer 방법을지정 .|false|bridge|
||"bridge" or "blind" or "consultation"||
|connecttimeout|통화 연결을 시도하는 동안 대기하는 시간입니다|false|30s|
|maxtime|연결후 최데통화시간(0=무한대)|false|0|
|aai|Application-to-application information|false||
|aaiexpr||false||




## Notes
-정확히 "bridge"또는 "type"속성 중 하나가 지정 될 수 있습니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.

## Shadow Variables:
|name|	Description|
|----|-------------|
|name$.duration|	브리지 트랜스퍼에서 통화 연결후 통화시간. 통화연결이 않되었을경우 경우 0입니다|
|name$.utterance|	DTMF 입력으로 전송이 종료 된 경우 음성 인식 입력 또는 DTMF 결과로 전송이 중단 된 경우 사용되는 음성 텍스트.|
|name$.inputmode|	종료 명령 (dtmf 또는 voice)의 입력 모드. 전송이 문법 일치로 종료되지 않은 경우  undefined|


## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.3.7
