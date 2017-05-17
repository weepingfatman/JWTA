if (self.CavalryLogger) { CavalryLogger.start_js(["2HTwc"]); }

__d("ComposerNUXType",[],(function a(b,c,d,e,f,g){f.exports={CAMERA_NUX:"camera_nux_seen",ADD_MORE_NUX:"add_more_nux_seen",OGCOMPOSER_NUX:"ogcomposer_nux_seen",FACEREC_SUGGESTIONS_NUX:"facerec_suggestions_nux_seen",TAGGING_FLYOUT_NUX:"tagging_flyout_nux_seen",SHARER_MINUTIAE_NUX:"sharer_minutiae_nux_seen",ADD_STICKERS_NUX:"add_stickers_nux_seen",UPCOMING_BIRTHDAYS_NUX:"upcoming_birthdays_nux_seen",CROSS_POST_NUX:"cross_post_nux_seen",SLIDESHOW_NUX:"slideshow_nux_seen"};}),null);
__d('CircularProgressBar.react',['cx','React'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'CircularProgressBar',propTypes:{percentComplete:i.number.isRequired},render:function k(){var l=360*this.props.percentComplete/100,m=Math.max(l,180)-180,n=Math.min(l,180),o=this.props.percentComplete<100?'1':'0';return c('React').createElement('div',{className:"_1_bj",style:{opacity:o}},c('React').createElement('div',{className:"_1_bk"},c('React').createElement('div',{className:"_1_bl",style:{opacity:o}}),c('React').createElement('div',{className:"_1_bp _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+m+'deg)',opacity:o}})),c('React').createElement('div',{className:"_1_bs _1_bq"},c('React').createElement('div',{className:"_1_br",style:{transform:'translateX(-100%) rotate('+n+'deg)',opacity:o}}))));}});f.exports=j;}),null);
__d("createExponentialMovingAverage",[],(function a(b,c,d,e,f,g){function h(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l;return function(n){return m+=k*(n-m);};}function i(k){return function(l){return 1-Math.exp(-l/k);};}function j(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1],m=l,n=i(k);return function(o,p){return m+=n(p)*(o-m);};}h.createContinuous=j;f.exports=h;}),null);
__d('VelocityTracker',['createExponentialMovingAverage','performanceNow'],(function a(b,c,d,e,f,g){function h(){var i=arguments.length<=0||arguments[0]===undefined?50:arguments[0],j=arguments.length<=1||arguments[1]===undefined?{x:0,y:0}:arguments[1];'use strict';this.$VelocityTracker5=j.x;this.$VelocityTracker6=j.y;this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker2=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker5);this.$VelocityTracker3=c('createExponentialMovingAverage').createContinuous(i,this.$VelocityTracker6);}h.prototype.update=function(i,j){'use strict';var k=0;if(this.$VelocityTracker4){k=c('performanceNow')()-this.$VelocityTracker1;k=this.updateVelocity((i-this.$VelocityTracker4.x)*1000/k,(j-this.$VelocityTracker4.y)*1000/k);}else this.$VelocityTracker1=c('performanceNow')();this.$VelocityTracker4={x:i,y:j};return k;};h.prototype.updateVelocity=function(i,j){'use strict';var k=c('performanceNow')(),l=k-this.$VelocityTracker1;this.$VelocityTracker1=k;this.$VelocityTracker5=this.$VelocityTracker2(i,l);this.$VelocityTracker6=this.$VelocityTracker3(j,l);return l;};h.prototype.getVelocityX=function(){'use strict';return Math.trunc(this.$VelocityTracker5);};h.prototype.getVelocityY=function(){'use strict';return Math.trunc(this.$VelocityTracker6);};h.prototype.getSpeed=function(){'use strict';return Math.trunc(Math.sqrt(this.$VelocityTracker5*this.$VelocityTracker5+this.$VelocityTracker6*this.$VelocityTracker6));};f.exports=h;}),null);
__d('LeftFillRightFitLayout.react',['invariant','Layout.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('Layout.react').Column,l=c('Layout.react').FillColumn;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(n){j.constructor.call(this,n);}m.prototype.$LeftFillRightFitLayout1=function(){var n=[],o=this.props.children;o&&o.length===2||h(0);c('React').Children.forEach(this.props.children,function(p){return n.push(p);},this);return {firstChild:n[0],secondChild:n[1]};};m.prototype.render=function(){var n=this.$LeftFillRightFitLayout1();return c('React').createElement(c('Layout.react'),{className:this.props.className,style:this.props.style},c('React').createElement(l,{className:this.props.fillColumnClassName},n.firstChild),c('React').createElement(k,{className:this.props.fitColumnClassName},n.secondChild));};f.exports=m;}),null);
__d('ReactComposerMediaAttachmentActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({SET_MEDIA_CONFIG:null},'ReactComposerMediaAttachmentActionType');}),null);
__d('ReactComposerMediaAttachmentStore',['ReactComposerMediaAttachmentActionType','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){'use strict';var k;i.constructor.call(this,function(){return {createAlbumLink:null,taggingDataSource:null,videoUploader:null,videoProgressBar:null,videoProgressBarInstance:null};},function(l){switch(l.type){case c('ReactComposerMediaAttachmentActionType').SET_MEDIA_CONFIG:k&&k.$ReactComposerMediaAttachmentStore1(l);break;}});k=this;}j.prototype.getCreateAlbumLink=function(k){'use strict';return this.getComposerData(k).createAlbumLink;};j.prototype.getTaggingDataSource=function(k){'use strict';return this.getComposerData(k).taggingDataSource;};j.prototype.getVideoUploader=function(k){'use strict';return this.getComposerData(k).videoUploader;};j.prototype.getVideoProgressBarInstance=function(k){'use strict';return this.getComposerData(k).videoProgressBarInstance;};j.prototype.getVideoProgressBar=function(k){'use strict';return this.getComposerData(k).videoProgressBar;};j.prototype.$ReactComposerMediaAttachmentStore1=function(k){'use strict';var l=this.getComposerData(k.composerID);l.createAlbumLink=k.config.createAlbumLink;l.taggingDataSource=k.config.taggingDataSource;l.videoUploader=k.config.videoUploader;l.videoProgressBar=k.config.videoProgressBar;l.videoProgressBarInstance=k.config.videoProgressBarInstance;this.emitChange(k.composerID);};f.exports=new j();}),null);
__d('ReactComposerMediaAttachmentActions',['ReactComposerMediaAttachmentActionType','ReactComposerDispatcher','ReactComposerMediaAttachmentStore'],(function a(b,c,d,e,f,g){c('ReactComposerMediaAttachmentStore');h.prototype.setConfig=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerMediaAttachmentActionType').SET_MEDIA_CONFIG,config:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.createAlbumSelectorClicked=function(i){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMediaAttachmentActionType').CREATE_ALBUM_SELECTOR_CLICKED});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerStatusActions',['ReactComposerStatusActionType','ReactComposerDispatcher','ReactComposerStatusStore'],(function a(b,c,d,e,f,g){c('ReactComposerStatusStore');h.prototype.setMentionsSource=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE,mentionsSource:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTypeaheadReporter=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER,typeaheadReporter:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_EDITOR_STATE,editorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setOriginalEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE,originalEditorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setMentions=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS,mentions:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTextLength=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerStatusActionType').SET_TEXT_LENGTH,textLength:j});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerMultilingualStatusActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){f.exports=c('keyMirrorRecursive')({MOUNTED_MULTILINGUAL_STATUS:null,MULTILINGUAL_PROMPT_CLICK:null,MULTILINGUAL_PROMPT_CLOSE:null,LANGUAGE_CREATED:null,LANGUAGE_CHANGED:null,LANGUAGE_REMOVED:null,SET_LANGUAGE_EDITOR_STATE:null,SET_SPECIFIED_POST_LANGUAGE:null,PREFILL_MULTILINGUAL_DATA:null},'ReactComposerMultilingualStatusActionType');}),null);
__d('MentionsInputUtility',['DraftEntity','UnicodeUtils','createEditorStateWithEntities','sanitizeDraftText'],(function a(b,c,d,e,f,g){var h=new RegExp(/@\[(\d+):((\\\]|[^\]])+)\]/g),i=new RegExp(/@\[(\d+):(\d+):((\\\]|[^\]])+)\]/g),j=function l(m){var n=c('sanitizeDraftText')(m),o=n.replace(i,'@[$1:$3]'),p=[],q;while(q=h.exec(o)){var r=q[2].replace(/\\:/g,':').replace(/\\]/g,']').replace(/\n/g,''),s={uid:q[1],text:r,offset:q.index,length:r.length,weakreference:false,entity:{uid:q[1],weakreference:false}};p.push(s);o=o.substr(0,s.offset)+s.text+o.substr(s.offset+q[0].length);h.lastIndex=s.offset+s.length;}return {text:o,ranges:p};},k=function l(m,n){var o=this.parseTextWithMentions(m),p=o.text,q=o.ranges;q.forEach(function(r){var s=c('UnicodeUtils').substring(p,0,r.offset).length-p.substring(0,r.offset).length;r.offset-=s;});return c('createEditorStateWithEntities')({text:p,ranges:q,decorator:n,entityCreationFn:function r(s){return c('DraftEntity').create('MENTION','IMMUTABLE',{id:s.uid,isWeak:s.weakreference});},splitIntoBlocks:true,allowUndo:true});};f.exports={createFromTextWithMentions:k,parseTextWithMentions:j};}),null);
__d('ReactComposerMultilingualStatusStore',['ReactComposerMultilingualStatusActionType','ReactComposerStoreBase','MentionsInputUtility','getMentionsInputDecorator','getMentionsTextForContentState','immutable'],(function a(b,c,d,e,f,g){var h,i,j=c('immutable').Record({languageDialect:null,editorState:null});h=babelHelpers.inherits(k,c('ReactComposerStoreBase'));i=h&&h.prototype;function k(){'use strict';var l;i.constructor.call(this,function(){return {statuses:c('immutable').List(),specifiedPostLanguage:''};},function(m){switch(m.type){case c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS:l&&l.$ReactComposerMultilingualStatusStore1(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED:l&&l.$ReactComposerMultilingualStatusStore2(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED:l&&l.$ReactComposerMultilingualStatusStore3(m);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED:l&&l.$ReactComposerMultilingualStatusStore4(m);break;case c('ReactComposerMultilingualStatusActionType').SET_LANGUAGE_EDITOR_STATE:l&&l.$ReactComposerMultilingualStatusStore5(m);break;case c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE:l&&l.$ReactComposerMultilingualStatusStore6(m);break;case c('ReactComposerMultilingualStatusActionType').PREFILL_MULTILINGUAL_DATA:l&&l.$ReactComposerMultilingualStatusStore7(m);break;}});l=this;}k.prototype.getAllPostDialects=function(l){'use strict';var m=this.getLanguageDialects(l);m.push(this.getSpecifiedPostLanguage(l));return m;};k.prototype.getSpecifiedPostLanguage=function(l){'use strict';return this.getComposerData(l).specifiedPostLanguage;};k.prototype.getLanguageDialects=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.languageDialect;}).toArray();};k.prototype.getEditorStates=function(l){'use strict';return this.getStatuses(l).map(function(m){return m.editorState;}).toArray();};k.prototype.getMessages=function(l){'use strict';return this.getStatuses(l).map(function(m){return this.$ReactComposerMultilingualStatusStore8(m);}.bind(this)).toArray();};k.prototype.getMessage=function(l,m){'use strict';var n=this.getStatus(l,m);return this.$ReactComposerMultilingualStatusStore8(n);};k.prototype.getStatuses=function(l){'use strict';return this.getComposerData(l).statuses;};k.prototype.getStatus=function(l,m){'use strict';var n=this.getComposerData(l),o=this.$ReactComposerMultilingualStatusStore9(n.statuses,m);return n.statuses.get(o);};k.prototype.getPostData=function(l){'use strict';var m=this.getMessages(l);if(m.length===0)return {};return {multilingual_specified_lang:this.getSpecifiedPostLanguage(l),multilingual_status_langs:this.getLanguageDialects(l),multilingual_statuses:m};};k.prototype.$ReactComposerMultilingualStatusStore9=function(l,m){'use strict';var n=l.findIndex(function(o){return o.languageDialect===m;});if(n===-1)throw new Error('Undefined status language dialect: '+m);return n;};k.prototype.$ReactComposerMultilingualStatusStore8=function(l){'use strict';var m=l.editorState.getCurrentContent();return c('getMentionsTextForContentState')(m);};k.prototype.$ReactComposerMultilingualStatusStore2=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','languageConfig']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=new j({languageDialect:o,editorState:p.editorState});q.statuses=q.statuses.push(r);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore3=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n),q=this.$ReactComposerMultilingualStatusStore9(p.statuses,o);p.statuses=p.statuses.splice(q,1);this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore4=function(l){'use strict';var m=this.validateAction(l,['composerID','oldLanguageDialect','newLanguageDialect']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:p,editorState:q.statuses.get(r).editorState}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore5=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect','editorState']),n=m[0],o=m[1],p=m[2],q=this.getComposerData(n),r=this.$ReactComposerMultilingualStatusStore9(q.statuses,o);q.statuses=q.statuses.set(r,new j({languageDialect:o,editorState:p}));this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore1=function(l){'use strict';this.$ReactComposerMultilingualStatusStore6(l);};k.prototype.$ReactComposerMultilingualStatusStore6=function(l){'use strict';var m=this.validateAction(l,['composerID','languageDialect']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o;this.emitChange(n);};k.prototype.$ReactComposerMultilingualStatusStore7=function(l){'use strict';var m=this.validateAction(l,['composerID','multilingualData']),n=m[0],o=m[1],p=this.getComposerData(n);p.specifiedPostLanguage=o.specifiedDialect;o.multilingualStatuses.forEach(function(q){p.statuses=p.statuses.push(new j({languageDialect:q.dialect,editorState:c('MentionsInputUtility').createFromTextWithMentions(q.message,c('getMentionsInputDecorator')())}));});this.emitChange(n);};f.exports=new k();}),null);