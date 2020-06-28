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
const title = document.getElementById('titleID');
const sub = document.getElementById('subID');
const icons = document.getElementById('iconsID');

window.addEventListener('load',()=>{
    loader.style.display = 'none';
    title.classList.add('animated_slideFadeUp');
    sub.classList.add('animated_slideFadeUp');
    icons.classList.add('animated_slideFadeDown');
})