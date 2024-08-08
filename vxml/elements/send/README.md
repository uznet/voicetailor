# \<send> tag
## Purpose 
### VoiceXML 애플리케이션에서 remote endpoint 로 메시지를 보내려면 \<send>를 사용합니다.

## Syntax
\<send\
async=”true | false”\
asyncexpr=”ECMA Expression”\
body=”string”\
bodyexpr=”ECMA Expression”\
contenttype=”string”\
contenttypeexpr=”ECMA Expression”\
event=”string”\
eventexpr=”ECMA Expression”\
namelist=”string”\
target=”string”\
targetexpr=”ECMA Expression”\
timeout = "seconds"\
timeoutexpr = "ECMA Expression"\
fetchaudio = "string"\
fetchaudioexpr = "ECMA Expression"\
/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|async|메시지전송 방법(동기 or 비동기)을 지정합니다|false|true|
|asyncexpr|ECMA Expression for async|false|undefined|
|body|메시지 본문에 보낼 데이터를 나타내는 문자열입니다|false||
|bodyexpr|ECMA Expression for body|false|undefined|
|contenttype|전송할 메시지 본문의 미디어 유형을 나타내는 문자열입니다|false|text/plain|
|    |콘텐츠 유형 집합은 기본 플랫폼에 의해 제한 될 수 있습니다.|||
|    |지원되지 않는 미디어 유형이 지정되면 인터프리터는 "error.badfetch.\<protocol>.400"을 발생시킵니다|||
|contenttypeexpr|ECMA Expression for contenttype|false|undefined|
|event|보낼 이벤트의 이름입니다|false||
|     |값은 영숫자 문자와 "."문자 만 포함하는 문자열입니다|||
|     |첫 번째 문자는 문자 여야합니다|||
|     |값이 유효하지 않은 경우 "error.badfetch"이벤트가 발생합니다|||
|eventexpr|ECMA Expression for event|false|undefined|
|namelist|공백으로 구분 된 0 개 이상의 변수 이름 목록|false||
|target|이벤트를 보낼 URI를 지정합니다|false||
|      |지정하지 않으면 target 은 VoiceXML 세션을 호출 한 구성 요소로 전송됩니다.||Invoking component|
|targetexpr|ECMA Expression for target|false|undefined|
|timeout|동기화 메시지전송시 (async=false)  메시지전송후 응답을 기다리는 최대 시간|false||
|| 시간이 초과되면 인터프리터는 "error.badfetch"를 발생시킵니다|||
|timeoutexpr|ECMA Expression for timeout|false|undefined|



## Notes
-async 및 asyncexpr 중 하나만 지정해야합니다.그렁지않으면  "error.badfetch"가 발생합니다.

-body , bodyexpr,event,eventexpr,namelist  중 하나만 지정해야합니다.그렁지않으면  "error.badfetch"가 발생합니다.

-target 및 targetexpr 중 하나만 지정해야합니다.그렁지않으면  "error.badfetch"가 발생합니다.

-fetchaudio 및 fetchaudioexpr 중 하나만 지정해야합니다.그렁지않으면  "error.badfetch"가 발생합니다.

-timeout 및 timeoutexpr 중 하나만 지정해야합니다. 그렇지않으면 "error.badfetch"가 발생합니다.



## Additional Reference Site
### https://www.w3.org/TR/voicexml30/#ExternalCommunicationModule:Send
