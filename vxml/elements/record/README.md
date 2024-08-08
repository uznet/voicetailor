# \<record> tag
## Purpose 
### Recordd User input.
## Syntax
\<record\
name = "string"\
expr = "ECMAScript_Expression"\
cond = "ECMAScript_Expression"\
beep = "boolean"\
dtmfterm = "boolean"\
type = "string"\
modal = "boolean"\
finalsilence = "string"\
maxtime = "string"\
/>


## Attributes
|Name |Description |Required |Default|
|-----|------------|---------|-------|
|name |녹음된 데이터에 대한 참조를 저장하는 변수의 이름입니다.| false| internal name|
|expr |Name 의 초기값|false|undefined|    
|cond |조건이 참일 경우 record를 수행한다|false|true|    
|modal |다음 값 중 하나|false|true|    
|      |false->녹음 중에 상위수준의  Voice 및 DTMF 문법을 활성화합니다.|||    
|      |true->녹음하는 동안 상위 수준의 Voice 및 DTMF 문법을 비활성화합니다.|||    
|beep |녹음 직전에 beep 음 출력여부지정|false|false|    
|maxtime |최대녹음시간|false|60s|    
|finalsilence |녹음 종료를 나타내는 최대 침묵의 시간 |false|3s|    
|dtmfterm |DTMF 키를 눌러 진행중인 녹음을 종료 할 수 있는지 여부를 지정합니다|false|true|
|         |true-> DTMF 키를 눌러 녹음 세션을 종료 할 수 있음을 나타냅니다. DTMF 키를 누르지 않으면 maxtime 또는 finalsilence 이벤트에 도달 할 때까지 녹음이 계속됩니다.|||
|         | false-> DTMF 키를 눌러 녹음 세션을 종료 할 수 없음을 나타냅니다. 최대 기록 또는 최종 레코드 이벤트가 발생할 때까지 기록이 항상 계속됩니다.|||
|type|기록될 파일의 MIME 유형을 지정합니다. 허용되는 값은 다음과 같습니다|false|audio/wav|
|    |›audio/basic - File format = .WAV, meta-format = RAW with no header, compression = ulaw, 8-bit, 8 kHz, 64 kps, mono. |||
|    |›audio/x-alaw-basic - File format = .WAV, meta-format = RAW with no header, compression = alaw, 8-bit, 8 kHz, 64 kps, mono.  |||
|    |›audio/x-wav - File format = .WAV, meta-format = RIFF, compression = ulaw, 8-bit, 8 kHz, 64 kps, mono. |||
|    |›audio/wav - File format = .WAV, meta-format = RIFF, compression = ulaw, 8-bit, 8 kHz, 64 kps, mono |||


## Shadow Vriable
|Name |Description |
|-----|------------|
|name$.duration |녹음시간 (밀리 초)|
|name$.size |바이트 단위의 녹음 크기입니다|
|name$.termchar |DTMF 에의해서 녹음이 완료되었을 때 눌려진 DTMF. 아닐 경우는 null or undefined|
|name$.maxtime|maxtime을 초과해서  녹음 완료된 경우는 true, 아닐 경우는 false|



## Notes
None

## Additional Reference Site
### https://www.w3.org/TR/voicexml20/#dml2.3.6
