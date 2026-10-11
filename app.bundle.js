var gd=0,Kh=1,xd=2;var gs=1,vd=2,cr=3,fi=0,tn=1,wn=2,wt=0,cs=1,xi=2,Jh=3,Qh=4,Ml=5;var pn=100,yd=101,_d=102,Md=103,Ad=104,xs=200,bd=201,Sd=202,wd=203,zo=204,ko=205,xa=206,Ed=207,va=208,Td=209,Cd=210,Rd=211,Pd=212,Id=213,Dd=214,Vo=0,Go=1,Ho=2,hs=3,Wo=4,Xo=5,qo=6,Yo=7,Zh=0,Ld=1,Ud=2,Fn=0,ya=1,_a=2,Ma=3,vs=4,Aa=5,ba=6,Sa=7;var jh=300,Hi=301,ys=302,Al=303,bl=304,wa=306,mn=1e3,Wn=1001,Ko=1002,St=1003,Nd=1004;var Ea=1005;var zt=1006,Sl=1007;var Wi=1008;var Jt=1009,$h=1010,eu=1011,hr=1012,wl=1013,Bn=1014,En=1015,gt=1016,El=1017,Tl=1018,Xi=1020,tu=35902,nu=35899,iu=1021,su=1022,an=1023,qn=1026,Qn=1027,Cl=1028,Rl=1029,_s=1030,Pl=1031;var Il=1033,Ta=33776,Ca=33777,Ra=33778,Pa=33779,Dl=35840,Ll=35841,Ul=35842,Nl=35843,Fl=36196,Bl=37492,Ol=37496,zl=37488,kl=37489,Vl=37490,Gl=37491,Hl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Kl=37813,Jl=37814,Ql=37815,Zl=37816,jl=37817,$l=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,ac=36283,oc=36284,lc=36285,cc=36286;var kr=2300,Jo=2301,Oo=2302,Nh=2303,Fh=2400,Bh=2401,Oh=2402;var Fd=3200;var hc=0,Bd=1,vi="",Dt="srgb",us="srgb-linear",Vr="linear",nt="srgb";var os=7680;var zh=519,Od=512,zd=513,kd=514,uc=515,Vd=516,Gd=517,fc=518,Hd=519,kh=35044,Ms=35048;var ru="300 es",Un=2e3,js=2001;function ig(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wd(){let n=Gr("canvas");return n.style.display="block",n}var Gf={},$s=null;function au(...n){let e="THREE."+n.shift();$s?$s("log",e,...n):console.log(e,...n)}function Xd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=Xd(n);let e="THREE."+n.shift();if($s)$s("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=Xd(n);let e="THREE."+n.shift();if($s)$s("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Hr(...n){let e=n.join(" ");e in Gf||(Gf[e]=!0,Ge(...n))}function qd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Yd={[Vo]:Go,[Ho]:qo,[Wo]:Yo,[hs]:Xo,[Go]:Vo,[qo]:Ho,[Yo]:Wo,[Xo]:hs},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=1234567,Fr=Math.PI/180,er=180/Math.PI;function As(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function rg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ag(n,e,t){return n!==e?(t-n)/(e-n):0}function Br(n,e,t){return(1-t)*n+t*e}function og(n,e,t,i){return Br(n,e,1-Math.exp(-t*i))}function lg(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function cg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ug(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fg(n,e){return n+Math.random()*(e-n)}function dg(n){return n*(.5-Math.random())}function pg(n){n!==void 0&&(Hf=n);let e=Hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(n){return n*Fr}function gg(n){return n*er}function xg(n){return(n&n-1)===0&&n!==0}function vg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _g(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ut={DEG2RAD:Fr,RAD2DEG:er,generateUUID:As,clamp:Ze,euclideanModulo:ou,mapLinear:rg,inverseLerp:ag,lerp:Br,damp:og,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:fg,randFloatSpread:dg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:xg,ceilPowerOfTwo:vg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:_g,normalize:jt,denormalize:Qs},ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],m=r[a+2],b=r[a+3];if(d!==b||l!==f||c!==p||h!==m){let g=l*f+c*p+h*m+d*b;g<0&&(f=-f,p=-p,m=-m,b=-b,g=-g);let u=1-o;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);u=Math.sin(u*_)/M,o=Math.sin(o*_)/M,l=l*u+f*o,c=c*u+p*o,h=h*u+m*o,d=d*u+b*o}else{l=l*u+f*o,c=c*u+p*o,h=h*u+m*o,d=d*u+b*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*p-c*f,e[t+1]=l*m+h*f+c*d-o*p,e[t+2]=c*m+h*p+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"YZX":this._x=f*h*d+c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d-f*p*m;break;case"XZY":this._x=f*h*d-c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d+f*p*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new L,Wf=new bn,Ye=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],b=s[0],g=s[3],u=s[6],_=s[1],M=s[4],A=s[7],P=s[2],C=s[5],I=s[8];return r[0]=a*b+o*_+l*P,r[3]=a*g+o*M+l*C,r[6]=a*u+o*A+l*I,r[1]=c*b+h*_+d*P,r[4]=c*g+h*M+d*C,r[7]=c*u+h*A+d*I,r[2]=f*b+p*_+m*P,r[5]=f*g+p*M+m*C,r[8]=f*u+p*A+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=t*d+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(s*c-h*i)*b,e[2]=(o*i-s*a)*b,e[3]=f*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uh.makeScale(e,t)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uh=new Ye,Xf=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){let n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:e,whitePoint:i,transfer:Vr,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}var $e=Mg();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,Qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=Gr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ag=0,tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fh(s[a].image)):r.push(fh(s[a]))}else r=fh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function fh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var bg=0,dh=new L,$t=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=zt,a=Wi,o=an,l=Jt,c=n.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=As(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=jh;$t.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],m=l[9],b=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,A=(p+1)/2,P=(u+1)/2,C=(h+f)/4,I=(d+b)/4,v=(m+g)/4;return M>A&&M>P?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=I/i):A>P?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=C/s,r=v/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=I/r,s=v/r),this.set(i,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-b)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new $t(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ht=class extends Zo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wr=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var et=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,f,p,m,b,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,f,p,m,b,g)}set(e,t,i,s,r,a,o,l,c,h,d,f,p,m,b,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=b,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,m=c*h,b=c*d;t[0]=f+b*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,m=c*h,b=c*d;t[0]=f-b*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*d,m=o*h,b=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+b,t[1]=l*d,t[5]=b*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-f*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=f-b*d}else if(e.order==="XZY"){let f=a*l,p=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+b,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,wg)}lookAt(e,t,i){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),po.crossVectors(fn,Ii),s[0]=Ii.x,s[4]=po.x,s[8]=fn.x,s[1]=Ii.y,s[5]=po.y,s[9]=fn.y,s[2]=Ii.z,s[6]=po.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],b=i[6],g=i[10],u=i[14],_=i[3],M=i[7],A=i[11],P=i[15],C=s[0],I=s[4],v=s[8],w=s[12],U=s[1],x=s[5],N=s[9],z=s[13],W=s[2],G=s[6],O=s[10],H=s[14],re=s[3],te=s[7],xe=s[11],ve=s[15];return r[0]=a*C+o*U+l*W+c*re,r[4]=a*I+o*x+l*G+c*te,r[8]=a*v+o*N+l*O+c*xe,r[12]=a*w+o*z+l*H+c*ve,r[1]=h*C+d*U+f*W+p*re,r[5]=h*I+d*x+f*G+p*te,r[9]=h*v+d*N+f*O+p*xe,r[13]=h*w+d*z+f*H+p*ve,r[2]=m*C+b*U+g*W+u*re,r[6]=m*I+b*x+g*G+u*te,r[10]=m*v+b*N+g*O+u*xe,r[14]=m*w+b*z+g*H+u*ve,r[3]=_*C+M*U+A*W+P*re,r[7]=_*I+M*x+A*G+P*te,r[11]=_*v+M*N+A*O+P*xe,r[15]=_*w+M*z+A*H+P*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],b=e[7],g=e[11],u=e[15],_=l*p-c*f,M=o*p-c*d,A=o*f-l*d,P=a*p-c*h,C=a*f-l*h,I=a*d-o*h;return t*(b*_-g*M+u*A)-i*(m*_-g*P+u*C)+s*(m*M-b*P+u*I)-r*(m*A-b*C+g*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],b=e[13],g=e[14],u=e[15],_=t*o-i*a,M=t*l-s*a,A=t*c-r*a,P=i*l-s*o,C=i*c-r*o,I=s*c-r*l,v=h*b-d*m,w=h*g-f*m,U=h*u-p*m,x=d*g-f*b,N=d*u-p*b,z=f*u-p*g,W=_*z-M*N+A*x+P*U-C*w+I*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/W;return e[0]=(o*z-l*N+c*x)*G,e[1]=(s*N-i*z-r*x)*G,e[2]=(b*I-g*C+u*P)*G,e[3]=(f*C-d*I-p*P)*G,e[4]=(l*U-a*z-c*w)*G,e[5]=(t*z-s*U+r*w)*G,e[6]=(g*A-m*I-u*M)*G,e[7]=(h*I-f*A+p*M)*G,e[8]=(a*N-o*U+c*v)*G,e[9]=(i*U-t*N-r*v)*G,e[10]=(m*C-b*A+u*_)*G,e[11]=(d*A-h*C-p*_)*G,e[12]=(o*w-a*x-l*v)*G,e[13]=(t*x-i*w+s*v)*G,e[14]=(b*M-m*P-g*_)*G,e[15]=(h*P-d*M+f*_)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,m=r*d,b=a*h,g=a*d,u=o*d,_=l*c,M=l*h,A=l*d,P=i.x,C=i.y,I=i.z;return s[0]=(1-(b+u))*P,s[1]=(p+A)*P,s[2]=(m-M)*P,s[3]=0,s[4]=(p-A)*C,s[5]=(1-(f+u))*C,s[6]=(g+_)*C,s[7]=0,s[8]=(m+M)*I,s[9]=(g-_)*I,s[10]=(1-(f+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,h=1/o,d=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,t.setFromRotationMatrix(In),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===Un)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===js)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===Un)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===js)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new L,In=new et,Sg=new L(0,0,0),wg=new L(1,1,1),Ii=new L,po=new L,fn=new L,Yf=new et,Kf=new bn,gn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eg=0,Jf=new L,zs=new bn,ai=new et,mo=new L,Rr=new L,Tg=new L,Cg=new bn,Qf=new L(1,0,0),Zf=new L(0,1,0),jf=new L(0,0,1),$f={type:"added"},Rg={type:"removed"},ks={type:"childadded",child:null},ph={type:"childremoved",child:null},Kt=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new gn,i=new bn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ye}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Qf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(jf,e)}translateOnAxis(e,t){return Jf.copy(e).applyQuaternion(this.quaternion),this.position.add(Jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Rr,mo,this.up):ai.lookAt(mo,Rr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(ai),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new L(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),u=this._getHandJoint(c,b);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},go={h:0,s:0,l:0};function mh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=ou(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=mh(a,r,e+1/3),this.g=mh(a,r,e),this.b=mh(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return $e.workingToColorSpace(qt.copy(this),e),Math.round(Ze(qt.r*255,0,255))*65536+Math.round(Ze(qt.g*255,0,255))*256+Math.round(Ze(qt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Dt){$e.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(go);let i=Br(Di.h,go.h,t),s=Br(Di.s,go.s,t),r=Br(Di.l,go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Le;Le.NAMES=Kd;var Xr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new L,oi=new L,gh=new L,li=new L,Vs=new L,Gs=new L,ed=new L,xh=new L,vh=new L,yh=new L,_h=new dt,Mh=new dt,Ah=new dt,Bi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),oi.subVectors(i,t),gh.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(oi),l=Dn.dot(gh),c=oi.dot(oi),h=oi.dot(gh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return _h.setScalar(0),Mh.setScalar(0),Ah.setScalar(0),_h.fromBufferAttribute(e,t),Mh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_h,r.x),a.addScaledVector(Mh,r.y),a.addScaledVector(Ah,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),oi.subVectors(e,t),Dn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,i),Gs.subVectors(r,i),xh.subVectors(e,i);let l=Vs.dot(xh),c=Gs.dot(xh);if(l<=0&&c<=0)return t.copy(i);vh.subVectors(e,s);let h=Vs.dot(vh),d=Gs.dot(vh);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Vs,a);yh.subVectors(e,r);let p=Vs.dot(yh),m=Gs.dot(yh);if(m>=0&&p<=m)return t.copy(r);let b=p*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Gs,o);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return ed.subVectors(r,s),o=(d-h)/(d-h+(p-m)),t.copy(s).addScaledVector(ed,o);let u=1/(g+b+f);return a=b*u,o=f*u,t.copy(i).addScaledVector(Vs,a).addScaledVector(Gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),vo.subVectors(this.max,Pr),Hs.subVectors(e.a,Pr),Ws.subVectors(e.b,Pr),Xs.subVectors(e.c,Pr),Li.subVectors(Ws,Hs),Ui.subVectors(Xs,Ws),is.subVectors(Hs,Xs);let t=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-is.z,is.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,is.z,0,-is.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-is.y,is.x,0];return!bh(t,Hs,Ws,Xs,vo)||(t=[1,0,0,0,1,0,0,0,1],!bh(t,Hs,Ws,Xs,vo))?!1:(yo.crossVectors(Li,Ui),t=[yo.x,yo.y,yo.z],bh(t,Hs,Ws,Xs,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,xo=new Yn,Hs=new L,Ws=new L,Xs=new L,Li=new L,Ui=new L,is=new L,Pr=new L,vo=new L,yo=new L,ss=new L;function bh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ss.fromArray(n,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Et=new L,_o=new ae,Ig=0,bt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}};var Yr=class extends bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Kr=class extends bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dg=new Yn,Ir=new L,Sh=new L,Oi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Sh)),this.expandByPoint(Ir.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lg=0,An=new et,wh=new Kt,qs=new L,dn=new Yn,Dr=new Yn,It=new L,Tt=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?Kr:Yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(dn.min,Dr.min),dn.expandByPoint(It),It.addVectors(dn.max,Dr.max),dn.expandByPoint(It)):(dn.expandByPoint(Dr.min),dn.expandByPoint(Dr.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),It.add(qs)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new L,l[v]=new L;let c=new L,h=new L,d=new L,f=new ae,p=new ae,m=new ae,b=new L,g=new L;function u(v,w,U){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,U),h.sub(c),d.sub(c),p.sub(f),m.sub(f);let x=1/(p.x*m.y-m.x*p.y);isFinite(x)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(x),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(x),o[v].add(b),o[w].add(b),o[U].add(b),l[v].add(g),l[w].add(g),l[U].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,w=_.length;v<w;++v){let U=_[v],x=U.start,N=U.count;for(let z=x,W=x+N;z<W;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new L,A=new L,P=new L,C=new L;function I(v){P.fromBufferAttribute(s,v),C.copy(P);let w=o[v];M.copy(w),M.sub(P.multiplyScalar(P.dot(w))).normalize(),A.crossVectors(C,w);let x=A.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,x)}for(let v=0,w=_.length;v<w;++v){let U=_[v],x=U.start,N=U.count;for(let z=x,W=x+N;z<W;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let u=0;u<h;u++)f[m++]=c[p++]}return new bt(f,h,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ug=0,pi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=As(),this.name="",this.type="Material",this.blending=cs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=ko,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hi=new L,Eh=new L,Mo=new L,Ni=new L,Th=new L,Ao=new L,Ch=new L,Jr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Eh.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Eh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Mo),o=Ni.dot(this.direction),l=-Ni.dot(Mo),c=Ni.lengthSq(),h=Math.abs(1-a*a),d,f,p,m;if(h>0)if(d=a*l-o,f=a*o-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let b=1/h;d*=b,f*=b,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Eh).addScaledVector(Mo,f),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Th.subVectors(t,e),Ao.subVectors(i,e),Ch.crossVectors(Th,Ao);let a=this.direction.dot(Ch),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);let l=o*this.direction.dot(Ao.crossVectors(Ni,Ao));if(l<0)return null;let c=o*this.direction.dot(Th.cross(Ni));if(c<0||l+c>a)return null;let h=-o*Ni.dot(Ch);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},td=new et,rs=new Jr,bo=new Oi,nd=new L,So=new L,wo=new L,Eo=new L,Rh=new L,To=new L,id=new L,Co=new L,vt=class extends Kt{constructor(e=new Tt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Rh.fromBufferAttribute(d,e),a?To.addScaledVector(Rh,h):To.addScaledVector(Rh.sub(t),h))}t.add(To)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(bo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(bo,nd)===null||rs.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),rs.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let g=f[m],u=a[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let A=_,P=M;A<P;A+=3){let C=o.getX(A),I=o.getX(A+1),v=o.getX(A+2);s=Ro(this,u,e,i,c,h,d,C,I,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=m,u=b;g<u;g+=3){let _=o.getX(g),M=o.getX(g+1),A=o.getX(g+2);s=Ro(this,a,e,i,c,h,d,_,M,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let g=f[m],u=a[g.materialIndex],_=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let A=_,P=M;A<P;A+=3){let C=A,I=A+1,v=A+2;s=Ro(this,u,e,i,c,h,d,C,I,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=m,u=b;g<u;g+=3){let _=g,M=g+1,A=g+2;s=Ro(this,a,e,i,c,h,d,_,M,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ng(n,e,t,i,s,r,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===fi,o),l===null)return null;Co.copy(o),Co.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:n}}function Ro(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,So),n.getVertexPosition(l,wo),n.getVertexPosition(c,Eo);let h=Ng(n,e,t,i,So,wo,Eo,id);if(h){let d=new L;Bi.getBarycoord(id,So,wo,Eo,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,l,c,d,new ae)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,l,c,d,new ae)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};Bi.getNormal(So,wo,Eo,f.normal),h.face=f,h.barycoord=d}return h}var mi=class extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,c=St,h=St,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class extends bt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new et,sd=new et,Po=[],rd=new Yn,Fg=new et,Lr=new vt,Ur=new Oi,Lt=class extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kn(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),rd.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ys),Ur.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),sd.multiplyMatrices(i,Ys),Lr.matrixWorld=sd,Lr.raycast(e,Po);for(let a=0,o=Po.length;a<o;a++){let l=Po[a];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new mi(new Float32Array(s*this.count),s,this.count,Cl,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ph=new L,Bg=new L,Og=new Ye,Hn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ph.subVectors(i,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ph),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Og.getNormalMatrix(e),s=this.coplanarPoint(Ph).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Oi,zg=new ae(.5,.5),Io=new L,sr=class{constructor(e=new Hn,t=new Hn,i=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],m=r[8],b=r[9],g=r[10],u=r[11],_=r[12],M=r[13],A=r[14],P=r[15];if(s[0].setComponents(c-a,p-h,u-m,P-_).normalize(),s[1].setComponents(c+a,p+h,u+m,P+_).normalize(),s[2].setComponents(c+o,p+d,u+b,P+M).normalize(),s[3].setComponents(c-o,p-d,u-b,P-M).normalize(),i)s[4].setComponents(l,f,g,A).normalize(),s[5].setComponents(c-l,p-f,u-g,P-A).normalize();else if(s[4].setComponents(c-l,p-f,u-g,P-A).normalize(),t===Un)s[5].setComponents(c+l,p+f,u+g,P+A).normalize();else if(t===js)s[5].setComponents(l,f,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=zg.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends $t{constructor(e=[],t=Hi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gi=class extends $t{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class extends $t{constructor(e,t,i=Bn,s,r,a,o=St,l=St,c,h=qn,d=1){if(h!==qn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$o=class extends Jn{constructor(e,t=Bn,i=Hi,s,r,a=St,o=St,l,c=qn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xn=class n extends Tt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(d,2));function m(b,g,u,_,M,A,P,C,I,v,w){let U=A/I,x=P/v,N=A/2,z=P/2,W=C/2,G=I+1,O=v+1,H=0,re=0,te=new L;for(let xe=0;xe<O;xe++){let ve=xe*x-z;for(let ue=0;ue<G;ue++){let Oe=ue*U-N;te[b]=Oe*_,te[g]=ve*M,te[u]=W,c.push(te.x,te.y,te.z),te[b]=0,te[g]=0,te[u]=C>0?1:-1,h.push(te.x,te.y,te.z),d.push(ue/I),d.push(1-xe/v),H+=1}}for(let xe=0;xe<v;xe++)for(let ve=0;ve<I;ve++){let ue=f+ve+G*xe,Oe=f+ve+G*(xe+1),je=f+(ve+1)+G*(xe+1),Je=f+(ve+1)+G*xe;l.push(ue,Oe,Je),l.push(Oe,je,Je),re+=6}o.addGroup(p,re,w),p+=re,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Sn=class n extends Tt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,b=[],g=i/2,u=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function _(){let A=new L,P=new L,C=0,I=(t-e)/i;for(let v=0;v<=r;v++){let w=[],U=v/r,x=U*(t-e)+e;for(let N=0;N<=s;N++){let z=N/s,W=z*l+o,G=Math.sin(W),O=Math.cos(W);P.x=x*G,P.y=-U*i+g,P.z=x*O,d.push(P.x,P.y,P.z),A.set(G,I,O).normalize(),f.push(A.x,A.y,A.z),p.push(z,1-U),w.push(m++)}b.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let U=b[w][v],x=b[w+1][v],N=b[w+1][v+1],z=b[w][v+1];(e>0||w!==0)&&(h.push(U,x,z),C+=3),(t>0||w!==r-1)&&(h.push(x,N,z),C+=3)}c.addGroup(u,C,0),u+=C}function M(A){let P=m,C=new ae,I=new L,v=0,w=A===!0?e:t,U=A===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*U,0),f.push(0,U,0),p.push(.5,.5),m++;let x=m;for(let N=0;N<=s;N++){let W=N/s*l+o,G=Math.cos(W),O=Math.sin(W);I.x=w*O,I.y=g*U,I.z=w*G,d.push(I.x,I.y,I.z),f.push(0,U,0),C.x=G*.5+.5,C.y=O*.5*U+.5,p.push(C.x,C.y),m++}for(let N=0;N<s;N++){let z=P+N,W=x+N;A===!0?h.push(W,W+1,z):h.push(W+1,W,z),v+=3}c.addGroup(u,v,A===!0?1:2),u+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class n extends Sn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},el=class n extends Tt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new L,A=new L,P=new L;for(let C=0;C<t.length;C+=3)p(t[C+0],M),p(t[C+1],A),p(t[C+2],P),l(M,A,P,_)}function l(_,M,A,P){let C=P+1,I=[];for(let v=0;v<=C;v++){I[v]=[];let w=_.clone().lerp(A,v/C),U=M.clone().lerp(A,v/C),x=C-v;for(let N=0;N<=x;N++)N===0&&v===C?I[v][N]=w:I[v][N]=w.clone().lerp(U,N/x)}for(let v=0;v<C;v++)for(let w=0;w<2*(C-v)-1;w++){let U=Math.floor(w/2);w%2===0?(f(I[v][U+1]),f(I[v+1][U]),f(I[v][U])):(f(I[v][U+1]),f(I[v+1][U+1]),f(I[v+1][U]))}}function c(_){let M=new L;for(let A=0;A<r.length;A+=3)M.x=r[A+0],M.y=r[A+1],M.z=r[A+2],M.normalize().multiplyScalar(_),r[A+0]=M.x,r[A+1]=M.y,r[A+2]=M.z}function h(){let _=new L;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let A=g(_)/2/Math.PI+.5,P=u(_)/Math.PI+.5;a.push(A,1-P)}m(),d()}function d(){for(let _=0;_<a.length;_+=6){let M=a[_+0],A=a[_+2],P=a[_+4],C=Math.max(M,A,P),I=Math.min(M,A,P);C>.9&&I<.1&&(M<.2&&(a[_+0]+=1),A<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function p(_,M){let A=_*3;M.x=e[A+0],M.y=e[A+1],M.z=e[A+2]}function m(){let _=new L,M=new L,A=new L,P=new L,C=new ae,I=new ae,v=new ae;for(let w=0,U=0;w<r.length;w+=9,U+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),A.set(r[w+6],r[w+7],r[w+8]),C.set(a[U+0],a[U+1]),I.set(a[U+2],a[U+3]),v.set(a[U+4],a[U+5]),P.copy(_).add(M).add(A).divideScalar(3);let x=g(P);b(C,U+0,_,x),b(I,U+2,M,x),b(v,U+4,A,x)}}function b(_,M,A,P){P<0&&_.x===1&&(a[M]=_.x-1),A.x===0&&A.z===0&&(a[M]=P/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,l=new et;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends vn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends rr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Do=new L,Ih=new lu,Dh=new lu,Lh=new lu,nl=class extends vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Do.subVectors(s[0],s[1]).add(s[0]),c=Do);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Do.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Do),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),b=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),Ih.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,b,g),Dh.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,b,g),Lh.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Dh.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Lh.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Ih.calc(l),Dh.calc(l),Lh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ad(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function kg(n,e){let t=1-n;return t*t*e}function Vg(n,e){return 2*(1-n)*n*e}function Gg(n,e){return n*n*e}function Or(n,e,t,i){return kg(n,e)+Vg(n,t)+Gg(n,i)}function Hg(n,e){let t=1-n;return t*t*t*e}function Wg(n,e){let t=1-n;return 3*t*t*n*e}function Xg(n,e){return 3*(1-n)*n*n*e}function qg(n,e){return n*n*n*e}function zr(n,e,t,i,s){return Hg(n,e)+Wg(n,t)+Xg(n,i)+qg(n,s)}var $r=class extends vn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends vn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends vn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends vn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Or(e,s.x,r.x,a.x),Or(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends vn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Or(e,s.x,r.x,a.x),Or(e,s.y,r.y,a.y),Or(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(ad(o,l.x,c.x,h.x,d.x),ad(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},rl=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:nl,CubicBezierCurve:$r,CubicBezierCurve3:il,EllipseCurve:rr,LineCurve:ea,LineCurve3:sl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:fs,SplineCurve:na}),al=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new rl[s.type]().fromJSON(s))}return this}},ia=class extends al{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ea(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ta(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new $r(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new na(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new rr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ds=class extends ia{constructor(e){super(e),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ia().fromJSON(s))}return this}};function Yg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Jd(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=jg(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let f=t;f<s;f+=t){let p=n[f],m=n[f+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>d&&(d=m)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return sa(r,a,t,o,l,c,0),a}function Jd(n,e,t,i,s){let r;if(s===c0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=od(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=od(a/i|0,n[a],n[a+1],r);return r&&ar(r,r.next)&&(aa(r),r=r.next),r}function ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ar(t,t.next)||mt(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sa(n,e,t,i,s,r,a){if(!n)return;!a&&r&&i0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jg(n,i,s,r):Kg(n)){e.push(l.i,n.i,c.i),aa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Qg(ps(n),e),sa(n,e,t,i,s,r,2)):a===2&&Zg(n,e,t,i,s,r):sa(ps(n),e,t,i,s,r,1);break}}}function Kg(n){let e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&Nr(s,o,r,l,a,c,m.x,m.y)&&mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jg(n,e,t,i){let s=n.prev,r=n,a=n.next;if(mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,p=Math.min(o,l,c),m=Math.min(h,d,f),b=Math.max(o,l,c),g=Math.max(h,d,f),u=Vh(p,m,e,t,i),_=Vh(b,g,e,t,i),M=n.prevZ,A=n.nextZ;for(;M&&M.z>=u&&A&&A.z<=_;){if(M.x>=p&&M.x<=b&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Nr(o,h,l,d,c,f,M.x,M.y)&&mt(M.prev,M,M.next)>=0||(M=M.prevZ,A.x>=p&&A.x<=b&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Nr(o,h,l,d,c,f,A.x,A.y)&&mt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;M&&M.z>=u;){if(M.x>=p&&M.x<=b&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Nr(o,h,l,d,c,f,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;A&&A.z<=_;){if(A.x>=p&&A.x<=b&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Nr(o,h,l,d,c,f,A.x,A.y)&&mt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Qg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ar(i,s)&&Zd(i,t,t.next,s)&&ra(i,s)&&ra(s,i)&&(e.push(i.i,t.i,s.i),aa(t),aa(t.next),t=n=s),t=t.next}while(t!==n);return ps(t)}function Zg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&a0(a,o)){let l=jd(a,o);a=ps(a,a.next),l=ps(l,l.next),sa(a,e,t,i,s,r,0),sa(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function jg(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Jd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(r0(c))}s.sort($g);for(let r=0;r<s.length;r++)t=e0(s[r],t);return t}function $g(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function e0(n,e){let t=t0(n,e);if(!t)return e;let i=jd(t,n);return ps(i,i.next),ps(t,t.next)}function t0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ar(n,t))return t;do{if(ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Qd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ra(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&n0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function n0(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function i0(n,e,t,i){let s=n;do s.z===0&&(s.z=Vh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,s0(s)}function s0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Vh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function r0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qd(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Nr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Qd(n,e,t,i,s,r,a,o)}function a0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!o0(n,e)&&(ra(n,e)&&ra(e,n)&&l0(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||ar(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ar(n,e){return n.x===e.x&&n.y===e.y}function Zd(n,e,t,i){let s=Uo(mt(n,e,t)),r=Uo(mt(n,e,i)),a=Uo(mt(t,i,n)),o=Uo(mt(t,i,e));return!!(s!==r&&a!==o||s===0&&Lo(n,t,e)||r===0&&Lo(n,i,e)||a===0&&Lo(t,n,i)||o===0&&Lo(t,e,i))}function Lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Uo(n){return n>0?1:n<0?-1:0}function o0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ra(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function l0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jd(n,e){let t=Gh(n.i,n.x,n.y),i=Gh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function od(n,e,t,i){let s=Gh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Hh=class{static triangulate(e,t,i=2){return Yg(e,t,i)}},ls=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];ld(e),cd(i,e);let a=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,cd(i,t[l]);let o=Hh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ld(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var or=class n extends Tt{constructor(e=new ds([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:h0,M,A=!1,P,C,I,v;if(u){M=u.getSpacedPoints(h),A=!0,f=!1;let Z=u.isCatmullRomCurve3?u.closed:!1;P=u.computeFrenetFrames(h,Z),C=new L,I=new L,v=new L}f||(g=0,p=0,m=0,b=0);let w=o.extractPoints(c),U=w.shape,x=w.holes;if(!ls.isClockWise(U)){U=U.reverse();for(let Z=0,X=x.length;Z<X;Z++){let ne=x[Z];ls.isClockWise(ne)&&(x[Z]=ne.reverse())}}function z(Z){let ne=10000000000000001e-36,de=Z[0];for(let R=1;R<=Z.length;R++){let Ne=R%Z.length,_e=Z[Ne],ze=_e.x-de.x,pe=_e.y-de.y,T=ze*ze+pe*pe,y=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(de.x),Math.abs(de.y)),B=ne*y*y;if(T<=B){Z.splice(Ne,1),R--;continue}de=_e}}z(U),x.forEach(z);let W=x.length,G=U;for(let Z=0;Z<W;Z++){let X=x[Z];U=U.concat(X)}function O(Z,X,ne){return X||Ve("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(X,ne)}let H=U.length;function re(Z,X,ne){let de,R,Ne,_e=Z.x-X.x,ze=Z.y-X.y,pe=ne.x-Z.x,T=ne.y-Z.y,y=_e*_e+ze*ze,B=_e*T-ze*pe;if(Math.abs(B)>Number.EPSILON){let Q=Math.sqrt(y),se=Math.sqrt(pe*pe+T*T),j=X.x-ze/Q,we=X.y+_e/Q,he=ne.x-T/se,Re=ne.y+pe/se,ke=((he-j)*T-(Re-we)*pe)/(_e*T-ze*pe);de=j+_e*ke-Z.x,R=we+ze*ke-Z.y;let oe=de*de+R*R;if(oe<=2)return new ae(de,R);Ne=Math.sqrt(oe/2)}else{let Q=!1;_e>Number.EPSILON?pe>Number.EPSILON&&(Q=!0):_e<-Number.EPSILON?pe<-Number.EPSILON&&(Q=!0):Math.sign(ze)===Math.sign(T)&&(Q=!0),Q?(de=-ze,R=_e,Ne=Math.sqrt(y)):(de=_e,R=ze,Ne=Math.sqrt(y/2))}return new ae(de/Ne,R/Ne)}let te=[];for(let Z=0,X=G.length,ne=X-1,de=Z+1;Z<X;Z++,ne++,de++)ne===X&&(ne=0),de===X&&(de=0),te[Z]=re(G[Z],G[ne],G[de]);let xe=[],ve,ue=te.concat();for(let Z=0,X=W;Z<X;Z++){let ne=x[Z];ve=[];for(let de=0,R=ne.length,Ne=R-1,_e=de+1;de<R;de++,Ne++,_e++)Ne===R&&(Ne=0),_e===R&&(_e=0),ve[de]=re(ne[de],ne[Ne],ne[_e]);xe.push(ve),ue=ue.concat(ve)}let Oe;if(g===0)Oe=ls.triangulateShape(G,x);else{let Z=[],X=[];for(let ne=0;ne<g;ne++){let de=ne/g,R=p*Math.cos(de*Math.PI/2),Ne=m*Math.sin(de*Math.PI/2)+b;for(let _e=0,ze=G.length;_e<ze;_e++){let pe=O(G[_e],te[_e],Ne);V(pe.x,pe.y,-R),de===0&&Z.push(pe)}for(let _e=0,ze=W;_e<ze;_e++){let pe=x[_e];ve=xe[_e];let T=[];for(let y=0,B=pe.length;y<B;y++){let Q=O(pe[y],ve[y],Ne);V(Q.x,Q.y,-R),de===0&&T.push(Q)}de===0&&X.push(T)}}Oe=ls.triangulateShape(Z,X)}let je=Oe.length,Je=m+b;for(let Z=0;Z<H;Z++){let X=f?O(U[Z],ue[Z],Je):U[Z];A?(I.copy(P.normals[0]).multiplyScalar(X.x),C.copy(P.binormals[0]).multiplyScalar(X.y),v.copy(M[0]).add(I).add(C),V(v.x,v.y,v.z)):V(X.x,X.y,0)}for(let Z=1;Z<=h;Z++)for(let X=0;X<H;X++){let ne=f?O(U[X],ue[X],Je):U[X];A?(I.copy(P.normals[Z]).multiplyScalar(ne.x),C.copy(P.binormals[Z]).multiplyScalar(ne.y),v.copy(M[Z]).add(I).add(C),V(v.x,v.y,v.z)):V(ne.x,ne.y,d/h*Z)}for(let Z=g-1;Z>=0;Z--){let X=Z/g,ne=p*Math.cos(X*Math.PI/2),de=m*Math.sin(X*Math.PI/2)+b;for(let R=0,Ne=G.length;R<Ne;R++){let _e=O(G[R],te[R],de);V(_e.x,_e.y,d+ne)}for(let R=0,Ne=x.length;R<Ne;R++){let _e=x[R];ve=xe[R];for(let ze=0,pe=_e.length;ze<pe;ze++){let T=O(_e[ze],ve[ze],de);A?V(T.x,T.y+M[h-1].y,M[h-1].x+ne):V(T.x,T.y,d+ne)}}}$(),S();function $(){let Z=s.length/3;if(f){let X=0,ne=H*X;for(let de=0;de<je;de++){let R=Oe[de];K(R[2]+ne,R[1]+ne,R[0]+ne)}X=h+g*2,ne=H*X;for(let de=0;de<je;de++){let R=Oe[de];K(R[0]+ne,R[1]+ne,R[2]+ne)}}else{for(let X=0;X<je;X++){let ne=Oe[X];K(ne[2],ne[1],ne[0])}for(let X=0;X<je;X++){let ne=Oe[X];K(ne[0]+H*h,ne[1]+H*h,ne[2]+H*h)}}i.addGroup(Z,s.length/3-Z,0)}function S(){let Z=s.length/3,X=0;D(G,X),X+=G.length;for(let ne=0,de=x.length;ne<de;ne++){let R=x[ne];D(R,X),X+=R.length}i.addGroup(Z,s.length/3-Z,1)}function D(Z,X){let ne=Z.length;for(;--ne>=0;){let de=ne,R=ne-1;R<0&&(R=Z.length-1);for(let Ne=0,_e=h+g*2;Ne<_e;Ne++){let ze=H*Ne,pe=H*(Ne+1),T=X+de+ze,y=X+R+ze,B=X+R+pe,Q=X+de+pe;ie(T,y,B,Q)}}}function V(Z,X,ne){l.push(Z),l.push(X),l.push(ne)}function K(Z,X,ne){Se(Z),Se(X),Se(ne);let de=s.length/3,R=_.generateTopUV(i,s,de-3,de-2,de-1);fe(R[0]),fe(R[1]),fe(R[2])}function ie(Z,X,ne,de){Se(Z),Se(X),Se(de),Se(X),Se(ne),Se(de);let R=s.length/3,Ne=_.generateSideWallUV(i,s,R-6,R-3,R-2,R-1);fe(Ne[0]),fe(Ne[1]),fe(Ne[3]),fe(Ne[1]),fe(Ne[2]),fe(Ne[3])}function Se(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function fe(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return u0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rl[s.type]().fromJSON(s)),new n(i,e.options)}},h0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],f=e[s*3],p=e[s*3+1],m=e[s*3+2],b=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-d),new ae(f,1-m),new ae(b,1-u)]:[new ae(o,1-l),new ae(h,1-d),new ae(p,1-m),new ae(g,1-u)]}};function u0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var oa=class n extends el{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ms=class n extends Tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],m=[],b=[],g=[];for(let u=0;u<h;u++){let _=u*f-a;for(let M=0;M<c;M++){let A=M*d-r;m.push(A,-_,0),b.push(0,0,1),g.push(M/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){let M=_+c*u,A=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;p.push(M,A,C),p.push(A,P,C)}this.setIndex(p),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(b,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var la=class n extends Tt{constructor(e=new fs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new ae,h=new L,d=[],f=[],p=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(p,2));function b(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),_(),u()}function g(M){h=e.getPointAt(M/t,h);let A=a.normals[M],P=a.binormals[M];for(let C=0;C<=s;C++){let I=C/s*Math.PI*2,v=Math.sin(I),w=-Math.cos(I);l.x=w*A.x+v*P.x,l.y=w*A.y+v*P.y,l.z=w*A.z+v*P.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let M=1;M<=t;M++)for(let A=1;A<=s;A++){let P=(s+1)*(M-1)+(A-1),C=(s+1)*M+(A-1),I=(s+1)*M+A,v=(s+1)*(M-1)+A;m.push(P,C,v),m.push(C,I,v)}}function _(){for(let M=0;M<=t;M++)for(let A=0;A<=s;A++)c.x=M/t,c.y=A/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=bs(n[t]);for(let s in i)e[s]=i[s]}return e}function f0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var nn={clone:bs,merge:Qt},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,st=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},lr=class extends st{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nn=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ca=class extends pi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ol=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function No(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var zi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends zi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:r=e,o=2*t-i;break;case Oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=e,l=2*i-t;break;case Oh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),b=m*m,g=b*m,u=-f*g+2*f*b-f*m,_=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,M=(-1-p)*g+(1.5+p)*b+.5*m,A=p*g-p*b;for(let P=0;P!==o;++P)r[P]=u*a[h+P]+_*a[c+P]+M*a[l+P]+A*a[d+P];return r}},hl=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},ul=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends zi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,f=h.outTangents;if(!d||!f){let b=(i-t)/(s-t),g=1-b;for(let u=0;u!==o;++u)r[u]=a[c+u]*g+a[l+u]*b;return r}let p=o*2,m=e-1;for(let b=0;b!==o;++b){let g=a[c+b],u=a[l+b],_=m*p+b*2,M=f[_],A=f[_+1],P=e*p+b*2,C=d[P],I=d[P+1],v=(i-t)/(s-t),w,U,x,N,z;for(let W=0;W<8;W++){w=v*v,U=w*v,x=1-v,N=x*x,z=N*x;let O=z*t+3*N*v*M+3*x*w*C+U*s-i;if(Math.abs(O)<1e-10)break;let H=3*N*(M-t)+6*x*v*(C-M)+3*w*(s-C);if(Math.abs(H)<1e-10)break;v=v-O/H,v=Math.max(0,Math.min(1,v))}r[b]=z*g+3*N*v*A+3*x*w*I+U*u}return r}},yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break;case Nh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let m=0;m!==i;++m){let b=t[d+m];if(b!==t[f+m]||b!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Jo;var ki=class extends yn{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=kr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="color";var pl=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};pl.prototype.ValueTypeName="number";var ml=class extends zi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ha=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends yn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=kr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends yn{constructor(e,t,i,s){super(e,t,i,s)}};gl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$d=new xl,vl=class{constructor(e){this.manager=e!==void 0?e:$d,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fa=class extends ua{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uh=new et,hd=new L,ud=new L,Wh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===js||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fo=new L,Bo=new bn,Gn=new L,da=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Bo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Bo,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fo,Bo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Bo,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new L,fd=new ae,dd=new ae,Yt=class extends da{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,fd,dd),t.subVectors(dd,fd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gi=class extends da{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends Wh{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pa=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ks=-90,Js=1,yl=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Ks,Js,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Ks,Js,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Ks,Js,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Ks,Js,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Ks,Js,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Ks,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},_l=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ma=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=m0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function m0(){this._document.hidden===!1&&this.reset()}var hu="\\[\\]\\.:\\/",g0=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",x0="[^"+hu.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",uu),y0=/(WCOD+)?/.source.replace("WCOD",x0),_0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),A0=new RegExp("^"+v0+y0+_0+M0+"$"),b0=["material","materials","bones","map"],qh=class{constructor(e,t,i){let s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=A0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);b0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=qh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PM=new Float32Array(1);var pd=new et,ga=class{constructor(e,t,i=0,s=1/0){this.ray=new Jr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(e,t=!0,i=[]){return Yh(e,this,i,t),i.sort(md),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Yh(e[s],this,i,t);return i.sort(md),i}};function md(n,e){return n.distance-e.distance}function Yh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Yh(r[a],e,t,!0)}}function fu(n,e,t,i){let s=S0(i);switch(t){case iu:return n*e;case Cl:return n*e/s.components*s.byteLength;case Rl:return n*e/s.components*s.byteLength;case _s:return n*e*2/s.components*s.byteLength;case Pl:return n*e*2/s.components*s.byteLength;case su:return n*e*3/s.components*s.byteLength;case an:return n*e*4/s.components*s.byteLength;case Il:return n*e*4/s.components*s.byteLength;case Ta:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Nl:return Math.max(n,16)*Math.max(e,8)/4;case Dl:case Ul:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Bl:case zl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ac:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S0(n){switch(n){case Jt:case $h:return{byteLength:1,components:1};case hr:case eu:case gt:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Bn:case wl:case En:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Ap(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function I0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],b=d[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let b=d[p];n.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Px=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:D0,alphahash_pars_fragment:L0,alphamap_fragment:U0,alphamap_pars_fragment:N0,alphatest_fragment:F0,alphatest_pars_fragment:B0,aomap_fragment:O0,aomap_pars_fragment:z0,batching_pars_vertex:k0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:H0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:Z0,color_pars_fragment:j0,color_pars_vertex:$0,color_vertex:ex,common:tx,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ax,emissivemap_pars_fragment:ox,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:hx,envmap_common_pars_fragment:ux,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Sx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:xx,fog_pars_fragment:vx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:_x,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Ax,lights_pars_begin:bx,lights_toon_fragment:wx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:Cx,lights_physical_fragment:Rx,lights_physical_pars_fragment:Px,lights_fragment_begin:Ix,lights_fragment_maps:Dx,lights_fragment_end:Lx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Bx,map_fragment:Ox,map_pars_fragment:zx,map_particle_fragment:kx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:Yx,morphtarget_vertex:Kx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:Zx,normal_pars_vertex:jx,normal_vertex:$x,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:sv,opaque_fragment:rv,packing:av,premultiplied_alpha_fragment:ov,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:hv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:xv,skinning_pars_vertex:vv,skinning_vertex:yv,skinnormal_vertex:_v,specularmap_fragment:Mv,specularmap_pars_fragment:Av,tonemapping_fragment:bv,tonemapping_pars_fragment:Sv,transmission_fragment:wv,transmission_pars_fragment:Ev,uv_pars_fragment:Tv,uv_pars_vertex:Cv,uv_vertex:Rv,worldpos_vertex:Pv,background_vert:Iv,background_frag:Dv,backgroundCube_vert:Lv,backgroundCube_frag:Uv,cube_vert:Nv,cube_frag:Fv,depth_vert:Bv,depth_frag:Ov,distance_vert:zv,distance_frag:kv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:Hv,linedashed_frag:Wv,meshbasic_vert:Xv,meshbasic_frag:qv,meshlambert_vert:Yv,meshlambert_frag:Kv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:Zv,meshnormal_frag:jv,meshphong_vert:$v,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:s1,points_vert:r1,points_frag:a1,shadow_vert:o1,shadow_frag:l1,sprite_vert:c1,sprite_frag:h1},ye={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},jn={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};jn.physical={uniforms:Qt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var dc={r:0,b:0,g:0},Ss=new gn,u1=new et;function f1(n,e,t,i,s,r){let a=new Le(0),o=s===!0?0:1,l,c,h=null,d=0,f=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let A=_.backgroundBlurriness>0;M=e.get(M,A)}return M}function m(_){let M=!1,A=p(_);A===null?g(a,o):A&&A.isColor&&(g(A,1),M=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(_,M){let A=p(M);A&&(A.isCubeTexture||A.mapping===wa)?(c===void 0&&(c=new vt(new xn(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:bs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ss.copy(M.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Ss)),c.material.toneMapped=$e.getTransfer(A.colorSpace)!==nt,(h!==A||d!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new vt(new ms(2,2),new st({name:"BackgroundMaterial",uniforms:bs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$e.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(dc,cu(n)),t.buffers.color.setClear(dc.r,dc.g,dc.b,M,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:m,addToRenderList:b,dispose:u}}function d1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(x,N,z,W,G){let O=!1,H=d(x,W,z,N);r!==H&&(r=H,c(r.object)),O=p(x,W,z,G),O&&m(x,W,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,A(x,N,z,W),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,N,z,W){let G=W.wireframe===!0,O=i[N.id];O===void 0&&(O={},i[N.id]=O);let H=x.isInstancedMesh===!0?x.id:0,re=O[H];re===void 0&&(re={},O[H]=re);let te=re[z.id];te===void 0&&(te={},re[z.id]=te);let xe=te[G];return xe===void 0&&(xe=f(l()),te[G]=xe),xe}function f(x){let N=[],z=[],W=[];for(let G=0;G<t;G++)N[G]=0,z[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:W,object:x,attributes:{},index:null}}function p(x,N,z,W){let G=r.attributes,O=N.attributes,H=0,re=z.getAttributes();for(let te in re)if(re[te].location>=0){let ve=G[te],ue=O[te];if(ue===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ve===void 0||ve.attribute!==ue||ue&&ve.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==W}function m(x,N,z,W){let G={},O=N.attributes,H=0,re=z.getAttributes();for(let te in re)if(re[te].location>=0){let ve=O[te];ve===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));let ue={};ue.attribute=ve,ve&&ve.data&&(ue.data=ve.data),G[te]=ue,H++}r.attributes=G,r.attributesNum=H,r.index=W}function b(){let x=r.newAttributes;for(let N=0,z=x.length;N<z;N++)x[N]=0}function g(x){u(x,0)}function u(x,N){let z=r.newAttributes,W=r.enabledAttributes,G=r.attributeDivisors;z[x]=1,W[x]===0&&(n.enableVertexAttribArray(x),W[x]=1),G[x]!==N&&(n.vertexAttribDivisor(x,N),G[x]=N)}function _(){let x=r.newAttributes,N=r.enabledAttributes;for(let z=0,W=N.length;z<W;z++)N[z]!==x[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function M(x,N,z,W,G,O,H){H===!0?n.vertexAttribIPointer(x,N,z,G,O):n.vertexAttribPointer(x,N,z,W,G,O)}function A(x,N,z,W){b();let G=W.attributes,O=z.getAttributes(),H=N.defaultAttributeValues;for(let re in O){let te=O[re];if(te.location>=0){let xe=G[re];if(xe===void 0&&(re==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),re==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),xe!==void 0){let ve=xe.normalized,ue=xe.itemSize,Oe=e.get(xe);if(Oe===void 0)continue;let je=Oe.buffer,Je=Oe.type,$=Oe.bytesPerElement,S=Je===n.INT||Je===n.UNSIGNED_INT||xe.gpuType===wl;if(xe.isInterleavedBufferAttribute){let D=xe.data,V=D.stride,K=xe.offset;if(D.isInstancedInterleavedBuffer){for(let ie=0;ie<te.locationSize;ie++)u(te.location+ie,D.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ie=0;ie<te.locationSize;ie++)g(te.location+ie);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ie=0;ie<te.locationSize;ie++)M(te.location+ie,ue/te.locationSize,Je,ve,V*$,(K+ue/te.locationSize*ie)*$,S)}else{if(xe.isInstancedBufferAttribute){for(let D=0;D<te.locationSize;D++)u(te.location+D,xe.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let D=0;D<te.locationSize;D++)g(te.location+D);n.bindBuffer(n.ARRAY_BUFFER,je);for(let D=0;D<te.locationSize;D++)M(te.location+D,ue/te.locationSize,Je,ve,ue*$,ue/te.locationSize*D*$,S)}}else if(H!==void 0){let ve=H[re];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(te.location,ve);break;case 3:n.vertexAttrib3fv(te.location,ve);break;case 4:n.vertexAttrib4fv(te.location,ve);break;default:n.vertexAttrib1fv(te.location,ve)}}}}_()}function P(){w();for(let x in i){let N=i[x];for(let z in N){let W=N[z];for(let G in W){let O=W[G];for(let H in O)h(O[H].object),delete O[H];delete W[G]}}delete i[x]}}function C(x){if(i[x.id]===void 0)return;let N=i[x.id];for(let z in N){let W=N[z];for(let G in W){let O=W[G];for(let H in O)h(O[H].object),delete O[H];delete W[G]}}delete i[x.id]}function I(x){for(let N in i){let z=i[N];for(let W in z){let G=z[W];if(G[x.id]===void 0)continue;let O=G[x.id];for(let H in O)h(O[H].object),delete O[H];delete G[x.id]}}}function v(x){for(let N in i){let z=i[N],W=x.isInstancedMesh===!0?x.id:0,G=z[W];if(G!==void 0){for(let O in G){let H=G[O];for(let re in H)h(H[re].object),delete H[re];delete G[O]}delete z[W],Object.keys(z).length===0&&delete i[N]}}}function w(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:g,disableUnusedAttributes:_}}function p1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let m=0;for(let b=0;b<d;b++)m+=h[b]*f[b];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function m1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==an&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let v=I===gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Jt&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==En&&!v)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:A,maxSamples:P,samples:C}}function g1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Hn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,u=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,M=_*4,A=u.clippingState||null;l.value=A,A=h(m,f,M,p);for(let P=0;P!==M;++P)A[P]=t[P];u.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,m){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let u=p+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let M=0,A=p;M!==b;++M,A+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var qi=4,ep=[.125,.215,.35,.446,.526,.582],Es=20,x1=256,Ia=new Gi,tp=new Le,du=null,pu=0,mu=0,gu=!1,v1=new L,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=v1}=r;du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:gt,format:an,colorSpace:us,depthBuffer:!1},s=np(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y1(r)),this._blurMaterial=M1(r,e,t),this._ggxMaterial=_1(r,e,t)}return s}_compileMaterial(e){let t=new vt(new Tt,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,i,s,r){let l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(tp),d.toneMapping=Fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new xn,new en({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,u=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,u=!0):(g.color.copy(tp),u=!0);for(let M=0;M<6;M++){let A=M%3;A===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):A===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let P=this._cubeSize;ur(s,A*P,M>2?P:0,P,P),d.setRenderTarget(s),u&&d.render(b,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Hi||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ia)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=0+c*1.25,p=d*f,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-qi?i-m+qi:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,ur(r,g,u,3*b,2*b),s.setRenderTarget(r),s.render(o,Ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,ur(e,g,u,3*b,2*b),s.setRenderTarget(e),s.render(o,Ia)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Es-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):Es;g>Es&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);let u=[],_=0;for(let I=0;I<Es;++I){let v=I/b,w=Math.exp(-v*v/2);u.push(w),I===0?_+=w:I<g&&(_+=2*w)}for(let I=0;I<u.length;I++)u[I]=u[I]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;let A=this._sizeLods[s],P=3*A*(s>M-qi?s-M+qi:0),C=4*(this._cubeSize-A);ur(t,P,C,3*A,2*A),l.setRenderTarget(t),l.render(d,Ia)}};function y1(n){let e=[],t=[],i=[],s=n,r=n-qi+1+ep.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-qi?l=ep[a-n+qi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,b=3,g=2,u=1,_=new Float32Array(b*m*p),M=new Float32Array(g*m*p),A=new Float32Array(u*m*p);for(let C=0;C<p;C++){let I=C%3*2/3-1,v=C>2?0:-1,w=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];_.set(w,b*m*C),M.set(f,g*m*C);let U=[C,C,C,C,C,C];A.set(U,u*m*C)}let P=new Tt;P.setAttribute("position",new bt(_,b)),P.setAttribute("uv",new bt(M,g)),P.setAttribute("faceIndex",new bt(A,u)),i.push(new vt(P,null)),s>qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function np(n,e,t){let i=new ht(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _1(n,e,t){return new st({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function M1(n,e,t){let i=new Float32Array(Es),s=new L(0,1,0);return new st({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function ip(){return new st({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function sp(){return new st({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new st({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:wt});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=zt),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function A1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Al||p===bl)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new gc(m.height);return b.fromEquirectangularTexture(n,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,m=p===Al||p===bl,b=p===Hi||p===ys;if(m||b){let g=t.get(f),u=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new mc(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||b&&_&&l(_)?(i===null&&(i=new mc(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,p){return p===Al?f.mapping=Hi:p===bl&&(f.mapping=ys),f}function l(f){let p=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function b1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Hr("WebGLRenderer: "+i+" extension not supported."),s}}}function S1(n,e,t,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,m=d.attributes.position,b=0;if(m===void 0)return;if(p!==null){let _=p.array;b=p.version;for(let M=0,A=_.length;M<A;M+=3){let P=_[M+0],C=_[M+1],I=_[M+2];f.push(P,C,C,I,I,P)}}else{let _=m.array;b=m.version;for(let M=0,A=_.length/3-1;M<A;M+=3){let P=M+0,C=M+1,I=M+2;f.push(P,C,C,I,I,P)}}let g=new(m.count>=65535?Kr:Yr)(f,1);g.version=b;let u=r.get(d);u&&e.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function w1(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,f*a,m),t.update(p,i,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];t.update(g,i,1)}function d(f,p,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],b[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,b,0,m);let u=0;for(let _=0;_<m;_++)u+=p[_]*b[_];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function E1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T1(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let w=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),b===!0&&(M=3);let A=o.attributes.position.count*M,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let C=new Float32Array(A*P*4*d),I=new Wr(C,A,P,d);I.type=En,I.needsUpdate=!0;let v=M*4;for(let U=0;U<d;U++){let x=g[U],N=u[U],z=_[U],W=A*P*4*U;for(let G=0;G<x.count;G++){let O=G*v;p===!0&&(s.fromBufferAttribute(x,G),C[W+O+0]=s.x,C[W+O+1]=s.y,C[W+O+2]=s.z,C[W+O+3]=0),m===!0&&(s.fromBufferAttribute(N,G),C[W+O+4]=s.x,C[W+O+5]=s.y,C[W+O+6]=s.z,C[W+O+7]=0),b===!0&&(s.fromBufferAttribute(z,G),C[W+O+8]=s.x,C[W+O+9]=s.y,C[W+O+10]=s.z,C[W+O+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new ae(A,P)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function C1(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var R1={[ya]:"LINEAR_TONE_MAPPING",[_a]:"REINHARD_TONE_MAPPING",[Ma]:"CINEON_TONE_MAPPING",[vs]:"ACES_FILMIC_TONE_MAPPING",[ba]:"AGX_TONE_MAPPING",[Sa]:"NEUTRAL_TONE_MAPPING",[Aa]:"CUSTOM_TONE_MAPPING"};function P1(n,e,t,i,s){let r=new ht(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new ht(e,t,{type:gt,depthBuffer:!1,stencilBuffer:!1}),o=new Tt;o.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ct([0,2,0,0,2,0],2));let l=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new vt(o,l),h=new Gi(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,b=null,g=[],u=!1;this.setSize=function(_,M){r.setSize(_,M),a.setSize(_,M);for(let A=0;A<g.length;A++){let P=g[A];P.setSize&&P.setSize(_,M)}},this.setEffects=function(_){g=_,u=g.length>0&&g[0].isRenderPass===!0;let M=r.width,A=r.height;for(let P=0;P<g.length;P++){let C=g[P];C.setSize&&C.setSize(M,A)}},this.begin=function(_,M){if(p||_.toneMapping===Fn&&g.length===0)return!1;if(b=M,M!==null){let A=M.width,P=M.height;(r.width!==A||r.height!==P)&&this.setSize(A,P)}return u===!1&&_.setRenderTarget(r),m=_.toneMapping,_.toneMapping=Fn,!0},this.hasRenderPass=function(){return u},this.end=function(_,M){_.toneMapping=m,p=!0;let A=r,P=a;for(let C=0;C<g.length;C++){let I=g[C];if(I.enabled!==!1&&(I.render(_,P,A,M),I.needsSwap!==!1)){let v=A;A=P,P=v}}if(d!==_.outputColorSpace||f!==_.toneMapping){d=_.outputColorSpace,f=_.toneMapping,l.defines={},$e.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");let C=R1[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(b),_.render(c,h),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var bp=new $t,yu=new Jn(1,1),Sp=new Wr,wp=new jo,Ep=new Qr,rp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rp[s];if(r===void 0&&(r=new Float32Array(s),rp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yc(n,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function N1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;cp.set(i),n.uniformMatrix2fv(this.addr,!1,cp),Rt(t,i)}}function F1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;lp.set(i),n.uniformMatrix3fv(this.addr,!1,lp),Rt(t,i)}}function B1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;op.set(i),n.uniformMatrix4fv(this.addr,!1,op),Rt(t,i)}}function O1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function V1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function G1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=t.isReversedDepthBuffer()?fc:uc,r=yu):r=bp,t.setTexture2D(e||r,s)}function Y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wp,s)}function K1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ep,s)}function J1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sp,s)}function Q1(n){switch(n){case 5126:return I1;case 35664:return D1;case 35665:return L1;case 35666:return U1;case 35674:return N1;case 35675:return F1;case 35676:return B1;case 5124:case 35670:return O1;case 35667:case 35671:return z1;case 35668:case 35672:return k1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return H1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}function Z1(n,e){n.uniform1fv(this.addr,e)}function j1(n,e){let t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function $1(n,e){let t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function ey(n,e){let t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function ty(n,e){let t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ny(n,e){let t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iy(n,e){let t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sy(n,e){n.uniform1iv(this.addr,e)}function ry(n,e){n.uniform2iv(this.addr,e)}function ay(n,e){n.uniform3iv(this.addr,e)}function oy(n,e){n.uniform4iv(this.addr,e)}function ly(n,e){n.uniform1uiv(this.addr,e)}function cy(n,e){n.uniform2uiv(this.addr,e)}function hy(n,e){n.uniform3uiv(this.addr,e)}function uy(n,e){n.uniform4uiv(this.addr,e)}function fy(n,e,t){let i=this.cache,s=e.length,r=yc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yu:a=bp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function dy(n,e,t){let i=this.cache,s=e.length,r=yc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wp,r[a])}function py(n,e,t){let i=this.cache,s=e.length,r=yc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ep,r[a])}function my(n,e,t){let i=this.cache,s=e.length,r=yc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sp,r[a])}function gy(n){switch(n){case 5126:return Z1;case 35664:return j1;case 35665:return $1;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var _u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}},Mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},xu=/(\w+)(\])?(\[|\.)?/g;function hp(n,e){n.seq.push(e),n.map[e.id]=e}function xy(n,e,t){let i=n.name,s=i.length;for(xu.lastIndex=0;;){let r=xu.exec(i),a=xu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hp(t,c===void 0?new _u(o,n,e):new Mu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Au(o),hp(t,d)),t=d}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);xy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function up(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var vy=37297,yy=0;function _y(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var fp=new Ye;function My(n){$e._getMatrix(fp,$e.workingColorSpace,n);let e=`mat3( ${fp.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Vr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_y(n.getShaderSource(e),o)}else return r}function Ay(n,e){let t=My(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var by={[ya]:"Linear",[_a]:"Reinhard",[Ma]:"Cineon",[vs]:"ACESFilmic",[ba]:"AgX",[Sa]:"Neutral",[Aa]:"Custom"};function Sy(n,e){let t=by[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new L;function wy(){$e.getLuminanceCoefficients(pc);let n=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function Ty(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function La(n){return n!==""}function pp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(Ry,Iy)}var Py=new Map;function Iy(n,e){let t=Ke[e];if(t===void 0){let i=Py.get(e);if(i!==void 0)t=Ke[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bu(t)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(n){return n.replace(Dy,Ly)}function Ly(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Uy={[gs]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function Ny(n){return Uy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fy={[Hi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function By(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Fy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Oy={[ys]:"ENVMAP_MODE_REFRACTION"};function zy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ky={[Zh]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Ud]:"ENVMAP_BLENDING_ADD"};function Vy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ky[n.combine]||"ENVMAP_BLENDING_NONE"}function Gy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Hy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ny(t),c=By(t),h=zy(t),d=Vy(t),f=Gy(t),p=Ey(t),m=Ty(r),b=s.createProgram(),g,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(La).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(La).join(`
`),u.length>0&&(u+=`
`)):(g=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),u=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ay("linearToOutputTexel",t.outputColorSpace),wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=bu(a),a=pp(a,t),a=mp(a,t),o=bu(o),o=pp(o,t),o=mp(o,t),a=gp(a),o=gp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=_+g+a,A=_+u+o,P=up(s,s.VERTEX_SHADER,M),C=up(s,s.FRAGMENT_SHADER,A);s.attachShader(b,P),s.attachShader(b,C),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(x){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(b)||"",z=s.getShaderInfoLog(P)||"",W=s.getShaderInfoLog(C)||"",G=N.trim(),O=z.trim(),H=W.trim(),re=!0,te=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,P,C);else{let xe=dp(s,P,"vertex"),ve=dp(s,C,"fragment");Ve("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+G+`
`+xe+`
`+ve)}else G!==""?Ge("WebGLProgram: Program Info Log:",G):(O===""||H==="")&&(te=!1);te&&(x.diagnostics={runnable:re,programLog:G,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:u}})}s.deleteShader(P),s.deleteShader(C),v=new fr(s,b),w=Cy(s,b)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(b,vy)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=C,this}var Wy=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wu(e),t.set(e,i)),i}},wu=class{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}};function Xy(n,e,t,i,s,r){let a=new nr,o=new Su,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,w,U,x,N){let z=x.fog,W=N.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?x.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||G,O),re=H&&H.mapping===wa?H.image.height:null,te=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=xe!==void 0?xe.length:0,ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let Oe,je,Je,$;if(te){let rt=jn[te];Oe=rt.vertexShader,je=rt.fragmentShader}else Oe=v.vertexShader,je=v.fragmentShader,o.update(v),Je=o.getVertexShaderID(v),$=o.getFragmentShaderID(v);let S=n.getRenderTarget(),D=n.state.buffers.depth.getReversed(),V=N.isInstancedMesh===!0,K=N.isBatchedMesh===!0,ie=!!v.map,Se=!!v.matcap,fe=!!H,Z=!!v.aoMap,X=!!v.lightMap,ne=!!v.bumpMap,de=!!v.normalMap,R=!!v.displacementMap,Ne=!!v.emissiveMap,_e=!!v.metalnessMap,ze=!!v.roughnessMap,pe=v.anisotropy>0,T=v.clearcoat>0,y=v.dispersion>0,B=v.iridescence>0,Q=v.sheen>0,se=v.transmission>0,j=pe&&!!v.anisotropyMap,we=T&&!!v.clearcoatMap,he=T&&!!v.clearcoatNormalMap,Re=T&&!!v.clearcoatRoughnessMap,ke=B&&!!v.iridescenceMap,oe=B&&!!v.iridescenceThicknessMap,me=Q&&!!v.sheenColorMap,Ce=Q&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Me=!!v.specularColorMap,We=!!v.specularIntensityMap,F=se&&!!v.transmissionMap,ge=se&&!!v.thicknessMap,le=!!v.gradientMap,Te=!!v.alphaMap,ce=v.alphaTest>0,ee=!!v.alphaHash,Ie=!!v.extensions,Xe=Fn;v.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Xe=n.toneMapping);let ut={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:je,defines:v.defines,customVertexShaderID:Je,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:K,batchingColor:K&&N._colorsTexture!==null,instancing:V,instancingColor:V&&N.instanceColor!==null,instancingMorph:V&&N.morphTexture!==null,outputColorSpace:S===null?n.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:us,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:Se,envMap:fe,envMapMode:fe&&H.mapping,envMapCubeUVHeight:re,aoMap:Z,lightMap:X,bumpMap:ne,normalMap:de,displacementMap:R,emissiveMap:Ne,normalMapObjectSpace:de&&v.normalMapType===Bd,normalMapTangentSpace:de&&v.normalMapType===hc,metalnessMap:_e,roughnessMap:ze,anisotropy:pe,anisotropyMap:j,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:y,iridescence:B,iridescenceMap:ke,iridescenceThicknessMap:oe,sheen:Q,sheenColorMap:me,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:Me,specularIntensityMap:We,transmission:se,transmissionMap:F,thicknessMap:ge,gradientMap:le,opaque:v.transparent===!1&&v.blending===cs&&v.alphaToCoverage===!1,alphaMap:Te,alphaTest:ce,alphaHash:ee,combine:v.combine,mapUv:ie&&m(v.map.channel),aoMapUv:Z&&m(v.aoMap.channel),lightMapUv:X&&m(v.lightMap.channel),bumpMapUv:ne&&m(v.bumpMap.channel),normalMapUv:de&&m(v.normalMap.channel),displacementMapUv:R&&m(v.displacementMap.channel),emissiveMapUv:Ne&&m(v.emissiveMap.channel),metalnessMapUv:_e&&m(v.metalnessMap.channel),roughnessMapUv:ze&&m(v.roughnessMap.channel),anisotropyMapUv:j&&m(v.anisotropyMap.channel),clearcoatMapUv:we&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(v.sheenRoughnessMap.channel),specularMapUv:Pe&&m(v.specularMap.channel),specularColorMapUv:Me&&m(v.specularColorMap.channel),specularIntensityMapUv:We&&m(v.specularIntensityMap.channel),transmissionMapUv:F&&m(v.transmissionMap.channel),thicknessMapUv:ge&&m(v.thicknessMap.channel),alphaMapUv:Te&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(de||pe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(ie||Te),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:D,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||K)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(u(w,v),_(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function u(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function _(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){let w=p[v.type],U;if(w){let x=jn[w];U=nn.clone(x.uniforms)}else U=v.uniforms;return U}function A(v,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new Hy(n,w,v,s),c.push(U),h.set(w,U)),U}function P(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function I(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:M,acquireProgram:A,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:I}}function qy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Yy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function vp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,b,g,u){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:u},n[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=m,_.materialVariant=a(f),_.groupOrder=b,_.renderOrder=f.renderOrder,_.z=g,_.group=u),e++,_}function l(f,p,m,b,g,u){let _=o(f,p,m,b,g,u);m.transmission>0?i.push(_):m.transparent===!0?s.push(_):t.push(_)}function c(f,p,m,b,g,u){let _=o(f,p,m,b,g,u);m.transmission>0?i.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(f,p){t.length>1&&t.sort(f||Yy),i.length>1&&i.sort(p||vp),s.length>1&&s.sort(p||vp)}function d(){for(let f=e,p=n.length;f<p;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ky(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new yp,n.set(i,[a])):s>=r.length?(a=new yp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Qy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Zy=0;function jy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $y(n){let e=new Jy,t=Qy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new et,a=new et;function o(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,b=0,g=0,u=0,_=0,M=0,A=0,P=0,C=0,I=0;c.sort(jy);for(let w=0,U=c.length;w<U;w++){let x=c[w],N=x.color,z=x.intensity,W=x.distance,G=null;if(x.shadow&&x.shadow.map&&(x.shadow.map.texture.format===_s?G=x.shadow.map.texture:G=x.shadow.map.depthTexture||x.shadow.map.texture),x.isAmbientLight)h+=N.r*z,d+=N.g*z,f+=N.b*z;else if(x.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(x.sh.coefficients[O],z);I++}else if(x.isDirectionalLight){let O=e.get(x);if(O.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){let H=x.shadow,re=t.get(x);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,i.directionalShadow[p]=re,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=x.shadow.matrix,_++}i.directional[p]=O,p++}else if(x.isSpotLight){let O=e.get(x);O.position.setFromMatrixPosition(x.matrixWorld),O.color.copy(N).multiplyScalar(z),O.distance=W,O.coneCos=Math.cos(x.angle),O.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),O.decay=x.decay,i.spot[b]=O;let H=x.shadow;if(x.map&&(i.spotLightMap[P]=x.map,P++,H.updateMatrices(x),x.castShadow&&C++),i.spotLightMatrix[b]=H.matrix,x.castShadow){let re=t.get(x);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,i.spotShadow[b]=re,i.spotShadowMap[b]=G,A++}b++}else if(x.isRectAreaLight){let O=e.get(x);O.color.copy(N).multiplyScalar(z),O.halfWidth.set(x.width*.5,0,0),O.halfHeight.set(0,x.height*.5,0),i.rectArea[g]=O,g++}else if(x.isPointLight){let O=e.get(x);if(O.color.copy(x.color).multiplyScalar(x.intensity),O.distance=x.distance,O.decay=x.decay,x.castShadow){let H=x.shadow,re=t.get(x);re.shadowIntensity=H.intensity,re.shadowBias=H.bias,re.shadowNormalBias=H.normalBias,re.shadowRadius=H.radius,re.shadowMapSize=H.mapSize,re.shadowCameraNear=H.camera.near,re.shadowCameraFar=H.camera.far,i.pointShadow[m]=re,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=x.shadow.matrix,M++}i.point[m]=O,m++}else if(x.isHemisphereLight){let O=e.get(x);O.skyColor.copy(x.color).multiplyScalar(z),O.groundColor.copy(x.groundColor).multiplyScalar(z),i.hemi[u]=O,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let v=i.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==b||v.rectAreaLength!==g||v.hemiLength!==u||v.numDirectionalShadows!==_||v.numPointShadows!==M||v.numSpotShadows!==A||v.numSpotMaps!==P||v.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=g,i.point.length=m,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,v.directionalLength=p,v.pointLength=m,v.spotLength=b,v.rectAreaLength=g,v.hemiLength=u,v.numDirectionalShadows=_,v.numPointShadows=M,v.numSpotShadows=A,v.numSpotMaps=P,v.numLightProbes=I,i.version=Zy++)}function l(c,h){let d=0,f=0,p=0,m=0,b=0,g=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let M=c[u];if(M.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(M.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let A=i.rectArea[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let A=i.hemi[b];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function _p(n){let e=new $y(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function e_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _p(n),e.set(s,[o])):r>=a.length?(o=new _p(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,i_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],s_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mp=new et,Da=new L,vu=new L;function r_(n,e,t){let i=new sr,s=new ae,r=new ae,a=new dt,o=new ol,l=new ll,c={},h=t.maxTextureSize,d={[fi]:tn,[tn]:fi,[wn]:wn},f=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Tt;m.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new vt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let u=this.type;this.render=function(C,I,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===vd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gs);let w=n.getRenderTarget(),U=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),N=n.state;N.setBlending(wt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=u!==this.type;z&&I.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=C.length;W<G;W++){let O=C[W],H=O.shadow;if(H===void 0){Ge("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let re=H.getFrameExtents();s.multiply(re),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,H.mapSize.y=r.y));let te=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cr){if(O.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ht(s.x,s.y,{format:_s,type:gt,minFilter:zt,magFilter:zt,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Jn(s.x,s.y,En),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=qn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St}else O.isPointLight?(H.map=new gc(s.x),H.map.depthTexture=new $o(s.x,Bn)):(H.map=new ht(s.x,s.y),H.map.depthTexture=new Jn(s.x,s.y,Bn)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=qn,this.type===gs?(H.map.depthTexture.compareFunction=te?fc:uc,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St);H.camera.updateProjectionMatrix()}let xe=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<xe;ve++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(H.map),n.clear());let ue=H.getViewport(ve);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),N.viewport(a)}if(O.isPointLight){let ue=H.camera,Oe=H.matrix,je=O.distance||ue.far;je!==ue.far&&(ue.far=je,ue.updateProjectionMatrix()),Da.setFromMatrixPosition(O.matrixWorld),ue.position.copy(Da),vu.copy(ue.position),vu.add(i_[ve]),ue.up.copy(s_[ve]),ue.lookAt(vu),ue.updateMatrixWorld(),Oe.makeTranslation(-Da.x,-Da.y,-Da.z),Mp.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mp,ue.coordinateSystem,ue.reversedDepth)}else H.updateMatrices(O);i=H.getFrustum(),A(I,v,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===cr&&_(H,v),H.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(w,U,x)};function _(C,I){let v=e.update(b);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ht(s.x,s.y,{format:_s,type:gt})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,v,f,b,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,v,p,b,null)}function M(C,I,v,w){let U=null,x=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(x!==void 0)U=x;else if(U=v.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let N=U.uuid,z=I.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let G=W[z];G===void 0&&(G=U.clone(),W[z]=G,I.addEventListener("dispose",P)),U=G}if(U.visible=I.visible,U.wireframe=I.wireframe,w===cr?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:d[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let N=n.properties.get(U);N.light=v}return U}function A(C,I,v,w,U){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===cr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let z=e.update(C),W=C.material;if(Array.isArray(W)){let G=z.groups;for(let O=0,H=G.length;O<H;O++){let re=G[O],te=W[re.materialIndex];if(te&&te.visible){let xe=M(C,te,w,U);C.onBeforeShadow(n,C,I,v,z,xe,re),n.renderBufferDirect(v,null,z,xe,C,re),C.onAfterShadow(n,C,I,v,z,xe,re)}}}else if(W.visible){let G=M(C,W,w,U);C.onBeforeShadow(n,C,I,v,z,G,null),n.renderBufferDirect(v,null,z,G,C,null),C.onAfterShadow(n,C,I,v,z,G,null)}}let N=C.children;for(let z=0,W=N.length;z<W;z++)A(N[z],I,v,w,U)}function P(C){C.target.removeEventListener("dispose",P);for(let v in c){let w=c[v],U=C.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}function a_(n,e){function t(){let F=!1,ge=new dt,le=null,Te=new dt(0,0,0,0);return{setMask:function(ce){le!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),le=ce)},setLocked:function(ce){F=ce},setClear:function(ce,ee,Ie,Xe,ut){ut===!0&&(ce*=Xe,ee*=Xe,Ie*=Xe),ge.set(ce,ee,Ie,Xe),Te.equals(ge)===!1&&(n.clearColor(ce,ee,Ie,Xe),Te.copy(ge))},reset:function(){F=!1,le=null,Te.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,le=null,Te=null,ce=null;return{setReversed:function(ee){if(ge!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ge=ee;let Xe=ce;ce=null,this.setClear(Xe)}},getReversed:function(){return ge},setTest:function(ee){ee?S(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(ee){le!==ee&&!F&&(n.depthMask(ee),le=ee)},setFunc:function(ee){if(ge&&(ee=Yd[ee]),Te!==ee){switch(ee){case Vo:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Ho:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Wo:n.depthFunc(n.EQUAL);break;case Xo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=ee}},setLocked:function(ee){F=ee},setClear:function(ee){ce!==ee&&(ce=ee,ge&&(ee=1-ee),n.clearDepth(ee))},reset:function(){F=!1,le=null,Te=null,ce=null,ge=!1}}}function s(){let F=!1,ge=null,le=null,Te=null,ce=null,ee=null,Ie=null,Xe=null,ut=null;return{setTest:function(rt){F||(rt?S(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!F&&(n.stencilMask(rt),ge=rt)},setFunc:function(rt,si,ri){(le!==rt||Te!==si||ce!==ri)&&(n.stencilFunc(rt,si,ri),le=rt,Te=si,ce=ri)},setOp:function(rt,si,ri){(ee!==rt||Ie!==si||Xe!==ri)&&(n.stencilOp(rt,si,ri),ee=rt,Ie=si,Xe=ri)},setLocked:function(rt){F=rt},setClear:function(rt){ut!==rt&&(n.clearStencil(rt),ut=rt)},reset:function(){F=!1,ge=null,le=null,Te=null,ce=null,ee=null,Ie=null,Xe=null,ut=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],m=null,b=!1,g=null,u=null,_=null,M=null,A=null,P=null,C=null,I=new Le(0,0,0),v=0,w=!1,U=null,x=null,N=null,z=null,W=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(re)[1]),O=H>=1):re.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),O=H>=2);let te=null,xe={},ve=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Oe=new dt().fromArray(ve),je=new dt().fromArray(ue);function Je(F,ge,le,Te){let ce=new Uint8Array(4),ee=n.createTexture();n.bindTexture(F,ee),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<le;Ie++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ge+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ee}let $={};$[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),S(n.DEPTH_TEST),a.setFunc(hs),ne(!1),de(Kh),S(n.CULL_FACE),Z(wt);function S(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function D(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function V(F,ge){return d[F]!==ge?(n.bindFramebuffer(F,ge),d[F]=ge,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function K(F,ge){let le=p,Te=!1;if(F){le=f.get(ge),le===void 0&&(le=[],f.set(ge,le));let ce=F.textures;if(le.length!==ce.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ie=ce.length;ee<Ie;ee++)le[ee]=n.COLOR_ATTACHMENT0+ee;le.length=ce.length,Te=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Te=!0);Te&&n.drawBuffers(le)}function ie(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let Se={[pn]:n.FUNC_ADD,[yd]:n.FUNC_SUBTRACT,[_d]:n.FUNC_REVERSE_SUBTRACT};Se[Md]=n.MIN,Se[Ad]=n.MAX;let fe={[xs]:n.ZERO,[bd]:n.ONE,[Sd]:n.SRC_COLOR,[zo]:n.SRC_ALPHA,[Cd]:n.SRC_ALPHA_SATURATE,[va]:n.DST_COLOR,[xa]:n.DST_ALPHA,[wd]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Rd]:n.CONSTANT_COLOR,[Pd]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Dd]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(F,ge,le,Te,ce,ee,Ie,Xe,ut,rt){if(F===wt){b===!0&&(D(n.BLEND),b=!1);return}if(b===!1&&(S(n.BLEND),b=!0),F!==Ml){if(F!==g||rt!==w){if((u!==pn||A!==pn)&&(n.blendEquation(n.FUNC_ADD),u=pn,A=pn),rt)switch(F){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xi:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}_=null,M=null,P=null,C=null,I.set(0,0,0),v=0,g=F,w=rt}return}ce=ce||ge,ee=ee||le,Ie=Ie||Te,(ge!==u||ce!==A)&&(n.blendEquationSeparate(Se[ge],Se[ce]),u=ge,A=ce),(le!==_||Te!==M||ee!==P||Ie!==C)&&(n.blendFuncSeparate(fe[le],fe[Te],fe[ee],fe[Ie]),_=le,M=Te,P=ee,C=Ie),(Xe.equals(I)===!1||ut!==v)&&(n.blendColor(Xe.r,Xe.g,Xe.b,ut),I.copy(Xe),v=ut),g=F,w=!1}function X(F,ge){F.side===wn?D(n.CULL_FACE):S(n.CULL_FACE);let le=F.side===tn;ge&&(le=!le),ne(le),F.blending===cs&&F.transparent===!1?Z(wt):Z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Te=F.stencilWrite;o.setTest(Te),Te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?S(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){U!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),U=F)}function de(F){F!==gd?(S(n.CULL_FACE),F!==x&&(F===Kh?n.cullFace(n.BACK):F===xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),x=F}function R(F){F!==N&&(O&&n.lineWidth(F),N=F)}function Ne(F,ge,le){F?(S(n.POLYGON_OFFSET_FILL),(z!==ge||W!==le)&&(z=ge,W=le,a.getReversed()&&(ge=-ge),n.polygonOffset(ge,le))):D(n.POLYGON_OFFSET_FILL)}function _e(F){F?S(n.SCISSOR_TEST):D(n.SCISSOR_TEST)}function ze(F){F===void 0&&(F=n.TEXTURE0+G-1),te!==F&&(n.activeTexture(F),te=F)}function pe(F,ge,le){le===void 0&&(te===null?le=n.TEXTURE0+G-1:le=te);let Te=xe[le];Te===void 0&&(Te={type:void 0,texture:void 0},xe[le]=Te),(Te.type!==F||Te.texture!==ge)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(F,ge||$[F]),Te.type=F,Te.texture=ge)}function T(){let F=xe[te];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Q(){try{n.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function se(){try{n.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function he(){try{n.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function Re(){try{n.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ke(){try{n.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function oe(){try{n.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function me(F){Oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function Ce(F){je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function Pe(F,ge){let le=c.get(ge);le===void 0&&(le=new WeakMap,c.set(ge,le));let Te=le.get(F);Te===void 0&&(Te=n.getUniformBlockIndex(ge,F.name),le.set(F,Te))}function Me(F,ge){let Te=c.get(ge).get(F);l.get(ge)!==Te&&(n.uniformBlockBinding(ge,Te,F.__bindingPointIndex),l.set(ge,Te))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,xe={},d={},f=new WeakMap,p=[],m=null,b=!1,g=null,u=null,_=null,M=null,A=null,P=null,C=null,I=new Le(0,0,0),v=0,w=!1,U=null,x=null,N=null,z=null,W=null,Oe.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:S,disable:D,bindFramebuffer:V,drawBuffers:K,useProgram:ie,setBlending:Z,setMaterial:X,setFlipSided:ne,setCullFace:de,setLineWidth:R,setPolygonOffset:Ne,setScissorTest:_e,activeTexture:ze,bindTexture:pe,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:ke,texImage3D:oe,updateUBOMapping:Pe,uniformBlockBinding:Me,texStorage2D:he,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:se,compressedTexSubImage2D:j,compressedTexSubImage3D:we,scissor:me,viewport:Ce,reset:We}}function o_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return p?new OffscreenCanvas(T,y):Gr("canvas")}function b(T,y,B){let Q=1,se=pe(T);if((se.width>B||se.height>B)&&(Q=B/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let j=Math.floor(Q*se.width),we=Math.floor(Q*se.height);d===void 0&&(d=m(j,we));let he=y?m(j,we):d;return he.width=j,he.height=we,he.getContext("2d").drawImage(T,0,0,j,we),Ge("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+j+"x"+we+")."),he}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,B,Q,se=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=y;if(y===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),y===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){let we=se?Vr:$e.getTransfer(Q);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=we===nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(T,y){let B;return T?y===null||y===Bn||y===Xi?B=n.DEPTH24_STENCIL8:y===En?B=n.DEPTH32F_STENCIL8:y===hr&&(B=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bn||y===Xi?B=n.DEPTH_COMPONENT24:y===En?B=n.DEPTH_COMPONENT32F:y===hr&&(B=n.DEPTH_COMPONENT16),B}function P(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==St&&T.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){let y=T.target;y.removeEventListener("dispose",C),v(y),y.isVideoTexture&&h.delete(y)}function I(T){let y=T.target;y.removeEventListener("dispose",I),U(y)}function v(T){let y=i.get(T);if(y.__webglInit===void 0)return;let B=T.source,Q=f.get(B);if(Q){let se=Q[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(T),Object.keys(Q).length===0&&f.delete(B)}i.remove(T)}function w(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let B=T.source,Q=f.get(B);delete Q[y.__cacheKey],a.memory.textures--}function U(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let se=0;se<y.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(y.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=T.textures;for(let Q=0,se=B.length;Q<se;Q++){let j=i.get(B[Q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(B[Q])}i.remove(T)}let x=0;function N(){x=0}function z(){let T=x;return T>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),x+=1,T}function W(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function G(T,y){let B=i.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let Q=T.image;if(Q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,y);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function O(T,y){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,y);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function H(T,y){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function re(T,y){let B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){S(B,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let te={[mn]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},xe={[St]:n.NEAREST,[Nd]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},ve={[Od]:n.NEVER,[Hd]:n.ALWAYS,[zd]:n.LESS,[uc]:n.LEQUAL,[kd]:n.EQUAL,[fc]:n.GEQUAL,[Vd]:n.GREATER,[Gd]:n.NOTEQUAL};function ue(T,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===Sl||y.magFilter===Ea||y.magFilter===Wi||y.minFilter===zt||y.minFilter===Sl||y.minFilter===Ea||y.minFilter===Wi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,te[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,te[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,te[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,xe[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===St||y.minFilter!==Ea&&y.minFilter!==Wi||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));let Q=y.source,se=f.get(Q);se===void 0&&(se={},f.set(Q,se));let j=W(y);if(j!==T.__cacheKey){se[j]===void 0&&(se[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),se[j].usedTimes++;let we=se[T.__cacheKey];we!==void 0&&(se[T.__cacheKey].usedTimes--,we.usedTimes===0&&w(y)),T.__cacheKey=j,T.__webglTexture=se[j].texture}return B}function je(T,y,B){return Math.floor(Math.floor(T/B)/y)}function Je(T,y,B,Q){let j=T.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,Q,y.data);else{j.sort((oe,me)=>oe.start-me.start);let we=0;for(let oe=1;oe<j.length;oe++){let me=j[we],Ce=j[oe],Pe=me.start+me.count,Me=je(Ce.start,y.width,4),We=je(me.start,y.width,4);Ce.start<=Pe+1&&Me===We&&je(Ce.start+Ce.count-1,y.width,4)===Me?me.count=Math.max(me.count,Ce.start+Ce.count-me.start):(++we,j[we]=Ce)}j.length=we+1;let he=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let oe=0,me=j.length;oe<me;oe++){let Ce=j[oe],Pe=Math.floor(Ce.start/4),Me=Math.ceil(Ce.count/4),We=Pe%y.width,F=Math.floor(Pe/y.width),ge=Me,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,We,F,ge,le,B,Q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function $(T,y,B){let Q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=n.TEXTURE_3D);let se=Oe(T,y),j=y.source;t.bindTexture(Q,T.__webglTexture,n.TEXTURE0+B);let we=i.get(j);if(j.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+B);let he=$e.getPrimaries($e.workingColorSpace),Re=y.colorSpace===vi?null:$e.getPrimaries(y.colorSpace),ke=y.colorSpace===vi||he===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let oe=b(y.image,!1,s.maxTextureSize);oe=ze(y,oe);let me=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),Pe=M(y.internalFormat,me,Ce,y.colorSpace,y.isVideoTexture);ue(Q,y);let Me,We=y.mipmaps,F=y.isVideoTexture!==!0,ge=we.__version===void 0||se===!0,le=j.dataReady,Te=P(y,oe);if(y.isDepthTexture)Pe=A(y.format===Qn,y.type),ge&&(F?t.texStorage2D(n.TEXTURE_2D,1,Pe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,oe.width,oe.height,0,me,Ce,null));else if(y.isDataTexture)if(We.length>0){F&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,We[0].width,We[0].height);for(let ce=0,ee=We.length;ce<ee;ce++)Me=We[ce],F?le&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,me,Ce,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Pe,Me.width,Me.height,0,me,Ce,Me.data);y.generateMipmaps=!1}else F?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,oe.width,oe.height),le&&Je(y,oe,me,Ce)):t.texImage2D(n.TEXTURE_2D,0,Pe,oe.width,oe.height,0,me,Ce,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Pe,We[0].width,We[0].height,oe.depth);for(let ce=0,ee=We.length;ce<ee;ce++)if(Me=We[ce],y.format!==an)if(me!==null)if(F){if(le)if(y.layerUpdates.size>0){let Ie=fu(Me.width,Me.height,y.format,y.type);for(let Xe of y.layerUpdates){let ut=Me.data.subarray(Xe*Ie/Me.data.BYTES_PER_ELEMENT,(Xe+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Xe,Me.width,Me.height,1,me,ut)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,oe.depth,me,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Pe,Me.width,Me.height,oe.depth,0,Me.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Me.width,Me.height,oe.depth,me,Ce,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Pe,Me.width,Me.height,oe.depth,0,me,Ce,Me.data)}else{F&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Pe,We[0].width,We[0].height);for(let ce=0,ee=We.length;ce<ee;ce++)Me=We[ce],y.format!==an?me!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,me,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Pe,Me.width,Me.height,0,Me.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?le&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me.width,Me.height,me,Ce,Me.data):t.texImage2D(n.TEXTURE_2D,ce,Pe,Me.width,Me.height,0,me,Ce,Me.data)}else if(y.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Pe,oe.width,oe.height,oe.depth),le)if(y.layerUpdates.size>0){let ce=fu(oe.width,oe.height,y.format,y.type);for(let ee of y.layerUpdates){let Ie=oe.data.subarray(ee*ce/oe.data.BYTES_PER_ELEMENT,(ee+1)*ce/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,me,Ce,Ie)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ce,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,oe.width,oe.height,oe.depth,0,me,Ce,oe.data);else if(y.isData3DTexture)F?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,Pe,oe.width,oe.height,oe.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ce,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,oe.width,oe.height,oe.depth,0,me,Ce,oe.data);else if(y.isFramebufferTexture){if(ge)if(F)t.texStorage2D(n.TEXTURE_2D,Te,Pe,oe.width,oe.height);else{let ce=oe.width,ee=oe.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Pe,ce,ee,0,me,Ce,null),ce>>=1,ee>>=1}}else if(We.length>0){if(F&&ge){let ce=pe(We[0]);t.texStorage2D(n.TEXTURE_2D,Te,Pe,ce.width,ce.height)}for(let ce=0,ee=We.length;ce<ee;ce++)Me=We[ce],F?le&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,me,Ce,Me):t.texImage2D(n.TEXTURE_2D,ce,Pe,me,Ce,Me);y.generateMipmaps=!1}else if(F){if(ge){let ce=pe(oe);t.texStorage2D(n.TEXTURE_2D,Te,Pe,ce.width,ce.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ce,oe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,me,Ce,oe);g(y)&&u(Q),we.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function S(T,y,B){if(y.image.length!==6)return;let Q=Oe(T,y),se=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let j=i.get(se);if(se.version!==j.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let we=$e.getPrimaries($e.workingColorSpace),he=y.colorSpace===vi?null:$e.getPrimaries(y.colorSpace),Re=y.colorSpace===vi||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ke=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!ke&&!oe?me[ee]=b(y.image[ee],!0,s.maxCubemapSize):me[ee]=oe?y.image[ee].image:y.image[ee],me[ee]=ze(y,me[ee]);let Ce=me[0],Pe=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),We=M(y.internalFormat,Pe,Me,y.colorSpace),F=y.isVideoTexture!==!0,ge=j.__version===void 0||Q===!0,le=se.dataReady,Te=P(y,Ce);ue(n.TEXTURE_CUBE_MAP,y);let ce;if(ke){F&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,Ce.width,Ce.height);for(let ee=0;ee<6;ee++){ce=me[ee].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){let Xe=ce[Ie];y.format!==an?Pe!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,We,Xe.width,Xe.height,0,Xe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Xe.width,Xe.height,Pe,Me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,We,Xe.width,Xe.height,0,Pe,Me,Xe.data)}}}else{if(ce=y.mipmaps,F&&ge){ce.length>0&&Te++;let ee=pe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,Pe,Me,me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,me[ee].width,me[ee].height,0,Pe,Me,me[ee].data);for(let Ie=0;Ie<ce.length;Ie++){let ut=ce[Ie].image[ee].image;F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,ut.width,ut.height,Pe,Me,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,We,ut.width,ut.height,0,Pe,Me,ut.data)}}else{F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,Me,me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Pe,Me,me[ee]);for(let Ie=0;Ie<ce.length;Ie++){let Xe=ce[Ie];F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Pe,Me,Xe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,We,Pe,Me,Xe.image[ee])}}}g(y)&&u(n.TEXTURE_CUBE_MAP),j.__version=se.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function D(T,y,B,Q,se,j){let we=r.convert(B.format,B.colorSpace),he=r.convert(B.type),Re=M(B.internalFormat,we,he,B.colorSpace),ke=i.get(y),oe=i.get(B);if(oe.__renderTarget=y,!ke.__hasExternalTextures){let me=Math.max(1,y.width>>j),Ce=Math.max(1,y.height>>j);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,j,Re,me,Ce,y.depth,0,we,he,null):t.texImage2D(se,j,Re,me,Ce,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ne(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,se,oe.__webglTexture,0,R(y)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,se,oe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(T,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let Q=y.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,j=A(y.stencilBuffer,se),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(y),j,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(y),j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,T)}else{let Q=y.textures;for(let se=0;se<Q.length;se++){let j=Q[se],we=r.convert(j.format,j.colorSpace),he=r.convert(j.type),Re=M(j.internalFormat,we,he,j.colorSpace);Ne(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(y),Re,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(y),Re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Re,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(T,y,B){let Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=i.get(y.depthTexture);if(se.__renderTarget=y,(!se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(se.__webglInit===void 0&&(se.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ue(n.TEXTURE_CUBE_MAP,y.depthTexture);let ke=r.convert(y.depthTexture.format),oe=r.convert(y.depthTexture.type),me;y.depthTexture.format===qn?me=n.DEPTH_COMPONENT24:y.depthTexture.format===Qn&&(me=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,me,y.width,y.height,0,ke,oe,null)}}else G(y.depthTexture,0);let j=se.__webglTexture,we=R(y),he=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Re=y.depthTexture.format===Qn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===qn)Ne(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,j,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,j,0);else if(y.depthTexture.format===Qn)Ne(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,j,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,j,0);else throw new Error("Unknown depthTexture format")}function ie(T){let y=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)K(y.__webglFramebuffer[Q],T,Q);else{let Q=T.texture.mipmaps;Q&&Q.length>0?K(y.__webglFramebuffer[0],T,0):K(y.__webglFramebuffer,T,0)}else if(B){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=n.createRenderbuffer(),V(y.__webglDepthbuffer[Q],T,!1);else{let se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}else{let Q=T.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),V(y.__webglDepthbuffer,T,!1);else{let se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(T,y,B){let Q=i.get(T);y!==void 0&&D(Q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ie(T)}function fe(T){let y=T.texture,B=i.get(T),Q=i.get(y);T.addEventListener("dispose",I);let se=T.textures,j=T.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=y.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let Re=0;Re<y.mipmaps.length;Re++)B.__webglFramebuffer[he][Re]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,Re=se.length;he<Re;he++){let ke=i.get(se[he]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ne(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){let Re=se[he];B.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[he]);let ke=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),me=M(Re.internalFormat,ke,oe,Re.colorSpace,T.isXRRenderTarget===!0),Ce=R(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,B.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),V(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ue(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)D(B.__webglFramebuffer[he][Re],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else D(B.__webglFramebuffer[he],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(y)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,Re=se.length;he<Re;he++){let ke=se[he],oe=i.get(ke),me=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),ue(me,ke),D(B.__webglFramebuffer,T,ke,n.COLOR_ATTACHMENT0+he,me,0),g(ke)&&u(me)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),ue(he,y),y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)D(B.__webglFramebuffer[Re],T,y,n.COLOR_ATTACHMENT0,he,Re);else D(B.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,he,0);g(y)&&u(he),t.unbindTexture()}T.depthBuffer&&ie(T)}function Z(T){let y=T.textures;for(let B=0,Q=y.length;B<Q;B++){let se=y[B];if(g(se)){let j=_(T),we=i.get(se).__webglTexture;t.bindTexture(j,we),u(j),t.unbindTexture()}}}let X=[],ne=[];function de(T){if(T.samples>0){if(Ne(T)===!1){let y=T.textures,B=T.width,Q=T.height,se=n.COLOR_BUFFER_BIT,j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(T),he=y.length>1;if(he)for(let ke=0;ke<y.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Re=T.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);let oe=i.get(y[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,se,n.NEAREST),l===!0&&(X.length=0,ne.length=0,X.push(n.COLOR_ATTACHMENT0+ke),T.depthBuffer&&T.resolveDepthBuffer===!1&&(X.push(j),ne.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ke=0;ke<y.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,we.__webglColorRenderbuffer[ke]);let oe=i.get(y[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function R(T){return Math.min(s.maxSamples,T.samples)}function Ne(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function ze(T,y){let B=T.colorSpace,Q=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==us&&B!==vi&&($e.getTransfer(B)===nt?(Q!==an||se!==Jt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",B)),y}function pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=re,this.rebindTextures=Se,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=D,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function l_(n,e){function t(i,s=vi){let r,a=$e.getTransfer(s);if(i===Jt)return n.UNSIGNED_BYTE;if(i===El)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$h)return n.BYTE;if(i===eu)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===gt)return n.HALF_FLOAT;if(i===iu)return n.ALPHA;if(i===su)return n.RGB;if(i===an)return n.RGBA;if(i===qn)return n.DEPTH_COMPONENT;if(i===Qn)return n.DEPTH_STENCIL;if(i===Cl)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===_s)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Ta||i===Ca||i===Ra||i===Pa)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ll||i===Ul||i===Nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Bl||i===Ol||i===zl||i===kl||i===Vl||i===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===Bl)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ol)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return r.COMPRESSED_R11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vl)return r.COMPRESSED_RG11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===Jl||i===Ql||i===Zl||i===jl||i===$l||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ac||i===oc||i===lc||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new st({vertexShader:c_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tu=class extends di{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,m=null,b=typeof XRWebGLBinding<"u",g=new Eu,u={},_=t.getContextAttributes(),M=null,A=null,P=[],C=[],I=new ae,v=null,w=new Yt;w.viewport=new dt;let U=new Yt;U.viewport=new dt;let x=[w,U],N=new _l,z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let S=P[$];return S===void 0&&(S=new ir,P[$]=S),S.getTargetRaySpace()},this.getControllerGrip=function($){let S=P[$];return S===void 0&&(S=new ir,P[$]=S),S.getGripSpace()},this.getHand=function($){let S=P[$];return S===void 0&&(S=new ir,P[$]=S),S.getHandSpace()};function G($){let S=C.indexOf($.inputSource);if(S===-1)return;let D=P[S];D!==void 0&&(D.update($.inputSource,$.frame,c||a),D.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let $=0;$<P.length;$++){let S=C[$];S!==null&&(C[$]=null,P[$].disconnect(S))}z=null,W=null,g.reset();for(let $ in u)delete u[$];e.setRenderTarget(M),p=null,f=null,d=null,s=null,A=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let D=null,V=null,K=null;_.depth&&(K=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=_.stencil?Qn:qn,V=_.stencil?Xi:Bn);let ie={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ht(f.textureWidth,f.textureHeight,{format:an,type:Jt,depthTexture:new Jn(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let D={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,D),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ht(p.framebufferWidth,p.framebufferHeight,{format:an,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let S=0;S<$.removed.length;S++){let D=$.removed[S],V=C.indexOf(D);V>=0&&(C[V]=null,P[V].disconnect(D))}for(let S=0;S<$.added.length;S++){let D=$.added[S],V=C.indexOf(D);if(V===-1){for(let ie=0;ie<P.length;ie++)if(ie>=C.length){C.push(D),V=ie;break}else if(C[ie]===null){C[ie]=D,V=ie;break}if(V===-1)break}let K=P[V];K&&K.connect(D)}}let re=new L,te=new L;function xe($,S,D){re.setFromMatrixPosition(S.matrixWorld),te.setFromMatrixPosition(D.matrixWorld);let V=re.distanceTo(te),K=S.projectionMatrix.elements,ie=D.projectionMatrix.elements,Se=K[14]/(K[10]-1),fe=K[14]/(K[10]+1),Z=(K[9]+1)/K[5],X=(K[9]-1)/K[5],ne=(K[8]-1)/K[0],de=(ie[8]+1)/ie[0],R=Se*ne,Ne=Se*de,_e=V/(-ne+de),ze=_e*-ne;if(S.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ze),$.translateZ(_e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),K[10]===-1)$.projectionMatrix.copy(S.projectionMatrix),$.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let pe=Se+_e,T=fe+_e,y=R-ze,B=Ne+(V-ze),Q=Z*fe/T*pe,se=X*fe/T*pe;$.projectionMatrix.makePerspective(y,B,Q,se,pe,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ve($,S){S===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(S.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let S=$.near,D=$.far;g.texture!==null&&(g.depthNear>0&&(S=g.depthNear),g.depthFar>0&&(D=g.depthFar)),N.near=U.near=w.near=S,N.far=U.far=w.far=D,(z!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,W=N.far),N.layers.mask=$.layers.mask|6,w.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let V=$.parent,K=N.cameras;ve(N,V);for(let ie=0;ie<K.length;ie++)ve(K[ie],V);K.length===2?xe(N,w,U):N.projectionMatrix.copy(w.projectionMatrix),ue($,N,V)};function ue($,S,D){D===null?$.matrix.copy(S.matrixWorld):($.matrix.copy(D.matrixWorld),$.matrix.invert(),$.matrix.multiply(S.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(S.projectionMatrix),$.projectionMatrixInverse.copy(S.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=er*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function($){return u[$]};let Oe=null;function je($,S){if(h=S.getViewerPose(c||a),m=S,h!==null){let D=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let V=!1;D.length!==N.cameras.length&&(N.cameras.length=0,V=!0);for(let fe=0;fe<D.length;fe++){let Z=D[fe],X=null;if(p!==null)X=p.getViewport(Z);else{let de=d.getViewSubImage(f,Z);X=de.viewport,fe===0&&(e.setRenderTargetTextures(A,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(A))}let ne=x[fe];ne===void 0&&(ne=new Yt,ne.layers.enable(fe),ne.viewport=new dt,x[fe]=ne),ne.matrix.fromArray(Z.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Z.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(X.x,X.y,X.width,X.height),fe===0&&(N.matrix.copy(ne.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),V===!0&&N.cameras.push(ne)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let fe=d.getDepthInformation(D[0]);fe&&fe.isValid&&fe.texture&&g.init(fe,s.renderState)}if(K&&K.includes("camera-access")&&b){e.state.unbindTexture(),d=i.getBinding();for(let fe=0;fe<D.length;fe++){let Z=D[fe].camera;if(Z){let X=u[Z];X||(X=new Zr,u[Z]=X);let ne=d.getCameraImage(Z);X.sourceTexture=ne}}}}for(let D=0;D<P.length;D++){let V=C[D],K=P[D];V!==null&&K!==void 0&&K.update(V,S,c||a)}Oe&&Oe($,S),S.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:S}),m=null}let Je=new Ap;Je.setAnimationLoop(je),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}},ws=new gn,u_=new et;function f_(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,cu(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,_,M,A){u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,A)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),b(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,_,M):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===tn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===tn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let _=e.get(u),M=_.envMap,A=_.envMapRotation;M&&(g.envMap.value=M,ws.copy(A),ws.x*=-1,ws.y*=-1,ws.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(ws)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,M){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=M*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function b(g,u){let _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function d_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let A=M.program;i.uniformBlockBinding(_,A)}function c(_,M){let A=s[_.id];A===void 0&&(m(_),A=h(_),s[_.id]=A,_.addEventListener("dispose",g));let P=M.program;i.updateUBOMapping(_,P);let C=e.render.frame;r[_.id]!==C&&(f(_),r[_.id]=C)}function h(_){let M=d();_.__bindingPointIndex=M;let A=n.createBuffer(),P=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=s[_.id],A=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,I=A.length;C<I;C++){let v=Array.isArray(A[C])?A[C]:[A[C]];for(let w=0,U=v.length;w<U;w++){let x=v[w];if(p(x,C,w,P)===!0){let N=x.__offset,z=Array.isArray(x.value)?x.value:[x.value],W=0;for(let G=0;G<z.length;G++){let O=z[G],H=b(O);typeof O=="number"||typeof O=="boolean"?(x.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,N+W,x.__data)):O.isMatrix3?(x.__data[0]=O.elements[0],x.__data[1]=O.elements[1],x.__data[2]=O.elements[2],x.__data[3]=0,x.__data[4]=O.elements[3],x.__data[5]=O.elements[4],x.__data[6]=O.elements[5],x.__data[7]=0,x.__data[8]=O.elements[6],x.__data[9]=O.elements[7],x.__data[10]=O.elements[8],x.__data[11]=0):(O.toArray(x.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,M,A,P){let C=_.value,I=M+"_"+A;if(P[I]===void 0)return typeof C=="number"||typeof C=="boolean"?P[I]=C:P[I]=C.clone(),!0;{let v=P[I];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return P[I]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function m(_){let M=_.uniforms,A=0,P=16;for(let I=0,v=M.length;I<v;I++){let w=Array.isArray(M[I])?M[I]:[M[I]];for(let U=0,x=w.length;U<x;U++){let N=w[U],z=Array.isArray(N.value)?N.value:[N.value];for(let W=0,G=z.length;W<G;W++){let O=z[W],H=b(O),re=A%P,te=re%H.boundary,xe=re+te;A+=te,xe!==0&&P-xe<H.storage&&(A+=P-xe),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=H.storage}}}let C=A%P;return C>0&&(A+=P-C),_.__size=A,_.__cache={},this}function b(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){let M=_.target;M.removeEventListener("dispose",g);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var p_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function m_(){return Zn===null&&(Zn=new mi(p_,16,16,_s,gt),Zn.name="DFG_LUT",Zn.minFilter=zt,Zn.magFilter=zt,Zn.wrapS=Wn,Zn.wrapT=Wn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var xc=class{constructor(e={}){let{canvas:t=Wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Jt}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let b=p,g=new Set([Il,Pl,Rl]),u=new Set([Jt,Bn,hr,Xi,El,Tl]),_=new Uint32Array(4),M=new Int32Array(4),A=null,P=null,C=[],I=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,U=!1;this._outputColorSpace=Dt;let x=0,N=0,z=null,W=-1,G=null,O=new dt,H=new dt,re=null,te=new Le(0),xe=0,ve=t.width,ue=t.height,Oe=1,je=null,Je=null,$=new dt(0,0,ve,ue),S=new dt(0,0,ve,ue),D=!1,V=new sr,K=!1,ie=!1,Se=new et,fe=new L,Z=new dt,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function de(){return z===null?Oe:1}let R=i;function Ne(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",ut,!1),R===null){let k="webgl2";if(R=Ne(k,E),R===null)throw Ne(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ve("WebGLRenderer: "+E.message),E}let _e,ze,pe,T,y,B,Q,se,j,we,he,Re,ke,oe,me,Ce,Pe,Me,We,F,ge,le,Te;function ce(){_e=new b1(R),_e.init(),ge=new l_(R,_e),ze=new m1(R,_e,e,ge),pe=new a_(R,_e),ze.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),T=new E1(R),y=new qy,B=new o_(R,_e,pe,y,ze,ge,T),Q=new A1(w),se=new I0(R),le=new d1(R,se),j=new S1(R,se,T,le),we=new C1(R,j,se,le,T),Me=new T1(R,ze,B),me=new g1(y),he=new Xy(w,Q,_e,ze,le,me),Re=new f_(w,y),ke=new Ky,oe=new e_(_e),Pe=new f1(w,Q,pe,we,m,l),Ce=new r_(w,we,ze),Te=new d_(R,T,ze,pe),We=new p1(R,_e,T),F=new w1(R,_e,T),T.programs=he.programs,w.capabilities=ze,w.extensions=_e,w.properties=y,w.renderLists=ke,w.shadowMap=Ce,w.state=pe,w.info=T}ce(),b!==Jt&&(v=new P1(b,t.width,t.height,s,r));let ee=new Tu(w,R);this.xr=ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(E){E!==void 0&&(Oe=E,this.setSize(ve,ue,!1))},this.getSize=function(E){return E.set(ve,ue)},this.setSize=function(E,k,J=!0){if(ee.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=E,ue=k,t.width=Math.floor(E*Oe),t.height=Math.floor(k*Oe),J===!0&&(t.style.width=E+"px",t.style.height=k+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(ve*Oe,ue*Oe).floor()},this.setDrawingBufferSize=function(E,k,J){ve=E,ue=k,Oe=J,t.width=Math.floor(E*J),t.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(b===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,k,J,Y){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,k,J,Y),pe.viewport(O.copy($).multiplyScalar(Oe).round())},this.getScissor=function(E){return E.copy(S)},this.setScissor=function(E,k,J,Y){E.isVector4?S.set(E.x,E.y,E.z,E.w):S.set(E,k,J,Y),pe.scissor(H.copy(S).multiplyScalar(Oe).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){pe.setScissorTest(D=E)},this.setOpaqueSort=function(E){je=E},this.setTransparentSort=function(E){Je=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let Y=0;if(E){let q=!1;if(z!==null){let Ae=z.texture.format;q=g.has(Ae)}if(q){let Ae=z.texture.type,Ee=u.has(Ae),be=Pe.getClearColor(),De=Pe.getClearAlpha(),Fe=be.r,qe=be.g,Qe=be.b;Ee?(_[0]=Fe,_[1]=qe,_[2]=Qe,_[3]=De,R.clearBufferuiv(R.COLOR,0,_)):(M[0]=Fe,M[1]=qe,M[2]=Qe,M[3]=De,R.clearBufferiv(R.COLOR,0,M))}else Y|=R.COLOR_BUFFER_BIT}k&&(Y|=R.DEPTH_BUFFER_BIT),J&&(Y|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&R.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Pe.dispose(),ke.dispose(),oe.dispose(),y.dispose(),Q.dispose(),we.dispose(),le.dispose(),Te.dispose(),he.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Uf),ee.removeEventListener("sessionend",Nf),ts.stop()};function Ie(E){E.preventDefault(),au("WebGLRenderer: Context Lost."),U=!0}function Xe(){au("WebGLRenderer: Context Restored."),U=!1;let E=T.autoReset,k=Ce.enabled,J=Ce.autoUpdate,Y=Ce.needsUpdate,q=Ce.type;ce(),T.autoReset=E,Ce.enabled=k,Ce.autoUpdate=J,Ce.needsUpdate=Y,Ce.type=q}function ut(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function rt(E){let k=E.target;k.removeEventListener("dispose",rt),si(k)}function si(E){ri(E),y.remove(E)}function ri(E){let k=y.get(E).programs;k!==void 0&&(k.forEach(function(J){he.releaseProgram(J)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,Y,q,Ae){k===null&&(k=X);let Ee=q.isMesh&&q.matrixWorld.determinant()<0,be=Zm(E,k,J,Y,q);pe.setMaterial(Y,Ee);let De=J.index,Fe=1;if(Y.wireframe===!0){if(De=j.getWireframeAttribute(J),De===void 0)return;Fe=2}let qe=J.drawRange,Qe=J.attributes.position,Be=qe.start*Fe,at=(qe.start+qe.count)*Fe;Ae!==null&&(Be=Math.max(Be,Ae.start*Fe),at=Math.min(at,(Ae.start+Ae.count)*Fe)),De!==null?(Be=Math.max(Be,0),at=Math.min(at,De.count)):Qe!=null&&(Be=Math.max(Be,0),at=Math.min(at,Qe.count));let At=at-Be;if(At<0||At===1/0)return;le.setup(q,Y,be,J,De);let xt,ot=We;if(De!==null&&(xt=se.get(De),ot=F,ot.setIndex(xt)),q.isMesh)Y.wireframe===!0?(pe.setLineWidth(Y.wireframeLinewidth*de()),ot.setMode(R.LINES)):ot.setMode(R.TRIANGLES);else if(q.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),pe.setLineWidth(Wt*de()),q.isLineSegments?ot.setMode(R.LINES):q.isLineLoop?ot.setMode(R.LINE_LOOP):ot.setMode(R.LINE_STRIP)}else q.isPoints?ot.setMode(R.POINTS):q.isSprite&&ot.setMode(R.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Wt=q._multiDrawStarts,Ue=q._multiDrawCounts,un=q._multiDrawCount,tt=De?se.get(De).bytesPerElement:1,Pn=y.get(Y).currentProgram.getUniforms();for(let Vn=0;Vn<un;Vn++)Pn.setValue(R,"_gl_DrawID",Vn),ot.render(Wt[Vn]/tt,Ue[Vn])}else if(q.isInstancedMesh)ot.renderInstances(Be,At,q.count);else if(J.isInstancedBufferGeometry){let Wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ue=Math.min(J.instanceCount,Wt);ot.renderInstances(Be,At,Ue)}else ot.render(Be,At)};function Lf(E,k,J){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,fo(E,k,J),E.side=fi,E.needsUpdate=!0,fo(E,k,J),E.side=wn):fo(E,k,J)}this.compile=function(E,k,J=null){J===null&&(J=E),P=oe.get(J),P.init(k),I.push(P),J.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),E!==J&&E.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),P.setupLights();let Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){let be=Ae[Ee];Lf(be,J,q),Y.add(be)}else Lf(Ae,J,q),Y.add(Ae)}),P=I.pop(),Y},this.compileAsync=function(E,k,J=null){let Y=this.compile(E,k,J);return new Promise(q=>{function Ae(){if(Y.forEach(function(Ee){y.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){q(E);return}setTimeout(Ae,10)}_e.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let lh=null;function Qm(E){lh&&lh(E)}function Uf(){ts.stop()}function Nf(){ts.start()}let ts=new Ap;ts.setAnimationLoop(Qm),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(E){lh=E,ee.setAnimationLoop(E),E===null?ts.stop():ts.start()},ee.addEventListener("sessionstart",Uf),ee.addEventListener("sessionend",Nf),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;let J=ee.enabled===!0&&ee.isPresenting===!0,Y=v!==null&&(z===null||J)&&v.begin(w,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,k,z),P=oe.get(E,I.length),P.init(k),I.push(P),Se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(Se,Un,k.reversedDepth),ie=this.localClippingEnabled,K=me.init(this.clippingPlanes,ie),A=ke.get(E,C.length),A.init(),C.push(A),ee.enabled===!0&&ee.isPresenting===!0){let Ee=w.xr.getDepthSensingMesh();Ee!==null&&ch(Ee,k,-1/0,w.sortObjects)}ch(E,k,0,w.sortObjects),A.finish(),w.sortObjects===!0&&A.sort(je,Je),ne=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ne&&Pe.addToRenderList(A,E),this.info.render.frame++,K===!0&&me.beginShadows();let q=P.state.shadowsArray;if(Ce.render(q,E,k),K===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&v.hasRenderPass())===!1){let Ee=A.opaque,be=A.transmissive;if(P.setupLights(),k.isArrayCamera){let De=k.cameras;if(be.length>0)for(let Fe=0,qe=De.length;Fe<qe;Fe++){let Qe=De[Fe];Bf(Ee,be,E,Qe)}ne&&Pe.render(E);for(let Fe=0,qe=De.length;Fe<qe;Fe++){let Qe=De[Fe];Ff(A,E,Qe,Qe.viewport)}}else be.length>0&&Bf(Ee,be,E,k),ne&&Pe.render(E),Ff(A,E,k)}z!==null&&N===0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z)),Y&&v.end(w),E.isScene===!0&&E.onAfterRender(w,E,k),le.resetDefaultState(),W=-1,G=null,I.pop(),I.length>0?(P=I[I.length-1],K===!0&&me.setGlobalState(w.clippingPlanes,P.state.camera)):P=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function ch(E,k,J,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)P.pushLight(E),E.castShadow&&P.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){Y&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);let Ee=we.update(E),be=E.material;be.visible&&A.push(E,Ee,be,J,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){let Ee=we.update(E),be=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Z.copy(Ee.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){let De=Ee.groups;for(let Fe=0,qe=De.length;Fe<qe;Fe++){let Qe=De[Fe],Be=be[Qe.materialIndex];Be&&Be.visible&&A.push(E,Ee,Be,J,Z.z,Qe)}}else be.visible&&A.push(E,Ee,be,J,Z.z,null)}}let Ae=E.children;for(let Ee=0,be=Ae.length;Ee<be;Ee++)ch(Ae[Ee],k,J,Y)}function Ff(E,k,J,Y){let{opaque:q,transmissive:Ae,transparent:Ee}=E;P.setupLightsView(J),K===!0&&me.setGlobalState(w.clippingPlanes,J),Y&&pe.viewport(O.copy(Y)),q.length>0&&uo(q,k,J),Ae.length>0&&uo(Ae,k,J),Ee.length>0&&uo(Ee,k,J),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Bf(E,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Y.id]===void 0){let Be=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Y.id]=new ht(1,1,{generateMipmaps:!0,type:Be?gt:Jt,minFilter:Wi,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let Ae=P.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||O;Ae.setSize(Ee.z*w.transmissionResolutionScale,Ee.w*w.transmissionResolutionScale);let be=w.getRenderTarget(),De=w.getActiveCubeFace(),Fe=w.getActiveMipmapLevel();w.setRenderTarget(Ae),w.getClearColor(te),xe=w.getClearAlpha(),xe<1&&w.setClearColor(16777215,.5),w.clear(),ne&&Pe.render(J);let qe=w.toneMapping;w.toneMapping=Fn;let Qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),P.setupLightsView(Y),K===!0&&me.setGlobalState(w.clippingPlanes,Y),uo(E,J,Y),B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let at=0,At=k.length;at<At;at++){let xt=k[at],{object:ot,geometry:Wt,material:Ue,group:un}=xt;if(Ue.side===wn&&ot.layers.test(Y.layers)){let tt=Ue.side;Ue.side=tn,Ue.needsUpdate=!0,Of(ot,J,Y,Wt,Ue,un),Ue.side=tt,Ue.needsUpdate=!0,Be=!0}}Be===!0&&(B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae))}w.setRenderTarget(be,De,Fe),w.setClearColor(te,xe),Qe!==void 0&&(Y.viewport=Qe),w.toneMapping=qe}function uo(E,k,J){let Y=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Ae=E.length;q<Ae;q++){let Ee=E[q],{object:be,geometry:De,group:Fe}=Ee,qe=Ee.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),be.layers.test(J.layers)&&Of(be,k,J,De,qe,Fe)}}function Of(E,k,J,Y,q,Ae){E.onBeforeRender(w,k,J,Y,q,Ae),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(w,k,J,Y,E,Ae),q.transparent===!0&&q.side===wn&&q.forceSinglePass===!1?(q.side=tn,q.needsUpdate=!0,w.renderBufferDirect(J,k,Y,q,E,Ae),q.side=fi,q.needsUpdate=!0,w.renderBufferDirect(J,k,Y,q,E,Ae),q.side=wn):w.renderBufferDirect(J,k,Y,q,E,Ae),E.onAfterRender(w,k,J,Y,q,Ae)}function fo(E,k,J){k.isScene!==!0&&(k=X);let Y=y.get(E),q=P.state.lights,Ae=P.state.shadowsArray,Ee=q.state.version,be=he.getParameters(E,q.state,Ae,k,J),De=he.getProgramCacheKey(be),Fe=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=Q.get(E.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",rt),Fe=new Map,Y.programs=Fe);let Qe=Fe.get(De);if(Qe!==void 0){if(Y.currentProgram===Qe&&Y.lightsStateVersion===Ee)return kf(E,be),Qe}else be.uniforms=he.getUniforms(E),E.onBeforeCompile(be,w),Qe=he.acquireProgram(be,De),Fe.set(De,Qe),Y.uniforms=be.uniforms;let Be=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=me.uniform),kf(E,be),Y.needsLights=$m(E),Y.lightsStateVersion=Ee,Y.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=Qe,Y.uniformsList=null,Qe}function zf(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function kf(E,k){let J=y.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Zm(E,k,J,Y,q){k.isScene!==!0&&(k=X),B.resetTextureUnits();let Ae=k.fog,Ee=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,be=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:us,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Fe=Q.get(Y.envMap||Ee,De),qe=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!J.morphAttributes.position,at=!!J.morphAttributes.normal,At=!!J.morphAttributes.color,xt=Fn;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xt=w.toneMapping);let ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Wt=ot!==void 0?ot.length:0,Ue=y.get(Y),un=P.state.lights;if(K===!0&&(ie===!0||E!==G)){let Pt=E===G&&Y.id===W;me.setState(Y,E,Pt)}let tt=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==un.state.version||Ue.outputColorSpace!==be||q.isBatchedMesh&&Ue.batching===!1||!q.isBatchedMesh&&Ue.batching===!0||q.isBatchedMesh&&Ue.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ue.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||q.isInstancedMesh&&Ue.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ue.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ue.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ue.instancingMorph===!1&&q.morphTexture!==null||Ue.envMap!==Fe||Y.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==me.numPlanes||Ue.numIntersection!==me.numIntersection)||Ue.vertexAlphas!==qe||Ue.vertexTangents!==Qe||Ue.morphTargets!==Be||Ue.morphNormals!==at||Ue.morphColors!==At||Ue.toneMapping!==xt||Ue.morphTargetsCount!==Wt)&&(tt=!0):(tt=!0,Ue.__version=Y.version);let Pn=Ue.currentProgram;tt===!0&&(Pn=fo(Y,k,q));let Vn=!1,ns=!1,Ns=!1,lt=Pn.getUniforms(),Ot=Ue.uniforms;if(pe.useProgram(Pn.program)&&(Vn=!0,ns=!0,Ns=!0),Y.id!==W&&(W=Y.id,ns=!0),Vn||G!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(R,"projectionMatrix",E.projectionMatrix),lt.setValue(R,"viewMatrix",E.matrixWorldInverse);let Pi=lt.map.cameraPosition;Pi!==void 0&&Pi.setValue(R,fe.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&lt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,ns=!0,Ns=!0)}if(Ue.needsLights&&(un.state.directionalShadowMap.length>0&&lt.setValue(R,"directionalShadowMap",un.state.directionalShadowMap,B),un.state.spotShadowMap.length>0&&lt.setValue(R,"spotShadowMap",un.state.spotShadowMap,B),un.state.pointShadowMap.length>0&&lt.setValue(R,"pointShadowMap",un.state.pointShadowMap,B)),q.isSkinnedMesh){lt.setOptional(R,q,"bindMatrix"),lt.setOptional(R,q,"bindMatrixInverse");let Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),lt.setValue(R,"boneTexture",Pt.boneTexture,B))}q.isBatchedMesh&&(lt.setOptional(R,q,"batchingTexture"),lt.setValue(R,"batchingTexture",q._matricesTexture,B),lt.setOptional(R,q,"batchingIdTexture"),lt.setValue(R,"batchingIdTexture",q._indirectTexture,B),lt.setOptional(R,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(R,"batchingColorTexture",q._colorsTexture,B));let Ri=J.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Me.update(q,J,Pn),(ns||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,lt.setValue(R,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ot.envMapIntensity.value=k.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=m_()),ns&&(lt.setValue(R,"toneMappingExposure",w.toneMappingExposure),Ue.needsLights&&jm(Ot,Ns),Ae&&Y.fog===!0&&Re.refreshFogUniforms(Ot,Ae),Re.refreshMaterialUniforms(Ot,Y,Oe,ue,P.state.transmissionRenderTarget[E.id]),fr.upload(R,zf(Ue),Ot,B)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fr.upload(R,zf(Ue),Ot,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(R,"center",q.center),lt.setValue(R,"modelViewMatrix",q.modelViewMatrix),lt.setValue(R,"normalMatrix",q.normalMatrix),lt.setValue(R,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Pt=Y.uniformsGroups;for(let Pi=0,Fs=Pt.length;Pi<Fs;Pi++){let Vf=Pt[Pi];Te.update(Vf,Pn),Te.bind(Vf,Pn)}}return Pn}function jm(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function $m(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,k,J){let Y=y.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=k,y.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let J=y.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};let eg=R.createFramebuffer();this.setRenderTarget=function(E,k=0,J=0){z=E,x=k,N=J;let Y=null,q=!1,Ae=!1;if(E){let be=y.get(E);if(be.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(R.FRAMEBUFFER,be.__webglFramebuffer),O.copy(E.viewport),H.copy(E.scissor),re=E.scissorTest,pe.viewport(O),pe.scissor(H),pe.setScissorTest(re),W=-1;return}else if(be.__webglFramebuffer===void 0)B.setupRenderTarget(E);else if(be.__hasExternalTextures)B.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qe=E.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&y.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);let Fe=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?Y=Fe[k][J]:Y=Fe[k],q=!0):E.samples>0&&B.useMultisampledRTT(E)===!1?Y=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[J]:Y=Fe,O.copy(E.viewport),H.copy(E.scissor),re=E.scissorTest}else O.copy($).multiplyScalar(Oe).floor(),H.copy(S).multiplyScalar(Oe).floor(),re=D;if(J!==0&&(Y=eg),pe.bindFramebuffer(R.FRAMEBUFFER,Y)&&pe.drawBuffers(E,Y),pe.viewport(O),pe.scissor(H),pe.setScissorTest(re),q){let be=y.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,J)}else if(Ae){let be=k;for(let De=0;De<E.textures.length;De++){let Fe=y.get(E.textures[De]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+De,Fe.__webglTexture,J,be)}}else if(E!==null&&J!==0){let be=y.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,be.__webglTexture,J)}W=-1},this.readRenderTargetPixels=function(E,k,J,Y,q,Ae,Ee,be=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){pe.bindFramebuffer(R.FRAMEBUFFER,De);try{let Fe=E.textures[be],qe=Fe.format,Qe=Fe.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be),!ze.textureFormatReadable(qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&J>=0&&J<=E.height-q&&R.readPixels(k,J,Y,q,ge.convert(qe),ge.convert(Qe),Ae)}finally{let Fe=z!==null?y.get(z).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,Y,q,Ae,Ee,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De)if(k>=0&&k<=E.width-Y&&J>=0&&J<=E.height-q){pe.bindFramebuffer(R.FRAMEBUFFER,De);let Fe=E.textures[be],qe=Fe.format,Qe=Fe.type;if(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+be),!ze.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.bufferData(R.PIXEL_PACK_BUFFER,Ae.byteLength,R.STREAM_READ),R.readPixels(k,J,Y,q,ge.convert(qe),ge.convert(Qe),0);let at=z!==null?y.get(z).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,at);let At=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await qd(R,At,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ae),R.deleteBuffer(Be),R.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){let Y=Math.pow(2,-J),q=Math.floor(E.image.width*Y),Ae=Math.floor(E.image.height*Y),Ee=k!==null?k.x:0,be=k!==null?k.y:0;B.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,Ee,be,q,Ae),pe.unbindTexture()};let tg=R.createFramebuffer(),ng=R.createFramebuffer();this.copyTextureToTexture=function(E,k,J=null,Y=null,q=0,Ae=0){let Ee,be,De,Fe,qe,Qe,Be,at,At,xt=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if(J!==null)Ee=J.max.x-J.min.x,be=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,qe=J.min.y,Qe=J.isBox3?J.min.z:0;else{let Ot=Math.pow(2,-q);Ee=Math.floor(xt.width*Ot),be=Math.floor(xt.height*Ot),E.isDataArrayTexture?De=xt.depth:E.isData3DTexture?De=Math.floor(xt.depth*Ot):De=1,Fe=0,qe=0,Qe=0}Y!==null?(Be=Y.x,at=Y.y,At=Y.z):(Be=0,at=0,At=0);let ot=ge.convert(k.format),Wt=ge.convert(k.type),Ue;k.isData3DTexture?(B.setTexture3D(k,0),Ue=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),Ue=R.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),Ue=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);let un=R.getParameter(R.UNPACK_ROW_LENGTH),tt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Pn=R.getParameter(R.UNPACK_SKIP_PIXELS),Vn=R.getParameter(R.UNPACK_SKIP_ROWS),ns=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qe);let Ns=E.isDataArrayTexture||E.isData3DTexture,lt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Ot=y.get(E),Ri=y.get(k),Pt=y.get(Ot.__renderTarget),Pi=y.get(Ri.__renderTarget);pe.bindFramebuffer(R.READ_FRAMEBUFFER,Pt.__webglFramebuffer),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Fs=0;Fs<De;Fs++)Ns&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(E).__webglTexture,q,Qe+Fs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(k).__webglTexture,Ae,At+Fs)),R.blitFramebuffer(Fe,qe,Ee,be,Be,at,Ee,be,R.DEPTH_BUFFER_BIT,R.NEAREST);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||y.has(E)){let Ot=y.get(E),Ri=y.get(k);pe.bindFramebuffer(R.READ_FRAMEBUFFER,tg),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,ng);for(let Pt=0;Pt<De;Pt++)Ns?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,q,Qe+Pt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,q),lt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ri.__webglTexture,Ae,At+Pt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ri.__webglTexture,Ae),q!==0?R.blitFramebuffer(Fe,qe,Ee,be,Be,at,Ee,be,R.COLOR_BUFFER_BIT,R.NEAREST):lt?R.copyTexSubImage3D(Ue,Ae,Be,at,At+Pt,Fe,qe,Ee,be):R.copyTexSubImage2D(Ue,Ae,Be,at,Fe,qe,Ee,be);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ue,Ae,Be,at,At,Ee,be,De,ot,Wt,xt.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(Ue,Ae,Be,at,At,Ee,be,De,ot,xt.data):R.texSubImage3D(Ue,Ae,Be,at,At,Ee,be,De,ot,Wt,xt):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ae,Be,at,Ee,be,ot,Wt,xt.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ae,Be,at,xt.width,xt.height,ot,xt.data):R.texSubImage2D(R.TEXTURE_2D,Ae,Be,at,Ee,be,ot,Wt,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,un),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ns),Ae===0&&k.generateMipmaps&&R.generateMipmap(Ue),pe.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&B.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?B.setTextureCube(E,0):E.isData3DTexture?B.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?B.setTexture2DArray(E,0):B.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){x=0,N=0,z=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var $n={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Zt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},x_=new Gi(-1,1,1,-1,0,1),Cu=class extends Tt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},v_=new Cu,sn=class{constructor(e){this._mesh=new vt(v_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _c=class extends Zt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof st?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nn.clone(e.uniforms),this.material=new st({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new sn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ua=class extends Zt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Mc=class extends Zt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ac=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _c($n),this.copyPass.material.blending=wt,this.timer=new ma}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ua!==void 0&&(a instanceof Ua?i=!0:a instanceof Mc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Na={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new et},cameraProjectionMatrixInverse:{value:new et},cameraWorldMatrix:{value:new et},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Fa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},bc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Tp(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=y_(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let o=t[a],l=2*Math.PI*o/i,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new mi(s,e,e);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}function y_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=a++;r++,s--}return i}var Ba={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ru(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraProjectionMatrixInverse:{value:new et},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ru(n,e,t){let i=__(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let a=i[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<n-1?",":")"}`}return s}function __(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new L(Math.cos(r),Math.sin(r),a))}return i}var Sc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,p=c-d,m=e-f,b=t-p,g,u;m>b?(g=1,u=0):(g=0,u=1);let _=m-g+h,M=b-u+h,A=m-1+2*h,P=b-1+2*h,C=l&255,I=c&255,v=this.perm[C+this.perm[I]]%12,w=this.perm[C+g+this.perm[I+u]]%12,U=this.perm[C+1+this.perm[I+1]]%12,x=.5-m*m-b*b;x<0?i=0:(x*=x,i=x*x*this._dot(this.grad3[v],m,b));let N=.5-_*_-M*M;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[w],_,M));let z=.5-A*A-P*P;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[U],A,P)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,o,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(i+c),p=1/6,m=(h+d+f)*p,b=h-m,g=d-m,u=f-m,_=e-b,M=t-g,A=i-u,P,C,I,v,w,U;_>=M?M>=A?(P=1,C=0,I=0,v=1,w=1,U=0):_>=A?(P=1,C=0,I=0,v=1,w=0,U=1):(P=0,C=0,I=1,v=1,w=0,U=1):M<A?(P=0,C=0,I=1,v=0,w=1,U=1):_<A?(P=0,C=1,I=0,v=0,w=1,U=1):(P=0,C=1,I=0,v=1,w=1,U=0);let x=_-P+p,N=M-C+p,z=A-I+p,W=_-v+2*p,G=M-w+2*p,O=A-U+2*p,H=_-1+3*p,re=M-1+3*p,te=A-1+3*p,xe=h&255,ve=d&255,ue=f&255,Oe=this.perm[xe+this.perm[ve+this.perm[ue]]]%12,je=this.perm[xe+P+this.perm[ve+C+this.perm[ue+I]]]%12,Je=this.perm[xe+v+this.perm[ve+w+this.perm[ue+U]]]%12,$=this.perm[xe+1+this.perm[ve+1+this.perm[ue+1]]]%12,S=.6-_*_-M*M-A*A;S<0?s=0:(S*=S,s=S*S*this._dot3(this.grad3[Oe],_,M,A));let D=.6-x*x-N*N-z*z;D<0?r=0:(D*=D,r=D*D*this._dot3(this.grad3[je],x,N,z));let V=.6-W*W-G*G-O*O;V<0?a=0:(V*=V,a=V*V*this._dot3(this.grad3[Je],W,G,O));let K=.6-H*H-re*re-te*te;return K<0?o=0:(K*=K,o=K*K*this._dot3(this.grad3[$],H,re,te)),32*(s+r+a+o)}noise4d(e,t,i,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,f,p,m,b=(e+t+i+s)*l,g=Math.floor(e+b),u=Math.floor(t+b),_=Math.floor(i+b),M=Math.floor(s+b),A=(g+u+_+M)*c,P=g-A,C=u-A,I=_-A,v=M-A,w=e-P,U=t-C,x=i-I,N=s-v,z=w>U?32:0,W=w>x?16:0,G=U>x?8:0,O=w>N?4:0,H=U>N?2:0,re=x>N?1:0,te=z+W+G+O+H+re,xe=a[te][0]>=3?1:0,ve=a[te][1]>=3?1:0,ue=a[te][2]>=3?1:0,Oe=a[te][3]>=3?1:0,je=a[te][0]>=2?1:0,Je=a[te][1]>=2?1:0,$=a[te][2]>=2?1:0,S=a[te][3]>=2?1:0,D=a[te][0]>=1?1:0,V=a[te][1]>=1?1:0,K=a[te][2]>=1?1:0,ie=a[te][3]>=1?1:0,Se=w-xe+c,fe=U-ve+c,Z=x-ue+c,X=N-Oe+c,ne=w-je+2*c,de=U-Je+2*c,R=x-$+2*c,Ne=N-S+2*c,_e=w-D+3*c,ze=U-V+3*c,pe=x-K+3*c,T=N-ie+3*c,y=w-1+4*c,B=U-1+4*c,Q=x-1+4*c,se=N-1+4*c,j=g&255,we=u&255,he=_&255,Re=M&255,ke=o[j+o[we+o[he+o[Re]]]]%32,oe=o[j+xe+o[we+ve+o[he+ue+o[Re+Oe]]]]%32,me=o[j+je+o[we+Je+o[he+$+o[Re+S]]]]%32,Ce=o[j+D+o[we+V+o[he+K+o[Re+ie]]]]%32,Pe=o[j+1+o[we+1+o[he+1+o[Re+1]]]]%32,Me=.6-w*w-U*U-x*x-N*N;Me<0?h=0:(Me*=Me,h=Me*Me*this._dot4(r[ke],w,U,x,N));let We=.6-Se*Se-fe*fe-Z*Z-X*X;We<0?d=0:(We*=We,d=We*We*this._dot4(r[oe],Se,fe,Z,X));let F=.6-ne*ne-de*de-R*R-Ne*Ne;F<0?f=0:(F*=F,f=F*F*this._dot4(r[me],ne,de,R,Ne));let ge=.6-_e*_e-ze*ze-pe*pe-T*T;ge<0?p=0:(ge*=ge,p=ge*ge*this._dot4(r[Ce],_e,ze,pe,T));let le=.6-y*y-B*B-Q*Q-se*se;return le<0?m=0:(le*=le,m=le*le*this._dot4(r[Pe],y,B,Q,se)),27*(h+d+f+p+m)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var pr=class n extends Zt{constructor(e,t,i=512,s=512,r,a,o){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Tp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ht(this.width,this.height,{type:gt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new st({defines:Object.assign({},Na.defines),uniforms:nn.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ca,this.normalMaterial.blending=wt,this.pdMaterial=new st({defines:Object.assign({},Ba.defines),uniforms:nn.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new st({defines:Object.assign({},Fa.defines),uniforms:nn.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,blending:wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new st({uniforms:nn.clone($n.uniforms),vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:va,blendDst:xs,blendEquation:pn,blendSrcAlpha:xa,blendDstAlpha:xs,blendEquationAlpha:pn}),this.blendMaterial=new st({uniforms:nn.clone(bc.uniforms),vertexShader:bc.vertexShader,fragmentShader:bc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ml,blendSrc:va,blendDst:xs,blendEquation:pn,blendSrcAlpha:xa,blendDstAlpha:xs,blendEquationAlpha:pn}),this._fsQuad=new sn(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Jn,this.depthTexture.format=Qn,this.depthTexture.type=Xi,this.normalRenderTarget=new ht(this.width,this.height,{minFilter:St,magFilter:St,type:gt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ru(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Sc,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new mi(s,e,e,an,Jt);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}};pr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Cp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var mr=class n extends Zt{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ht(r,a,{type:gt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ht(r,a,{type:gt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ht(r,a,{type:gt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Cp;this.highPassUniforms=nn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new st({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nn.clone($n.uniforms),this.blendMaterial=new st({uniforms:this.copyUniforms,vertexShader:$n.vertexShader,fragmentShader:$n.fragmentShader,premultipliedAlpha:!0,blending:xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new en,this._fsQuad=new sn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new st({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new st({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};mr.BlurDirectionX=new ae(1,0);mr.BlurDirectionY=new ae(0,1);var Oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wc=class extends Zt{constructor(){super(),this.isOutputPass=!0,this.uniforms=nn.clone(Oa.uniforms),this.material=new lr({name:Oa.name,uniforms:this.uniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this._fsQuad=new sn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ya?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var za=new L;function Tn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;za.copy(e),za[i]=0,za.normalize();let c=.5*a/(a+o),h=1-za.angleTo(n)/l;return Math.sign(za[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ec=class n extends xn{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,m=d.length/6,b=new L,g=.5/a;for(let u=0,_=0;u<d.length;u+=3,_+=2)switch(l.fromArray(d,u),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[u+0]=h.x*Math.sign(l.x)+c.x*r,d[u+1]=h.y*Math.sign(l.y)+c.y*r,d[u+2]=h.z*Math.sign(l.z)+c.z*r,f[u+0]=c.x,f[u+1]=c.y,f[u+2]=c.z,Math.floor(u/m)){case 0:b.set(1,0,0),p[_+0]=Tn(b,c,"z","y",r,i),p[_+1]=1-Tn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),p[_+0]=1-Tn(b,c,"z","y",r,i),p[_+1]=1-Tn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),p[_+0]=1-Tn(b,c,"x","z",r,e),p[_+1]=Tn(b,c,"z","x",r,i);break;case 3:b.set(0,-1,0),p[_+0]=1-Tn(b,c,"x","z",r,e),p[_+1]=1-Tn(b,c,"z","x",r,i);break;case 4:b.set(0,0,1),p[_+0]=1-Tn(b,c,"x","y",r,e),p[_+1]=1-Tn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),p[_+0]=Tn(b,c,"x","y",r,e),p[_+1]=1-Tn(b,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Yi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Tt,c=0;for(let h=0;h<n.length;++h){let d=n[h],f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let m=0;m<p.count;++m)d.push(p.getX(m)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Rp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][f]);let m=Rp(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Rp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<t;m++){let b=h.getComponent(f,m);o.setComponent(f+d,m,b)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Ka={date:"unavailable",authors:14,labs:{}},Bt=[{"id":"binance","sourceIds":["binance"],"name":"Binance","kind":"CEX","style":"studio","color":"#f0b90b","wall":"#eee9d8","ns":["binance"],"family":/^$/,"lab":"CEX"},{"id":"coinbase","sourceIds":["gdax","coinbase-exchange"],"name":"Coinbase","kind":"CEX","style":"pavilion","color":"#1652f0","wall":"#e4e9f4","ns":["gdax","coinbase-exchange"],"family":/^$/,"lab":"CEX"},{"id":"okx","sourceIds":["okex","okx"],"name":"OKX","kind":"CEX","style":"brick","color":"#202124","wall":"#e5e5e5","ns":["okex","okx"],"family":/^$/,"lab":"CEX"},{"id":"bybit","sourceIds":["bybit_spot","bybit"],"name":"Bybit","kind":"CEX","style":"shop","color":"#f7a600","wall":"#f2eadc","ns":["bybit_spot","bybit"],"family":/^$/,"lab":"CEX"},{"id":"kraken","sourceIds":["kraken"],"name":"Kraken","kind":"CEX","style":"gable","color":"#5741d9","wall":"#e9e6f2","ns":["kraken"],"family":/^$/,"lab":"CEX"},{"id":"bitget","sourceIds":["bitget"],"name":"Bitget","kind":"CEX","style":"studio","color":"#00c2d7","wall":"#e2eef0","ns":["bitget"],"family":/^$/,"lab":"CEX"},{"id":"gate","sourceIds":["gate","gate-io"],"name":"Gate","kind":"CEX","style":"shop","color":"#2354e6","wall":"#e5e9f2","ns":["gate","gate-io"],"family":/^$/,"lab":"CEX"},{"id":"uniswap","sourceIds":["uniswap"],"name":"Uniswap","kind":"DEX","style":"pavilion","color":"#ff4dba","wall":"#f2e5ee","ns":["uniswap"],"family":/^$/,"lab":"DEX"},{"id":"jupiter","sourceIds":["jupiter"],"name":"Jupiter","kind":"DEX","style":"gable","color":"#36d399","wall":"#e1eee9","ns":["jupiter"],"family":/^$/,"lab":"DEX"},{"id":"pancakeswap","sourceIds":["pancakeswap"],"name":"PancakeSwap","kind":"DEX","style":"shop","color":"#1fc7d4","wall":"#e2eff0","ns":["pancakeswap"],"family":/^$/,"lab":"DEX"},{"id":"raydium","sourceIds":["raydium"],"name":"Raydium","kind":"DEX","style":"studio","color":"#7b61ff","wall":"#e9e6f3","ns":["raydium"],"family":/^$/,"lab":"DEX"},{"id":"lighter","sourceIds":["lighter"],"name":"Lighter","kind":"DEX","style":"brick","color":"#d7ff4f","wall":"#e9eddf","ns":["lighter"],"family":/^$/,"lab":"DEX"},{"id":"curve","sourceIds":["curve"],"name":"Curve","kind":"DEX","style":"gable","color":"#3e7bfa","wall":"#e4e9f2","ns":["curve"],"family":/^$/,"lab":"DEX"},{"id":"hyperliquid","sourceIds":["hyperliquid"],"name":"Hyperliquid","kind":"DEX","style":"pavilion","color":"#50e3c2","wall":"#e1eee9","ns":["hyperliquid"],"family":/^$/,"lab":"DEX"}],M_=/latest|image|audio|tts|embed|search|realtime|moderation|transcri|oss|codex|guard|safety|-mt|translat|contributor/;function A_(n,e){return n.data.filter(t=>{let[i,s=""]=t.id.split("/");return e.ns.includes(i)&&!t.id.startsWith("~")&&!t.id.includes(":")&&e.family.test(s)&&!M_.test(s)&&(t.architecture?.output_modalities||["text"]).every(r=>r==="text")}).sort((t,i)=>Math.floor(i.created/86400)-Math.floor(t.created/86400)||t.id.length-i.id.length)[0]}var b_=n=>n&&{id:n.id,name:n.name,created:n.created,input:+(Number(n.pricing.prompt)*1e6).toFixed(3),output:+(Number(n.pricing.completion)*1e6).toFixed(3),context:n.context_length,modalities:n.architecture?.input_modalities||["text"]};function mm(n){return Object.fromEntries(Bt.map(e=>[e.id,b_(A_(n,e))]).filter(e=>e[1]))}function gm(n,e,t){let i=Object.fromEntries(Bt.flatMap(h=>h.ns.map(d=>[d,h.id]))),s=(h=[],d)=>{let f={};for(let p of h){let m=p.model_permaslug.split("/")[0],b=i[m]||m,g=p.total_prompt_tokens+p.total_completion_tokens,u=p.change;f[b]=(f[b]||0)+(d&&u!=null&&u>-1?g/(1+u):g)}return f},r=s(n),a=s(n,!0),o=s(e),l=s(t),c=Object.keys(r).sort((h,d)=>r[d]-r[h]);return{authors:c.length,labs:Object.fromEntries(Bt.map(h=>[h.id,{week:r[h.id]||0,prev:a[h.id]||0,day:o[h.id]||0,month:l[h.id]||0,rank:c.indexOf(h.id)+1}]))}}var Pp=n=>n>=1e6?`${Math.floor(n/1e5)/10}M`:`${Math.round(n/1e3)}K`,Vc=n=>n>=1e12?`${(n/1e12).toFixed(1)}T`:n>=1e9?`${(n/1e9).toFixed(n>=1e11?0:1)}B`:`${Math.round(n/1e6)}M`,Gc=n=>"$"+(n%1?n.toFixed(2):n);function S_(n,e){let t=e.modalities;Object.assign(n,{model:e.name.replace(/^[^:]+:\s*/,""),modelId:e.id,input:e.input,output:e.output,context:Pp(e.context),released:new Date(e.created*1e3).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"}),mods:["image","video","audio","file"].filter(i=>t.includes(i)),checks:["Text",t.includes("image")&&"Vision",t.includes("video")&&"Video",t.includes("audio")&&"Audio",t.includes("file")&&"Files"].filter(Boolean).slice(0,3).concat(`${Pp(e.context)} context`)})}function w_(n,e,t){Object.assign(n,{tokens:e.week,growth:e.prev?(e.week/e.prev-1)*100:0,rank:e.rank,authors:t,trend:[e.month?e.month/30:e.prev/7,e.prev/7,e.week/7,e.day||e.week/7]})}function E_(n){let e=n.crowd??.3;return{queue:Math.round(6+52*e),density:.22+.5*e,walkers:Math.round(4+12*e),idle:Math.round(2+5*e),rate:Ut.clamp(1+n.growth/120,.75,1.5)}}var Af={openai:{view:"1.68 1.75 16.65 16.5",fill:"#080808",d:"M11.248 18.25q-.825 0-1.568-.314a4.3 4.3 0 0 1-1.32-.874 4 4 0 0 1-1.304.214 4 4 0 0 1-2.046-.544 4.27 4.27 0 0 1-1.518-1.485 4 4 0 0 1-.56-2.095q0-.48.131-1.04A4.4 4.4 0 0 1 2.04 10.71a4.07 4.07 0 0 1 .017-3.4 4.2 4.2 0 0 1 1.056-1.418 3.8 3.8 0 0 1 1.6-.842 3.9 3.9 0 0 1 .76-1.683q.593-.759 1.451-1.188a4.04 4.04 0 0 1 1.832-.429q.825 0 1.567.313.742.314 1.32.875a4 4 0 0 1 1.304-.215q1.106 0 2.046.545a4.14 4.14 0 0 1 1.501 1.485q.578.941.578 2.095 0 .48-.132 1.04.66.61 1.023 1.419.363.792.363 1.666 0 .892-.38 1.717a4.3 4.3 0 0 1-1.072 1.435 3.8 3.8 0 0 1-1.584.825 3.8 3.8 0 0 1-.775 1.683 4.06 4.06 0 0 1-1.436 1.188 4.04 4.04 0 0 1-1.832.429m-4.076-2.062q.825 0 1.435-.347l3.103-1.782a.36.36 0 0 0 .164-.313v-1.42L7.881 14.62a.67.67 0 0 1-.726 0l-3.118-1.798a.5.5 0 0 1-.017.115v.198q0 .841.396 1.551.413.693 1.139 1.089a3.2 3.2 0 0 0 1.617.412m.165-2.69a.4.4 0 0 0 .181.05q.083 0 .165-.05l1.238-.71-3.977-2.31a.7.7 0 0 1-.363-.643v-3.58q-.825.362-1.32 1.122a2.9 2.9 0 0 0-.495 1.65q0 .809.413 1.55.412.743 1.072 1.123zm3.91 3.663q.875 0 1.585-.396a2.96 2.96 0 0 0 1.534-2.64v-3.564a.32.32 0 0 0-.165-.297l-1.254-.726v4.604a.7.7 0 0 1-.363.643l-3.119 1.799a3 3 0 0 0 1.783.577m.627-6.039V8.878L10.01 7.822 8.129 8.878v2.244l1.881 1.056zM7.057 5.859a.7.7 0 0 1 .363-.644l3.119-1.798a3 3 0 0 0-1.782-.578q-.874 0-1.584.396A2.96 2.96 0 0 0 6.05 4.324a3.07 3.07 0 0 0-.396 1.551v3.547q0 .199.165.314l1.237.726zm8.383 7.887q.825-.364 1.303-1.123.495-.758.495-1.65a3.15 3.15 0 0 0-.412-1.55q-.413-.743-1.073-1.123l-3.086-1.782q-.099-.065-.181-.049a.3.3 0 0 0-.165.05l-1.238.692 3.993 2.327a.6.6 0 0 1 .264.264.64.64 0 0 1 .1.363zm-3.317-8.382a.63.63 0 0 1 .726 0l3.135 1.831v-.297q0-.792-.396-1.501a2.86 2.86 0 0 0-1.105-1.155q-.71-.43-1.65-.43-.825 0-1.436.347L8.294 5.941a.36.36 0 0 0-.165.314v1.418z"},anthropic:{view:"0 0 24 24",fill:"#d97757",d:"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"},google:{view:"0 0 16 16",fill:"url(#gm)",defs:'<defs><radialGradient id="gm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0"/><stop offset=".343" stop-color="#5684D1"/><stop offset=".672" stop-color="#1BA1E3"/></radialGradient></defs>',d:"M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"},nvidia:{view:"0 0 24 24",fill:"#76b900",d:"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"},minimax:{view:"0 0 24 24",fill:"#e8436f",d:"M11.43 3.92a.86.86 0 1 0-1.718 0v14.236a1.999 1.999 0 0 1-3.997 0V9.022a.86.86 0 1 0-1.718 0v3.87a1.999 1.999 0 0 1-3.997 0V11.49a.57.57 0 0 1 1.139 0v1.404a.86.86 0 0 0 1.719 0V9.022a1.999 1.999 0 0 1 3.997 0v9.134a.86.86 0 0 0 1.719 0V3.92a1.998 1.998 0 1 1 3.996 0v11.788a.57.57 0 1 1-1.139 0zm10.572 3.105a2 2 0 0 0-1.999 1.997v7.63a.86.86 0 0 1-1.718 0V3.923a1.999 1.999 0 0 0-3.997 0v16.16a.86.86 0 0 1-1.719 0V18.08a.57.57 0 1 0-1.138 0v2a1.998 1.998 0 0 0 3.996 0V3.92a.86.86 0 0 1 1.719 0v12.73a1.999 1.999 0 0 0 3.996 0V9.023a.86.86 0 1 1 1.72 0v6.686a.57.57 0 0 0 1.138 0V9.022a2 2 0 0 0-1.998-1.997"}},xm={deepseek:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAApL0lEQVR42u19B5hU15UmY4/jWpa03hnb8njt8dhrj9eez7O2tP48Y+83jnRXV9V79aqqA0HQqV6ujmRoaJIEQpLNGEmDIspCMgpYASQQIghEQyc655xz5Xr1zn7n3ldFgwS0QBKN9M733a+7obteuOeee85//nPunDmmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiiimmmGKKKabMmTMHAOb8+dGy367avG9Byyj8rflGPmHy0qGhH6fxL3Sl5RyYfPS5if8w38jsWp1/0zIK1z+7H35acld7ulpSpcirald4SxpL5aXVRRvvaFq071Dou1dyjbzSijtT5WZIFXugYE3dMvOtz46J/9TJBrjljoeat8/37q/kco+P2bNrYm6pH1JlH6RJAZivjMF8oTKck/di2dAQXHc51+kF+OLCvKY2VvEDpwZBXNX0nPn2r5JUd8IX7nqgJalgfdk2z9KaSs5TM8Xx3ZpDGAGXPAmsHAQmT4cUCcCuxICVBvSFRdXdBRveym8bg89fzjVfeDOUyvEjgSQpCimqD+bn1bQdOgnfM2djBjLgg8++VR76Xw/8pevXK+8oW5y37uSqgvUNDymlrS8KJe2v82vajwhruo6Ka7qPiCWdh/k1Da/wa6t3C+tP/0m5rXz1kj+dybrrqQFr/tb6bH5d1a6Fyxtb7GJrhFVGgZH9YBfDYBcjwAgRcIpRSBEjkCQDJEshsAkd0dwVVbuaR+D6y73/llH4fMFt5cfs0qSeIgDYBQ1c4pDuKW4988BTgX82Z/hCL64XbtqzD7yF6xrfcWWV9Tlyaic5vk3nxB5ghV5wK2PgViYhTQ1CRl4E0hScwClwSiOQljcMLm8n2Pg6sGZXakz2Gb9L7NQcwgBYcyeAkXSwiwBWXOVSFGw42agIfAzssg4WMlHjsKi4quaNavjmlTzHqWa4aVHxsVarOAHJAkAKHwFO8kO60h/yLD19vHUAvgoAn/4w32XzFPx9XRv806yf9KY++G9r7u1bJJTWPJGRX9nBiS0Bjh8hK5MVcdJ0sOHkKQAcMc8RsAu4ejVgBB0YIQaMGAVGDAEj+YGVfeAUA+AWIpAqxIATAFgBwMYD2BIKoIFdCoFdDoFV1MAmxYCTdHALnf4Hnp1U0UG8kmfadwR+7Mg51ov3ksxrYJdjkCIEgJX94JQ7o9lLaxuW3t68/vlDcEvdJHzmg36nm+6rS84sPNqQrb7d/8gzTcKsnfy2Qfjasg2NL9o8LTFOHQOHghMYBWceACPRybKIQPZmm4rfh8GOCkBGFOxSDGyiRr4ysk6GVYiCQ4wBxwMwuQB2/CoCsDKANaEAMfL3VjkCViUKVjEGbiUKGVL9cGsvfOtKn2vPy3ALu7hq0IkKJoTJdVIUDeZKMUjyRMCWOwyc0AVcTvXYxh29O9rgg8MI3mmBm+cXnOzK8HZDhtgCyop973SMwxdm1cS/WQXfXLaxefNCpaE/XejWODkCDE4ormoxRle4HAG7HASbjCs1QibaJuOIgU2JgVXSIEWKgFXWwCrpZGJxgm0STrgGrBQGFj8DTb0Upr9n/C5uBXb8GzkGyWqUfK5DxAigcfRoJdx8pc/39AvwCy6zeZiTqK9hEyOQIkXBogIkEWsUA4aPAuMJgsszEZZXNb3yzP7hK7ouWq0tO7tT5xfU9DnVAZ1VpoCTOsGz/MDJrgB8btZM/hN7/f9xq1rT5uZ7Yi5lCuziJJl8nHhG1Mlqpd/jFhAFRooAixOKe7R43iArOUYmM/Fvwvn/jyt92sB/M/4flSaZWJcIuAp0cEo9sfV/7n8KQ8Urecbn9sLPucVNwywfBA4VUtDIfaTgVkB+xm1JB7snCqgkLqkP3MLRwYf/MnZZYNHJCvjG3fcOPJEh1U255Smw8WGwCiFgxQ596ZbyPbNi4iua4Eurt9Z6swrbepy5k8AKuBqjYPUGyR6P+7PNWMG4JxOlkCKGcuhEAfDFUQXRgZE04//Dxoga/xajfoPxWcQySDHDAhgKYCgM+R0ZIAl9h/wYWIQhYOTqodKHmlKu5FlfOQL/nC7W9TnlIFhzNODwnqUIsWbU2oSBFYLA4FDCwKIV8vRA9tLqw/XtcOP5n1c7BJ998JnxXxasahILVrfeVrSufYdcUnc3v6byj0JJ/SML8hva3UJ7xOUZBxYti0y3S4fYFb7r4fZts0IBlm0+vZ7LqYY0JQwOGSBFiJF9PVkNQopM9/nEIJOF5j1sTBqdsOnWgU5+yBgBY9Cf0cmjE6+fO/kJBZimBPh73jBRRHs+3ksPuAvf6TxQD/92uZagogm+nqEeb3AqY5CSrVErgNuVEiBhKCf6wCUHwMZPgV2NwFxPFFhFA4fQGHpg98Qfp3/WoA++tnZ7427LgqMTqcIAZIhhSBMj4JJ94M6fBEfeONjVIFg8QXCIABZPmL4vKQouudv/8uFI5lWf/A3bmzPmqc1+lh8j+yHuvVYlDHYc5Psg+ZlOFBiD7tE4qFWAxN6dmMDE9zHDs49/jU5zFqc7jfR3rAnLgOCPBjY1DClyAKxqGGwqKtAQcOKZMWlN5fYT9XDT+33ermH4nLz2rTcZoSOGym4XdLDJEbCoQfKsrBQCVoiAOw/AIkTI8+LvOfkRWKieaNlfAd863gVfKdxQs8HN1w7a+f6oUwmAAy2dGAFWCQOjBMCu+uj9emNgQyeYLKAY8TdYJQhuuWmkqge+c/XMfjd8sXhT2cZ5Sp3fKQfALmuQIkchRYmADU02r4MT90Pc40WNrnDD1LPEH4iHeIZzKJ27l5+dyHNHQlkuMOjfxsjn2JQo2OUAwQkY4+84rwYOKQgOYRjS1abhJVtb17xfa/D46/0iI9X6OC9ACq5MRYMkVYNkJUrvD58TFVYNgAUnVQRIQ6dxUWOkcPPo0/OKusZs8piOysEouF1RpUZLYSMWkEZKLBlRcCjUYtrxeuhUK33gWd108Kqu/FU7uvLsfJnm9g4Rz55Tgez3dBKpmY6vajLZcVOf+JmubkY6+/3ZlR471wk8/6t4Macxdp7loCHl2d8zQktcSVIAOLkvtOruluL3C8RkFDb2WfkYJAs6DTfVKFiUMCQpfkhRogknlVxPNBaCFABW8pEtzZb4d7oI7NP8GoyEbIoGjBIhq51BK+oNgUUOA6MGwOVtB3H1iVVXbfL/ctB/S2pBXbdd7gFGmgAHTgpvhF/Gvhzf+8815bNvoJPpVJomhZVVd+w7Cl+daVgmlFY+zclTZLWTyURcAJ9boSHpzK4dJeAXsYCGghILIiM4phHchJURB4mB1RslW6ZTmQSHp2zkkZcm/u2qTH5lO3w9q/hIuUPuAFeen+xbaNY5OR5/Rw0FiBElmM2TH7cSXN4EZKhDULC2cddM38PWXWcybFmn/U6yehFxDNJtjjfC1Rlf/zwLJcZNPxDHz0G2TCDv0qngVjKoLd/SePDDhpsvKMUbztzu4ht0VpwEDrXY2NetnukKQPfxa0EBMCxNRtOqhMEp9IQK17U88+iLQ5fMFxyqCN5YUHrmDTc/qJG4H30ZnKxcQwlmdG3Dt5ExZxEGRg4RqxCfePLVUAh0al1KAG5V61r2HYH/fVUmv6YZvjtPqRlM94bAIetEM+0eqqFMwtxHiUmMO3LXggKgp21VAJzeKLjlXvCW1M8ov9/cBd9dqFZ3OcSogVTGyJ7OEqcueolr6+dELOgEUgUIASujv6AR+Bu3AvQHWCUCGWorLN9wes1Vmfw3auBGeW3DURc/rDuIB0+TMKzh7NlE/RzHJxHezXIfgJpfnEAMF9HJCgHr6Qp519Y//cze6Lcv9V7WbW/P56TRqBUzg4hVEDwgfE5oSibyfMc2HvbKugFx059RiRyqBowX7ycEVgVh8QCwYmvUu67s9dcOR266KgpQtO1MkUPqBpugJW6WDm3aiD/0WXBn9juBMXAKOlm1uHUlKzrxYTIKApBZ1FD+3Guhb1zUKgJ8St3Uvt0utgQdeZNEkWyJhUDfRzyZ9a4oRqKop51ERWejACSuYOxvJzgJchzaw4Wba/7cBR98dnHGkrmiocqujNGb4mHaao+e87DnvFwxNutXPyoAZhfj+Qh0Xi0KwFxPAFLVMViyse6xS72bXoDPrL+v6mGnUufjiPnWz3sv063NueEr2eMJZhEm4SSSTFI81K/ipCng+Mbg7fePPNl7NSf/6Vcm5tnFBr813wcWiVqA+N5lS0z6eZAuwe+j10AUEDOwCgOowu0LAS0xRjKNTG5jKH99/SP7T8LXLsp9APjbtds7JLdY182Ko9pZhPLiCkAdxjDYvH6wqgGwSiGST3CL47BAaRxYd3dT1lXz+An02QVfkJafPmGV2mGudxIsspbI578XOkcVIJ7MCV4A3JldTiCieFY5BA4pAE4hBA4EdxDhk2PAeifBKbVAQWnrozPiKPbANzNXdZQz8swsAHH2FJo7ITkSaQzsnobg4oJ3Tj23z/+bq4713/e07985zxkf6x0FC2bAEORAkEehk8+Q7JwONkUHCwn/jL2MmNIIiQZsEiVlWjBFK1L4NJ64YVChxAg4CGQcJcAM5QpEElyAePbvHGRvBqadFWOEQELh6Hh2MXI2W4j3IeoEr7eh44awMWb1JKSRGURS5B0I48DxvaG8kuYnd++D/3mpd8aXdG1AzoONhMRhinYKccRTBxv6HFIYHPi5wig4+L4Ik9Pqm5/X1CqVND9WuqNrQWUr/I9ZkenLv627yM73gk0MEAYMSfDIAHONvcuNaBbmqBUfpHgnyAQxxgQnqxGSI0DCR7IQBQsqghdIyGVXgTpGRtjECTGiBCTrJ/vJirQaOXbK9tHJCiETMhMFwIkXYiQ3H1cs+tlRMgFxvB2hadagnuEejPecrFAkk8LZOoG67WIAHLkDIK1pODQI8KWLOswbe3Yh7GtVMEkUIvfCGfs9rnZXPpr+fs0t1Q0szj9TveGPPc+98iakN/TOkkmfLsKausccyhhdGciAkTWwkFgf+Xld4dSctqkMsXtkfmFn/4KizvZFeYPti+ThnnlC77Bb6Jjk+O4gx/fqnDgInDQGjDhBVhph7sY9YmH6FhJL5A4YI2lkI/AyplxDxFOfKchC088xgs2nyNOZRTGy7zK44kVMtQYNf+XcQfAMjAzUMCSpfmD4ALiE/ljW0qa22x/osr9XEmnIB9dlLalvYiU/+VuLEqUAkREyUxbUFMxf2tf+7GH4aW0PXHelJJUPVbKW1TakFkaoc6ICpWqRiaz0lWxv/utLbwYX1HTCtzrG4cZ+gM/iw+DX5h745vEz8Nv/fKxtS+GGdw7Nlw+3urNPTTlz22FRQQQ4TxAYXgNXHp0QixShk2T4EaxwNoGCCkPgZQlmDC4RziHSwUmmLgpJCmUIWeJ+ixwm8C2ldRnxumGN2ARjKUasQpI3BEl5fnDlh8HmCUNyjg9sYuPEbQ8OPljTey7F/NmDMJ/jGyYZ2WegojHi6LEGPGxTg+AunoT5y+qqZj2rt7YNvpyeVzfEqVFI5kPAKkDSm3alX5c21N89U4ZtDcCnD1fCtx58YiJ52YbGJeKymmcz85ta08UOPycMkRWIadAUY8+3x9PFEjXdNiO7eC7x81I+gJZw8ogPgvRwme7rNjnuTwRJZi4Fr0HIJnGKmm6krDWDb6AZ0Y4frIKxPXh9wCrtkczilrLN24dcrWNww+lW+Hz+pvZDDqFXQwc4TnhBBXCINGmUgtVEBSOwYNnpmitlKH/o8sy+8P9lhJYgMYX4MtA7Ji+k1bf+vhbXlXz2mVb40pN7Y78oLK1flVlQXe/wtEQdwigwgh+sqAy4YnHS1BgkEXMco/G1MMP4XoyCU6QePaGcoX8hBwm1nJPGgfV0BtK9La05q1uOLlrZUJ2e3zbKeHo1FyqCEAQWtxsJiRox4DwArlwgqx+dOBKri36wSaPgUkPgEkciGXkdfZ6SvnJO7Ik6BD9RYLRaNiNfgmAPEmMsSpD83aIl5c2z2vSj3P3wBGPne2K4YghzFxM+yIL11AfWbKvO+KCuU9cNX9m5e3TjfPVUX6rcAe48BEYA/oDOphoFa34UGNzHMzF/r89YAdDzj/MN6aoOwby8MUgV6qZKt3ff1ga0NAxX4qlm+OmKzV2PM5lVI2n5w2CVh8CeHyC0cnsuQJrBWSRkDwLURICVpqhvJMcjogg4eI0kcgg5RaaYAvk7kVLT0CdwKCHwLK+vmPVbQPFtbVl2foSEfeitE9ACEx18a6xofUXOBw447Z/8fsHG6sIFhXXNjNQbQ0aNTY2RSAKtj4sAJ/qM43s0+wlegmgoQW53eNUd3bvq299dF9gE8KmH9/h/lbWs9lW71Bm1qONg8YaIN88YEDgqlMMDxCqwBtKZouqEFm41kmP0PYHhsBpFMHIYLN4gJMk6uL0Ayuq2F2e9Ashr64tRy+mKipAHR8avQ+qAok0nV3xY1y1rga9uvK/xWTa3bMothSAly3CiBB04VZ+hE0gh3WSylVDnj1DChKHopnsDz1zM/GJFU/HWMwed3nYN/QMcdiX+HvSzVDbDKhALSaIMLYFbUAUIE/+BVC9JGE2ESJ2iQ4qCvLrlrlmvAEpp0yoMZ/AhEJ7kcjFPjayUXihYX/7HD/PaaJa33dfhzBCr2+bljZDyMBajEDH2PpxAGrYSKyBTcIpRfMApHeP8ms4X89c3rldKjhc+8GzrT86/fn0/3OhZXfWIU+7Tkd/vMNjKaNbRmcSkEYaYJJeAcb5xPYsS50FQdJHgETyQrQSjkWR8htxxKN7UtWTWK0DehrZSRvSRGJwgVx4dWF4DTh4BtaT5yY/iHl48FLx5ccHhWqfaHk7K8ZE6wum0cBupF4gaq1KnDpeRX+fEAPED6GpEPABZthrZgx1CLzj4mmCGfMa3QD1Q+2YZvKtwo64PbshdUt2SLk2AMxeBrzDBFHAVk7BSiZJ/SxXD4BJpChj/jXICKZGTKICHWoRkhVolS3YnbNoxsHD2W4CV9aW4BSQrARIFsARW1UnYxq/sqwL4aHrjNPfA9Xml9ffYsmoCDslHVmESrvQCWvbtUALE43d6KOBCgCM1QHh6GO9bpTj4EyFK4paDcOuStsNCSVVRdnHLoTSpJZomH63Z85b2/fOvffv2No7LrRpzeZHQGSMsXix6YfLwujFSF4DFrpxEga0UbxTsSgQcGDoi4xfzCQa2QfwSMQAMf6L/2dcjN896BSgsaV3OYhm0EiL7GtFmxNelKKR7O0dqOuEHH9W94Jbw1yPwy1sLT77hUrtjLKkABkKYQECHKCZPHT2CwSvhs6wbwVAAOQBObxB+v6h6avse+D1+7s6X9V8xQnPImlk2sf3xkfesGnrgxb7fpaltww6EiHELyg+DtWASbKqWSOk6RIMhJVNKOGsoACF3xgkf+O4Un5617NixjoFZVtT5XrJkQ0cRI4wSlC6hADJlq3J8p++lN4OLP+p7eqsKvr248NDbqUKXRvIHZEVqiQTQ2TQsLUDF3IE1Xi+AMCwBnfoh787+degIFtzVsYFVe8GSWTax66XYBZm2BaV1mx3SINgI/dsPc71jJG+AWTxK4tQTBE6HRLN8lN0bIdsEvjssEGH4gcDdj3VsmXMtyMqtXTwjDJEKG2uc3UP46hpwwmB0zZ2Nu9vGPtoWaWgJqprhJnV57dPzxdEox8eoP4CZRyVMVr89nkcwmEpnawjDdCuTkQncO5Fa3NzNyYN+4hiKlcP7T124zctjL01+Z35+RZtNGAIL7ydJHkwjI9yME42fifR4NP0OYgFossuGISRW/iCamR0GJ98+8VY9/OSaUIC1d3VkMHxvLEWkCkCInxiXq1gUOQ4L5NN1p9uvrOPG5UpbH9yQpZw+mSaNR0l1LlbhEEKFkVQyACDiABpOIMkwSkCKWOwkt+EnoSWLFT2ZZQMvH4UfXuyarxzTXKlyQ9Ca5SOw+B9EjWAAWIFECkFRCWTaByGebaT/F6QQc04Icpd2d8UBqFkvj+zx/5rxNIdIijfxQDHyUE4lBExWY3DrA+OOq3V/GKplF9fsdirDOu7vKSQHH0/hxox9N15woYFV8RukCyB8A5KVxFUrR8EltIa23DvIXOqauUurXl6o0IiI+CCYXlajJE3OEEsQNrh8RrqZhJ4REia6+AnIK2l5eNbnAOLyZhV8zynWTuFDkf3LUAAsg8J6NU4Yh7xNbRuu5j0eOA3fdksVPU7ZR+4vOYeWnZNVKPsofyBREmYUryb4BVGiCA7VB25+FIrWtT98Scd4faPszu6DdISpsyaB8Wp0UchG+btM+Q62eG0fvjeyPUTB5emCpeurs+ZcK1I7BNelq1UDCAaROgCJIl4kzpUjwClB8KztPHA1NRqvvXZ7ewHnqfdxchAcim5wDYJUAYwaPHuCdj2NDYQ4ghIAmzABbgHbyHSOLr29ct2hynfX8SfCwp3hTHYxYghB4NAJJM5mHA2k1c8pxvdUAahy4L05c8t7dr88+q9zriXJXl5b7RDHKdKFFTCEZEErb9n8CDiUupETdVfHD4hLfz98dsO97c8wntawzYP7ehQ41WAtv6uzyNkGEnQrCIAN27mQeN4HDqFcL9pc+2DXBPz3c+BpgE8f74Af5q7uPZYqh4FTQpAiTAGrGOwimVoCAvRgXkDRiVPIkoQQECJM4cbGw4MAn72mFEAtbX3GJY2DS6bMFtT2ZFLrT8EWVm7XSu6sX3S17xN7/2WvrH+Z5YfJ/m8TtMTqJ0RVSZvWcGK6VYjQGn+EazH96x0Cp9AVySpo7slb1bCrqLR2hXdN9UZxdesBTqkfsYljGlEoNQIWhMlJ7b5OPH1k9qaoMcMx1AhwhL2M0A/g5IGJ5w5A6pxrTbxrmgvS+FHSmg3jXMzT/wHz2iQECgM2LMpZUXXsqvLW49nEvYP/kLvkxHGnOKChz4LgDII36BSSvZjE6BoZrOGkYZx+Tvm5HDWqdkOklNshTwGLI6E406p6zmE8awZxxKj2wesrQHIoaeIQKCuanp31+f/3kgd3h36b5mmcyEDUi0fzpsPvlRBYvBpp84bhFMdXTe5/B9yz4X4beuEHGd7aNidh3dI9GBsv2BU9UXkbj9XjtXcXrto9r+hFPG8reVeJmRGCqjqhzuF26ZKCkOZpja3a3JI951qUsnr4u+zismrWM65joYSFZLSixAJYjdo/0ip1aX31weMzq6//sGX51tZiF9/id+NKFKLAeA1oWKGrnuzNEq3gYS5Yv3gRBbhQuZsYry7SgCmgKWCnMKpn5VeUv3IIbppzrcp/PtG6zZbTE8RGSKgA6OAgM5iEU1jCxEdhgTwQXXtn86wIcdqH4Dph2emDTPZwzOlFHmMAmHwNkjFjJ4MRrxsVuO9HAc7pVHJhBbChBfDGgFU1cOQ0T+49qqXNuZblWD18d0Fhx4hV8hOWDaFcIzMI412DbuUSxoFf1vrWbOlceeA4fG9hYXMThzUGSGfDSVFpTQMqAe2+Eb2IAlxOlbGBPCroK+mkFxG/oulgG3wMThRRS9teJnG1SCedEh4osEJYL9IUpEk9gYdfHF45a5JZW88oDr4rluqlressJGdgsIIJchclnvr76+Zx6VI3DDEzigHYnIHIxh1NzjkfB1mypSY7TRkMI5efNcq0aHPEINiwkZEcIPmBdKWi944H2n4xG+55XyV8ZZ5S1ZBKCkA0Uo30LgW4YKGJ/h7j4q1mEkPQIFUJQWZhS3lZ8+UdSjHrpLIFri9a13LEyfdppMwKHR00oYS4GaIQMZIyhCnIWdp48kjFpWvoPgrZdn/H79Kl8hFOGqKpYUk3FMDA6S/U0OmCncjeSzGm9S+Uw+CWRsCdWza4bWf7/5vzcZLjFfDvqVL1EIM9a+X4A4co08VoZEgo2FndULS2/p2uiavvDyBUvPO5oVLGUx2i7dnirWviyRp95gowDUk8NyLQpvEPAuAS66eeeGFyyTWT9Hk/L1NeW/ckp/aT2jpKsdLONmc2XopLiIE7szWybFP5ejxe7YO69uW+0Poh+FzOitrdnDRMsHurUScYtwSJvVvWEiOxui8U+yeyjPEeCVFS1MrKIxq/pvn+rlkAjH0o8ujzfb/jsl4ddipTYBNCYPdQ2jNpE2eYScx9Y519mtw28vpR7V+ucOI//fgrLflFG4+/uf2R4T8dPH55NLTXD8FPUjIOdTiVcfh17iRYvZQn4FQpQQShW+TzWbxRSPGGaa6DZPHi4BHQLU8JkHOIWEOBsHIJsX8LqUTu1+Z5D799pP4ajvkvJa298PnbdlRt5YT2oIs4fjHKexf0hDPEGOXZ2OJEXFa7/1AN/OPlXu/V09F/sgnPt3JqQ8whtIXT1Zo+teTMo1t2dia9H2i1pgY+9cRfgqxbqRt2FAZJ40U2P37+QDzVrZPwLYUUo9BSNAInT+NC2GXNUAz6O0gRtyJKKg3AoiXVJ/YeDf9ozsdd8MV7ljWVp8vDgH3zSYMILw0LafEE0NIsyQ9p0oCeWXDo1OGqy1sVr5yG7zvkkyOMPGZw6wKQmjcBLr5yYvMfG3ZV178/9LFwa3WpTWjUHd5x+F3uEDi8Rk8+g88X79jFxsmeCWqXgSFIcd6fcd4BQszCGKTln+rd+nBd0pxPity5s9vCZZ4adgiTpD1qEraGVyJG9k2nnTgwWSRh84f+mGd59Rt/fSvww/d7naYB+MLiojPVHO/TOQN5RHPr4MOQmjsQ4Qubyrfe0/CrGW8F5XCjd331LpfcHLLLEwTHcAjximBIjESTRplm9lIMU5/I84saaWiB95GhtnVu3tl068fO6buU7HxqfItLbPfZ8nSYq2ik8HF6dzBybItMz/5xCwN6hnC0Yf9b8NP3e50n9kYL0z19ITbLTydFBaMiJwRMzgiwOeVjj+wNLG2aIeKG9QzeksbX8UQy2qHTlziLgEm0aaUETzT3pFcfqf/TKP0Lu3kKOjj5GLjF/ujSbXXqnE+iIMTp3dD6jFUc0wnAgoxhUsJNX6JFjhDuABZHOKQIoV1l5rfUlGxrnl/ZPfOzbggBtLiyOlUdBpZ02IiSfgL0VLAocN4pcCgtAc+qumefez1280xW4tZ7un+SXdxQwcm9MZs0Qcq9kf2MYBHd5yPgkEPkKz6XNUH0oCEfrn481i5zWfOrJ1ov/xzCa16O1sGXFy+t2W/3dAKL9YPGHopwMXbDIJU5cuRsrbyIBMmB8OKiujfu2T38m64ZOnLr7qmysELDqF3yQQoezoATM70WUMCTNpDaVT2prG3YcbQBvnGpzxz0wZf4lacf4eSRGFLdUVHnCkZtHzqBRAFo61Y8qgUjA3oGAS0SxSPsFhV3v7HtoQlrRQf8/QcV8l5z8pcD/n9dmHekPU0e1ZIzafmVQ4334aGdN9A/wLo5i6JD2hIANx4jl31iauOOuuUz8uIBPr10a7TMwodJXR6md9FsO4g/QKuHXSqWsA9DWt6YzvGVtfvfhh9f6nN7J+GL2Us7m52IFIoB0sEs0UVEoZaApo6R3esnh1DZ5Hi5OYCDn4BUvm0sgz9Rec8Tg6uaRuDLn0gleObVwZ8vKqo6zoh9GudFvpyPvjSZFmtgjhyLI7GahhRpklNFguCWOv3iurKdTx8M3VLTe2G+/MlauCFracdJ7FWUHK/0xePjSIu5GKWBE4BGAxsfBZfkhwXeuuYtO9sv6SDe/l/dNwsrqspcYmMEawCtop7oc8waYR8bL/aI10dgEowcEYNV0xFwC35webr9iws7+6Q11ffevatjblkz3PCJUoJH3xi9xcIfaLLJwzoWX2AoiMmieH8fUqat+iFJGicdui0EP8Cys0GYu+jkqHd909E9B2FRVf/Z0A73874++LuVt/fssisjQYsUOed0MMT20dcgYaiikbN6WGzlku0nViZNaejZewwu2c6GOIbrKvYsLO4hp3TEm2DaDVo3MovOCQvVCDmHiFFoDyBbLiaBJsFVMA5p+UPAZNdNyaua3jl4En70iVEA3AOfOqT9y7yiutfsHuTlhSFZCZLyKVQAStn2E+cKD1eMAzA4oQ485dvTC5zQ5E/Lq+xZvLy2kl/dcpBf1vh2Zl5DlzO3K4rNqlKEeCdu/Wy/fUUjPf+RhoUKhYc2OdGj5xGRnIQ0pX5EWF254+k3Ij/r779w29W9R+DrypqybWlqw4C7IESIL9jRA8/qsZGqaCNCUHRg1RgpkaNMIY2UfqG/gBFFijQJbD72BhiC+Wp154rNJ5Zf7LofO6lohW8sLDjxtjWnOcLkA2Hi4Pl5cxePQZqqk6aQ8QbN8cMQSHYxcVwcnr7hN0aAAi6kSQVl4M40f49IniU3CO68MDB8O9iy354qvafjvspO+NHFUMQ7Hx+Xk3KqfRZ5ElLy4kffGEUektEvSaQnlmHVDz2nOJA4+AnP9/mtPAkWKQbp+SPAZb/QcLzuYwwPv5d0DsF1+etrdriFsbBLnAJOnCAsW9KXj3T9oi+QEDKwGSR20TKaM9qNI2SxvDpeaGGJnzUswnvQtd6ryaOeOICJ9YZJZxCn6gPGMxBJE3vGhOX95crqpsfyVlevXr7p2K0r7ng7ffX2ilTv7afSl9zVlr36zyPPp+a1+R3CUJjlJ2J4PhDW9hO0U6XRAFYW0b6JWqJRFG0VEwM8UczBRyBdao6KK197s7odvviJcwxxld15T4dbLKhpSc3qjbiN07yT5AjMxWJOL3b8CBlNIeONpuP9dXSjdXuMHMuWjMeyeeOHMkVnNEgzSPxbbPWqxnsc6vQ0LqR8Y8GLOEry97bcwRgjjUVsnsGgW+j1z/NUTeStrHjk4ed9v1x62xlFLml+dV5hWw8nt47Z+ZYpVugKOYQ+jckd0B3CCCmTY/lR3Z4zFHXm9gZTc9umFkot/XmrT/+pvmcWtoD9KGUI4LqlG87ssi+q0vHUbVw1FjI0A1vXSLGlw+iwNb2y10asQ8QYYZrOjZ8NeJFBunORrF0UnEbmL4k3GlbztPOpMz8KXB7N/LmKgChGRkEE5kkN408+P75xCM6CVVj3gD2Cy1vgxy8cCd5671MdWzZtr3xqxeay14pKj72ev/bo68s2vfPqlh2Nj9//dH/pW6fgDw2f9Ik/J4yrh+vX/akhJ3tZ3QEH3+pzkC3BODNPwNZzeBhz1Dhk0mirEj9PGFu0YbmX8X+0P5A+rVfQ9J/PdhPFEBFT1vGyrRQCV8cSp5aS842xtFwJgl0dBU5uCIir64/esbPTMVNc3+ApfGr6MGf7YsBLL3zmoT0TJRlyRZs9qxnmFwaIo8d5g5AiTJB6Ozx2haxkEt/r9OhVBVu80WPo42QOCtbQYZPfPYjDRs7yC5HeAXioo8UbBq4QyBGs8Xb1XP4QWHOOjt9+f0upOUMfkTyxd/wH+WsrCrOKm8odnsYIg/swaROPZ/DGzp4zLFF/wEYm7GwISMJAw3m0ie/m6uHfJYm03WyyN0qGBc8RxqJOLAJVx8Gp9sWcSsu4uK7xrmffivysyVy9H71UD8CXtj88spXNKm9mctrDpK28PEWPZI83jzZWOKMCOVHLxocNvgHG37QhE+npP20Qggrh58fIyd4pkg8suX5IRXwgsx9S+crOFXeceWHfqchPzFm4+tHC35xsgG+svbPHJa6ovM2zovZ4qnqmxym1+7AnD0doWCGC1ZNmFeSYepqooThBcFrixhhY3Cli4+dB3S40+9O89SOLi+obpOUtu4rWdqpP7gn9zNyvZ7E0jcA/PP1aMGv51tY3FhZUVHO5pzocWeWDbPaZSVt2bcCeXRdhcuqjbG4Dfg3bs+t89pyaCVtOzaA9p6abya3qXOitalu1tfON+3dP3vZmBfwCPq5EzY87ltDTA9cfK4t+Z88L/T+/56GWpM3bG7g1W05nLNt4fOGKTe8sLLn91PyNd9W47vqvlpSdT/b+Zs++8P85Wgn/2NoJN3ziWDqmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiiimmmGKKKaaYYooppphiysdK/j+Ou7cMDEUy4AAAAABJRU5ErkJggg==",qwen:"data:image/png;base64,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",meta:"data:image/png;base64,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",tencent:"data:image/png;base64,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",moonshotai:"data:image/png;base64,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","x-ai":"data:image/png;base64,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","z-ai":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUtLS3///8RERHW1tbMzMzT09MNDQ0nJyfg4OBbW1sAAAAjIyMqKiobGxseHh4GBgbu7u6kpKQWFhZhYWH5+flUVFTo6Oiampp8fHyLi4ttbW2rq6u0tLS/v7/GxsaSkpJISEg6OjozfgsIAAADfUlEQVR4nO2b63KjMAyFaS6GmDsUQm5teP+XXGgy2cQYS5GF2c5yfnY06CuO7SNhex8zy1sAFoAFQPvXLFizK8iQAFlepqlYsUukssyHECpA1sjY9yaSH8tjbQbIZThV9ptCuTcBlKtp0/cqduMAVTJ9fs9LrmMARyf5O4JSD3ASbvJ73mqvA8ikq/yeJ2sNQDPx7/9Z4XEI4PIFdK8gGwCcYpcAcT4AKCdb/3TyqwGA0xHoxkAFyFK3ACJQANbOFoGbVlsFYOtgF3gB2CwAC8AvAIiFwHjT2xLuA1HqTocAiM9BgHHnl54gLM2hwSF8G+ARAqjqNpGo+DQHZerj+QD2RRcrv4Coq7rVsQEE/SaWNEDU92CvZwNoo24AoAJzPdxquQCa3kjLAIjyo6kANv2/VuyBKJ3d5wH4TKJnczOii85q8ACU/eQW+rL7ocEMRANsxx55V73rX604A2GV1mwiAKJqZ1Sb9k9+cvh65YUuP2oviHyjfn7ZUQjkD0bMLtduKKFxaoczkBMgPgD5D2PlDg+A3wL5N6PVBg+AVBs+in7WiQkBVifgBZTjBTcHQLgbS3zX2VDsMADAJsRUbjIAvG9CeAFgE6JfArkAKCaEFQA0IdHoDGQBAE1IA/QcLQFoJoQRICWZED4AoglhA4BNCPwwGwCyCeECIJsQJgC6CeEBsDAhPACgCYkRA2ABYGNCOABAE4L97EIEAE1Ije15EwHsTIg9gKUJsQawNSHWAJROCCcAqRPCCOBfxxLfBZoQSwDQhLz1zeV9AAYTYgVA7YRwAbCYEBsAFhNiAQCaEKgMsAQAZyDOhNABLDohLABcJoQKYNUJYQDgMyFEAD4TQgNgNCEkAE4TQgJAdkIwjW0SAK4T4qetubVfDQiQADgTklTAQmX6HmMGQH2OAfs13VJNBECZEHCdoAPgOiHyAuYnAuBMCLhO0AFQJgRcJ+gAuE6IXE8FgOuEFN+Y/CQAgTEh4DpBBwgPdWBSfexNSPxlDHroTDg/EAqzbntwDETdNeyb/YpjPAvAAuAWYPYjnbMfap39WO/8B5tnP9o9++H22Y/3O50Hf1/ATFc88g8dwOyXXLo6w8lMSF4qqVdXfXQwCuK13FFs/Smd+qpXqnS8XF92a9RyV3fdr5KoI9VvSghZIa773VTz3HF8lb7Q+EevfC4AC8D/BPAHa4RHCrR9NVoAAAAASUVORK5CYII=",mistralai:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABaCAYAAABwm16CAAACCUlEQVR42u3cvWoUYRQG4AOZCfgTswgq2nknuYQpbYIKVoIwlxBWMNhtaWebbheNvZ12lm63GtAVG8vgZuGIF2C1xzAsz4G3Hd5z5qm/iKLJefQ5jyzILLZ0ch6TohsdDXE5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2CsC76PM0cuO8jfOcxqIgJ2W7TeNVSac38avkRqdDBDCNPqeRA8r7wt1mA9sNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BIAvGz7PG5yMHnRnOe4XZTk77eGtNtxM0AA47bPcZtyKQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/7N+uNdfHO7lxnl8/WM+bw42zcWzKzV9Dvdy/fTqUUWn9ZNrJ0Wdhgdg1Y36VbefBSl5Jex3Nzoo6pOr7kZXc6P9SVEnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgH/P2W68rsj3Wzsfft7fzU3z4167qOjz7ebOZNWNHlVkebuZVHRa3m0+V9xoeaf5VPLf2ngQX9vILU3ZK2Ff2pht443O2pgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADbB+AP0YSvXcKv+0YAAAAASUVORK5CYII=",xiaomi:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAllBMVEX/////aQD/XwD/ZgD/YgD/4tP/bSD/5tr/wZ7/WQD/VgD/+fT/3dD/+PD/zrT/nWv/ilr/ro3/oXn/7eD//vr/bgD/8uj/1MD/eDD/r4T/mGL/j1r/pHX/t4//dRH/gkX/nmX/iEL/2sH/zqz/bRP/jlP/fyv/6NX/gD3/1bn/xKj/tJT/4Mn/fUj/kE3/qYb/TAD/kGTtrpFrAAAEKElEQVR4nO2a22KiMBBAJQRLoMquIAiiaFW8rNvt/v/PLfcqFDKBofuS0ydb6BxzGSYkk4lEIpFIJBKJpC+O+YDjON8V17TfrvrGDy0rCNYVQWCF/kY/3M8jirgvc/99S1kCITRFrUg/EZL+iS73oae56NGdqx8ds5hKN4kMoUoUHmaI0U1tpxiEF/pJgzASeCZS/LeTIhS9gNL1ASO8FjMqHj1XMOLr4Pj+sW/4vBX8Yf2g7dmA8ClEeRkQ/zwd8vWLRpj274Y5HR4/mRFG37F4pj3G/lcGyrxXfO2IEz9tg3sfgRij/XPopUduDoeO/0fIXji+hhg+gQlPhS1eB6SoK8FOuBqo8ZNO0IXizyLcBkiagAqVKh52/GQUCKWjPb4APQmUKCZBj58g8FTSMXNACfHhAuEYLUBjcHx7hfUUeIKBU4E2SnzFAGdDfZQxKDAIdviTMIUG0FzUeBDTVkhC29X1jlQj6CBQ6rfeXlvwvNuvIGbGo4NaXK0t6j05BWYCtzEEtO4bnPvioXqtwjSyifoKE7g30hBHIMGOqpvaBSiwNmw+ivkCk8mC8QWAj+RmIoYIOGUvdAgA5+FGdAzkeIQnQHajCri/VV4LvMMEwkYeKgXcPz8f2dw87SG3bBhPAPY4cqxWgfkHeYaqf73qxrmBI2AG7QLNUpV+3MobXV4LqEuYwFpEQFE/Vz158u0QUEACs1PjadwloJAqvawoRwBWGbsRT0AtHze5QDW7Y64AqC61LxwBGi1yrGn2sVr3RRwBheAIVJWN+SO9kq7KO9cER6BZEdYEyk7PBT7H9u4/CVRj25ICUgBJgDsNRxZwRxMAZkJuKh5bwFyPJwCJz68H+gvA6gFnPIEtSKCjJhwoAH1F4bdWxUMFgC9s28vyoQIBTKB9ZTRQgIQwgetYAtC14dtoLXCbgLB5As8lmcA09CYgnPrLlerFwiH7l9Vb31lNIE8gx1JgUxc4gtaYCdt6LqblUqxoypL8OrVaqOUfa1d/fo+LDRRovqpWi5/y49On8q9qy9XVr9fQXdRmIkAB/p5whN2CFPiOwct0nHfF0CHw1foYAeDaOKMxgTCgFlzgPIoAMA1lIG7blqhC27cjTESRHZukMsbfM4Hvl2T42KOAnoTiTxzuiSVBjuAkUIA8CpjQCEjBTUYUWJA/YjPEThDKASVzvCYQ27iu2GCdISDAcryBj9MGzO99ytE3EMYBA28XfoE+6ChbCoUuBlrQlsNSItv2O0X1iaMf+6ckcgwRDrlqFuuVElTC3qELAQ72ZtXcCeZEp+QSiqb/DlwvWBqMf6Y2i518daYEc/SjvWc9PK2KrfHsMPFT0OxwcXrcWFlFoX7GDl4ws7X5zbf28XZZbN1XqzK63Mb7na97mo15orhL5plvO1sukUgkEolEgs0/6kBRBFgQsBAAAAAASUVORK5CYII="},Yu=(n,e)=>{let t=Af[n];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t.view}">${e?"":t.defs||""}<path fill-rule="evenodd" fill="${e||t.fill}" d="${t.d}"/></svg>`},T_=n=>Af[n]?Yu(n):xm[n]?`<img alt="" src="${xm[n]}">`:`<span style="font-weight:800;font-size:12px">${n.slice(0,2).toUpperCase()}</span>`,Ku=(n,e)=>Promise.race([n,new Promise(t=>setTimeout(()=>t(null),e))]),Ja={},Pu=async(n,e,t)=>{let i=new Image(256,256);i.plate=t,Ja[n]=i,await Ku(new Promise(s=>{i.onload=i.onerror=s,i.src=e}),3e3)},Ip=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n.replace("<svg ",'<svg width="256" height="256" ')),Dp=n=>fetch(n).then(e=>e.ok?e.json():null).catch(()=>null),C_="",[Lp,Up,R_,qCache]=await Promise.all([Ku(Dp("https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1"),8500),Ku(Dp("https://api.llama.fi/overview/dexs?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true&dataType=dailyVolume"),8500),Ku(Dp("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),8500),Dp("./assets/data/exchanges.json?v=20261012-2")]),vm={},Ju=null;var qC0=Array.isArray(Lp)?Lp:[],qD0=Up?.protocols||Up?.data?.protocols||[],qC=[...(qCache?.cex||[]).map(n=>({...n,...qC0.find(e=>e.id===n.id)})),...qC0.filter(n=>!(qCache?.cex||[]).some(e=>e.id===n.id))],qD=[...qD0,...(qCache?.dex||[]).filter(n=>!qD0.some(e=>e.slug===n.slug))],qB=Number(R_?.bitcoin?.usd)||Number(qCache?.btcUsd)||0,qLiveC=qC0.length>0&&Number(R_?.bitcoin?.usd)>0,qLiveD=qD0.length>0,qLC=0,qLD=0,qNorm=n=>String(n||"").toLowerCase().replace(/[^a-z0-9]/g,""),qBlob=n=>new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsDataURL(n)}),qLocal={binance:"./assets/exchanges/binance.svg",coinbase:"./assets/exchanges/coinbase.svg",okx:"./assets/exchanges/okx.svg",bybit:"./assets/exchanges/bybit.svg",kraken:"./assets/exchanges/kraken.svg",bitget:"./assets/exchanges/bitget.svg",gate:"./assets/exchanges/gate.svg",uniswap:"./assets/exchanges/uniswap.svg",jupiter:"./assets/exchanges/jupiter.webp",pancakeswap:"./assets/exchanges/pancakeswap.svg",raydium:"./assets/exchanges/raydium.webp",lighter:"./assets/exchanges/lighter.svg?v=official-square-2",curve:"./assets/exchanges/curve.webp",hyperliquid:"./assets/exchanges/hyperliquid.webp"},qLogo=async n=>{let e=qLocal[n.id]||n.logo;try{e&&(e=await Ku(fetch(e).then(t=>t.ok?t.blob():Promise.reject()).then(qBlob),2500))}catch{e=null}e||(e=Ip('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" rx="64" fill="'+n.color+'"/><text x="128" y="148" text-anchor="middle" font-family="Arial,sans-serif" font-size="86" font-weight="700" fill="white">'+n.name.slice(0,2).toUpperCase()+'</text></svg>'));xm[n.id]=e,await Pu(n.id,e),await Pu(n.id+"-w",e),Ja[n.id].plate=!0,Ja[n.id+"-w"].plate=!0};var qDexParent={uniswap:"parent#uniswap",jupiter:"parent#jupiter",pancakeswap:"parent#pancakeswap",raydium:"parent#raydium",lighter:"parent#lighter",curve:"parent#curve-finance",hyperliquid:"parent#hyperliquid"},qFinite=n=>Number.isFinite(Number(n))?Number(n):0,qDexAggregate=n=>{let e=qD.filter(t=>t.parentProtocol===qDexParent[n.id]);if(!e.length)e=qD.filter(t=>n.sourceIds.includes(t.slug));let t=s=>e.reduce((r,a)=>r+qFinite(a[s]),0),i=[...new Set(e.filter(s=>qFinite(s.total24h)>0).flatMap(s=>s.chains||[]))],s=t("total24h"),r=t("total48hto24h"),a=t("total7d"),o=t("total30d");return{children:e,total24h:s,total48hto24h:r,total7d:a,total30d:o,change_1d:r>0?(s/r-1)*100:null,chains:i,logo:e.find(l=>l.logo)?.logo||null,sourceId:qDexParent[n.id],live:e.some(l=>qD0.some(c=>c.slug===l.slug))}};Bt.forEach(n=>{let e,t,i,s,r,a,l;if(n.kind==="CEX"){e=qC.find(o=>n.sourceIds.includes(o.id)),t=qFinite(e?.trade_volume_24h_btc)*qB,i=null,s=e?.trust_score!=null?"Trust "+e.trust_score+"/10":"Trust score unavailable",r=e?.year_established&&e?.country?e.year_established+" · "+e.country:e?.country||e?.year_established||"Metadata unavailable",a="established · country",n.source="CoinGecko",n.feedMode=qLiveC&&qC0.some(o=>n.sourceIds.includes(o.id))?"live":"snapshot",n.modelId=e?.id||n.id,n.trustRank=e?.trust_score_rank||null,l=(e?.volume_history_btc||[]).map(([o,c])=>[qFinite(c)*qB,new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})+" 24h volume"]).filter(([o])=>o>0);t>0&&l.push([t,"current 24h volume"]),n.trend=l.map(([o])=>o),n.trendLabels=l.map(([,o])=>o)}else{e=qDexAggregate(n),t=e.total24h,i=e.change_1d,s=e.chains.length+(e.chains.length===1?" chain":" chains"),r=e.chains.length?e.chains.slice(0,2).join(", ")+(e.chains.length>2?" +"+(e.chains.length-2):""):"Networks unavailable",a="networks reporting",n.source="DefiLlama",n.feedMode=e.live?"live":"snapshot",n.modelId=e.sourceId||n.id;let o=[[e.total30d/30,"30-day daily average"],[e.total7d/7,"7-day daily average"],[e.total48hto24h,"previous 24h volume"],[e.total24h,"current 24h volume"]].filter(([l])=>Number.isFinite(l)&&l>0);n.trend=o.map(([l])=>l),n.trendLabels=o.map(([,l])=>l)}n.available=Number.isFinite(t)&&t>0,n.tokens=n.available?t:1,n.change24h=Number.isFinite(i)?i:null,n.growth=n.change24h||0,n.model=n.kind==="CEX"?"Centralized Exchange":"Decentralized Exchange",n.input=n.available?t/1e6:0,n.output=0,n.context=s,n.detailValue=r,n.detailLabel=a,n.released=n.available?"Live feed":"Feed unavailable",n.mods=[n.kind,n.source],n.checks=n.kind==="CEX"?["Reported spot volume","Order-book venue","Custodial settlement"]:["Reported DEX volume","Public liquidity","On-chain settlement"],n.logo=e?.image||e?.logo||null,n.kind==="CEX"&&n.available?qLC++:n.kind==="DEX"&&n.available&&qLD++});for(let n of["CEX","DEX"]){let e=Bt.filter(t=>t.kind===n&&t.available).sort((t,i)=>i.tokens-t.tokens);e.forEach((t,i)=>{t.scopeRank=i+1,t.scopeTotal=e.length}),Bt.filter(t=>t.kind===n&&!t.available).forEach(t=>{t.scopeRank=null,t.scopeTotal=e.length})}Bt.sort((n,e)=>Number(e.available)-Number(n.available)||e.tokens-n.tokens),Bt.forEach((n,e)=>{n.rank=e+1,n.authors=Bt.filter(t=>t.available).length||Bt.length}),await Promise.all(Bt.map(qLogo)),Bt.forEach(n=>n.crowd=n.available?(n.tokens/Math.max(...Bt.map(e=>e.available?e.tokens:0),1))**.7:.16);var qCLC=Bt.filter(n=>n.kind==="CEX"&&n.feedMode==="live").length,qLDC=Bt.filter(n=>n.kind==="DEX"&&n.feedMode==="live").length,Qu={models:qLC===7?(qCLC===7?"7/7 coingecko live":qCLC?qCLC+"/7 live · "+(7-qCLC)+"/7 verified snapshot":"7/7 coingecko verified snapshot"):qLC?qLC+"/7 coingecko available":"coingecko unavailable",usage:qLD===7?(qLDC===7?"7/7 defillama live":qLDC?qLDC+"/7 live · "+(7-qLDC)+"/7 verified snapshot":"7/7 defillama verified snapshot"):qLD?qLD+"/7 defillama available":"defillama unavailable",updated:qCLC||qLDC?new Date().toISOString():qCache?.updatedAt||new Date().toISOString()},He=n=>document.querySelector(n),zn=He("#world"),ti=new qr;ti.background=new Le("#333b49"),ti.fog=new Xr("#454d5d",.0165);var Ht=new Yt(30,1,.5,160),_t;try{_t=new xc({antialias:!1,powerPreference:"high-performance",stencil:!1})}catch(n){throw He("#loading").textContent="This miniature world needs WebGL. Please try a browser with graphics acceleration enabled.",n}var ym=Math.min(devicePixelRatio,1.5),Ki=ym;_t.setPixelRatio(Ki),_t.info.autoReset=!1,_t.shadowMap.enabled=!0,_t.shadowMap.type=gs,_t.shadowMap.autoUpdate=!1,_t.toneMapping=vs,_t.toneMappingExposure=1.12,zn.appendChild(_t.domElement);var Fc=new fa(10729178,5654592,.82);ti.add(Fc);var br={night:1},_n=new pa(16765606,1.25);_n.castShadow=!0,_n.shadow.mapSize.set(2048,2048),Object.assign(_n.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),_n.shadow.normalBias=.03,_n.shadow.bias=-2e-4,_n.shadow.radius=2,ti.add(_n,_n.target);var Ci=new Xn;ti.add(Ci);var Sr=10,xr={pos:{value:Array.from({length:Sr},()=>new dt)},col:{value:Array.from({length:Sr},()=>new L)}},I_=`uniform vec4 uFakePos[${Sr}];uniform vec3 uFakeCol[${Sr}];uniform float uSat;uniform float uLift;`,D_=`#include <lights_fragment_end>
{vec3 fp=-vViewPosition;for(int i=0;i<${Sr};i++){vec3 d=uFakePos[i].xyz-fp;float dd=dot(d,d);float a=max(0.,1.-dd*uFakePos[i].w);a*=a;float n=dot(normal,d)*inversesqrt(dd+1e-4);reflectedLight.directDiffuse+=uFakeCol[i]*(a*(max(n,0.)*.8+.2))*material.diffuseContribution;}
reflectedLight.directDiffuse+=uLift*vec3(1.,.74,.5)*material.diffuseContribution;}`,L_=`outgoingLight=mix(vec3(dot(outgoingLight,vec3(.2126,.7152,.0722)))*vec3(.93,.96,1.04),outgoingLight,uSat);
#include <opaque_fragment>`,U_=0,eo=(n=1,e=0)=>({id:U_++,sat:{value:n},lift:{value:e}}),bf=eo(1,0),Iu=eo(.3,0);function Ps(n,e,t){return n.onBeforeCompile=i=>{Object.assign(i.uniforms,{uFakePos:xr.pos,uFakeCol:xr.col,uSat:e.sat,uLift:e.lift}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
`+I_).replace("#include <lights_fragment_end>",D_).replace("#include <opaque_fragment>",L_),t?.(i)},n.customProgramCacheKey=()=>"mall"+(t?t.key:""),n}var Du=new Map;function it(n,e={},t=bf){let i=n+Object.entries(e).map(([s,r])=>s+":"+(r?.uuid??r)).join()+"|"+t.id;return Du.has(i)||Du.set(i,Ps(new Nn({color:n,roughness:.82,...e}),t)),Du.get(i)}var _m=(n,e)=>new en({color:new Le(n).multiplyScalar(e),fog:!1}),Zu=[];function Mm(n,e,t,i,s=-1){Zu.push({p:n.clone(),c:new Le(e),r:t,i,slot:s,score:0})}var Tc=new L;function N_(n,e){for(let i of Zu){i.k=i.i*(i.slot>=0?e[i.slot]*(.45+.55*br.night):br.night);let s=i.p.distanceToSquared(n);i.score=i.k/(1+s*.012)}let t=Zu.slice().sort((i,s)=>s.score-i.score);for(let i=0;i<Sr;i++){let s=t[i];if(!s||s.score<.02){xr.col.value[i].set(0,0,0),xr.pos.value[i].set(0,-999,0,1);continue}Tc.copy(s.p).applyMatrix4(Ht.matrixWorldInverse),xr.pos.value[i].set(Tc.x,Tc.y,Tc.z,1/(s.r*s.r)),xr.col.value[i].set(s.c.r*s.k,s.c.g*s.k,s.c.b*s.k)}}var Mt=new et,bi=new bn,Am=new gn,Qi=new L,es=new L,Np=new Le,to=new xn(1,1,1).toNonIndexed(),F_=new Sn(1,1,1,12).toNonIndexed(),bm=new Sn(1,1,1,6).toNonIndexed(),Sf=new oa(1,0),Fp=new jr(1,1,12).toNonIndexed(),oo=()=>new ms(1,1).toNonIndexed(),Lu=new Map,$c=n=>n.index?n.toNonIndexed():n;function B_(n,e,t,i){let s=[n,e,t,i].join();return Lu.has(s)||Lu.set(s,$c(new Ec(n,e,t,2,i))),Lu.get(s)}var Hc=class{constructor(){this.map=new Map}add(e,t,i,s,r,a=1,o=1,l=1,c=0,h=0,d=0){Mt.compose(Qi.set(i,s,r),bi.setFromEuler(Am.set(c,h,d,"YXZ")),es.set(a,o,l));let f=t.clone().applyMatrix4(Mt);return this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(f),this}box(e,t,i,s,r,a,o,l={}){return l.r?this.add(e,B_(r,a,o,l.r),t,i,s,1,1,1,l.rx,l.ry,l.rz):this.add(e,to,t,i,s,r,a,o,l.rx,l.ry,l.rz)}cyl(e,t,i,s,r,a,o={}){return this.add(e,o.seg6?bm:F_,t,i,s,r,a,r,o.rx,o.ry,o.rz)}crown(e,t,i,s,r,a,o,l=0){return this.add(e,Sf,t,i,s,r,a,o,0,l,0)}panel(e,t,i,s,r,a,o,l=0,c=0){let h=oo(),d=h.attributes.uv;for(let f=0;f<d.count;f++)d.setXY(f,t[0]+d.getX(f)*(t[2]-t[0]),t[1]+d.getY(f)*(t[3]-t[1]));return this.add(e,h,i,s,r,a,o,1,c,l,0)}build(e,{cast:t=!0}={}){for(let[i,s]of this.map){let r=new vt(Yi(s,!1),i);s.forEach(a=>a.dispose()),r.castShadow=t&&!i.userData.noCast,r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.updateMatrix(),e.add(r)}this.map.clear()}};function on(n,e,t,i,s,{weight:r=600,color:a="#1d1d1f",align:o="left",base:l="alphabetic",spacing:c=0,max:h,fit:d}={}){let f=p=>`${r} ${p}px "DM Sans",Arial,sans-serif`;if(n.font=f(s),n.letterSpacing=c+"px",d&&h){let p=n.measureText(e).width;p>h&&(n.font=f(s*h/p))}n.fillStyle=a,n.textAlign=o,n.textBaseline=l,n.letterSpacing=c+"px",n.fillText(e,t,i,h),n.letterSpacing="0px"}function ka(n,e,t,i="#f4efe8",s="#d9d0c4"){n.fillStyle=i,n.fillRect(0,0,e,t);let r=n.createLinearGradient(0,0,0,t);r.addColorStop(0,"#ffffff18"),r.addColorStop(1,"#00000012"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle=s,n.lineWidth=6,n.strokeRect(3,3,e-6,t-6)}var wr=7.4,Ai=2*wr,Bc=11,Wc=wr*Math.SQRT2,no=[[0,0],[2*Ai,0],[2*Ai,2*Ai],[0,2*Ai]],Er=no.length*4,O_=[Ai,Ai],eh=n=>Math.PI/4+n*Math.PI/2,wf=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d");e.fillStyle="#cfc3b9",e.fillRect(0,0,256,256);for(let i=0;i<2;i++)for(let s=0;s<2;s++){let r=Math.random()*14-7;e.fillStyle=`rgb(${226+r},${214+r},${204+r})`,e.fillRect(i*128+3,s*128+3,122,122)}let t=new gi(n);return t.wrapS=t.wrapT=mn,t.colorSpace=Dt,t.anisotropy=8,t})();function z_(n,e,t){let i=new ds,s=-n/2,r=-e/2;return i.moveTo(s+t,r),i.lineTo(s+n-t,r),i.quadraticCurveTo(s+n,r,s+n,r+t),i.lineTo(s+n,r+e-t),i.quadraticCurveTo(s+n,r+e,s+n-t,r+e),i.lineTo(s+t,r+e),i.quadraticCurveTo(s,r+e,s,r+e-t),i.lineTo(s,r+t),i.quadraticCurveTo(s,r,s+t,r),i}function Qa(n,e,t){let i=new or(z_(n,n,e),{depth:t,bevelEnabled:!1,curveSegments:5});return i.rotateX(-Math.PI/2),i}function k_(n,e,t,i=Bc){n.add(t,Qa(i,1.3,.17),0,0,0),n.add(e,Qa(i-.36,1.15,.02),0,.17,0)}var rn=[],Za=[],Bp="https://x.com/scanworkdate",Op=new en,zp=["#ff4f9e","#35d0ff","#9dff3a","#ffb42e","#b36bff","#ff6a3d","#2ee6b0","#ffe14a","#4f7dff","#ff3b5c"],kp=(()=>{let n=document.createElement("canvas");n.width=1024,n.height=256;let e=n.getContext("2d");e.translate(512,128),e.textAlign="center",e.textBaseline="middle",e.letterSpacing="2px",e.wordSpacing="18px";let t="@SCANWORKDATE ON X",i=r=>`800 ${r}px "DM Sans",Arial,sans-serif`;e.font=i(132),e.font=i(Math.min(132,Math.floor(132*880/e.measureText(t).width))),e.shadowColor="#ffffffaa",e.shadowBlur=26,e.lineJoin="round",e.lineWidth=22,e.strokeStyle="#15161a",e.strokeText(t,0,4),e.shadowBlur=0,e.fillStyle="#ffffff",e.fillText(t,0,4);for(let[r,a]of[[-300,34],[-150,22],[40,40],[205,26],[330,30]])e.fillRect(r,40,6,a),e.beginPath(),e.arc(r+3,40+a,5,0,Math.PI*2),e.fill();let s=new gi(n);return s.colorSpace=Dt,s.anisotropy=8,s})(),V_=(n,e)=>Ps(new Nn({map:kp,color:n,alphaTest:.35,roughness:.8,emissive:n,emissiveMap:kp,emissiveIntensity:.4,polygonOffset:!0,polygonOffsetFactor:-2}),e),ju=11,G_=()=>(ju=ju*16807%2147483647)/2147483647;function Uu(n,e,t,i){let s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#ffe2a8"),s.addColorStop(.55,"#ffc27a"),s.addColorStop(1,"#c9773d"),n.fillStyle=s,n.fillRect(0,0,e,t);for(let r=0;r<7;r++){let a=40+r*e/7;n.fillStyle="#7a4f31",n.fillRect(a,t*.18,6,t*.62);for(let o=0;o<3;o++){let l=t*(.3+o*.18);n.fillStyle="#8a5b37",n.fillRect(a-6,l,e/7-24,7);for(let c=0;c<5;c++)n.fillStyle=["#fff3cf",i,"#b86b3f","#f0d39a","#6e5a45"][(c+r+o)%5],n.fillRect(a+2+c*((e/7-34)/5),l-24-(c*7+r)%3*5,(e/7-44)/5,24+(c*7+r)%3*5)}}for(let r=0;r<6;r++){let a=e*(r+.5)/6;n.fillStyle="#3b2d22",n.fillRect(a-1,0,2,t*.08),n.shadowColor="#fff6d0",n.shadowBlur=30,n.fillStyle="#fffbe8",n.beginPath(),n.ellipse(a,t*.09,16,8,0,0,Math.PI*2),n.fill(),n.shadowBlur=0}n.fillStyle="#6b4228",n.fillRect(0,t*.82,e,t*.18),n.fillStyle="#a8703f",n.fillRect(0,t*.8,e,10)}function Vp(n,e,t,i){n.fillStyle="#7e4636",n.fillRect(0,0,e,t);let s=t/i/.36,r=s*3;for(let a=0,o=0;a<t;a+=s,o++)for(let l=-(o%2)*r/2;l<e;l+=r){let c=G_()*26-13;n.fillStyle=`rgb(${158+c},${86+c*.6},${64+c*.5})`,n.fillRect(l+1.5,a+1.5,r-3,s-3)}}function H_(n,e,t=.5){let i=document.createElement("canvas"),s=i.getContext("2d"),r=6,a=[],o=t;i.width=n*o,i.height=e*o;let l=new gi(i);l.colorSpace=Dt,l.anisotropy=Math.min(8,_t.capabilities.getMaxAnisotropy());let c=()=>{s.setTransform(o,0,0,o,0,0);for(let h of a)s.save(),s.translate(h.x,h.y),s.beginPath(),s.rect(0,0,h.w,h.h),s.clip(),ju=h.seed,h.draw(s,h.w,h.h),s.restore();l.needsUpdate=!0};return{tex:l,get scale(){return o},add(h,d,f){let p=[0,0,0,0];return a.push({w:h,h:d,draw:f,rect:p,seed:11+a.length*97}),p},flush(){let h=0,d=0,f=0;for(let p of[...a].sort((m,b)=>b.h-m.h))h+p.w>n&&(h=0,d+=f+r,f=0),d+p.h>e&&console.warn("atlas overflow"),Object.assign(p,{x:h,y:d}),p.rect[0]=(h+1)/n,p.rect[1]=1-(d+p.h-1)/e,p.rect[2]=(h+p.w-1)/n,p.rect[3]=1-(d+1)/e,h+=p.w+r,f=Math.max(f,p.h);c()},setScale(h){h!==o&&(o=h,i.width=n*h,i.height=e*h,l.dispose(),c())}}}var Sm={shop:4.45,brick:5.7,pavilion:3.1,studio:5.9,gable:5.3},W_={studio:3.6,gable:3.6};function X_(n,e){let t=n.style,i=Sm[t],s=W_[t]??i,r=-4.2,a=3,o=-4.3,l=.8,c=(r+a)/2,h=a-r,d={lab:n,index:e,slot:e,cluster:e>>2,style:t,tone:eo(e===0?1:0,0),glow:e===0?1:.25,lights:[]},f=d.tone,p=new Xn,m=eh(e),[b,g]=no[e>>2];p.position.set(b+Math.sin(m)*Wc,0,g+Math.cos(m)*Wc),p.rotation.y=m-Math.PI/4,Ci.add(p),p.updateMatrixWorld(),d.g=p;let u={wall:it(t==="pavilion"?"#f1efeb":n.wall,{roughness:.9},f),trim:it("#cfc3b4",{},f),dark:it("#2b2f33",{roughness:.6},f),wood:it("#8a5a3a",{},f),accent:it(n.color,{roughness:.7},f),white:it("#f3eee8",{},f),roof:it("#8d8a86",{roughness:.95},f),cap:it("#b98a6a",{},f),metal:it("#c9ccd0",{roughness:.45,metalness:.4},f),plant:it("#6f9a45",{flatShading:!0},f),rope:it("#c8322e",{roughness:.5},f),paving:it("#f0decd",{map:wf,roughness:.92},f),curb:it("#bcb2a8",{},f),brick:it("#8f4f3d",{roughness:.95},f),board:it("#23352f",{roughness:.7},f),cedar:it("#b0835a",{},f),solar:it("#1f2c46",{roughness:.3,metalness:.5},f),roofTile:it("#"+new Le(n.color).multiplyScalar(.72).getHexString(),{roughness:.85},f)},_=H_(2048,1536,e===0?1:.5);d.atlas=_,u.sign=Ps(new Nn({map:_.tex,roughness:.8,emissive:"#ffe3c4",emissiveMap:_.tex,emissiveIntensity:.12}),f),u.interior=Ps(new Nn({color:"#000",emissive:"#ffffff",emissiveMap:_.tex,emissiveIntensity:1.6}),f),u.glowGlass=it("#ffdcae",{emissive:"#ffb866",emissiveIntensity:1.8,roughness:.4},f),u.warm=it("#ffcf8f",{emissive:"#ffb060",emissiveIntensity:.9},f),u.bulb=_m("#fff1cf",1),u.bulb.userData.noCast=!0,d.bulbBase=new Le("#fff1cf"),d.M=u;let M=["Now","serving",...n.model.split(" ").reduce((S,D)=>(S.length&&(D.length<=3||S[S.length-1].length<=3)?S[S.length-1]+=" "+D:S.push(D),S),[])],A=n.mods.length?n.mods.length>2?"MULTIMODAL":["text",...n.mods].join(" \xB7 ").toUpperCase():"TEXT",P=[String(n.context).toUpperCase(),n.kind,n.available?`${Vc(n.tokens)} 24H`:"DATA PENDING"],C=(S,D,V,K,ie)=>{let Se=Ja[D];Se.plate&&(S.fillStyle="#fff",S.beginPath(),S.roundRect(V-ie*.06,K-ie*.06,ie*1.12,ie*1.12,ie*.24),S.fill()),S.drawImage(Se,V,K,ie,ie*(Se.naturalHeight/Se.naturalWidth||1))},I=t==="brick",v=t==="studio",w={weight:n.id==="anthropic"?600:500,spacing:n.id==="anthropic"?-5:-2},U={};U.fascia=_.add(1100,266,(S,D,V)=>{if(v){let K=S.createLinearGradient(0,0,D,V);(n.grad||[n.color,n.color]).forEach((ie,Se,fe)=>K.addColorStop(Se/(fe.length-1||1),ie)),S.fillStyle=K,S.fillRect(0,0,D,V)}else ka(S,D,V,I?"#23352f":"#f7f2eb",I?"#b89a5a":"#e2d8cc");v?(S.fillStyle="#fff",S.beginPath(),S.roundRect(34,30,206,206,46),S.fill(),C(S,n.id,50,46,174)):C(S,n.id,40,36,194),on(S,n.name,280,208,180,{...w,color:v?"#fff":I?"#f0dca8":"#1d1d1f",max:780,fit:!0})}),U.model=_.add(300,287,(S,D,V)=>{ka(S,D,V,"#f4eee6"),on(S,"Exchange type",24,56,24,{weight:500,color:"#5c5650"}),on(S,n.model,24,112,33,{weight:700,max:256,fit:!0}),[`Status ${n.released}`,`${n.context}`].forEach((K,ie)=>on(S,K,24,172+ie*34,22,{weight:500,color:"#4a4540",max:256}))}),U.price=_.add(280,332,(S,D,V)=>{ka(S,D,V,"#f5f0ea"),on(S,Vc(n.tokens),22,92,68,{weight:700,spacing:-2,max:236,fit:!0}),on(S,"24H TRADING VOLUME · USD",24,128,20,{weight:500,color:"#4b4641"}),n.checks.forEach((K,ie)=>{on(S,"\u2713",24,184+ie*36,24,{weight:700,color:"#2c6b3f"}),on(S,K,58,184+ie*36,24,{weight:500,max:200,fit:!0})})}),U.valance=_.add(1100,48,(S,D,V)=>{S.fillStyle="#f5f1ec",S.fillRect(0,0,D,V),S.fillStyle="#d8cfc5",S.fillRect(0,V-5,D,5),P.forEach((K,ie)=>{on(S,K,D*(ie+.5)/3,V/2+2,28,{weight:500,color:"#2e2b28",align:"center",base:"middle",spacing:2,max:D/3-40,fit:!0}),ie&&S.fillRect(D*ie/3-1,14,3,V-28)})}),U.interior=_.add(900,353,(S,D,V)=>Uu(S,D,V,n.color)),U.banner=_.add(180,432,(S,D,V)=>{let K=S.createLinearGradient(0,0,0,V);(n.grad||[n.color,n.color]).forEach((ie,Se,fe)=>K.addColorStop(Se/(fe.length-1||1),ie)),S.fillStyle=K,S.fillRect(0,0,D,V),S.fillStyle="#ffffff22",S.fillRect(0,0,D,8),M.forEach((ie,Se)=>on(S,ie,20,62+Se*50,44,{weight:500,color:"#fffaf3",max:146,fit:!0})),C(S,n.id+"-w",D/2-32,V-98,64)}),U.chalk=_.add(200,258,(S,D,V)=>{S.fillStyle="#6b4a33",S.fillRect(0,0,D,V),S.fillStyle="#262a29",S.fillRect(12,12,D-24,V-24),[["FOLLOW","#f1efe6"],["SCANWORK","#ffe38a"],["ON X","#f1efe6"]].forEach(([K,ie],Se)=>on(S,K,D/2,68+Se*44,34,{weight:600,color:ie,align:"center",max:D-40,fit:!0})),on(S,"\u2192",D/2,222,40,{color:"#f1efe6",align:"center"})}),U.window=_.add(256,239,(S,D,V)=>{Uu(S,D,V,n.color),S.fillStyle="#f4ede2",S.fillRect(30,40,80,110),S.fillStyle=n.color,S.fillRect(40,52,60,40),S.fillStyle="#e9e0d2",S.fillRect(140,60,80,100)}),U.side=_.add(900,180,(S,D,V)=>{ka(S,D,V,I?"#23352f":"#f7f2eb",I?"#b89a5a":"#e2d8cc"),C(S,n.id,34,26,128),on(S,n.name,196,140,120,{...w,color:I?"#f0dca8":"#1d1d1f",max:660,fit:!0})}),U.door=_.add(160,302,(S,D,V)=>{Uu(S,D,V,n.color),S.fillStyle="#fff3dc",S.fillRect(20,20,D-40,V*.5)}),t==="shop"&&(U.billboard=_.add(420,296,(S,D,V)=>{ka(S,D,V,"#efe8df","#cfc4b6"),["THINK","CREATE","SOLVE","TOGETHER."].forEach((K,ie)=>on(S,K,30,70+ie*62,48,{weight:500,color:"#2a2622"})),C(S,n.id,318,154,70)})),t==="gable"&&(U.tile=_.add(256,256,(S,D,V)=>{S.fillStyle="#fbfaf7",S.beginPath(),S.arc(D/2,V/2,D/2-4,0,Math.PI*2),S.fill(),S.strokeStyle=n.color,S.lineWidth=10,S.stroke(),C(S,n.id,56,56,144)})),t==="brick"&&(U.brickF=_.add(520,164,(S,D,V)=>Vp(S,D,V,8)),U.brickS=_.add(380,168,(S,D,V)=>Vp(S,D,V,8))),_.flush();let x=new Hc;k_(x,u.paving,u.curb);let N=t==="brick"?u.brick:u.wall;x.box(N,c,s/2+.17,(o+.2)/2,h,s,.2-o,{r:.05}),x.box(u.trim,c,.27,l-.3,h+.04,.2,.66),x.box(u.wall,-4.07,1.255,l-.3,.26,2.17,.62),x.box(u.wall,(1.15+a)/2,1.255,l-.3,a-1.15,2.17,.62),x.box(t==="pavilion"?u.cedar:u.wall,c,2.52,l-.3,h,.36,.62),x.panel(u.interior,U.interior,-1.4,1.35,.4,5.1,2),x.box(u.wood,-1.4,.36,.58,5.1,.02,.45),x.box(u.warm,-1.4,2.33,.58,5.1,.02,.45);for(let S=0;S<4;S++){let D=-3.42+S*1.02;x.box(u.wood,D,.62,.56,.74,.5,.24),x.box(u.white,D,.9,.56,.78,.05,.28);for(let V=0;V<3;V++)x.box(S%2?u.accent:u.white,D-.23+V*.23,1.02,.56,.12,.2,.1)}for(let S=0;S<5;S++)x.box(u.dark,-3.93+S*1.02,1.35,.77,.07,2,.08);x.box(u.dark,1.13,1.35,.77,.07,2,.08),x.box(u.dark,-1.9,1.9,.77,4.08,.05,.06),x.box(u.dark,-1.4,.4,.77,5.1,.1,.1),x.panel(u.interior,U.door,.64,1.2,.72,.9,1.7),x.box(u.dark,.64,2.1,.75,1.02,.08,.1),x.box(u.metal,.95,1.2,.8,.04,.4,.05),x.box(u.trim,2.08,1.42,l+.04,1.5,1.78,.1,{r:.02}),x.panel(u.sign,U.price,2.08,1.42,l+.095,1.4,1.66),d.lights.push([new L(-2.4,1.3,l+.9),"#ffae5a",3.8,2.6],[new L(.3,1.3,l+.9),"#ffae5a",3.8,2.6]);for(let[S]of[[a],[r]]){let D=Math.sign(S);x.box(u.dark,S+D*.02,1.4,-.9,.05,1.7,1.8),x.panel(u.interior,U.window,S+D*.05,1.4,-.9,1.6,1.5,D*Math.PI/2)}x.box(u.dark,a+.02,1.1,-2.55,.05,1.9,.9),x.box(u.dark,r-.02,1.1,-3.2,.05,1.9,.9),d.lights.push([new L(a+.9,1.4,-.9),"#ffae5a",2.4,1.1]);let z=S=>{x.box(u.white,c,S,o-.03,h*.92,.95,.06,{r:.02}),x.panel(u.sign,U.side,c,S,o-.065,4.1,.82,Math.PI);for(let[D,V]of[[a,Math.PI/2],[r,-Math.PI/2]]){let K=Math.sign(D);x.box(u.white,D+K*.03,S,-1.8,.06,.95,4.3,{r:.02}),x.panel(u.sign,U.side,D+K*.065,S,-1.8,4.1,.82,V)}},W=S=>{let D=.5363636363636364,V=.32;for(let K=0;K<11;K++)x.box(K%2&&!S?u.white:u.accent,-1.45-5.9/2+D*(K+.5),2.34,1.35,D+.002,.05,1.16,{rx:V});if(S)for(let K=0;K<11;K++)x.cyl(u.accent,-1.45-5.9/2+D*(K+.5),2.03,1.92,D*.5,.04,{rx:Math.PI/2});x.panel(u.sign,U.valance,-1.45,2.03,1.93,5.9,.26),x.box(u.white,-1.45,2.03,1.9,5.9,.28,.04);for(let K of[-1,1])x.box(u.accent,-1.45+K*5.9/2,2.27,1.35,.04,.3,1.16,{rx:V})},G=(S,D)=>{for(let V of D)x.box(u.dark,V,S+.46,l+.18,.04,.04,.42),x.box(u.dark,V,S+.4,l+.4,.14,.08,.14),x.box(u.bulb,V,S+.35,l+.4,.09,.02,.09);d.lights.push([new L(-2.6,S-.25,l+1.1),"#ffcf96",2.6,1.5],[new L(.7,S-.25,l+1.1),"#ffcf96",2.6,1.5])},O=(S,D)=>{for(let[V,K]of D){x.box(u.white,V,S+.35,K,1,.66,.8,{r:.05}),x.cyl(u.dark,V,S+.35,K+.41,.25,.02,{rx:Math.PI/2});for(let ie=0;ie<3;ie++)x.box(u.metal,V,S+.35,K+.425,.44,.03,.015,{rz:ie*1.05})}},H=(S,D)=>{x.box(u.roof,c,S+.03,(o+l)/2,h-.1,.06,l-o-.1);for(let[V,K,ie,Se]of[[c,l-.05,h+.1,.18],[c,o+.05,h+.1,.18],[r+.05,(o+l)/2,.18,l-o],[a-.05,(o+l)/2,.18,l-o]])x.box(D,V,S+.13,K,ie,.34,Se),x.box(u.cap,V,S+.32,K,ie+.02,.05,Se+.02)},re=i+1,te=(S,D,V,K,ie,Se,fe,Z=!0)=>{let X=new or(new ds([new ae(-Se/2,0),new ae(Se/2,0),new ae(0,fe)]),{depth:ie,bevelEnabled:!1});X.translate(0,0,-ie/2),Z&&X.rotateY(Math.PI/2),x.add(S,X,D,V,K)},xe=(S,D,V)=>{x.box(u.white,-1.35,S,l+.06,D+.1,V+.12,.12,{r:.03}),x.panel(u.sign,U.fascia,-1.35,S,l+.125,D,V)},ve=(S,D)=>{x.box(u.trim,S,D,l+.08,1,.96,.12,{r:.02}),x.panel(u.sign,U.model,S,D,l+.145,.92,.88)};if(t==="shop"){x.box(u.wall,c,3.66,l-.3,h,1.92,.62,{r:.04}),H(i+.17,u.trim),x.box(u.cap,c,2.7,l+.01,h+.02,.05,.04),W(!1),xe(3.48,5.7,1.38),x.box(u.trim,2.28,3.48,l+.08,1.46,1.42,.14,{r:.03}),x.panel(u.sign,U.model,2.28,3.48,l+.155,1.36,1.3),G(i,[-3.6,-2,-.4,1.2,2.6]),z(3.5),O(i+.17,[[-3.1,-1.2],[-1.8,-1.6]]),x.box(u.white,1.9,i+.62,-1.4,.8,.85,.7,{r:.04});for(let S=0;S<6;S++)x.box(u.trim,1.58+S*.13,i+.62,-1.04,.04,.6,.02);if(x.box(u.dark,1.9,i+1.07,-1.4,.66,.04,.56),n.roof==="solar"){for(let S=0;S<4;S++)for(let D=0;D<2;D++){let V=-3.35+S*1.2,K=-3.55+D*1;x.box(u.solar,V,i+.55,K,1.1,.04,.78,{rx:-.32}),x.box(u.dark,V,i+.4,K-.25,.06,.3,.06),x.box(u.metal,V,i+.556,K,1.12,.012,.02,{rx:-.32})}for(let S=0;S<6;S++)x.crown(u.plant,-3.6+S*.5,i+.42,-.35,.26,.3,.24,S);x.box(u.wood,-2.35,i+.27,-.35,3.2,.18,.42),re=i+1.4}else{x.box(u.dark,2.4,i+.3,-3.4,.9,.5,.7),x.cyl(u.metal,-3.4,i+.35,-3.6,.12,.5),x.cyl(u.metal,-3,i+.3,-3.6,.1,.4),x.box(u.metal,-.2,i+.28,-.6,3.2,.06,.06),x.box(u.white,-.5,i+1.55,-2.3,2.5,1.8,.12,{r:.03}),x.panel(u.sign,U.billboard,-.5,i+1.55,-2.235,2.36,1.66);for(let S of[-1.5,.5])x.box(u.dark,S,i+.55,-2.35,.08,.9,.08),x.box(u.dark,S,i+.12,-2.35,.3,.08,.3);for(let S of[-1.3,.3])x.box(u.dark,S,i+2.55,-2.1,.04,.28,.04),x.box(u.dark,S,i+2.7,-1.95,.04,.04,.34),x.box(u.bulb,S,i+2.66,-1.78,.08,.04,.08);d.lights.push([new L(-.5,i+2.3,-1.2),"#ffd9a6",2.2,1.2]);for(let S=0;S<5;S++)x.crown(u.plant,-3.5+S*.28,i+.4,-3.75,.24,.3,.22,S);x.box(u.wood,-2.95,i+.25,-3.75,1.6,.18,.4),re=i+2.8}}if(t==="studio"){let S=s+.17,D=i+.17;x.box(u.accent,c,(2.7+S)/2,l-.28,h+.04,S-2.7,.66),x.panel(u.sign,U.fascia,-1.2,3.22,l+.055,4.2,1),x.box(u.accent,-1.45,2.62,1.4,6,.1,1.2),x.panel(u.sign,U.valance,-1.45,2.47,2.005,5.9,.26),x.box(u.white,-1.45,2.47,1.98,5.92,.28,.04);for(let X=0;X<6;X++)x.box(u.bulb,-4+X*1.02,2.565,1.5,.14,.01,.14);d.lights.push([new L(-2.6,2.2,1.6),"#ffe2bd",2.6,1.3],[new L(.4,2.2,1.6),"#ffe2bd",2.6,1.3]),x.box(u.roof,c,S+.03,(o+l)/2,h-.02,.06,l-o-.02),x.box(u.cedar,.4,S+.08,-.25,h-1.9+2.4,.04,1.9),x.box(u.cedar,1.8,S+.08,-2.75,2.3,.04,3);for(let X=r+.05;X<=a;X+=.9)x.box(u.dark,X,S+.4,l-.06,.05,.7,.05);for(let X=o+.1;X<=l;X+=.9)x.box(u.dark,a-.06,S+.4,X,.05,.7,.05);for(let X of[S+.72,S+.4])x.box(u.white,c,X,l-.06,h,.05,.06),x.box(u.white,a-.06,X,(o+l)/2,.06,.05,l-o);let V=r,K=.6,ie=o,Se=-1.2,fe=(V+K)/2,Z=(ie+Se)/2;x.box(u.wall,fe,(S+D)/2,Z,K-V,D-S,Se-ie,{r:.04}),x.box(u.roof,fe,D+.03,Z,K-V-.1,.06,Se-ie-.1);for(let[X,ne,de,R]of[[fe,Se-.05,K-V+.08,.14],[fe,ie+.05,K-V+.08,.14],[V+.05,Z,.14,Se-ie],[K-.05,Z,.14,Se-ie]])x.box(u.trim,X,D+.13,ne,de,.26,R),x.box(u.cap,X,D+.28,ne,de+.02,.04,R+.02);x.box(u.dark,fe,(S+D)/2,Se+.01,K-V-.4,D-S-.4,.04),x.box(u.glowGlass,fe,(S+D)/2,Se+.03,K-V-.55,D-S-.55,.02);for(let X=1;X<4;X++)x.box(u.dark,V+.2+X*(K-V-.4)/4,(S+D)/2,Se+.05,.05,D-S-.5,.04);x.box(u.dark,K+.01,(S+D)/2,Z,.04,D-S-.4,1.9),x.box(u.glowGlass,K+.03,(S+D)/2,Z,.02,D-S-.55,1.75);for(let X of[-.3,.3])x.box(u.dark,K+.05,(S+D)/2,Z+X,.04,D-S-.5,.05);x.box(u.white,fe,D+.62,Se-.2,3.7,1,.1,{r:.03}),x.panel(u.sign,U.fascia,fe,D+.62,Se-.145,3.55,.86);for(let X of[fe-1.3,fe+1.3])x.box(u.dark,X,D+.2,Se-.25,.06,.4,.06);O(D+.06,[[-3.2,-3.5]]);for(let[X,ne]of[[-2.8,-.35],[-.3,-.35],[1.9,-2.2]]){x.add(u.accent,Fp,X,S+1.35,ne,.62,.26,.62),x.cyl(u.white,X,S+.7,ne,.03,1.2),x.cyl(u.white,X,S+.48,ne,.3,.04),x.cyl(u.dark,X,S+.3,ne,.04,.36);for(let de of[-.45,.45])x.box(u.cedar,X+de,S+.27,ne,.22,.24,.22)}for(let X=0;X<6;X++)x.crown(u.plant,-3.9+X*.55,S+.3,.5,.22,.26,.2,X);for(let X of[-4.05,1])x.box(u.dark,X,S+.9,.55,.04,1.6,.04);for(let X=0;X<9;X++)x.box(u.bulb,-4.05+X*.63,S+1.62-Math.sin(X/8*Math.PI)*.18,.55,.06,.06,.06);x.box(u.trim,2.2,S+.78,.5,1,.96,.1,{r:.02}),x.panel(u.sign,U.model,2.2,S+.78,.556,.92,.88),x.box(u.dark,2.2,S+.2,.45,.06,.4,.06),d.lights.push([new L(-1.5,S+1.4,.4),"#ffd9a6",2.4,1.2]),z(3.2),re=D+1.8}if(t==="brick"){let S=i+.17,D=(3.6+S)/2,V=S-3.6;x.box(u.board,c,3.1,l-.26,h+.04,.8,.7),x.panel(u.sign,U.fascia,-1.35,3.1,l+.095,3.3,.8),x.box(u.trim,c,3.54,l-.26,h+.12,.1,.76),W(!0),G(3.25,[-3.3,-1.35,.6]),x.box(u.brick,c,D,l-.3,h,V,.62),x.panel(u.sign,U.brickF,c,D,l+.02,h-.02,V-.04),x.panel(u.sign,U.brickF,c,D,o-.012,h-.02,V-.04,Math.PI);for(let[K,ie]of[[a,Math.PI/2],[r,-Math.PI/2]])x.panel(u.sign,U.brickS,K+Math.sign(K)*.012,D,(o+l)/2,l-o-.02,V-.04,ie);for(let K=0;K<4;K++){let ie=-3.35+K*1.55;x.box(u.trim,ie,D+.05,l+.03,1,1.28,.05),x.panel(u.interior,U.window,ie,D+.07,l+.06,.84,1.1),x.box(u.white,ie,D+.07,l+.07,.05,1.1,.02),x.box(u.trim,ie,D-.62,l+.1,1.12,.08,.16)}x.box(u.dark,2.9,3.9,1.2,.04,.04,.8),x.box(u.dark,2.9,3.84,1.55,.02,.12,.02),x.box(u.white,2.9,3.25,1.55,.08,1.1,1.02,{r:.02}),x.panel(u.sign,U.model,2.95,3.25,1.55,.96,.92,Math.PI/2),x.panel(u.sign,U.model,2.85,3.25,1.55,.96,.92,-Math.PI/2),x.box(u.trim,c,S+.03,(o+l)/2,h+.3,.16,l-o+.3),x.box(u.roof,c,S+.12,(o+l)/2,h-.1,.04,l-o-.1);for(let[K,ie]of[[-2.1,-2.3],[-1.4,-2.3],[-2.1,-3],[-1.4,-3]])x.box(u.dark,K,S+.6,ie,.07,.9,.07);x.cyl(u.wood,-1.75,S+1.5,-2.65,.62,.95),x.add(u.roof,Fp,-1.75,S+2.17,-2.65,.7,.4,.7),x.box(u.dark,-1.75,S+1.03,-2.65,1.5,.06,1.5),O(S+.12,[[1.4,-1.4]]);for(let K=0;K<7;K++)x.box(u.bulb,-3.8+K*1.1,S+.16,l+.12,.07,.07,.07);z(3.1),re=S+2.1}if(t==="gable"){let S=s+.17,D=1.7,V=l-o,K=(o+l)/2,ie=Math.atan(D/(V/2)),Se=Math.hypot(V/2,D);x.box(u.wall,c,(2.7+S)/2,l-.3,h,S-2.7,.62),xe(3.22,3.9,.95),ve(2.22,3.22),W(!1);for(let fe of[-3.7,-1.35,1])x.box(u.bulb,fe,S-.08,l+.3,.1,.06,.1);d.lights.push([new L(-2.6,3,l+1),"#ffcf96",2.4,1.3],[new L(.7,3,l+1),"#ffcf96",2.4,1.3]),te(u.wall,c,S,K,h,V,D);for(let fe of[1,-1]){let Z=Math.sin(ie)*fe,X=Math.cos(ie),ne=K+fe*(V/4+.15*Math.cos(ie))+Z*.07,de=S+D/2-.1*Math.sin(ie)+X*.07;x.box(u.roofTile,c,de,ne,h+.5,.12,Se+.35,{rx:fe*ie});for(let R=-2;R<=2;R++)x.box(u.roofTile,c,de+X*.07-R*.55*Math.sin(ie),ne+Z*.07+fe*R*.55*Math.cos(ie),h+.5,.04,.05,{rx:fe*ie})}x.box(u.roofTile,c,S+D+.05,K,h+.5,.14,.3);for(let fe of[-2.9,-.2]){let Z=K+.95,X=S+.95;x.box(u.wall,fe,X,Z,1,.8,1.1),x.box(u.glowGlass,fe,X-.02,Z+.555,.62,.52,.02),x.box(u.white,fe,X-.02,Z+.565,.04,.52,.02),te(u.roofTile,fe,X+.38,Z,1.3,1.2,.42,!1)}x.box(u.brick,1.8,S+1.4,-2.9,.42,1.3,.42),x.box(u.dark,1.8,S+2.08,-2.9,.5,.06,.5);for(let[fe,Z]of[[a,Math.PI/2],[r,-Math.PI/2]]){let X=Math.sign(fe);x.panel(u.sign,U.tile,fe+X*.012,S+.55,K,.8,.8,Z)}z(3.2),re=S+D+1.3}if(t==="pavilion"){x.box(u.cedar,c,2.9,l-.3,h,.4,.62),x.box(u.white,-.53,i+.14,-1.3,7.94,.28,6.8),x.box(u.warm,-.6,i-.005,1.9,6.6,.012,.18),x.panel(u.sign,U.valance,-.6,i+.14,2.107,5.9,.26);for(let S=0;S<7;S++)x.box(u.bulb,-3.8+S*1.1,i-.01,1.4,.12,.01,.12);d.lights.push([new L(-2.6,2.7,1.7),"#ffdcae",2.8,1.6],[new L(.5,2.7,1.7),"#ffdcae",2.8,1.6]),x.box(u.white,-1.35,i+.95,1.6,5.2,1.3,.12,{r:.03}),x.panel(u.sign,U.fascia,-1.35,i+.95,1.665,5.05,1.22);for(let S of[-3.2,.5])x.box(u.dark,S,i+.35,1.5,.08,.5,.08);x.box(u.trim,2.25,i+.95,1.6,1.46,1.42,.14,{r:.03}),x.panel(u.sign,U.model,2.25,i+.95,1.675,1.36,1.3),x.box(u.dark,2.25,i+.3,1.5,.08,.4,.08);for(let[S,D,V]of[[3.05,-2.2,Math.PI/2],[-4.4,-2.2,-Math.PI/2],[-.6,-4.35,Math.PI]])x.box(u.white,S,i+.8,D,V===Math.PI?4.3:.1,.95,V===Math.PI?.1:4.3,{r:.02}),x.panel(u.sign,U.side,S+Math.sin(V)*.06,i+.8,D+Math.cos(V)*.06,4.1,.82,V);x.box(u.cedar,-1.2,i+.3,-1.6,4.6,.05,3.4);for(let[S,D,V]of[[-3.2,-.6,.6],[-2.3,-2.6,.7],[.6,-2.8,.55],[1.8,-.9,.5]])x.box(u.white,S,i+.45,D,.7,.3,.7,{r:.04}),[[0,1.2,0,.5],[-.2,1,.14,.36],[.2,1.05,-.12,.38]].forEach(([K,ie,Se,fe],Z)=>x.crown(u.plant,S+K*V,i+.28+ie*V,D+Se*V,fe*V,fe*V*1.05,fe*V,Z));re=i+2.2}let ue=[];for(let S=-3.2;S<=1.21;S+=.63)ue.push([S,1.95]);let Oe=ue.length;for(let S=-4.1;S<=.46;S+=.65)ue.push([S,2.75]);let je=ue.length;for(let S=-3.4;S<=1.31;S+=.67)ue.push([S,3.55]);ue.forEach(([S,D],V)=>{x.cyl(u.dark,S,.52,D,.03,.66),x.cyl(u.dark,S,.2,D,.1,.04),x.add(u.metal,Sf,S,.87,D,.045,.045,.045);let K=ue[V+1];if(!K||V+1===Oe||V+1===je)return;let ie=new la(new fs(new L(S,.8,D),new L((S+K[0])/2,.66,D),new L(K[0],.8,D)),6,.022,5).toNonIndexed();x.add(u.rope,ie,0,0,0)}),d.queuePath=[[.5,1.55],[-3.65,1.55],[-3.65,2.35],[.9,2.35],[.9,3.15],[-3.85,3.15],[-3.85,4],[1.2,4],[1.2,4.55]],x.panel(u.sign,U.chalk,2.91,.62,3.4,.62,.8,.55,-.2),x.panel(u.sign,U.chalk,2.79,.62,3.2,.62,.8,.55+Math.PI,-.2),x.box(u.wood,2.55,.5,1.3,1.1,.08,.5),x.box(u.dark,2.55,.33,1.3,.08,.34,.08);for(let S=0;S<5;S++)x.crown(u.plant,2.15+S*.2,.62,1.25+(S%2-.5)*.2,.15,.17,.15,S);x.box(u.wood,3.37,.5,-1,.5,.06,1.4),x.box(u.wood,3.14,.76,-1,.06,.46,1.4);for(let S of[-1.6,-.4])x.box(u.dark,3.37,.34,S,.44,.32,.06);x.cyl(u.dark,3.62,2.3,1.35,.06,4.3),x.cyl(u.dark,3.62,.27,1.35,.16,.2),x.box(u.dark,3.62,4.3,.78,.05,.05,1.2),x.box(u.dark,3.62,1.88,.78,.04,.04,1.12),x.panel(u.sign,U.banner,3.65,3.08,.76,1,2.4,Math.PI/2),x.panel(u.sign,U.banner,3.59,3.08,.76,1,2.4,-Math.PI/2);for(let[S,D,V]of[[3.55,.35,1.05],[3.55,-3.85,.95]])x.box(u.white,S,.42,D,.8,.46,.8,{r:.05}),x.cyl(u.wood,S,1.05,D,.07*V,1.3*V),[[0,1.75,0,.62],[-.28,1.45,.18,.46],[.26,1.5,-.16,.48],[.05,2.15,.05,.46],[.1,1.3,.3,.36]].forEach(([K,ie,Se,fe],Z)=>x.crown(u.plant,S+K*V,ie*V+.35,D+Se*V,fe*V,fe*V*1.05,fe*V,Z));x.build(p);let Je=new vt(to,Op);Je.visible=!1,Je.position.set(c,(i+.17)/2,(o+l)/2),Je.scale.set(h,i+.17,l-o),p.add(Je),Za.push(Je);let $=new vt(to,Op);$.visible=!1,$.position.set(2.85,.65,3.3),$.scale.set(.9,1.1,.7),$.userData.href=Bp,p.add($),Za.push($);{let S=eo(f.sat.value,0),D=new vt(oo(),V_(zp[(e*7+3)%zp.length],S));d.tag={mesh:D,tone:S,hover:0},D.position.set(-.6+(e*13%5-2)*.22,1.7+(e*7%3-1)*.12,-4.32),D.rotation.set(0,Math.PI,(e*37%11-5)/55),D.scale.set(5.2,1.3,1),D.userData.href=Bp,D.receiveShadow=!0,p.add(D),Za.push(D)}for(let S of d.lights)p.localToWorld(S[0]),Mm(S[0],S[1],S[2],S[3],e);return d.focus=p.localToWorld(new L(-.4,1.7,1.6)),d.label=p.localToWorld(new L(-.6,re,-1.8)),rn.push(d),d}Bt.forEach(X_);var Nu=72;function pt(){return Nu=Nu*1664525+1013904223>>>0,Nu/4294967296}var q_=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d"),t=e.createImageData(256,256);for(let s=0;s<t.data.length;s+=4){let r=200+pt()*55;t.data[s]=t.data[s+1]=t.data[s+2]=r,t.data[s+3]=255}e.putImageData(t,0,0);let i=new gi(n);return i.wrapS=i.wrapT=mn,i.repeat.set(40,40),i.colorSpace=Dt,i})(),Ef=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"#fff"),t.addColorStop(.35,"#ffffff88"),t.addColorStop(1,"#fff0"),e.fillStyle=t,e.fillRect(0,0,128,128),new gi(n)})(),Rn={asphalt:it("#40444c",{map:q_,roughness:.5,metalness:.15}),mark:it("#d8d4ca",{roughness:.7}),curb:it("#9d958d",{},Iu),paving:it("#d4ccc4",{map:wf,roughness:.9},Iu),dark:it("#23272c",{roughness:.6}),trunk:it("#6b4a33"),roofBox:it("#8b8f95",{},Iu)},Ft=new Hc,[Ei,Zi]=O_;Ft.box(Rn.asphalt,Ei,-.05,Zi,230,.1,230);var Xc=[-3,-2,-1,0,1,2,3].map(n=>Ei+n*Ai),Gp=52;for(let n of Xc)for(let e=-Gp;e<Gp;e+=1.5){let t=Ei+e+.35;Xc.some(i=>Math.abs(t-i)<4.3)||(Ft.box(Rn.mark,n,.006,t,.09,.012,.7),Ft.box(Rn.mark,t,.006,n,.7,.012,.09))}for(let n of Xc.slice(1,6))for(let e of Xc.slice(1,6))for(let[t,i]of[[1,0],[-1,0],[0,1],[0,-1]])for(let s=0;s<7;s++){let r=-1.56+s*.52,a=3.35;t?Ft.box(Rn.mark,n+t*a,.008,e+r,.95,.014,.26):Ft.box(Rn.mark,n+r,.008,e+i*a,.26,.014,.95)}var th=[],_r=[],Is=[],Tf=[];for(let n=-7;n<=7;n+=2)for(let e=-7;e<=7;e+=2)Tf.push([Ei+n*wr,Zi+e*wr]);var wm=(n,e)=>rn.find(t=>Math.abs(t.g.position.x-n)<.1&&Math.abs(t.g.position.z-e)<.1),Ts={stone:it("#cfc6bb",{roughness:.8}),water:it("#7fc4e8",{roughness:.15,metalness:.1,emissive:"#3f8fc4",emissiveIntensity:.35}),plaza:it("#eadccd",{map:wf,roughness:.92})};for(let[n,e]of Tf){let t=Math.round(Math.max(Math.abs(n-Ei),Math.abs(e-Zi))/wr),i=!!wm(n,e),s=t<=3&&!i;if(!i){Ft.add(Rn.curb,Qa(Bc,1.3,.17),n,0,e),Ft.add(Rn.paving,Qa(Bc-.36,1.15,.02),n,.17,e);let r=t===5&&Math.abs(Math.abs(n-Ei)-Math.abs(e-Zi))<.1;if(s){Ft.add(Ts.plaza,Qa(Bc-.36,1.15,.03),n,.17,e),Ft.cyl(Ts.stone,n,.36,e,1.7,.36),Ft.cyl(Ts.water,n,.5,e,1.5,.06),Ft.cyl(Ts.stone,n,.95,e,.22,1),Ft.cyl(Ts.stone,n,1.42,e,.7,.12),Ft.cyl(Ts.water,n,1.5,e,.6,.04),Ft.cyl(Ts.water,n,1.75,e,.05,.5);for(let a=0;a<8;a++){let o=a/8*Math.PI*2+.39;_r.push([n+Math.sin(o)*3.9,e+Math.cos(o)*3.9,.85])}for(let a=0;a<4;a++){let o=a*Math.PI/2,l=n+Math.sin(o)*2.55,c=e+Math.cos(o)*2.55;Ft.box(Rn.trunk,l,.5,c,1.3,.07,.45,{ry:o}),Ft.box(Rn.dark,l,.35,c,1.1,.3,.35,{ry:o})}}else if(r)for(let a=0;a<9;a++)_r.push([n+(pt()-.5)*8,e+(pt()-.5)*8,.8+pt()*.5]);else{let a=t>5?2:3;for(let o=0;o<a;o++){let l=a===3?2.3+pt()*.5:3.4+pt()*1.2,c=2.6+pt()*2,h=(t>5?6:2.2)+pt()*(t>5?8:2),d=n+(o-(a-1)/2)*(a===3?3:3.6)+(pt()-.5)*.3,f=e+(pt()-.5)*2;th.push([d,h/2+.17,f,l,h,c]),Ft.box(Rn.roofBox,d+(pt()-.5)*l*.4,h+.45,f+(pt()-.5)*c*.4,.8,.5,.6)}for(let o=0;o<3;o++)_r.push([n+(o-1)*3.4,e-Math.sign(e-Zi)*4.6,.7+pt()*.3])}}if(t<=5)for(let[r,a]of[[-2.4,5.3],[5.3,2.6],[5.3,-2.2],[-5.3,-1.5]].slice(0,i?4:3)){let o=i?eh(rn.findIndex(h=>Math.abs(h.g.position.x-n)<.1&&Math.abs(h.g.position.z-e)<.1))-Math.PI/4:0,l=Math.cos(o),c=Math.sin(o);Is.push([n+r*l+a*c,e-r*c+a*l])}}for(let n=0;n<34;n++){let e=n/34*Math.PI*2,t=74+pt()*14,i=10+pt()*18;th.push([Ei+Math.sin(e)*t,i/2,Zi+Math.cos(e)*t,6+pt()*5,i,6+pt()*5])}Ft.build(Ci);var Em={value:1},Y_=Ps(new Nn({color:"#9ba1a9",roughness:.85}),bf,Object.assign(n=>{n.uniforms.uNight=Em,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;varying vec3 vWN;varying vec2 vSpan;`).replace("#include <project_vertex>",`#include <project_vertex>
 vec4 wp=modelMatrix*instanceMatrix*vec4(transformed,1.);vWP=wp.xyz;vWN=normalize(mat3(instanceMatrix)*objectNormal);vSpan=vec2((instanceMatrix*vec4(0,-.5,0,1)).y,(instanceMatrix*vec4(0,.5,0,1)).y);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;varying vec3 vWN;varying vec2 vSpan;uniform float uNight;float hh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 if(abs(vWN.y)<.5){float u=abs(vWN.x)>.5?vWP.z:vWP.x;vec2 cell=vec2(floor(u/.62),floor((vWP.y-vSpan.x)/.78));vec2 f=vec2(fract(u/.62),fract((vWP.y-vSpan.x)/.78));
  float inside=step(.22,f.x)*step(f.x,.78)*step(.28,f.y)*step(f.y,.8)*step(1.,cell.y)*step(vWP.y,vSpan.y-.35);
  float r=hh(cell+floor(vWP.xz*.37));float lit=step(.3,r)*inside*(.12+.88*uNight);
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.16,.18,.22),inside);
  totalEmissiveRadiance+=lit*mix(vec3(1.,.62,.3),vec3(1.,.85,.6),hh(cell.yx))*(1.4+r*2.6);
  float shop=step(vWP.y-vSpan.x,.62)*step(.1,f.x)*step(f.x,.9)*step(.2,vWP.y-vSpan.x);totalEmissiveRadiance+=shop*vec3(1.,.7,.4)*(.5+1.3*uNight)*step(.25,hh(vec2(cell.x,7.)));}
 else diffuseColor.rgb*=.62;`)},{key:"city"})),Cc=new Lt(to,Y_,th.length);th.forEach(([n,e,t,i,s,r],a)=>{Mt.compose(Qi.set(n,e,t),bi.identity(),es.set(i,s,r)),Cc.setMatrixAt(a,Mt)}),Cc.castShadow=Cc.receiveShadow=!0,Ci.add(Cc);var K_=[[0,1.75,0,.62],[-.3,1.42,.2,.46],[.28,1.5,-.18,.5],[.05,2.18,.05,.44]],Va=new Lt(Sf,it("#ffffff",{flatShading:!0}),_r.length*4),Fu=new Lt(bm,Rn.trunk,_r.length);_r.forEach(([n,e,t],i)=>{Mt.compose(Qi.set(n,.17+.65*t,e),bi.identity(),es.set(.08*t,1.3*t,.08*t)),Fu.setMatrixAt(i,Mt),K_.forEach(([s,r,a,o],l)=>{Mt.compose(Qi.set(n+s*t,.17+r*t,e+a*t),bi.setFromEuler(Am.set(0,i+l,0)),es.set(o*t,o*t*1.05,o*t)),Va.setMatrixAt(i*4+l,Mt),Va.setColorAt(i*4+l,new Le(l%2?"#5b8a3c":"#6f9a47"))})}),Va.castShadow=Fu.castShadow=!0,Va.receiveShadow=!0,Ci.add(Va,Fu);var J_=Yi([new Sn(.07,.1,.22,8).translate(0,.28,0),new Sn(.035,.045,2.3,6).translate(0,1.5,0),new Sn(.05,.18,.16,6).translate(0,2.93,0),new xn(.2,.04,.2).translate(0,2.52,0)].map($c)),Q_=new Sn(.12,.09,.34,6).translate(0,2.7,0),$u=new Lt(J_,Rn.dark,Is.length),nh=new Lt(Q_,_m("#ffd9a0",3.2),Is.length),Z_=nh.material.color.clone(),ni=new Lt(oo().rotateX(-Math.PI/2),new en({map:Ef,color:"#ffb36b",transparent:!0,opacity:.46,blending:xi,depthWrite:!1,fog:!1}),Is.length+rn.length*2);Is.forEach(([n,e],t)=>{Mt.makeTranslation(n,0,e),$u.setMatrixAt(t,Mt),nh.setMatrixAt(t,Mt),Mt.compose(Qi.set(n,.2,e),bi.identity(),es.set(4.4,1,4.4)),ni.setMatrixAt(t,Mt),Mm(new L(n,2.4,e),"#ffbf7a",3.8,1.9)}),rn.forEach((n,e)=>[-2.4,.2].forEach((t,i)=>{let s=n.g.localToWorld(new L(t,.2,1.9));Mt.compose(s,bi.identity(),es.set(4.2,1,3.4)),ni.setMatrixAt(Is.length+e*2+i,Mt)}));for(let n=0;n<ni.count;n++)ni.setColorAt(n,new Le(1,1,1));$u.castShadow=!0,ni.renderOrder=1,Ci.add($u,nh,ni);var ih=[ni];function ef(n,e,t,i){let s=2*(e-t),r=Math.PI*t/2,a=s+r,o=4*a;n=(n%o+o)%o;let l=Math.floor(n/a),c=n-l*a,h,d,f;if(c<s)h=-e+t+c,d=e,f=0;else{let p=(c-s)/t;h=e-t+Math.sin(p)*t,d=e-t+Math.cos(p)*t,f=p}for(let p=0;p<l;p++){let m=d,b=-h;h=m,d=b,f+=Math.PI/2}return i.x=h,i.z=d,i.h=f,i}var Tm=(n,e)=>{n=$c(n);let t=new Le(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)t.toArray(s,r*3);return n.setAttribute("color",new bt(s,3)),n},Vt=(n,e,t,i,s,r,a)=>Tm(new xn(n,e,t).translate(i,s,r),a),vr=(n,e)=>Tm(new Sn(.13,.13,.1,10).rotateX(Math.PI/2).translate(n,.15,e),"#1a1c1f"),j_=Yi([Vt(1.3,.34,.62,0,.34,0,"#fff"),Vt(.72,.3,.56,-.06,.64,0,"#fff"),Vt(.5,.24,.58,.02,.64,0,"#2a3038"),Vt(.74,.24,.5,-.06,.64,0,"#2a3038"),vr(-.4,-.3),vr(.4,-.3),vr(-.4,.3),vr(.4,.3)]),$_=Yi([Vt(.7,.16,.2,0,.3,0,"#fff"),Vt(.08,.36,.06,.3,.5,0,"#2a2c30"),vr(-.26,0),vr(.26,0),Vt(.2,.34,.26,-.06,.64,0,"#fff"),Vt(.2,.2,.2,-.04,.92,0,"#e8e2da"),Vt(.22,.12,.22,-.04,1.03,0,"#30343a"),Vt(.12,.3,.08,-.02,.38,.1,"#3a3f47"),Vt(.12,.3,.08,-.02,.38,-.1,"#3a3f47")]),eM=(n,e,t)=>Yi([Vt(.04,.07,.12,n,t,-.2,"#fff"),Vt(.04,.07,.12,n,t,.2,"#fff"),Vt(.03,.06,.14,e,t,-.2,"#ff2b1a"),Vt(.03,.06,.14,e,t,.2,"#ff2b1a")]),tM=Yi([Vt(.05,.07,.08,.34,.62,0,"#fff"),Vt(.03,.05,.08,-.36,.4,0,"#ff2b1a")]),Cm=Ps(new Nn({vertexColors:!0,roughness:.4,metalness:.2}),bf),sh=new en({vertexColors:!0,color:new Le(5,4.4,3.4),fog:!1}),nM=sh.color.clone(),Cf=[...no.map(([n,e])=>({cx:n,cz:e,half:Ai-.95,dir:-1,n:5})),{cx:Ei,cz:Zi,half:2*Ai+.95,dir:1,n:16}],Oc=2.2;for(let n of Cf){let e=2*(n.half-Oc)+Math.PI*Oc/2,t=e-Math.PI*Oc/4,i=1024;n.len=4*e,n.vAt=a=>{let o=(a%e+e)%e,l=Math.abs(o-t);return l=Math.min(l,e-l),2.4*(.42+.58*Ut.smoothstep(l,1.4,6.5))};let s=new Float32Array(i+1);for(let a=1;a<=i;a++)s[a]=s[a-1]+n.len/i/n.vAt((a-.5)/i*n.len);let r=new Float32Array(i+1);n.period=s[i];for(let a=0,o=0;a<=i;a++){let l=a/i*n.period;for(;o<i-1&&s[o+1]<l;)o++;r[a]=(o+Math.min(1,(l-s[o])/(s[o+1]-s[o])))/i*n.len}n.sAt=a=>{let o=(a%n.period+n.period)%n.period/n.period*i,l=Math.min(i-1,Math.floor(o));return r[l]+(r[l+1]-r[l])*(o-l)}}var kn=[],iM=["#e9b73c","#f2efe8","#8aa396","#a8b3c0","#d98e72","#4f5968","#e9b73c","#c9cbd0","#7b8fb0","#b54a3a"];Cf.forEach((n,e)=>{for(let t=0;t<n.n;t++){let i=kn.length,s=i%3!==2;kn.push({car:s,lane:e,t0:(t+e*.37)*n.period/n.n,trailMax:.7*n.period/n.n,color:s?iM[i%10]:["#d4553f","#3f6fb5","#e0c14c","#58946a"][i%4]})}});function tf(n,e,t){let i=Cf[n.lane],s=i.dir*i.sAt(e+n.t0);return ef(s,i.half,Oc,t),t.x+=i.cx,t.z+=i.cz,i.dir<0&&(t.h+=Math.PI),t.speed=i.vAt(s),t.brake=Ut.clamp((i.vAt(i.dir*i.sAt(e+n.t0-.25))-t.speed)/.1,0,1),t}var Rf=kn.filter(n=>n.car),Pf=kn.filter(n=>!n.car),qc=new Lt(j_,Cm,Rf.length),nf=new Lt(eM(.66,-.66,.38),sh,Rf.length),Yc=new Lt($_,Cm,Pf.length),sf=new Lt(tM,sh,Pf.length);Rf.forEach((n,e)=>qc.setColorAt(e,new Le(n.color))),Pf.forEach((n,e)=>Yc.setColorAt(e,new Le(n.color)));var Tr=new Lt(oo().rotateX(-Math.PI/2),new en({map:Ef,color:"#ffe2b0",transparent:!0,opacity:.3,blending:xi,depthWrite:!1,fog:!1}),kn.length);for(let n of[qc,nf,Yc,sf,Tr])n.instanceMatrix.setUsage(Ms),n.frustumCulled=!1,Ci.add(n);Tr.renderOrder=1,ih.push(Tr);var Mi=28,sM=[[-1,-.66,.2,.4,.05],[-1,-.66,-.2,.4,.05],[1,.66,.2,.4,.05],[1,.66,-.2,.4,.05]],rM=[[-1,-.36,.02,.42,.035],[-1,-.36,-.02,.42,.035],[1,.34,.02,.64,.035],[1,.34,-.02,.64,.035]],Rm=kn.length*4*(Mi+1),Cs=new Float32Array(Rm*6),Rs=new Float32Array(Rm*6),Pm=[];for(let n=0;n<kn.length*4;n++)for(let e=0;e<Mi;e++){let t=(n*(Mi+1)+e)*2;Pm.push(t,t+1,t+2,t+1,t+3,t+2)}var Mr=new Tt;Mr.setIndex(Pm),Mr.setAttribute("position",new bt(Cs,3).setUsage(Ms)),Mr.setAttribute("color",new bt(Rs,3).setUsage(Ms));var qa=new vt(Mr,new en({vertexColors:!0,transparent:!0,blending:xi,depthWrite:!1,fog:!1,side:wn}));qa.frustumCulled=!1,qa.renderOrder=3,Ci.add(qa),ih.push(qa);var yi={},Hp=Array.from({length:Mi+1},()=>({}));function aM(n,e,t){let i=0,s=0,r=e>.02;qa.visible=r,kn.forEach((a,o)=>{tf(a,n,yi);let l=yi.h;a.x=yi.x,a.z=yi.z,a.h=l,a.speed=yi.speed,bi.setFromAxisAngle(Qi.set(0,1,0),l),Mt.compose(es.set(yi.x,.02,yi.z),bi,Qi.set(1,1,1)),a.car?(qc.setMatrixAt(i,Mt),nf.setMatrixAt(i++,Mt)):(Yc.setMatrixAt(s,Mt),sf.setMatrixAt(s++,Mt));let c=Math.cos(l),h=-Math.sin(l);if(Mt.compose(es.set(yi.x+c*2.2,.03,yi.z+h*2.2),bi,Qi.set(3.2,1,a.car?1.7:1.1)),Tr.setMatrixAt(o,Mt),!r)return;let d=Math.min(e,a.trailMax);for(let f=0;f<=Mi;f++)tf(a,n-d*f/Mi,Hp[f]);(a.car?sM:rM).forEach(([f,p,m,b,g],u)=>{let _=(o*4+u)*(Mi+1);for(let M=0;M<=Mi;M++){let A=Hp[M],P=Math.cos(A.h),C=-Math.sin(A.h),I=Math.sin(A.h),v=Math.cos(A.h),w=A.x+P*p+I*m,U=A.z+C*p+v*m,x=t.x-w,N=t.z-U,z=(P*x+C*N)/(Math.hypot(x,N)||1)*f,W=M/Mi,G=(.15+.85*Ut.smoothstep(z,-.2,.7))*(W<.7?1:(1-W)/.3)*(f<0?1.3*(1+1.8*A.brake):1.05)*(.3+.7*br.night),O=(_+M)*6;Cs[O]=w+I*g,Cs[O+1]=b,Cs[O+2]=U+v*g,Cs[O+3]=w-I*g,Cs[O+4]=b,Cs[O+5]=U-v*g;let H=G,re=G*(f<0?.07:.8),te=G*(f<0?.03:.56);Rs[O]=Rs[O+3]=H,Rs[O+1]=Rs[O+4]=re,Rs[O+2]=Rs[O+5]=te}})});for(let a of[qc,nf,Yc,sf,Tr])a.instanceMatrix.needsUpdate=!0;r&&(Mr.attributes.position.needsUpdate=Mr.attributes.color.needsUpdate=!0)}function ln(n,e,t,i,s,r,a,o=0,l=0){let c=$c(new xn(n,e,t)).translate(i,s,r),h=c.attributes.position.count;for(let[d,f]of[["aPart",a],["aSwing",o],["aPivot",l]])c.setAttribute(d,new bt(new Float32Array(h).fill(f),1));return c}var yr=Yi([ln(.12,.34,.11,0,.21,.07,0,1,.4),ln(.12,.34,.11,0,.21,-.07,0,-1,.4),ln(.17,.06,.12,.025,.03,.07,4,1,.4),ln(.17,.06,.12,.025,.03,-.07,4,-1,.4),ln(.2,.36,.3,0,.56,0,1),ln(.09,.3,.08,0,.57,.19,1,-1,.72),ln(.09,.3,.08,0,.57,-.19,1,1,.72),ln(.08,.08,.08,0,.39,.19,2,-1,.72),ln(.08,.08,.08,0,.39,-.19,2,1,.72),ln(.3,.28,.3,0,.89,0,2),ln(.32,.08,.32,-.01,1.05,0,3),ln(.07,.2,.32,-.13,.95,0,3),ln(.02,.05,.04,.141,.9,.065,5),ln(.02,.05,.04,.141,.9,-.065,5)]),Im={value:Array.from({length:Er+1},(n,e)=>e===0?1:e===Er?.12:0)},Dm={value:0},oM=Ps(new Nn({roughness:.8}),eo(1,.07),Object.assign(n=>{n.uniforms.uTime=Dm,n.uniforms.uSlotSat=Im,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aPart;attribute float aSwing;attribute float aPivot;attribute vec3 iShirt;attribute vec3 iPants;attribute vec3 iHair;attribute vec3 iSkin;attribute vec3 iAnim;
uniform float uTime;uniform float uSlotSat[${Er+1}];varying vec3 vPCol;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph=uTime*9.+iAnim.x*6.2832;float sw=sin(ph)*.55*iAnim.y*aSwing;
transformed.y-=aPivot;float cs=cos(sw),sn=sin(sw);transformed.xy=vec2(cs*transformed.x-sn*transformed.y,sn*transformed.x+cs*transformed.y);transformed.y+=aPivot+abs(cos(ph))*.028*iAnim.y;
vec3 pc=aPart<.5?iPants:aPart<1.5?iShirt:aPart<2.5?iSkin:aPart<3.5?iHair:aPart<4.5?vec3(.05):vec3(.01);
vPCol=mix(vec3(dot(pc,vec3(.3,.59,.11))),pc,uSlotSat[int(iAnim.z+.5)]);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPCol;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=vPCol;`)},{key:"people"})),Wp=["#f1ede6","#d0463b","#3f6cb0","#4f9a6a","#e7c24a","#e58fb0","#8f98a3","#2c3036","#e3793d","#7bb7d8","#a4d06a"],Xp=["#2f3a55","#26282c","#5d6570","#a58e6b","#3b4d3f"],qp=["#3a2a20","#1d1b1a","#d9b36a","#f4f2ee","#4a3327","#6d4a33","#2a2422","#9a9ea4"],Yp=["#f0c9a8","#d6a27c","#a8714c","#f6d8bf"],Us=[],Kp=(n,e,t,i)=>Math.atan2(-(i-e),t-n);function gr(n){return n.phase=pt(),n.scale=.7+pt()*.12,n.shirt=Wp[Math.floor(pt()*Wp.length)],n.pants=Xp[Math.floor(pt()*Xp.length)],n.hair=qp[Math.floor(pt()*qp.length)],n.skin=Yp[Math.floor(pt()*Yp.length)],Us.push(n),n}function Ga(n,e,t){for(let i=0;i<n.length-1;i++){let[s,r]=n[i],[a,o]=n[i+1],l=Math.hypot(a-s,o-r);if(e<=l||i===n.length-2){let c=Math.min(Math.max(e,0)/l,1);return t.x=s+(a-s)*c,t.z=r+(o-r)*c,t.h=Math.atan2(-(o-r),a-s),t}e-=l}return t}var Bu=n=>n.slice(1).reduce((e,t,i)=>e+Math.hypot(t[0]-n[i][0],t[1]-n[i][1]),0),Kc=n=>5.5-n,io=n=>Math.max(.3,1.3-n),Ou=n=>4*(2*(Kc(n)-io(n))+Math.PI*io(n)/2),lM=(n,e)=>n+Kc(e)-io(e),rf=[[.5,1.55],[.55,1.05],[.55,.4]],Lm=[[.95,.4],[.95,1],[1.9,1.75],[1.9,4.55]],Jc=.95,cM=12,Um=.3,hM=[[2.55,2.15,2.08,.8],[2.9,2.4,2.08,.8],[2.45,4.05,2.85,3.3],[4,3.35,3.65,3.7],[3.65,3.7,4,3.35],[3.95,-2.75,4.05,-2.3],[4.05,-2.3,3.95,-2.75]],rh=[];rn.forEach(n=>rh.push({x:n.g.position.x,z:n.g.position.z,a:n.g.rotation.y,slot:n.slot,S:n,metric:E_(n.lab),near:!0}));for(let[n,e]of Tf){let t=Math.round(Math.max(Math.abs(n-Ei),Math.abs(e-Zi))/wr);(t===5||t<=3&&!wm(n,e))&&rh.push({x:n,z:e,a:0,slot:Er,metric:{people:t===5?10:16,rate:.8},near:!0})}for(let n of rh){let e=n.metric;if(n.speed=.42*e.rate,!n.S){for(let f=0;f<e.people;f++)gr({lot:n,kind:"lane",lane:{d:.45,dir:1},s:f*Ou(.45)/e.people+pt()*.6});continue}let t=e.queue,i=Bu(n.S.queuePath),s=lM(1.9,Jc),r=[Bu(rf),cM,Bu(Lm),Ou(Jc)-.7,i-t*Um],a=r.reduce((f,p)=>f+p),o=Math.max(4,Math.round(a*e.density));n.circuit={Q:t,K:o,N:t+o,T:a/(o*n.speed),legs:r,out:a,qLen:i,exitS:s};for(let f=0;f<t+o;f++)gr({lot:n,kind:"visitor",i:f,trail:!0});let l=n.S.lab.id==="openai",c=hM.slice(0,e.idle).filter((f,p)=>!(l&&p===2)),h=n.S.lab.crowd>.3?[-.65,-1.35]:[];if(c.forEach(([f,p,m,b])=>gr({lot:n,kind:"idle",x:f,z:p,h:Kp(f,p,m,b)})),l){let f=gr({lot:n,kind:"idle",x:2.45,z:4.05,h:Kp(2.45,4.05,3.45,5.35)});f.shirt="#3b3e44",f.pants="#26282c",f.hair="#5b3a26",f.bubble=!0}for(let f of h)gr({lot:n,kind:"idle",x:3.42,z:f,h:0,sit:!0});let d=e.walkers;for(let f=0;f<d;f++)gr({lot:n,kind:"lane",lane:{d:.5,dir:1},s:f*Ou(.5)/d+pt()*.3,trail:!0});n.S.visitors=t+o+c.length+h.length+d+(l?1:0)}var lo=Us.length,If=kn.length,af=Us.find(n=>n.bubble),Nm=new L,ah=new Lt(yr,oM,lo),Rc=n=>{let e=new Float32Array(lo*3),t=new Le;return Us.forEach((i,s)=>t.set(i[n]).toArray(e,s*3)),new Kn(e,3)};yr.setAttribute("iShirt",Rc("shirt")),yr.setAttribute("iPants",Rc("pants")),yr.setAttribute("iHair",Rc("hair")),yr.setAttribute("iSkin",Rc("skin"));var Df=new Kn(new Float32Array(Us.flatMap(n=>[n.phase,0,n.lot.slot])),3).setUsage(Ms);yr.setAttribute("iAnim",Df),ah.receiveShadow=!0;var Mn=6,On=6,so=Us.filter(n=>n.trail),Fm=so.length*Mn+If*On;so.forEach((n,e)=>{n.trailBase=e*Mn,n.smeared=!0});var Bm=new st({uniforms:{uOpacity:{value:.3}},transparent:!0,depthWrite:!1,vertexShader:"attribute vec2 iFade;varying vec3 vC;varying float vA;void main(){vC=instanceColor;vA=mix(iFade.y,iFade.x,position.x+.5);gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"uniform float uOpacity;varying vec3 vC;varying float vA;void main(){gl_FragColor=vec4(vC,uOpacity*vA);}"}),Om=to.clone(),Pc=n=>(1-n)**1.6,Ha=new Float32Array(Fm*2),Ds=new Lt(Om,Bm,Fm);so.forEach((n,e)=>{for(let t=0;t<Mn;t++){let i=e*Mn+t;Ds.setColorAt(i,Np.set(n.shirt)),Ha[i*2]=Pc(t/Mn),Ha[i*2+1]=Pc((t+1)/Mn)}}),kn.forEach((n,e)=>{for(let t=0;t<On;t++){let i=so.length*Mn+e*On+t;Ds.setColorAt(i,Np.set(n.color).multiplyScalar(1.15)),Ha[i*2]=.32*Pc(t/On),Ha[i*2+1]=.32*Pc((t+1)/On)}}),Om.setAttribute("iFade",new Kn(Ha,2));var ro=new Lt(oo().rotateX(-Math.PI/2),new en({map:Ef,color:"#000",transparent:!0,opacity:.42,depthWrite:!1}),lo+If);for(let n of[ah,Ds,ro])n.instanceMatrix.setUsage(Ms),n.frustumCulled=!1,Ci.add(n);ro.renderOrder=1,Ds.renderOrder=2,ih.push(Ds,ro);var Qc=Ds.instanceMatrix.array,zu=ro.instanceMatrix.array,Jp=ah.instanceMatrix.array,uM=Df.array;function _i(n,e,t,i,s,r,a,o,l){let c=Math.cos(r),h=Math.sin(r),d=e*16;n[d]=c*a,n[d+1]=0,n[d+2]=-h*a,n[d+3]=0,n[d+4]=0,n[d+5]=o,n[d+6]=0,n[d+7]=0,n[d+8]=h*l,n[d+9]=0,n[d+10]=c*l,n[d+11]=0,n[d+12]=t,n[d+13]=i,n[d+14]=s,n[d+15]=1}var kt={};function Qp(n,e,t,i){let s=n.lot,r=n.scale,a=.19,o=r,l=0,c,h,d;if(n.kind==="visitor"){let m=s.circuit,b=((n.i-e/m.T)%m.N+m.N)%m.N;if(b<m.Q){let g=Math.floor(b),u=b-g,_=t?Ut.smoothstep(u,0,.35):u;Ga(s.S.queuePath,(g+_)*Um,kt),l=t?+(u<.35):1,c=kt.x,h=kt.z,d=kt.h+Math.PI+(l?0:Math.sin(e*.4+n.phase*40)*.2)}else{let g=(m.N-b)/(m.N-m.Q)*m.out,[u,_,M,A]=m.legs;l=1,g<u?Ga(rf,g,kt):(g-=u)<_?(Ga(rf,u,kt),r=0):(g-=_)<M?Ga(Lm,g,kt):(g-=M)<A?ef(m.exitS+g,Kc(Jc),io(Jc),kt):(Ga(s.S.queuePath,m.qLen-(g-A),kt),kt.h+=Math.PI),c=kt.x,h=kt.z,d=kt.h,h<.55&&Math.abs(c-.75)<.5&&(r=0)}}else if(n.kind==="idle")c=n.x,h=n.z,d=n.h+Math.sin(e*.3+n.phase*30)*.25,n.sit&&(a=.36,o=r*.78);else{let m=n.lane;ef(n.s+m.dir*s.speed*e,Kc(m.d),io(m.d),kt),c=kt.x,h=kt.z,d=kt.h+(m.dir<0?Math.PI:0),l=1}let f=Math.cos(s.a),p=Math.sin(s.a);return i.x=s.x+c*f+h*p,i.z=s.z-c*p+h*f,i.h=d+s.a,i.y=a,i.k=r||0,i.ky=r?o:0,i.moving=l,i}var Nt={},Ic=Array.from({length:Math.max(Mn,On)+1},()=>({}));function Zp(n,e,t,i,s,r){for(let a=0;a<e;a++){let o=t[a],l=t[a+1],c=o.x-l.x,h=o.z-l.z,d=Math.hypot(c,h);if(!o.k&&o.k!==void 0||!l.k&&l.k!==void 0||d<.02){_i(Qc,n+a,0,-50,0,0,0,0,0);continue}let f=o.k??1;_i(Qc,n+a,(o.x+l.x)/2,i+(o.y??0)+s*f/2,(o.z+l.z)/2,Math.atan2(-h,c),d+.04,s*f,r*f)}}var jp=n=>{for(let e=0;e<Mn;e++)_i(Qc,n+e,0,-50,0,0,0,0,0)};function fM(n,e,t,i){let s=Math.min(e,3.2);for(let r of rh){let a=(r.x-i.x)**2+(r.z-i.z)**2,o=a<1936;r.flush=r.near&&!o,r.near=o,r.smear=a<900}Us.forEach((r,a)=>{let o=r.lot;if(!o.near){o.flush&&(_i(Jp,a,0,-50,0,0,0,0,0),_i(zu,a,0,-50,0,0,0,0,0),r.trail&&jp(r.trailBase));return}if(Qp(r,n,t,Nt),_i(Jp,a,Nt.x,Nt.y,Nt.z,Nt.h,Nt.k,Nt.ky,Nt.k),r===af&&Nm.set(Nt.x,Nt.y+.98*Nt.k+.12,Nt.z),uM[a*3+1]=Nt.moving,_i(zu,a,Nt.x,Nt.y+.006,Nt.z,0,Nt.k?.62:0,1,Nt.k?.62:0),!r.trail)return;let l=r.trailBase;if(s<=.02||!o.smear){r.smeared&&(jp(l),r.smeared=!1);return}r.smeared=!0;for(let c=0;c<=Mn;c++)Qp(r,n-s*c/Mn,t,Ic[c]);Zp(l,Mn,Ic,.04,.72,.26)}),kn.forEach((r,a)=>{let o=so.length*Mn+a*On;_i(zu,lo+a,r.x,.012,r.z,r.h,r.car?1.9:1,1,r.car?1.1:.6);let l=Math.min(e,r.trailMax);if(l<=.02){for(let c=0;c<On;c++)_i(Qc,o+c,0,-50,0,0,0,0,0);return}for(let c=0;c<=On;c++){let h=tf(r,n-l*c/On,Ic[c]);h.k=void 0,h.y=0}Zp(o,On,Ic,.12,r.car?.46:.8,r.car?.5:.26)}),ah.instanceMatrix.needsUpdate=Ds.instanceMatrix.needsUpdate=ro.instanceMatrix.needsUpdate=Df.needsUpdate=!0}var dM="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",zc=(n,e)=>new st({uniforms:e,vertexShader:dM,fragmentShader:n,depthTest:!1,depthWrite:!1}),of=class extends Zt{constructor(e){super(),this.needsSwap=!1,this.rt=new ht(1,1,{type:gt,samples:e}),this.quad=new sn(zc("uniform sampler2D t;varying vec2 vUv;void main(){gl_FragColor=texture2D(t,vUv);}",{t:{value:this.rt.texture}}))}setSize(e,t){this.rt.setSize(e,t)}render(e,t,i){e.setRenderTarget(this.rt),e.clear(),e.render(ti,Ht),e.setRenderTarget(i),this.quad.render(e)}},pM=`uniform sampler2D tDepth;uniform float near;uniform float far;uniform float focus;uniform float range;uniform vec2 cocScale;uniform float maxCoc;
float viewDist(vec2 uv){float d=texture2D(tDepth,uv).x;return near*far/((far-near)*d-far)*-1.;}
float coc(vec2 uv){float z=viewDist(uv)-focus;float c=max(abs(z)-range,0.)*(z<0.?cocScale.x:cocScale.y);return sign(z)*min(c,maxCoc);}`,lf=class extends Zt{constructor(){super();let e={type:gt};this.half=new ht(1,1,e),this.blurRT=new ht(1,1,e),this.u={tColor:{value:null},tDepth:{value:null},tHalf:{value:this.half.texture},tBlur:{value:this.blurRT.texture},near:{value:Ht.near},far:{value:Ht.far},focus:{value:20},range:{value:3.2},cocScale:{value:new ae(2.2,.85)},maxCoc:{value:13},texel:{value:new ae},fullTexel:{value:new ae}},this.pre=new sn(zc(`uniform sampler2D tColor;uniform vec2 fullTexel;varying vec2 vUv;${pM}
   void main(){vec2 o=fullTexel*.5;vec3 c=(texture2D(tColor,vUv+vec2(-o.x,-o.y)).rgb+texture2D(tColor,vUv+vec2(o.x,-o.y)).rgb+texture2D(tColor,vUv+vec2(-o.x,o.y)).rgb+texture2D(tColor,vUv+o).rgb)*.25;
   gl_FragColor=vec4(min(c,vec3(24.)),coc(vUv));}`,this.u)),this.blur=new sn(zc(`uniform sampler2D tHalf;uniform vec2 texel;uniform float maxCoc;varying vec2 vUv;
   void main(){vec4 c0=texture2D(tHalf,vUv);float cc=abs(c0.a);vec3 col=c0.rgb;float tot=1.;float near=0.;float r=1.6;float ang=0.;
   for(int i=0;i<64;i++){if(r>=maxCoc)break;vec2 tc=vUv+vec2(cos(ang),sin(ang))*texel*r;vec4 s=texture2D(tHalf,tc);float sc=abs(s.a);if(s.a>c0.a)sc=min(sc,cc*2.);
    float m=smoothstep(r-.8,r+.8,sc);col+=mix(col/tot,s.rgb,m);tot+=1.;if(s.a<0.)near=max(near,m*sc);ang+=2.39996;r+=2.2/r;}
   gl_FragColor=vec4(col/tot,max(cc,near));}`,this.u)),this.comp=new sn(zc(`uniform sampler2D tColor;uniform sampler2D tBlur;varying vec2 vUv;
   void main(){vec3 s=texture2D(tColor,vUv).rgb;vec4 b=texture2D(tBlur,vUv);gl_FragColor=vec4(mix(s,b.rgb,smoothstep(.45,1.8,b.a)),1.);}`,this.u))}setSize(e,t){let i=Math.ceil(e/2),s=Math.ceil(t/2);this.half.setSize(i,s),this.blurRT.setSize(i,s),this.u.texel.value.set(1/i,1/s),this.u.fullTexel.value.set(1/e,1/t)}render(e,t,i){this.u.tColor.value=i.texture,e.setRenderTarget(this.half),this.pre.render(e),e.setRenderTarget(this.blurRT),this.blur.render(e),e.setRenderTarget(this.renderToScreen?null:t),this.comp.render(e)}},zm=ym>=1.5?2:4,Ti=new Ac(_t,new ht(1,1,{type:gt,depthBuffer:!1}));Ti.setPixelRatio(Ki);var mM=new of(zm);Ti.addPass(mM);var Gt=new pr(ti,Ht,1,1);Gt.output=pr.OUTPUT.Off,Gt.needsSwap=!1,Gt.updateGtaoMaterial({radius:.5,thickness:.9,distanceExponent:1.5,distanceFallOff:.9,scale:1.1,samples:12}),Gt.updatePdMaterial({radius:6,rings:2,samples:12,lumaPhi:10,depthPhi:2,normalPhi:3});var gM=Gt.setSize.bind(Gt),xM=Gt.render.bind(Gt);Gt.setSize=(n,e)=>gM(Math.ceil(n/2),Math.ceil(e/2));var $p=ih;Gt.render=(n,e,t)=>{$p.forEach(i=>i.visible=!1),xM(n,e,t),$p.forEach(i=>i.visible=!0),Gt.blendMaterial.uniforms.intensity.value=.8,Gt.blendMaterial.uniforms.tDiffuse.value=Gt.pdRenderTarget.texture,Gt._renderPass(n,Gt.blendMaterial,t)},Ti.addPass(Gt);var Cr=new mr(new ae(256,256),.55,.6,.95),vM=Cr.setSize.bind(Cr);Cr.setSize=(n,e)=>vM(Math.ceil(n/2),Math.ceil(e/2)),Ti.addPass(Cr);var Zc=new lf;Zc.u.tDepth.value=Gt.depthTexture,Ti.addPass(Zc),Ti.addPass(new wc);var em=-.2,co=0,yt=0,Ji=0,ja=0,km=0,cf=0,hf=0,uf=1,Si=matchMedia("(prefers-reduced-motion: reduce)").matches,ei=8,Vm=!0,Ls=.22,Ya=0,tm=0,ku=[8,24,48,1],nm={1:1,2:8,3:24,4:48},Cn=new L,Vu=new L,hn=new L;function yM(n,e){let t=Ut.clamp(Math.floor(n),0,Er-1),i=Math.min(t+1,Er-1),s=Ut.smootherstep(n-t,0,1),r=no[t>>2],a=no[i>>2],o=r[0]+(a[0]-r[0])*s,l=r[1]+(a[1]-r[1])*s,c=eh(n),h=c-Math.PI/4,d=-.4,f=1.6;return e.set(o+Math.sin(c)*Wc+d*Math.cos(h)+f*Math.sin(h),1.7,l+Math.cos(c)*Wc-d*Math.sin(h)+f*Math.cos(h))}var Wa=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i)),Dc={ctx:'<svg viewBox="0 0 16 16"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M5.5 8h5M8 5.5v5"/></svg>',modes:'<svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="10" rx="2"/><path d="M4 11l3-3 2 2 3-3"/></svg>',price:'<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5"/><path d="M9.8 6.2C9.4 5.6 8.8 5.4 8 5.4c-1 0-1.8.5-1.8 1.3 0 1.9 3.6.9 3.6 2.8 0 .8-.8 1.3-1.8 1.3-.9 0-1.5-.3-1.9-.9M8 4.2v7.6"/></svg>',people:'<svg viewBox="0 0 16 16"><circle cx="6" cy="5.5" r="2.2"/><path d="M2 13c.4-2.4 2-3.6 4-3.6s3.6 1.2 4 3.6M10.5 3.6a2 2 0 010 3.8M11.6 9.6c1.3.4 2.1 1.6 2.4 3.4"/></svg>'},Lc=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),_M=n=>n.mods.length?n.mods.length<=2?["text",...n.mods].join(", "):`text, ${n.mods[0]} +${n.mods.length-1}`:"text only",Uc=He(".details"),Gm=!matchMedia("(prefers-reduced-motion: reduce)").matches,im=0,Gu=0,Nc=0,MM=n=>{let e=new Le(n);return e.r*.2126+e.g*.7152+e.b*.0722<.06?"#e6e9f0":n};function AM(n){cancelAnimationFrame(Gu);let e=Nc,t=performance.now();if(!Gm||document.hidden){Nc=n,He("#tokens").textContent=Vc(n);return}let i=s=>{let r=Math.min(1,(s-t)/700),a=1-(1-r)**3;Nc=e+(n-e)*a,He("#tokens").textContent=Vc(Nc),r<1&&(Gu=requestAnimationFrame(i))};Gu=requestAnimationFrame(i)}function sm(){let n=Bt[yt],t=Number.isFinite(n.change24h),e=t&&n.change24h>=0;He("#lab").textContent=n.name,He("#lab-line").textContent=n.available?`${n.lab} · ${n.kind} · #${n.scopeRank} of ${n.scopeTotal} tracked ${n.kind} venues by 24h volume`:`${n.lab} · ${n.kind} · LIVE DATA UNAVAILABLE`,He("#model").textContent=n.model,He("#model").title=`${n.model} · source: ${n.source} · id: ${n.modelId}`,n.available?AM(n.tokens):He("#tokens").textContent="DATA UNAVAILABLE",He("#growth").textContent=n.available?t?`${e?"↑":"↓"} ${Math.abs(n.change24h).toFixed(1)}%`:"LIVE":"—",He("#growth").classList.toggle("down",t&&!e),He("#lab-mark").innerHTML=T_(n.id);let i=He("#spark"),s=Math.max(...n.trend,1),r=MM(n.color);for(;i.children.length<n.trend.length;)i.appendChild(document.createElement("i"));for(;i.children.length>n.trend.length;)i.lastElementChild.remove();n.trend.forEach((a,o)=>{let l=i.children[o];l.style.height=`${Math.max(4,Math.round(a/s*64))}px`,l.style.background=r,l.style.opacity=[.45,.65,.82,1][Math.min(o,3)],l.title=`${n.trendLabels[o]}: ${Vc(a)}`}),He("#features").innerHTML=[[Dc.ctx,n.context,n.kind==="CEX"?"CoinGecko trust score":"reported chain coverage"],[Dc.modes,n.source,n.feedMode==="live"?"live API":"verified snapshot"],[Dc.price,n.available?Vc(n.tokens):"Unavailable","reported 24h volume"],[Dc.people,n.detailValue,n.detailLabel]].map(([a,o,l])=>`<span title="${Lc(o)} · ${Lc(l)}"><i>${a}</i><span><b>${Lc(o)}</b><small>${Lc(l)}</small></span></span>`).join("")}function ji(n){let e=yt,t=!Uc.dataset.ready;if(yt=(n%Bt.length+Bt.length)%Bt.length,e!==yt){let i=yt-e;Math.abs(i)>2&&(Ji=yt-Math.sign(i)*1.2),km=Ji,ja=yt,rn[yt].atlas.setScale(1),ii()}if(He("#district-no").textContent=`${yt+1} / ${Bt.length}`,document.querySelectorAll("#tabs button").forEach((i,s)=>i.setAttribute("aria-selected",String(s===yt))),clearTimeout(im),t||!Gm){Uc.dataset.ready=1,sm();return}Uc.classList.add("out"),im=setTimeout(()=>{sm(),Uc.classList.remove("out")},170)}Bt.forEach((n,e)=>{let t=document.createElement("button");t.textContent=n.name,t.setAttribute("role","tab"),t.onclick=()=>ji(e),He("#tabs").appendChild(t)}),He("#tabs").setAttribute("role","tablist"),He("#prev").onclick=()=>ji(yt-1),He("#next").onclick=()=>ji(yt+1);function Hm(){He("#pause").textContent=Si?"\u25B6":"\u2161",He("#pause").setAttribute("aria-label",Si?"Play crowd (Space)":"Pause crowd (Space)")}var ii=()=>co=performance.now();function Wm(n){ei=n,He("#speed").textContent=ei===1?"1\xD7 real time":ei+"\xD7 timelapse",ii()}function rm(n){Ls=Ut.clamp(Math.round(n*100)/100,0,.45),He("#shutter").value=Ls,ii()}function bM(n){Vm=n,Zc.enabled=n,He("#dof").checked=n,ii()}He("#pause").onclick=()=>{Si=!Si,Hm(),ii()},He("#speed").onclick=()=>Wm(ku[(ku.indexOf(ei)+1)%ku.length]);var SM=720,Hu=[[0,"#0c111d","#141a28","#46557e","#28242c",.5,"#8ea6ff",.32,1.22,1,.62,.95],[5,"#121828","#1c2234","#56648e","#302a30",.52,"#9fb0ff",.34,1.2,1,.6,.95],[6.5,"#51566f","#6f6a7e","#b8a8c8","#5e5048",.78,"#ffae84",1.1,1.1,.45,.45,1.1],[8.5,"#8aa3c2","#9eafc3","#c6d6ef","#7a6c5c",1.05,"#ffe6c8",2.1,1.02,0,.3,1.4],[13,"#9bb4d2","#afbfd2","#d2e2ff","#857563",1.15,"#fff4e4",2.4,1,0,.28,1.45],[17,"#8b98b2","#a39fa8","#cdc6d4","#7b6a58",1,"#ffc890",2,1.04,.12,.35,1.3],[19,"#333b49","#454d5d","#a3b6da","#564840",.82,"#ffd2a6",1.25,1.12,1,.55,.95],[20.5,"#1d2435","#2a3144","#7486b6","#3c3538",.64,"#b4c2ff",.55,1.16,1,.6,.95],[22,"#0f1422","#171d2c","#4c5b84","#2a262e",.52,"#94aaff",.34,1.2,1,.62,.95],[24,"#0c111d","#141a28","#46557e","#28242c",.5,"#8ea6ff",.32,1.22,1,.62,.95]].map(n=>n.map(e=>typeof e=="string"?new Le(e):e)),cn=19,ao=!0,ff=!1,am=NaN,$i=He("#app"),Ar=He("#ui-hint"),jc;function wM(n){let e=0;for(;n>=Hu[e+1][0];)e++;let t=Hu[e],i=Hu[e+1],s=Ut.smoothstep(n,t[0],i[0]),r=(c,h)=>h.copy(t[c]).lerp(i[c],s),a=c=>t[c]+(i[c]-t[c])*s;r(1,ti.background),r(2,ti.fog.color),r(3,Fc.color),r(4,Fc.groundColor),Fc.intensity=a(5),r(6,_n.color),_n.intensity=a(7),_t.toneMappingExposure=a(8),Cr.strength=a(10),Cr.threshold=a(11);let o=br.night=a(9);ti.fog.density=.0165*(.78+.22*o);let l=(1-o).toFixed(2);$i.style.getPropertyValue("--day")!==l&&$i.style.setProperty("--day",l),Em.value=o,nh.material.color.copy(Z_).multiplyScalar(.2+.8*o),ni.material.opacity=.46*(.1+.9*o),Tr.material.opacity=.3*o,sh.color.copy(nM).multiplyScalar(.35+.65*o)}var om=He("#clock"),$a=He("#daytime");function EM(){let n=Math.floor(cn*4),e=`${String(n>>2).padStart(2,"0")}:${String((n&3)*15).padStart(2,"0")}`;om.textContent!==e&&(om.textContent=e,$a.setAttribute("aria-valuetext",e)),!ff&&+$a.value!==n/4&&($a.value=n/4)}function df(n){cn=(n%24+24)%24,ii()}function pf(n){ao=n,He("#cycle").checked=n,ii()}function Xm(){let n=!$i.classList.contains("ui-off");$i.classList.toggle("ui-off",n),n&&$i.contains(document.activeElement)&&document.activeElement.blur(),Ar.textContent=n?"Interface hidden \xB7 press / to show it":"",Ar.classList.toggle("on",n),clearTimeout(jc),n&&(jc=setTimeout(()=>Ar.classList.remove("on"),1800)),ii()}var ho=!1;try{ho=localStorage.getItem("scanwork:controls")==="1"}catch{}function qm(n){ho=n,$i.classList.toggle("controls-on",n),!n&&He(".playback").contains(document.activeElement)&&document.activeElement.blur();try{localStorage.setItem("scanwork:controls",n?"1":"0")}catch{}ii()}qm(ho);function Xa(n){ho||$i.classList.contains("ui-off")||(Ar.textContent=n,Ar.classList.add("on"),clearTimeout(jc),jc=setTimeout(()=>Ar.classList.remove("on"),1200))}He("#cycle").onchange=n=>pf(n.target.checked),$a.oninput=n=>df(Number(n.target.value)),$a.addEventListener("pointerdown",()=>ff=!0),window.addEventListener("pointerup",()=>ff=!1),He("#dof").onchange=n=>bM(n.target.checked),He("#shutter").oninput=n=>rm(Number(n.target.value)),He("#about").onclick=()=>He("#info").showModal(),He("#close").onclick=()=>He("#info").close(),window.addEventListener("keydown",n=>{let e=n.target,t=e.isContentEditable||/^(TEXTAREA|SELECT)$/.test(e.tagName)||e.tagName==="INPUT"&&!/^(checkbox|range)$/.test(e.type);if((n.metaKey||n.ctrlKey)&&!n.altKey&&(n.code==="Quote"||n.key==="'")){n.preventDefault(),qm(!ho);return}if(He("#info").open||n.metaKey||n.ctrlKey||n.altKey||t)return;let i=e.tagName==="BUTTON"||e.type==="range",s=e.tagName==="BUTTON"||e.tagName==="INPUT",r=n.key.toLowerCase();n.key==="ArrowRight"&&!i?ji(yt+1):n.key==="ArrowLeft"&&!i?ji(yt-1):nm[n.key]?(Wm(nm[n.key]),Xa(He("#speed").textContent)):n.key===" "&&!s?(n.preventDefault(),He("#pause").click(),Xa(Si?"Paused":"Playing")):n.key==="["||n.key==="]"?(rm(Ls+(n.key==="]"?.05:-.05)),Xa(`Shutter ${Ls.toFixed(2)}`)):r==="d"?(pf(!ao),Xa(ao?"Day/night cycle on":"Day/night cycle off")):n.key===","||n.key==="."?(df(Math.round(cn)+(n.key==="."?1:-1)),Xa(`${String(Math.round(cn)).padStart(2,"0")}:00`)):n.key==="/"&&(n.preventDefault(),Xm())});var wi=_t.domElement,lm=new ae,mf=new ga,oh=!1,gf=0,xf=0,vf=0,Ym=n=>{let e=wi.getBoundingClientRect();lm.set((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),mf.setFromCamera(lm,Ht);let t=mf.intersectObjects(Za,!1)[0];return t?.object.userData.href?t:null};wi.addEventListener("click",n=>{if(vf>5)return;let e=Ym(n);if(e){window.open(e.object.userData.href,"_blank","noopener");return}let t=mf.intersectObjects(rn.map(s=>s.g),!0)[0];if(!t)return;let i=rn.find(s=>s.g===t.object.parent);i&&ji(i.index)}),wi.addEventListener("pointerdown",n=>{oh=!0,gf=n.clientX,xf=n.clientY,vf=0,wi.setPointerCapture(n.pointerId)});var yf=null,cm=n=>{n!==yf&&(yf=n,ii())};wi.addEventListener("pointerleave",()=>cm(null)),wi.addEventListener("pointermove",n=>{if(!oh){if(n.pointerType==="mouse"){let i=Ym(n);wi.style.cursor=i?"pointer":"",cm(i?.object.visible?i.object:null)}return}let e=n.clientX-gf,t=n.clientY-xf;vf+=Math.abs(e)+Math.abs(t),cf=Ut.clamp(cf-e*.003,-.45,.45),hf=Ut.clamp(hf+t*.0015,-.12,.2),gf=n.clientX,xf=n.clientY,co=performance.now()});for(let n of["pointerup","pointercancel"])wi.addEventListener(n,()=>oh=!1);wi.addEventListener("wheel",n=>{n.preventDefault(),uf=Ut.clamp(uf+n.deltaY*5e-4,.75,1.3),co=performance.now()},{passive:!1});function _f(){let n=zn.clientWidth,e=zn.clientHeight;Ht.aspect=n/e,Ht.updateProjectionMatrix(),_t.setSize(n,e),Ti.setSize(n,e),co=performance.now()}new ResizeObserver(_f).observe(zn),_f(),ji(0),Hm();var TM=[He("#tag-left"),He("#tag-right")],hm=He("#speech");function CM(n){if(!af)return;let e=af.lot.S,t=Bt[yt]===e.lab&&n<.05&&e.tone.sat.value>.8;hn.copy(Nm).project(Ht),hm.classList.toggle("on",t&&hn.z<1),hm.style.transform=`translate(${Math.round((hn.x*.5+.5)*zn.clientWidth)}px,${Math.round((-hn.y*.5+.5)*zn.clientHeight)}px) translate(-16px,-100%)`}function RM(n){[3,1].forEach((e,t)=>{let i=rn[(yt>>2)*4+(yt+e&3)],s=TM[t];if(!i){s.classList.remove("on");return}hn.copy(i.label).project(Ht);let r=zn.clientWidth,a=(hn.x*.5+.5)*r,o=s.offsetWidth/2+16,l=t?Ut.clamp(a,r*.7+o,r-o):Ut.clamp(a,o,r*.3-o),c=Math.max(240,(-hn.y*.5+.5)*zn.clientHeight),h=n<.05&&hn.z<1&&a>-150&&a<r+150;s.classList.toggle("on",h),s.style.transform=`translate(${Math.round(l)}px,${Math.round(c)}px) translate(-50%,-100%)`;let d=i.lab.id+i.index;s.dataset.key!==d&&(s.dataset.key=d,s.querySelector("b").textContent=`${i.lab.name} \xB7 ${i.lab.model}`,s.querySelector("span").textContent=`${i.lab.available?Vc(i.lab.tokens):"DATA PENDING"} \u00b7 ${i.lab.kind}`)})}var um=rn.map(n=>n.glow),fm=new Le,kc=performance.now(),Wu=0,Xu=kc,Mf=0,dm=NaN,pm=NaN,qu=0;document.documentElement.dataset.feedStatus=`CEX: ${Qu.models.toUpperCase()} \u00b7 DEX: ${Qu.usage.toUpperCase()} \u00b7 UPDATED ${new Date(Qu.updated).toLocaleTimeString()} \u00b7 CROWDS SCALE WITH 24H VOLUME`,He("#loading").remove();function Km(n){requestAnimationFrame(Km),Jm(n)}function Jm(n,e){let t=Ut.clamp((n-kc)/1e3,0,.05);kc=Math.max(kc,n),Si||(Ya+=t*ei,tm+=t*Math.min(ei,3),ao&&(cn=(cn+t*ei*24/SM)%24)),cn!==am&&(am=cn,wM(cn),EM());let i=br.night;Dm.value=tm;let s=Math.min(Ls*ei,30);Ji=Wa(Ji,ja,2.6,t);let r=Math.abs(ja-km)||1,a=Math.abs(ja-Ji)/r,o=Math.sin(Math.min(1,a)*Math.PI),l=eh(Ji);a<.02&&rn.forEach((M,A)=>{A!==yt&&M.atlas.scale!==.5&&M.atlas.setScale(.5)});let c=zn.clientWidth<700,h=Ut.clamp(1.5/Ht.aspect,1,2.2)**.75,d=Sm[rn[yt].style]-4.45,f=(c?25:23.5)*h*(1+d*.035)*uf*(1+o*.22),p=.58+hf+o*.08,m=l+em+cf+(Si?0:Math.sin(Ya*.015)*.02);yM(Ji,Cn),Vu.copy(Cn),Vu.y=(c?1.4:2.9)+d*.3,Ht.position.set(Cn.x+Math.sin(m)*Math.cos(p)*f,Cn.y+Math.sin(p)*f,Cn.z+Math.cos(m)*Math.cos(p)*f),Ht.lookAt(Vu),Ht.updateMatrixWorld(),Zc.u.focus.value=Ht.position.distanceTo(Cn);let b=a>.002;rn.forEach((M,A)=>{let P=A===yt,C=Wa(M.tone.sat.value,P?1:0,3.5,t);b||=Math.abs(C-(P?1:0))>.003,M.tone.sat.value=C,M.tone.lift.value=Wa(M.tone.lift.value,P?.2:.13,3.5,t),M.glow=Wa(M.glow,P?1:.34,3.5,t),um[A]=M.glow,M.M.interior.emissiveIntensity=(.4+2.3*M.glow)*(.55+.45*i),M.M.glowGlass.emissiveIntensity=(.3+1.1*M.glow)*(.5+.5*i),M.M.warm.emissiveIntensity=.9*M.glow*(.45+.55*i),M.M.sign.emissiveIntensity=.06+.12*M.glow;let I=M.tag,v=yf===I.mesh?1:0;I.hover=Wa(I.hover,v,9,t),b||=Math.abs(I.hover-v)>.003,I.tone.sat.value=Math.max(C,I.hover),I.mesh.material.emissiveIntensity=.1+.3*C+3.2*I.hover,M.M.bulb.color.copy(M.bulbBase).multiplyScalar((.6+3.4*M.glow)*(.25+.75*i)),Im.value[A]=C,fm.setScalar(1.25*M.glow);for(let w=0;w<2;w++)ni.setColorAt(Is.length+A*2+w,fm)}),ni.instanceColor.needsUpdate=!0;let g=cn>6&&cn<19?Math.sin(Math.PI*(cn-6)/13):0,u=l+em-1.1-.45*Math.sin(Math.PI*2*(cn-19)/24),_=.94+.3*g;Math.abs(u-dm)<=.018&&Math.abs(_-pm)<=.018||(dm=u,pm=_,_n.position.set(Cn.x+Math.sin(u)*Math.cos(_)*37,Math.sin(_)*37,Cn.z+Math.cos(u)*Math.cos(_)*37),_n.target.position.copy(Cn),_n.target.updateMatrixWorld(),_t.shadowMap.needsUpdate=!0),N_(Cn,um),aM(Ya,s,Ht.position),fM(Ya,s,ei<24,Cn),Bm.uniforms.uOpacity.value=Math.min(.34,Ls*1.5),RM(a),CM(a),qu=Si&&!b&&!oh&&n-co>300?qu+1:0,!(qu>3&&!e)&&(_t.info.reset(),Ti.render(t),Wu++,n-Xu>2e3&&(Mf=Math.round(Wu*1e3/(n-Xu)),Wu=0,Xu=n,Mf<40&&Ki>1&&(Ki=Math.max(1,Ki-.25),_t.setPixelRatio(Ki),Ti.setPixelRatio(Ki),_f())))}requestAnimationFrame(Km),window.__scanwork={select:ji,setDayTime:df,setCycle:pf,toggleUI:Xm,adaptExchangeData:mm,volumeFrom:gm,linkPoints:()=>Za.filter(n=>n.userData.href).map(n=>(n.getWorldPosition(hn).project(Ht),{href:n.userData.href,x:Math.round((hn.x*.5+.5)*zn.clientWidth),y:Math.round((-hn.y*.5+.5)*zn.clientHeight),onScreen:hn.z<1&&Math.abs(hn.x)<1&&Math.abs(hn.y)<1,kind:n.visible?"tag":"chalkboard"})),render:()=>Jm(performance.now(),!0),get state(){return{selected:Bt[yt].name,camera:{u:+Ji.toFixed(3),target:ja,focus:Cn.toArray().map(n=>+n.toFixed(2))},order:Bt.map(n=>n.name),models:Bt.map(n=>n.modelId),dataSource:Qu,paused:Si,speed:ei,focus:Vm,people:lo,vehicles:If,shutter:Ls,fps:Mf,pixelRatio:Ki,msaa:zm,drawCalls:_t.info.render.calls,triangles:_t.info.render.triangles,geometries:_t.info.memory.geometries,textures:_t.info.memory.textures,programs:_t.info.programs?.length,time:Ya,dayHours:+cn.toFixed(2),cycle:ao,night:+br.night.toFixed(2),ui:!$i.classList.contains("ui-off")}}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
