(function(g){var window=this;'use strict';var kab=function(a){g.V.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.Bf=!1;this.player=a;this.S(a,"minimized",this.nh);this.S(a,"onStateChange",this.SL)},lab=function(a){g.vP.call(this,a);
this.u=new g.QE(this);this.j=new kab(this.player);this.j.hide();g.OO(this.player,this.j.element,4);a.Jf()&&(this.load(),g.po(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.po(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(kab,g.V);g.k=kab.prototype;
g.k.fJ=function(){this.tooltip=new g.vT(this.player,this);g.M(this,this.tooltip);g.OO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ic=new g.oQ(this.player);g.M(this,this.Ic);this.Ci=new g.V({F:"div",K:"ytp-miniplayer-scrim"});g.M(this,this.Ci);this.Ci.Ca(this.element);this.S(this.Ci.element,"click",this.qE);var a=new g.V({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"St\u00e4ng"},W:[g.kM()]});g.M(this,a);a.Ca(this.Ci.element);this.S(a.element,"click",
this.Kn);a=new g.v2(this.player,this);g.M(this,a);a.Ca(this.Ci.element);this.Ls=new g.V({F:"div",K:"ytp-miniplayer-controls"});g.M(this,this.Ls);this.Ls.Ca(this.Ci.element);this.S(this.Ls.element,"click",this.qE);var b=new g.V({F:"div",K:"ytp-miniplayer-button-container"});g.M(this,b);b.Ca(this.Ls.element);a=new g.V({F:"div",K:"ytp-miniplayer-play-button-container"});g.M(this,a);a.Ca(this.Ls.element);var c=new g.V({F:"div",K:"ytp-miniplayer-button-container"});g.M(this,c);c.Ca(this.Ls.element);this.NS=
new g.RR(this.player,this,!1);g.M(this,this.NS);this.NS.Ca(b.element);b=new g.PR(this.player,this);g.M(this,b);b.Ca(a.element);this.nextButton=new g.RR(this.player,this,!0);g.M(this,this.nextButton);this.nextButton.Ca(c.element);this.Fi=new g.iT(this.player,this);g.M(this,this.Fi);this.Fi.Ca(this.Ci.element);this.Cc=new g.cS(this.player,this);g.M(this,this.Cc);g.OO(this.player,this.Cc.element,4);this.fE=new g.V({F:"div",K:"ytp-miniplayer-buttons"});g.M(this,this.fE);g.OO(this.player,this.fE.element,
4);a=new g.V({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"St\u00e4ng"},W:[g.kM()]});g.M(this,a);a.Ca(this.fE.element);this.S(a.element,"click",this.Kn);a=new g.V({F:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"St\u00e4ng"},W:[g.rM()]});g.M(this,a);a.Ca(this.fE.element);this.S(a.element,"click",this.u2);this.S(this.player,"presentingplayerstatechange",this.Vc);this.S(this.player,"appresize",this.Bb);this.S(this.player,"fullscreentoggled",
this.Bb);this.Bb()};
g.k.show=function(){this.Ne=new g.ao(this.Ht,null,this);this.Ne.start();this.Bf||(this.fJ(),this.Bf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Cc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ne&&(this.Ne.dispose(),this.Ne=void 0);g.V.prototype.hide.call(this);this.player.Jf()||(this.Bf&&this.Cc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Ne&&(this.Ne.dispose(),this.Ne=void 0);g.V.prototype.ra.call(this)};
g.k.Kn=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.u2=function(){this.player.playVideo()};
g.k.qE=function(a){if(a.target===this.Ci.element||a.target===this.Ls.element)g.cL(this.player.Db())?this.player.pauseVideo():this.player.playVideo()};
g.k.nh=function(){g.po(this.player.getRootNode(),"ytp-player-minimized",this.player.Jf())};
g.k.pe=function(){this.Cc.hc();this.Fi.hc()};
g.k.Ht=function(){this.pe();this.Ne&&this.Ne.start()};
g.k.Vc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Bb=function(){g.vS(this.Cc,0,this.player.fb().getPlayerSize().width,!1);g.fS(this.Cc)};
g.k.SL=function(a){this.player.Jf()&&(0===a?this.hide():this.show())};
g.k.xc=function(){return this.tooltip};
g.k.If=function(){return!1};
g.k.Cg=function(){return!1};
g.k.Ej=function(){return!1};
g.k.Ek=function(){return!1};
g.k.Be=function(){return!1};
g.k.aB=function(){};
g.k.Jo=function(){};
g.k.dw=function(){};
g.k.Kl=function(){return null};
g.k.dD=function(){return null};
g.k.Gz=function(){return null};
g.k.zj=function(){return new g.Bl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Qt=function(a,b,c,d,e){var f=0,h=d=0,l=g.Pl(a);if(b){c=g.ko(b,"ytp-prev-button")||g.ko(b,"ytp-next-button");var m=g.ko(b,"ytp-play-button"),n=g.ko(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Nl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ko(b,"ytp-miniplayer-button-top-left"),f=g.Nl(b,this.element),b=g.Pl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.xg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Vn=function(){};
g.k.Ak=function(){return!1};
g.k.bB=function(){};
g.k.ox=function(){};
g.k.Dp=function(){};
g.k.iC=function(){};
g.k.mq=function(){};g.v(lab,g.vP);g.k=lab.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.po(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.vP.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Tj=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.uP("miniplayer",lab);})(_yt_player);
