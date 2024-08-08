# \<audio> tag
## Purpose 
### 녹음된 파일을 재생하거나 텍스트를 음성(TTS)으로 변환후 재생합니다

## Syntax
\<audio expr = "ECMAScript_Expression" \
          fetchhint = "safe | prefetch" \
          fetchtimeout="w3ctime" \
          maxage = "seconds"\
          maxstale = "seconds"\
          src = "URI" >...\</audio> 

## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|src | 녹음 된 오디오 파일의 URI.   | false    |      |
|expr |src 속성 대신 사용되는 URL 또는 ECMAScript 표현식입니다.|false| |
|fetchhint|Audio file을 fetch하는 방식 |false| |       
|     |   -	Prefetch:페이지가로드 될 때 파일을 다운로드 .
|     |   -	Safe: 필요할 때만 파일을 다운로드                  
|fetchtimeout|VoiceXML 인터프리터가 HTTP 서로부터 오디오 파일을 다운로드 할때까지 대기하는시간|false| |
|| 실패시 error.badfetch 발생시킴||
|maxage|cache된 data의 age가 지정된 second를 넘었을 경우 새로 fetch한다.|false||
|maxstale|cache된 data의  maxage(second)를 넘었을 경우 새로 fetch한다.|false||

## Notes
### -정확히 "src"또는 "expr"중 하나를 지정해야합니다. 그렇지 않으면 error.badfetch 이벤트가 발생합니다.
## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml4.1.3
