console.log(`%c

,.                 .,
,: ':.    .,.    .:' :,
,',   '.:'   ':.'   ,',
: '.  '         '  .' :
', : '           ' : ,'
'.' .,:,.   .,:,. '.'
 ,:    V '. .' V    :,
,:        / '        :,
,:                   :,
 ,:       =:=       :,
  ,: ,     :     , :,
   :' ',.,' ',.,:' ':
  :'      ':WW::'   '.
 .:'       '::::'   ':
 ,:        '::::'    :,
 :'         ':::'    ':
,:           ':''     :.
.:'             '.     ',.
,:'               ''     '.
.:'               .',    ':
.:'               .'.,     :
.:                .,''     :
::                .,''    ,:
::              .,'','   .:'
.,::'.           .,','     ::::.
.:'     ',.       ,:,       ,WWWWW,
:'        :       :W:'     :WWWWWWW,          .,.
:         ',      WWW      WWWWWWWWW          '::,
'.         ',     WWW     :WWWWWWWWW            '::,
'.         :     WWW     :WWWWWWWW'             :::
'.       ,:     WWW     :WWWWWWW'             .:::
'.     .W:     WWW     :WWWWWW'           .,:::'
'.   :WW:     WWW     :WWWWW'      .,,:::::''
.,'   ''::     :W:     :WWWWW.  .,::::''
,'        ''','',',','','''WWWWW::::''
':,,,,,,,':  :  : : :  :  :WWWW'''
BINGO

`, "font-family:monospace");


const loader = document.getElementById('loader');
const icons = document.getElementById('iconsID');

window.addEventListener('load',()=>{
    loader.style.display = 'none';
    icons.classList.add('animated_slideFadeDown');
})