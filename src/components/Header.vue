<template>
   
            <div class="head">

              <div class="video">
              <video class="video_media" src="./img/video.mp4" autoplay muted loop></video>
              </div>
              <div class="header__druplicon">
                <img src="./img/druplicon.svg" >
            </div>
              <div class="pos">

            <header class="header">
      <div class="header_wrapper">
        <div class="header_logo">
          <a href="/"  class="header_logo-link">
            <img src="./img/drupal-coder.svg" class="headlog" alt=" "></a>
        </div>


      <nav class="menu">
        <ul class="header_list">
          <li class="textovosn header_item " ><a href="#" class="header_link mbtext">Поддержка Drupal</a></li>
          <li class="textovosn header_item  header__lang A">
            <a href="#" class="header_link">Администрирование </a>
            <span class="menu__arrow arrow"></span>
            <ul class="sub-menu__list">
              <li class="textovosn header_item">
                <a class="sub-menu__link">Миграция</a>
              </li>
              <li class=" textovosn header_item ">
                <a class="sub-menu__link" >Бэкапы</a>
              </li >
              <li class=" textovosn header_item">
                <a class="sub-menu__link">Аудит безопасности</a>
              </li>
              <li  class="textovosn header_item">
                <a class="sub-menu__link" >Оптимизация скорости</a>
              </li>
              <li class="textovosn header_item">
                <a class="sub-menu__link">Переезд на https</a>
              </li>
            </ul>
        </li>
        <li class="textovosn header_item headerB-o "><a href="#" class="header_link">Продвижение</a></li>
        <li class="textovosn header_item headerB-o"><a href="#" class="header_link">Реклама</a> </li>
        <li class="textovosn header_item headerB header__lang B"><a href="#" class="header_link">О нас</a>
          <span class="menu__arrow arrow2"></span>
          <ul class="sub-menu__list">
            <li class="textovosn header_item"><a href="#team" >Команда</a>
            </li>
            <li class="textovosn header_item"><a href="#">Drupalgive </a>
            </li>
            <li class="textovosn header_item"><a href="#" >Блог</a>
            </li>
            <li class="textovosn header_item"><a href="#">Курсы Drupal</a>
            </li>
            <li class="textovosn header_item"><a href="#">Вакансии</a>
            </li>
            </ul>
           </li>
        <li class="textovosn header_item headerB-o"><a href="#" class="header_link">Проекты</a> </li>
        <li class="textovosn header_item headerB-o"><a href="#contacts" class="header_link">Контакты</a> </li>
                  </ul>

                </nav>
      <div class="header_burger burger">
      <span class="burger_line burger_line_first"></span>
      <span class="burger_line burger_line_second"></span>
      <span class="burger_line burger_line_third"></span>
      </div>
      </div>
            </header>



        <div class="container" style="z-index: 3;">
          <div class="row">
            <div class="nach-num-one col-md-6 ">
              <h1 class="textovosn nach-title">Поддержка <br>сайтов на Drupal</h1>
              <div class="textovosn nach-one">
               Сопровождение и поддержка сайтов <br>
                на CMS Drupal любых версий и запущенности
              </div>
              <div class="nach-btn">
                <a href="#tarifs" class="btn textovosn nach-btn-osn ">Тарифы</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row nach-info">
                <div class="col-md-4 col-sm-4 col-6 support-achievement">

                  <div class="nach-info-wrapper">
                    <div class="bad">
                    <div class="textovosn  bad-one">#1 <img src="./img/cup.png" class="img_nav"></div>
                    <div class="textovosn nach-info-text bad-text">
                       Drupal-разработчик <br> в России по версии Рейтинга Рунета
                    </div>
                  </div>
                </div>
              </div>
                <div class="col-md-4 col-sm-4 col-6 support-achievement">
                  <div class="nach-info-wrapper">
                    <div class="textovosn nach-info-title">3+</div>
                    <div class="textovosn nach-info-text">
                       средний опыт <br> специалистов более <br> 3 лет
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 col-6 support-achievement">
                  <div class="nach-info-wrapper">
                    <div class="textovosn nach-info-title">14</div>
                    <div class="textovosn nach-info-text">
                       лет опыта в сфере <br> Drupal
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 col-6 support-achievement">
                  <div class="nach-info-wrapper">
                    <div class="textovosn nach-info-title">200+</div>
                    <div class="textovosn nach-info-text">
                       модулей и тем <br> в формате DrupalGive
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 col-6 support-achievement">
                  <div class="nach-info-wrapper">
                    <div class="textovosn nach-info-title">35 000+</div>
                    <div class="textovosn nach-info-text">
                       часов поддержки <br> сайтов на Drupal
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 col-6 support-achievement">
                  <div class="nach-info-wrapper">
                    <div class="textovosn nach-info-title">200+</div>
                    <div class="textovosn nach-info-text">
                       Проектов <br> на поддержке
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
</template>

<script>
export default {
    
    setup() {
        
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;700&display=swap');
.textovosn{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
}

/* -- выпадающее окно -- */
.header__lang {
    z-index: 5;
    padding-left: 38px;
    position: relative;
}

.header__lang-arrow {
    z-index: 5;
    padding-left: 10px;
}

.header__lang ul {
    position: absolute;
    top: 10px;
    padding-top: 15px;
    display: none;
    min-width: 60px;
    left: -28px;
}

.header__lang ul li {
    background: #F14D34;
    width: 200px;
    height: 30px;
}

.header__lang ul li a {
    padding: 10px;
    text-transform: none;
    font-size: 14px;

}
body.desctop .header__lang:hover>ul {
    display: block;
    z-index: 5;
}
li {
    list-style-type: none; /* Убираем маркеры */
   }
   /* -- конец выпадающего окна -- */
pos{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;}

   .headlog{
width: 137px;
height: 30px;
}
/* -- навигация -- */
.header_wrapper{
    margin-left: 103px;
    margin-right: 151px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;margin-top: 39px;
}
.header_list{
    display: flex;
    flex-wrap: wrap;
}
.header{position: fixed;
    display: flex;
    justify-content: space-between;
    color: #fff;
font-style: normal;
left: 0;
bottom: 0;
width: 100%;
z-index: 9999;
}
.header_item:last-child{
    margin-right: 0;
}
.header_item{
     margin-right: 15px;
    text-decoration: none;
 padding-left: 0px;
font-size: 15px;
padding-left: 15px;
margin-left: 10px;
align-items: flex-end;
}
.header_item a:hover{
    padding-bottom: 5px;
    border-bottom:3px solid #f14d34;
}
/* -- бургер -- */
.header_burger{display: none;
    width: 40px;
    height: 28px;
    position: relative;
}
.burger_line{
display: block;
width: 70%;
height: 2px;
background-color: #fff;
position: absolute;
right: 10px;
margin-bottom: 5px;
margin-top: 5px;
}
.burger_line_first{
    top: 0;
}
.burger_line_second{
    top: 27%;
}
.burger_line_third{
    bottom: 0;
}
   /*Короче херовое меню для мобилки в исполнении великого меня*/

   .arrow{
    position: absolute;
    top: 8px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid #FFFFFF;
    transform: rotate(-270deg);
}

.arrow2{
    position: absolute;
    top: 8px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid #FFFFFF;
    transform: rotate(-270deg);
}

.arrow.active{
    transform: rotate(-270deg);
}
.arrow2.active{
    transform: rotate(-270deg);
}

menu a{
    text-decoration: none;
}
.menu li{
    position: relative;
}
.sub-menu__link{
    position: absolute;
}
.menu a.parent{
    margin:  0px 3px 0px 0px ;
}

body.touch .sub-menu__list.open{
    display: block;
}
@media screen and (max-width: 767px){/* -- медиа для телефонов (навигация)-- */
    .header_wrapper.opened{
        border-top: 3px solid white;
        z-index: 203;
    }
    .menu a.parent{
        margin:  0px 10px 0px 0px ;

    }
    .header_logo{
        z-index: 101;
    }
    .menu ul{
        padding: 0;
    }
    .header_item{
        border-top: 1px solid gray;
        padding-left: 20px;
        padding-bottom: 5px;
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        left: 0;
    }
    .mbtext{
        color: tomato;
    }
    .arrow{
        position: absolute;
        top: 12px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #FFFFFF;
        transform: rotate( 0deg);
    }

    .arrow2{
        position: absolute;
        top: 12px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #FFFFFF;
        transform: rotate( 0deg);
    }

   .header__druplicon{
       display: none;
   }
    .header__lang ul li a {
        font-size: 14px;
    }
    .header__lang {
        position: relative;
        width: 100%;
    }
    .header__lang ul {
        position: absolute;
        top: 22px;
        padding-top: 15px;
        max-width: 100%;
        width: 400px;
        display: none;
        min-width: 300px;
        left: 0px;
    }
    .header__lang ul li {
        width: 100%;
        background-color: black;


    }
    .header__lang.active{
        margin-bottom: 152px;
    }

    /* -- бургер -- */
    .header_wrapper{
        margin-left: 0px;
        margin-right: 0px;
        width: 100%;
        height: 35px;
        display: flex; background-color: rgba(2, 1, 12, 0.973);
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 39px;
    }
    .header_burger{display: block;  z-index: 100;
    }
    .header{z-index: 200;}
    .menu{
        width: 100%;
        height: 80%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color:black;
        z-index: 100;
        transition: all 0.5s;
        transform: translateY(100%)
        
        }
    .header_nav_active{
        transform: translate(0);
    }

    .header_link{
        font-size: 14px;
        line-height: 33px;
        margin-bottom: 0px;
    }
    .header_list{
        display:block;
    }
    .header_link:last-child{
        margin-bottom: 0;
    }
    .menu-close{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 20px;
        right: 0px;
        z-index: 12;
    }
    .menu-close-line{
        display: block;
        height: 2px;
        width: 50%;
        background-color: #fff;
        position: absolute;

        transform: translateY(-50%);
    }
    .menu-close-line:first-child{
        transform: translateY(-50%) rotate(45deg);
    }
    .menu-close-line:last-child{
        transform: translateY(-50%) rotate(-45deg);
    }
}

.video_media {
    width: 100%;
    max-height: 800px;
    height: 100%;
    filter: brightness(25%);
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
}
.pos{
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;
}
.header__druplicon {
    position: absolute;
    left: -10px;
    top: 0px;
    z-index: 3;
}


.head{
    background-color: rgba(2, 1, 12, 0.973);
    color: #fff;
    height: 800px;
}

.bad{
position: relative;
}
.bad-one{
    position: absolute;
    font-size: 48px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    top: -24px;
}
.bad-text{
    position: absolute;
    top: 29px;
}
.img_nav{
    position: absolute;
    top: -7px;
    left: 60px;
}
.nach-num-one{
margin-top: 35px;
text-align: center;
}
.nach-title{
font-weight: bold;
font-size: 24px;
margin-top: 0;
line-height: 1.2;
 margin-bottom: 20px;
color: #FFFFFF;
}
.nach-btn-osn{
font-size: 15px;
line-height: 12px;
padding-top: 24px;
padding-bottom: 24px;
color: #fff;
}
.nach-one{
    margin-top: 15px;
font-size: 14px;
color: #FFFFFF;
opacity: 0.8;
}
.nach-btn{
    margin-top: 55px;
    border: 2px solid #F14D34;
    width: 220px;
    height: 60px;
    align-items: center;
text-align: center;
    border-radius: 5px;
    margin-left: 25%;
}
.nach-btn:hover{cursor: pointer;
    background-color: #F14D34;
}
.nach-info{
    margin-top: 45px;
    margin-left: 0px;
}
.nach-info-wrapper{
    width: 160px;
height: 90px;
margin-top: 40px;
border-left:3px solid #f14d34;
padding-left: 15px;
}
.nach-info-title{
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;

}
.nachone{
    padding-bottom: 0px;
}
.nach-info-text{
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    opacity: 0.7;
    margin-top: 4px;
}

nav a{
    text-decoration: none;
    color: #fff;
}
nav a:hover{
    text-decoration: none;
    color: #fff;
}

.B{
    margin-right: 151px;
}
.B2{
    font-size: 17px;
}
.osn{
margin-top: 58px;
width: 100%;
height: 716px;
z-index: 1;
}
.title{
font-weight: bold;
color: #050C33;
}
.o1{font-size: 24px;
   margin-bottom: 10px;
   font-weight: bold;
   font-family: Montserrat;
}
.o11{
    font-size: 24px;
    font-weight: bold;
}
.o{
height: 44px;
 font-weight: 500;
font-size: 16px;
opacity: 0.7;
margin-right: 5px;
}
.o11{font-size: 24px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.o11{font-size: 24px;
}
.ic{
    width: 182px;
    height: 194px;
    margin-top: 63px;
}
.ic-icon{
    text-align: center;
}
.n{
    margin-top: 50px;
}
.ic-body{font-weight: 500;
font-size: 14px;
line-height: 22px;
margin-top: 25px;
color: #050C33;
opacity: 0.7;
}
.support{
    z-index: 2;
    margin-top: 580px;
}
.sup-header{
    z-index: 1;
}
.supp{
    width: 100%;
height: 1810px;
margin-top: 56px;
filter: drop-shadow(20px 20px 40px rgba(5, 12, 51, 0.05));
}
.sup{position:relative;
height: 230px;
margin: 5px;
background-color: #FFFFFF;
z-index: 3;
border-radius: 5px;
}

.sup-wrapper{
    padding-left: 26px;
    }
    .supnum{
        opacity: 0.5;
        font-size: 12px;
        line-height: 15px;
        padding-top: 27px;
    }
    .sup-body{
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        opacity: 0.7;
        padding-top: 12px;
        padding-right: 35px;
          z-index: 1;
        position: relative;
    }
    .sup-title{
        padding-top: 20px;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        position: relative;
        font-family: Montserrat;
    }
    .sup-icon{
        z-index: 0;
        right:0;
        bottom:0;
        position:absolute;
    }
    .laptop{
        background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.548) -114.85%, rgba(255, 255, 255, 0) 69.04%), #0a0b0c;
        color: #FFFFFF;
      z-index: 3;
        height: 1155px;
        width: 100%;
        margin-top: -108px;
        overflow: hidden;
    }
    .lapt{
        width: 270px;
        height: 100px;
        border-left:3px solid #f14d34;
        margin-bottom: 30px;
    }
    .lapt-body{
font-size: 16px;
line-height: 22px;
opacity: 0.7;
padding-left:15px;
padding-top:5px;
padding-bottom:10px;
margin-right: 5px;
    }
    .laptop-img{
position:absolute; z-index: 1;
margin-top: 300px;
filter: drop-shadow(0px 4px 69px rgba(16, 26, 58, 0.106));
}
.laptop.container-fluid{
        position:relative;
}
.laptop-img-l{
        width: 100%;
         height: 322px;

}
.ic{
    width: auto;
}
.ic1-row{ position:relative;
        top: 235px;
        left: 0px;
}
.ic2-row{ position:relative;
        top: 250px;
        left: 0px;
    }
.ic-col{
       margin-right: -50px;
}




@media screen and (min-width: 700px) and (orientation: landscape) {
    .head{
        height: 650px;
        background-color: rgb(1, 1, 8);
    }
    .nach-title{
        font-weight: bold;
        font-size: 52px;
        line-height: 60px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }
    .support{
               margin-top: 243px;
    }

    .sup{border-radius: 5px;
        width: 292px;
        height: 292px;
    }

    .supp{
        width: 1184px;
        height: 589px;
        margin-top: 56px;
        margin-left: 104px;
        margin-right: 152px;
        filter: drop-shadow(20px 20px 40px rgba(5, 12, 51, 0.05));
    }

    .sup-title{
           margin-right: 35px;
     }

    .o{
        width: 493px;
        height: 44px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
    .o1{
        font-size: 42px;
        width: 580px;
        height: 153px;
        margin-bottom: 20px;
        }

    .o111{
        font-size: 42px;
    }
    .o11{font-size: 42px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .nach-btn{
        margin-top: 55px;
        border: 2px solid #F14D34;
        width: 220px;
        height: 60px;
        margin-left: 0px;
    }
    .ic-body{
        font-size: 16px;
        line-height: 22px;
        margin-top: 25px;
        color: #050C33;
        opacity: 0.7;
        }

    .nach-info-wrapper{
        width: 180px;
        height: 80px;
        margin-top: 100px;
        padding-left: 10px;
    }

    .nach-info{
        margin-top: 70px;
        margin-left: 0px;
    }

    .nach-num-one{
        margin-top: 131px;
        text-align: left;
    }
    .nach-one{
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        opacity: 0.8;
    }

    .osn{
        margin-left: 170px;
        margin-right: 196px;
        margin-top: 103px;
        width: 1082px;
        height: 716px;
        z-index: 1;
    }
    .ic{
            width: 182px;
            height: 194px;
            margin-top: 63px;
    }
    .ic-icon{
            text-align: left;
    }
    .laptop{
        margin-top: -188px;
        height: 955px;
       overflow: hidden;
    }
    .laptop-img{
        margin-top: 25px;

    }
    .laptop-img-l{
        width: 710px;
        height: 672px;
        }
    .ic1-row{ position:relative;
            top: 410px;
            left: 730px;
        }
    .ic2-row{ position:relative;
        top: 460px;
        left: 730px;
        width: 700px;
    }
    .video{
        width: 100%;
        max-height: 650px;
        height: 100%;
        filter: brightness(25%);
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
    }
    .header{
        position: relative;
    }
    .plans {
    position: relative;
    height: 913px;
    }
}

</style>