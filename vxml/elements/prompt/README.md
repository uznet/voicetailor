# \<prompt> tag
## Purpose 
### 대화형 대화에서 녹음된 오디오와 합성된 텍스트를 음성으로 변환합니다.
## Syntax
\<prompt
bargein = "boolean"\
bargeintype = "speech | hotword"\
cond = "ECMAScript_Expression"\
count = "integer"\
timeout = "seconds_milliseconds"\
xml:lang=”string”\
/>





## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|bargein|사용자가 프롬프트를 중단할 수 있는지 여부를 제어합니다.| false    |  true  |
|       |true일 경우는 음성이 출력되고 있는 도중 입력(DTMD or Speech) 을 받을 수 있다|||
|bargeintype|bargein 이 true 이면  음성이나 DTMF 입력에 응답하여 수행되는 bargein 유형을 제어합니다. | false    |  speech |
|      |speech ->음성 또는 DTMF 입력이 감지되면 프롬프트가 중지됩니다 | | |
|      |hotword-> 주어진 문법과  완전한 일치가 될 때까지 프롬프트가 중지되지 않습니다 | | |
|cond|조건이 참일 경우 prompt를 수행한다|false|true|    
|count|prompt가 수행될 prompt counter를 지정한다|false|1|    
|timeout|프롬프트가  모두 출력된 후 사용자로부터 입력을 받기 시작해서 아무 입력이 없을 때 noinput event를 발생하기까지의 제한시간|false| |    
|       |사용자로부터 입력을 받기 시작해서 timeout 시간이 지날 때까지 입력이 없으면 noinput event가 발생된다.|||
|xml:lang|언어 식별자 |false||


## Notes
None

## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml4.1
